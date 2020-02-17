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
    console.log("PRELEVO DATI");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlUmVmcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlEQUFXLG1CQUFPLENBQUMseURBQWMsRUFBRTtBQUNuQyxvQkFBb0IsbUJBQU8sQ0FBQyxpREFBdUI7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsa0NBQStCO0FBQy9ELG1CQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxzREFBVTtBQUNwQyxtQkFBbUIsbUJBQU8sQ0FBQyxrRUFBa0M7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLDBEQUE2QjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyxtREFBOEI7QUFDMUQsZ0JBQWdCLG1CQUFPLENBQUMsb0NBQVM7QUFDakMsc0JBQXNCLG1CQUFPLENBQUMsOEVBQXVCOzs7QUFHckQ7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQyx3QkFBd0IsaURBQWlEOztBQUV6RTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHdDQUF3QztBQUNuRSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuYTQ2NzY0MTQ4NTcwYWIzYzY0MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTsgLy8gcGVyIGFjY2VkZXIgYWxsYSBwYWdpbmEgd2ViIHZpc2liaWxlIHhtbFxuY29uc3QgaHR0cE1vZHVsZTIgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcbmNvbnN0IGZyb21PYmplY3QgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuZnJvbU9iamVjdDtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbmNvbnN0IHV0aWxzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG5jb25zdCBwcm9jZXNzID0gcmVxdWlyZSgncHJvY2VzcycpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG5cbnZhciBwYWdlRGF0YSA9IG5ldyBPYnNlcnZhYmxlKCk7XG52YXIgaXRlbXNWaWV3ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG5cblxudmFyIHJlZnMgPSBbXTtcblxuYXN5bmMgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncylcbntcbiAgICBjb25zb2xlLmxvZyhcIioqUkVGUyBQQUdFICoqKlwiKTtcbiAgICAvKiBBenplcmFtZW50byB2ZXR0b3JpIHBlciBldml0YXJlIGFwcGVuZGluZyBvZ25pIGNoaWFtYXRhIGFsbGEgcGFnaW5hICovXG4gICAgaXRlbXNWaWV3ID0gW107XG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICB2YXIgZ290RGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG5cbiAgICByZWZzID0gW107XG4gICAgYXV0b3JpMiA9IFtdO1xuXG5cbiAgICBcbiAgICAgcmVmcyA9IGdvdERhdGEucGFyYW0xO1xuICAgIGNvbnNvbGUubG9nKFwiUFJFTEVWTyBEQVRJXCIpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhyZWZzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtc1ZpZXcucHVzaCh7cmVmTmFtZTogcmVmc1tpXVtcInJlZk5hbWVcIl0sIERPSTogcmVmc1tpXVtcIkRPSVwiXX0pO1xuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJnZXREYXRhOiBcIityZWZzWzBdW1wiRE9JXCJdKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcblxuXG4gICAgcGFnZURhdGEuc2V0KFwiaXRlbXNWaWV3XCIsIGl0ZW1zVmlldyk7XG5cbn1cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcblxuZXhwb3J0cy5zaG93RnVsbFVybCA9IGZ1bmN0aW9uIChhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApO1xuXG4gICAgaWYoIXJlZnNbaW5kZXhdW1wiRE9JXCJdKVxuICAgIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlRoZXJlIGlzIG5vIHdlYiBzaXRlIGZvciBcIityZWZzW2luZGV4XVtcInJlZk5hbWVcIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL2RvaS5vcmcvXCIrcmVmc1tpbmRleF1bXCJET0lcIl0pO1xuXG59XG5cbmV4cG9ydHMuZ29CYWNrID0gZnVuY3Rpb24oYXJncylcbnsgXG4gICAgY29uc29sZS5sb2coXCJwcm92YVwiKTtcbiAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZVJlZnMuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9wYWdlUmVmcy5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9