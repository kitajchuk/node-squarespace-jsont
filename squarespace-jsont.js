/*!
 *
 * Squarespace JSON-T Rendering Engine.
 *
 */
var jsonTemplate = require( "./lib/jsontemplate" ),
    jsontOptions = {
        more_formatters: require( "./lib/formatters" ),
        more_predicates: require( "./lib/predicates" ),
        undefined_str: ""
    },


/******************************************************************************
 * @Public
*******************************************************************************/

/**
 *
 * @method render
 * @param {string} render The template string
 * @param {object} data The data context
 * @returns {string}
 * @public
 *
 */
render = function ( template, data ) {
    template = jsonTemplate.Template( template, jsontOptions );
    template = template.expand( data );

    return template;
};


/******************************************************************************
 * @Export
*******************************************************************************/
module.exports = {
    render: render
};