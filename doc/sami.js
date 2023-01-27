
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:horstoeko" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="horstoeko.html">horstoeko</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:horstoeko_laravelservice" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="horstoeko/laravelservice.html">laravelservice</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:horstoeko_laravelservice_Concerns" class="opened">                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="horstoeko/laravelservice/Concerns.html">Concerns</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:horstoeko_laravelservice_Concerns_HandlesTransactions" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="horstoeko/laravelservice/Concerns/HandlesTransactions.html">HandlesTransactions</a>                    </div>                </li>                            <li data-name="class:horstoeko_laravelservice_Concerns_RaisesExceptions" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="horstoeko/laravelservice/Concerns/RaisesExceptions.html">RaisesExceptions</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:horstoeko_laravelservice_Console" class="opened">                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="horstoeko/laravelservice/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:horstoeko_laravelservice_Console_ServiceMakeCommand" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="horstoeko/laravelservice/Console/ServiceMakeCommand.html">ServiceMakeCommand</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:horstoeko_laravelservice_Service" class="opened">                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="horstoeko/laravelservice/Service.html">Service</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:horstoeko_laravelservice_Service_BaseService" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="horstoeko/laravelservice/Service/BaseService.html">BaseService</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:horstoeko_laravelservice_LSRServiceProvider" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="horstoeko/laravelservice/LSRServiceProvider.html">LSRServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "horstoeko.html", "name": "horstoeko", "doc": "Namespace horstoeko"},{"type": "Namespace", "link": "horstoeko/laravelservice.html", "name": "horstoeko\\laravelservice", "doc": "Namespace horstoeko\\laravelservice"},{"type": "Namespace", "link": "horstoeko/laravelservice/Concerns.html", "name": "horstoeko\\laravelservice\\Concerns", "doc": "Namespace horstoeko\\laravelservice\\Concerns"},{"type": "Namespace", "link": "horstoeko/laravelservice/Console.html", "name": "horstoeko\\laravelservice\\Console", "doc": "Namespace horstoeko\\laravelservice\\Console"},{"type": "Namespace", "link": "horstoeko/laravelservice/Service.html", "name": "horstoeko\\laravelservice\\Service", "doc": "Namespace horstoeko\\laravelservice\\Service"},
            
            {"type": "Trait", "fromName": "horstoeko\\laravelservice\\Concerns", "fromLink": "horstoeko/laravelservice/Concerns.html", "link": "horstoeko/laravelservice/Concerns/HandlesTransactions.html", "name": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions", "fromLink": "horstoeko/laravelservice/Concerns/HandlesTransactions.html", "link": "horstoeko/laravelservice/Concerns/HandlesTransactions.html#method_startTransaction", "name": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions::startTransaction", "doc": "&quot;Start a database transaction&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions", "fromLink": "horstoeko/laravelservice/Concerns/HandlesTransactions.html", "link": "horstoeko/laravelservice/Concerns/HandlesTransactions.html#method_commitTransaction", "name": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions::commitTransaction", "doc": "&quot;Commit a formerly started database transaction&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions", "fromLink": "horstoeko/laravelservice/Concerns/HandlesTransactions.html", "link": "horstoeko/laravelservice/Concerns/HandlesTransactions.html#method_rollbackTransaction", "name": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions::rollbackTransaction", "doc": "&quot;Rollback a formerly started database transaction&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions", "fromLink": "horstoeko/laravelservice/Concerns/HandlesTransactions.html", "link": "horstoeko/laravelservice/Concerns/HandlesTransactions.html#method_commitIf", "name": "horstoeko\\laravelservice\\Concerns\\HandlesTransactions::commitIf", "doc": "&quot;Performs commit if $condition is true, otherwise rollback transaction&quot;"},
            
            {"type": "Trait", "fromName": "horstoeko\\laravelservice\\Concerns", "fromLink": "horstoeko/laravelservice/Concerns.html", "link": "horstoeko/laravelservice/Concerns/RaisesExceptions.html", "name": "horstoeko\\laravelservice\\Concerns\\RaisesExceptions", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "horstoeko\\laravelservice\\Concerns\\RaisesExceptions", "fromLink": "horstoeko/laravelservice/Concerns/RaisesExceptions.html", "link": "horstoeko/laravelservice/Concerns/RaisesExceptions.html#method_exceptionIf", "name": "horstoeko\\laravelservice\\Concerns\\RaisesExceptions::exceptionIf", "doc": "&quot;Raises an exception when $condition is true&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Concerns\\RaisesExceptions", "fromLink": "horstoeko/laravelservice/Concerns/RaisesExceptions.html", "link": "horstoeko/laravelservice/Concerns/RaisesExceptions.html#method_exceptionWithClassIf", "name": "horstoeko\\laravelservice\\Concerns\\RaisesExceptions::exceptionWithClassIf", "doc": "&quot;Raises an exception by $class when $condition is true&quot;"},
            
            {"type": "Class", "fromName": "horstoeko\\laravelservice\\Console", "fromLink": "horstoeko/laravelservice/Console.html", "link": "horstoeko/laravelservice/Console/ServiceMakeCommand.html", "name": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand", "fromLink": "horstoeko/laravelservice/Console/ServiceMakeCommand.html", "link": "horstoeko/laravelservice/Console/ServiceMakeCommand.html#method_getOptions", "name": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand::getOptions", "doc": "&quot;Get the console command options.&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand", "fromLink": "horstoeko/laravelservice/Console/ServiceMakeCommand.html", "link": "horstoeko/laravelservice/Console/ServiceMakeCommand.html#method_getStub", "name": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand::getStub", "doc": "&quot;Get the stub file for the generator.&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand", "fromLink": "horstoeko/laravelservice/Console/ServiceMakeCommand.html", "link": "horstoeko/laravelservice/Console/ServiceMakeCommand.html#method_getDefaultNamespace", "name": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand::getDefaultNamespace", "doc": "&quot;Get the default namespace for the class.&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand", "fromLink": "horstoeko/laravelservice/Console/ServiceMakeCommand.html", "link": "horstoeko/laravelservice/Console/ServiceMakeCommand.html#method_getNameInput", "name": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand::getNameInput", "doc": "&quot;Get the desired class name from the input.&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand", "fromLink": "horstoeko/laravelservice/Console/ServiceMakeCommand.html", "link": "horstoeko/laravelservice/Console/ServiceMakeCommand.html#method_replaceClass", "name": "horstoeko\\laravelservice\\Console\\ServiceMakeCommand::replaceClass", "doc": "&quot;Replace the class name for the given stub.&quot;"},
            
            {"type": "Class", "fromName": "horstoeko\\laravelservice", "fromLink": "horstoeko/laravelservice.html", "link": "horstoeko/laravelservice/LSRServiceProvider.html", "name": "horstoeko\\laravelservice\\LSRServiceProvider", "doc": "&quot;Class LSRServiceProvider&quot;"},
                                                        {"type": "Method", "fromName": "horstoeko\\laravelservice\\LSRServiceProvider", "fromLink": "horstoeko/laravelservice/LSRServiceProvider.html", "link": "horstoeko/laravelservice/LSRServiceProvider.html#method_register", "name": "horstoeko\\laravelservice\\LSRServiceProvider::register", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\LSRServiceProvider", "fromLink": "horstoeko/laravelservice/LSRServiceProvider.html", "link": "horstoeko/laravelservice/LSRServiceProvider.html#method_boot", "name": "horstoeko\\laravelservice\\LSRServiceProvider::boot", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "horstoeko\\laravelservice\\Service", "fromLink": "horstoeko/laravelservice/Service.html", "link": "horstoeko/laravelservice/Service/BaseService.html", "name": "horstoeko\\laravelservice\\Service\\BaseService", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "horstoeko\\laravelservice\\Service\\BaseService", "fromLink": "horstoeko/laravelservice/Service/BaseService.html", "link": "horstoeko/laravelservice/Service/BaseService.html#method___construct", "name": "horstoeko\\laravelservice\\Service\\BaseService::__construct", "doc": "&quot;Constructor&quot;"},
                    {"type": "Method", "fromName": "horstoeko\\laravelservice\\Service\\BaseService", "fromLink": "horstoeko/laravelservice/Service/BaseService.html", "link": "horstoeko/laravelservice/Service/BaseService.html#method_resolveModelClass", "name": "horstoeko\\laravelservice\\Service\\BaseService::resolveModelClass", "doc": "&quot;Resolve the classname of the repository&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


