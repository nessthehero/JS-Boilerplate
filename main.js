// Do everything in a closure, so we don't affect or create any globals.
(function( $, window, document, undefined ) {
    var Project = Project || {};

    Project.init = function () { 

        

    }
    $(function () {

        // Cached selectors
       Project.$elm = {};

        // Arbitrary data (Comes after selectors so we can use them here)
       Project.data = {};

       Project.init();

    });

/** uncomment to see Namespace in the global scope for debugging.
    window.Namespace = {
        Project : Project;
    }
*/

})( window.jQuery, window, window.document );

/*
This way you leak nothing at all into the global namespace as it's all inside a closure. You import either jQuery or Zepto     depending on what's supported in the page and even if jQuery is running in compatibility mode it won't break.
*/
