var rQuotes = /"|'/g;

// Sourced from https://code.jquery.com/
var isNumeric = function ( obj ) {
    return !Array.isArray( obj ) && obj - parseFloat( obj ) >= 0;
};

var getLookupArg = function ( ctx, arg ) {
    var get = ctx.get( arg ),
        lookup = ctx._LookUpStack( arg ),
        lookupIsNumeric = isNumeric( lookup ),
        getIsNumeric = isNumeric( get );

    if ( (lookup !== undefined && lookup !== "") || lookupIsNumeric ) {
        arg = lookup;

    } else if ( (get !== undefined && get !== "") || getIsNumeric ) {
        arg = get;
    }

    return arg;
};

var getProcessedArgs = function ( args, ctx ) {
    var arg1 = args[ 0 ],
        arg2 = args[ 1 ];

    // One of the args is a string literal
    if ( rQuotes.test( arg1 ) ) {
        arg1 = String( arg1.replace( rQuotes, "" ) );
        arg2 = ( ctx._LookUpStack( arg2 ) || ctx.get( arg2 ) );

    } else if ( rQuotes.test( arg2 ) ) {
        arg2 = String( arg2.replace( rQuotes, "" ) );
        arg1 = ( ctx._LookUpStack( arg1 ) || ctx.get( arg1 ) );

    // Just make sure we don't mess up numeric values
    } else {
        if ( !isNumeric( arg1 ) ) {
            arg1 = getLookupArg( ctx, arg1 );
        }

        if ( !isNumeric( arg2 ) ) {
            arg2 = getLookupArg( ctx, arg2 );
        }
    }

    return [arg1, arg2];
};

var getArgsProcessed = function ( args, ctx ) {
    var arg1 = args[ 0 ],
        arg2 = args[ 1 ];

    // Special Case
    // {.equal? typeName "collection"}
    // {.equal? title "collection"}
    // {...and so on...}
    // Cannot use `collection` string with the lookup stack.
    // It will return the {collection object} rather than a lookup value.
    if ( String( arg2.replace( rQuotes, "" ) ) === "collection" ) {
        arg1 = getLookupArg( ctx, arg1 );

    // Use Cases
    // {.equal? foo.bar "baz"}
    // {.equal? foo "bar"}
    // {.equal? @index 5}
    // {.equal? "foo" foo.bar}
    // {... and so on...}
    } else {
        args = getProcessedArgs( args, ctx );
        arg1 = args[ 0 ];
        arg2 = args[ 1 ];
    }

    return args;
};

module.exports = {
    rQuotes: rQuotes,
    isNumeric: isNumeric,
    getLookupArg: getLookupArg,
    //getProcessedArgs: getProcessedArgs,
    getArgsProcessed: getArgsProcessed
};