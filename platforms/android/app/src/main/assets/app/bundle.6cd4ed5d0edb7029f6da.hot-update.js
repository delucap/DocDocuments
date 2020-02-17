webpackHotUpdate("bundle",{

/***/ "./pageScopus.js":
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


var orcids_completi2 = [];
var autori2 = [];
var orcid_incompleti = [];
var family_names = [];
async function onNavigatingTo(args)
{
    /* Azzeramento vettori per evitare appending ogni chiamata alla pagina */
    itemsView = [];
    var page = args.object;
    var gotData = page.navigationContext;
    orcids_completi2 = [];
    autori2 = [];
    orcid_incompleti = [];
    family_names = [];

    var showPageInfoAuthors = [];

    
    var autori = gotData.param1;
    var orcids_completi = gotData.param2;
    orcid_incompleti = gotData.param3;
    family_names = gotData.param4;


    orcids_completi2 = orcids_completi;
    autori2 = autori;

    console.log(autori);
    console.log(orcids_completi);



    // console.log(orcid_numerici);

    for (let i = 0; i < autori.length; i++) {
        itemsView.push({itemImage: "https://apexcovantage.com/wp-content/uploads/2017/08/ORCID-Icon.png", itemName: autori[i]["name"]});
        
    }


    
    pageData.set("itemsView", itemsView);
    page.bindingContext = pageData;


}
exports.onNavigatingTo = onNavigatingTo;

exports.showFullUrl = function (args)
{
    var index = args.index;
    console.log(`Second ListView item tap ${index}`);

    if(!orcids_completi2[index])
    {
        var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

        dialogs.alert("There is no web site for "+autori2[index]["name"]);
    }
    else
    {

        const navigationEntry = {
        moduleName: "pageAuthor",
        //backstackVisible: false,
        animated: true,
        transition: {
            name: "fade",
            duration: 380,
            curve: "easeIn"
        },
        //clearHistory: true,
        context: {
            param1: autori2[index]["name"],
            param2: orcid_incompleti[index],
            param3: family_names[index]
        }
    };

    var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
    dialogs.action({
        message: "Your message",
        cancelButtonText: "Cancel text",
        actions: ["Show ORCID profile", "Show related profiles"]
        }).then(function (result) {
        console.log("Dialog result: " + result);
        if(result == "Show ORCID profile"){
            utilsModule.openUrl("https://orcid.org/"+orcid_incompleti[index]);
        }else if(result == "Show related profiles"){
            frameModule.topmost().navigate(navigationEntry);

        }
});
            //utilsModule.openUrl(orcids_completi2[index]);
        }
}

exports.goBack = function(args)
{ 
    console.log("goBack function");
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageScopus.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pageScopus.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlU2NvcHVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseURBQVcsbUJBQU8sQ0FBQyx5REFBYyxFQUFFO0FBQ25DLG9CQUFvQixtQkFBTyxDQUFDLGlEQUF1QjtBQUNuRCx3QkFBd0IsbUJBQU8sQ0FBQyxrQ0FBK0I7QUFDL0QsbUJBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHNEQUFVO0FBQ3BDLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsMERBQTZCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLG1EQUE4QjtBQUMxRCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBUztBQUNqQyxzQkFBc0IsbUJBQU8sQ0FBQyw4RUFBdUI7OztBQUdyRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0Qyx3QkFBd0IsOEdBQThHOztBQUV0STs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07O0FBRWxEO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQywwREFBNkI7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsMERBQTZCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsMENBQTBDO0FBQ3JFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS42Y2Q0ZWQ1ZDBlZGI3MDI5ZjZkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpOyAvLyBwZXIgYWNjZWRlciBhbGxhIHBhZ2luYSB3ZWIgdmlzaWJpbGUgeG1sXG5jb25zdCBodHRwTW9kdWxlMiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xuY29uc3QgZnJvbU9iamVjdCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5mcm9tT2JqZWN0O1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcbmNvbnN0IHByb2Nlc3MgPSByZXF1aXJlKCdwcm9jZXNzJyk7XG52YXIgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cblxudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbnZhciBpdGVtc1ZpZXcgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuXG52YXIgb3JjaWRzX2NvbXBsZXRpMiA9IFtdO1xudmFyIGF1dG9yaTIgPSBbXTtcbnZhciBvcmNpZF9pbmNvbXBsZXRpID0gW107XG52YXIgZmFtaWx5X25hbWVzID0gW107XG5hc3luYyBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKVxue1xuICAgIC8qIEF6emVyYW1lbnRvIHZldHRvcmkgcGVyIGV2aXRhcmUgYXBwZW5kaW5nIG9nbmkgY2hpYW1hdGEgYWxsYSBwYWdpbmEgKi9cbiAgICBpdGVtc1ZpZXcgPSBbXTtcbiAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHZhciBnb3REYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcbiAgICBvcmNpZHNfY29tcGxldGkyID0gW107XG4gICAgYXV0b3JpMiA9IFtdO1xuICAgIG9yY2lkX2luY29tcGxldGkgPSBbXTtcbiAgICBmYW1pbHlfbmFtZXMgPSBbXTtcblxuICAgIHZhciBzaG93UGFnZUluZm9BdXRob3JzID0gW107XG5cbiAgICBcbiAgICB2YXIgYXV0b3JpID0gZ290RGF0YS5wYXJhbTE7XG4gICAgdmFyIG9yY2lkc19jb21wbGV0aSA9IGdvdERhdGEucGFyYW0yO1xuICAgIG9yY2lkX2luY29tcGxldGkgPSBnb3REYXRhLnBhcmFtMztcbiAgICBmYW1pbHlfbmFtZXMgPSBnb3REYXRhLnBhcmFtNDtcblxuXG4gICAgb3JjaWRzX2NvbXBsZXRpMiA9IG9yY2lkc19jb21wbGV0aTtcbiAgICBhdXRvcmkyID0gYXV0b3JpO1xuXG4gICAgY29uc29sZS5sb2coYXV0b3JpKTtcbiAgICBjb25zb2xlLmxvZyhvcmNpZHNfY29tcGxldGkpO1xuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKG9yY2lkX251bWVyaWNpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV0b3JpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW1zVmlldy5wdXNoKHtpdGVtSW1hZ2U6IFwiaHR0cHM6Ly9hcGV4Y292YW50YWdlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOC9PUkNJRC1JY29uLnBuZ1wiLCBpdGVtTmFtZTogYXV0b3JpW2ldW1wibmFtZVwiXX0pO1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIFxuICAgIHBhZ2VEYXRhLnNldChcIml0ZW1zVmlld1wiLCBpdGVtc1ZpZXcpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcblxuXG59XG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5cbmV4cG9ydHMuc2hvd0Z1bGxVcmwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcblxuICAgIGlmKCFvcmNpZHNfY29tcGxldGkyW2luZGV4XSlcbiAgICB7XG4gICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcblxuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiVGhlcmUgaXMgbm8gd2ViIHNpdGUgZm9yIFwiK2F1dG9yaTJbaW5kZXhdW1wibmFtZVwiXSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG5cbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VBdXRob3JcIixcbiAgICAgICAgLy9iYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICBwYXJhbTE6IGF1dG9yaTJbaW5kZXhdW1wibmFtZVwiXSxcbiAgICAgICAgICAgIHBhcmFtMjogb3JjaWRfaW5jb21wbGV0aVtpbmRleF0sXG4gICAgICAgICAgICBwYXJhbTM6IGZhbWlseV9uYW1lc1tpbmRleF1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG4gICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbCB0ZXh0XCIsXG4gICAgICAgIGFjdGlvbnM6IFtcIlNob3cgT1JDSUQgcHJvZmlsZVwiLCBcIlNob3cgcmVsYXRlZCBwcm9maWxlc1wiXVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgIGlmKHJlc3VsdCA9PSBcIlNob3cgT1JDSUQgcHJvZmlsZVwiKXtcbiAgICAgICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL29yY2lkLm9yZy9cIitvcmNpZF9pbmNvbXBsZXRpW2luZGV4XSk7XG4gICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PSBcIlNob3cgcmVsYXRlZCBwcm9maWxlc1wiKXtcbiAgICAgICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xuXG4gICAgICAgIH1cbn0pO1xuICAgICAgICAgICAgLy91dGlsc01vZHVsZS5vcGVuVXJsKG9yY2lkc19jb21wbGV0aTJbaW5kZXhdKTtcbiAgICAgICAgfVxufVxuXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwiZ29CYWNrIGZ1bmN0aW9uXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlU2NvcHVzLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vcGFnZVNjb3B1cy5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9