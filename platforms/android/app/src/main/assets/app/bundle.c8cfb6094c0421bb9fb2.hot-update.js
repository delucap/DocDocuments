webpackHotUpdate("bundle",{

/***/ "./pageRefs.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js"); // per acceder alla pagina web visibile xml
const httpModule2 = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const createViewModel = __webpack_require__("./showFirstResults-view-model.js").createViewModel;
const fromObject = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").fromObject;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
const utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
const process = __webpack_require__("../node_modules/process/browser.js");
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;


var pageData = new Observable();
var itemsView = new ObservableArray([]);


var refs = [];

async function onNavigatingTo(args)
{
    console.log("**REFS PAGE ***");
    /* Azzeramento vettori per evitare appending ogni chiamata alla pagina */
    itemsView = [];
    var page = args.object;
    var gotData = page.navigationContext;

    refs = [];
    autori2 = [];


    
     refs = gotData.param1;

    //console.log(refs);

    for (let i = 0; i < refs.length; i++) {
        itemsView.push({refName: refs[i]["refName"], DOI: refs[i]["DOI"]});

    }

    console.log("getData: "+refs[0]["DOI"]);

    page.bindingContext = pageData;


    pageData.set("itemsView", itemsView);

}
exports.onNavigatingTo = onNavigatingTo;

exports.showFullUrl = function (args)
{
    var index = args.index;
    console.log(`Second ListView item tap ${index}`);

    if(!refs[index]["DOI"])
    {
        dialogs.alert("There is no web site for "+refs[index]["refName"]);
    }
    else
        utilsModule.openUrl("https://doi.org/"+refs[index]["DOI"]);

}

exports.goBack = function(args)
{ 
    console.log("prova");
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageRefs.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pageRefs.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlUmVmcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlEQUFXLG1CQUFPLENBQUMseURBQWMsRUFBRTtBQUNuQyxvQkFBb0IsbUJBQU8sQ0FBQyxpREFBdUI7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsa0NBQStCO0FBQy9ELG1CQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxzREFBVTtBQUNwQyxtQkFBbUIsbUJBQU8sQ0FBQyxrRUFBa0M7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLDBEQUE2QjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyxtREFBOEI7QUFDMUQsZ0JBQWdCLG1CQUFPLENBQUMsb0NBQVM7QUFDakMsc0JBQXNCLG1CQUFPLENBQUMsOEVBQXVCOzs7QUFHckQ7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEMsd0JBQXdCLGlEQUFpRDs7QUFFekU7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix3Q0FBd0M7QUFDbkUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmM4Y2ZiNjA5NGMwNDIxYmI5ZmIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7IC8vIHBlciBhY2NlZGVyIGFsbGEgcGFnaW5hIHdlYiB2aXNpYmlsZSB4bWxcbmNvbnN0IGh0dHBNb2R1bGUyID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL3Nob3dGaXJzdFJlc3VsdHMtdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XG5jb25zdCBmcm9tT2JqZWN0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLmZyb21PYmplY3Q7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5jb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG52YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG5jb25zdCB1dGlsc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xuY29uc3QgcHJvY2VzcyA9IHJlcXVpcmUoJ3Byb2Nlc3MnKTtcbnZhciBPYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcblxuXG52YXIgcGFnZURhdGEgPSBuZXcgT2JzZXJ2YWJsZSgpO1xudmFyIGl0ZW1zVmlldyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuXG5cbnZhciByZWZzID0gW107XG5cbmFzeW5jIGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpXG57XG4gICAgY29uc29sZS5sb2coXCIqKlJFRlMgUEFHRSAqKipcIik7XG4gICAgLyogQXp6ZXJhbWVudG8gdmV0dG9yaSBwZXIgZXZpdGFyZSBhcHBlbmRpbmcgb2duaSBjaGlhbWF0YSBhbGxhIHBhZ2luYSAqL1xuICAgIGl0ZW1zVmlldyA9IFtdO1xuICAgIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgdmFyIGdvdERhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuXG4gICAgcmVmcyA9IFtdO1xuICAgIGF1dG9yaTIgPSBbXTtcblxuXG4gICAgXG4gICAgIHJlZnMgPSBnb3REYXRhLnBhcmFtMTtcblxuICAgIC8vY29uc29sZS5sb2cocmVmcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbXNWaWV3LnB1c2goe3JlZk5hbWU6IHJlZnNbaV1bXCJyZWZOYW1lXCJdLCBET0k6IHJlZnNbaV1bXCJET0lcIl19KTtcblxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiZ2V0RGF0YTogXCIrcmVmc1swXVtcIkRPSVwiXSk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG5cblxuICAgIHBhZ2VEYXRhLnNldChcIml0ZW1zVmlld1wiLCBpdGVtc1ZpZXcpO1xuXG59XG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5cbmV4cG9ydHMuc2hvd0Z1bGxVcmwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcblxuICAgIGlmKCFyZWZzW2luZGV4XVtcIkRPSVwiXSlcbiAgICB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUaGVyZSBpcyBubyB3ZWIgc2l0ZSBmb3IgXCIrcmVmc1tpbmRleF1bXCJyZWZOYW1lXCJdKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKFwiaHR0cHM6Ly9kb2kub3JnL1wiK3JlZnNbaW5kZXhdW1wiRE9JXCJdKTtcblxufVxuXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwicHJvdmFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VSZWZzLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vcGFnZVJlZnMuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==