/*!
 *
 * Predicate: equal
 * Evaluates 2 values as equal
 *
 * @usage: {@|equal? foo "bar"}
 *
 */
var rQuotes = /"|'/g,
    // Sourced from https://code.jquery.com/
    isNumeric = function ( obj ) {
        return !Array.isArray( obj ) && obj - parseFloat( obj ) >= 0;
    },
    getLookupArg = function ( ctx, arg ) {
        var get = ctx.get( arg ),
            lookup = ctx._LookUpStack( arg ),
            lookupIsNumeric = isNumeric( lookup ),
            getIsNumeric = isNumeric( get );

        if ( (lookup !== undefined) || lookupIsNumeric ) {
            arg = lookup;

        } else if ( (get !== undefined) || getIsNumeric ) {
            arg = get;
        }

        return arg;
    };



module.exports = function ( data, ctx, args ) {
    var arg1 = args[ 0 ],
        arg2 = args[ 1 ],
        ret = false;

    // Special Case
    // {.equal? typeName "collection"}
    // {.equal? title "collection"}
    // {...and so on...}
    // Cannot use `collection` string with the lookup stack.
    // It will return the {collection object} rather than a lookup value.
    if ( String( arg2.replace( rQuotes, "" ) ) === "collection" ) {
        arg1 = getLookupArg( ctx, arg1 );

        ret = ( arg1 == arg2 );

    // Use Cases
    // {.equal? foo.bar "baz"}
    // {.equal? foo "bar"}
    // {.equal? @index 5}
    // {.equal? "foo" foo.bar}
    // {... and so on...}
    } else {
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

        ret = ( arg1 == arg2 );
    }

    return ret;
};