webpackHotUpdate("bundle",{

/***/ "./pageAuthor.js":
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

///let scholar = require('google-scholar-extended');


var pageData = new Observable();
var itemsView = new ObservableArray([]);


var dois_from_scopus = [];

async function onNavigatingTo(args)
{
    console.log("ENTRO IN AUTOREEEE");
    dois_from_scopus = [];

    var page = args.object;
    var gotData = page.navigationContext;

    var autore = gotData.param1;
    var orcid = gotData.param2;
    var family_names = gotData.param3;

    var authorName = "";
    authorName += autore;

    var indice = 0;
    var affil = "";


    for (let i = 0; i < autore.length; i++) {
            if(autore[i] == ',')
            {
                indice = i;
                console.log("Indice trovato = "+indice+" length: "+autore.length);
                break;
            }    
    }
    
    affil += authorName.slice(indice+1);

    var authquery = family_names;

    console.log("author name = "+authquery);
     console.log("AFFIL : "+affil);
    // console.log("NOME RICEVUTO:" +autore+" orcid: "+orcid);

    const vm = fromObject({
        authorName
            });
    
            page.bindingContext = vm;

    
            var urlscopus = "https://api.elsevier.com/content/search/scopus";
            var key = "?apiKey=5d4e82de1ea87e0ab10aab813087178c";
            var js = "&httpAccept=application/json";

            urlscopus += key;
            urlscopus += js;
            var query = "&query=";
        
           
            var urlcompleta = urlscopus ;//+key+orcid;
  
            affil = "";

            if( (authquery!== "") && (orcid!=="") && (affil!==""))
            {
                urlcompleta+=query+"AUTHLASTNAME("+authquery+") and ORCID("+orcid+") and AFFIL("+affil+")";
            }
            else if((authquery!== "") && (orcid!==""))
            {
                urlcompleta+=query+"AUTHLASTNAME("+authquery+") and ORCID("+orcid+")";
            }

            console.log("urlcompleta: "+urlcompleta);

         
            var madonnaputtana = await  httpModule2.request({
                url: urlcompleta,
                method: "GET"}, (e) => {console.log("errore");}); //fetch(urlcompleta);
        
               //console.log(dioporcomaiale);
               var json = JSON.parse(madonnaputtana.content.toString());
               //console.log(json);
               console.log("Controllo");

               var articleViews = [];

               var len_artciles = json["search-results"].entry.length;
               console.log("quantità di articoli: "+ len_artciles);

                for (let j = 0; j < len_artciles; j++) {
                
                    articleViews.push({articleTitle: json["search-results"]["entry"][j]["dc:title"], authorsName: "Author: "+json["search-results"]["entry"][j]["dc:creator"],itemDesc :"Published in: "+json["search-results"]["entry"][j]["prism:publicationName"]});                 
                    dois_from_scopus.push(json["search-results"]["entry"][j]["prism:doi"]);
                }

               console.log(articleViews);

                  
            page.bindingContext = pageData;

            pageData.set("articleViews", articleViews);

}


exports.onNavigatingTo = onNavigatingTo;


exports.goToDoi = function(args)
{
    var index = args.index;
    console.log(`Second ListView item tap ${index}`);

    if(!dois_from_scopus[index])
    {
        dialogs.alert("There is no doi avaliable");
    }
    else
        utilsModule.openUrl("https://doi.org/"+dois_from_scopus[index]);
}

exports.goBack = function(args)
{ 
    console.log("prova");
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
} ; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageAuthor.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pageAuthor.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlQXV0aG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseURBQVcsbUJBQU8sQ0FBQyx5REFBYyxFQUFFO0FBQ25DLG9CQUFvQixtQkFBTyxDQUFDLGlEQUF1QjtBQUNuRCx3QkFBd0IsbUJBQU8sQ0FBQyxrQ0FBK0I7QUFDL0QsbUJBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHNEQUFVO0FBQ3BDLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsMERBQTZCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLG1EQUE4QjtBQUMxRCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBUztBQUNqQyxzQkFBc0IsbUJBQU8sQ0FBQyw4RUFBdUI7O0FBRXJEOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLHlDQUF5Qzs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVLHVCQUF1QixFQUFFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQixrQkFBa0I7O0FBRWpELHVDQUF1Qyw4TkFBOE4sRTtBQUNyUTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTtBQUNELElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDBDQUEwQztBQUNyRSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuN2ExN2Q3ZjBiYTU4NjBjYjAzZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTsgLy8gcGVyIGFjY2VkZXIgYWxsYSBwYWdpbmEgd2ViIHZpc2liaWxlIHhtbFxuY29uc3QgaHR0cE1vZHVsZTIgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcbmNvbnN0IGZyb21PYmplY3QgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuZnJvbU9iamVjdDtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbmNvbnN0IHV0aWxzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG5jb25zdCBwcm9jZXNzID0gcmVxdWlyZSgncHJvY2VzcycpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG4vLy9sZXQgc2Nob2xhciA9IHJlcXVpcmUoJ2dvb2dsZS1zY2hvbGFyLWV4dGVuZGVkJyk7XG5cblxudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbnZhciBpdGVtc1ZpZXcgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuXG52YXIgZG9pc19mcm9tX3Njb3B1cyA9IFtdO1xuXG5hc3luYyBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKVxue1xuICAgIGNvbnNvbGUubG9nKFwiRU5UUk8gSU4gQVVUT1JFRUVFXCIpO1xuICAgIGRvaXNfZnJvbV9zY29wdXMgPSBbXTtcblxuICAgIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgdmFyIGdvdERhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuXG4gICAgdmFyIGF1dG9yZSA9IGdvdERhdGEucGFyYW0xO1xuICAgIHZhciBvcmNpZCA9IGdvdERhdGEucGFyYW0yO1xuICAgIHZhciBmYW1pbHlfbmFtZXMgPSBnb3REYXRhLnBhcmFtMztcblxuICAgIHZhciBhdXRob3JOYW1lID0gXCJcIjtcbiAgICBhdXRob3JOYW1lICs9IGF1dG9yZTtcblxuICAgIHZhciBpbmRpY2UgPSAwO1xuICAgIHZhciBhZmZpbCA9IFwiXCI7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV0b3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihhdXRvcmVbaV0gPT0gJywnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluZGljZSA9IGk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRpY2UgdHJvdmF0byA9IFwiK2luZGljZStcIiBsZW5ndGg6IFwiK2F1dG9yZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSAgICBcbiAgICB9XG4gICAgXG4gICAgYWZmaWwgKz0gYXV0aG9yTmFtZS5zbGljZShpbmRpY2UrMSk7XG5cbiAgICB2YXIgYXV0aHF1ZXJ5ID0gZmFtaWx5X25hbWVzO1xuXG4gICAgY29uc29sZS5sb2coXCJhdXRob3IgbmFtZSA9IFwiK2F1dGhxdWVyeSk7XG4gICAgIGNvbnNvbGUubG9nKFwiQUZGSUwgOiBcIithZmZpbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJOT01FIFJJQ0VWVVRPOlwiICthdXRvcmUrXCIgb3JjaWQ6IFwiK29yY2lkKTtcblxuICAgIGNvbnN0IHZtID0gZnJvbU9iamVjdCh7XG4gICAgICAgIGF1dGhvck5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuXG4gICAgXG4gICAgICAgICAgICB2YXIgdXJsc2NvcHVzID0gXCJodHRwczovL2FwaS5lbHNldmllci5jb20vY29udGVudC9zZWFyY2gvc2NvcHVzXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0gXCI/YXBpS2V5PTVkNGU4MmRlMWVhODdlMGFiMTBhYWI4MTMwODcxNzhjXCI7XG4gICAgICAgICAgICB2YXIganMgPSBcIiZodHRwQWNjZXB0PWFwcGxpY2F0aW9uL2pzb25cIjtcblxuICAgICAgICAgICAgdXJsc2NvcHVzICs9IGtleTtcbiAgICAgICAgICAgIHVybHNjb3B1cyArPSBqcztcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IFwiJnF1ZXJ5PVwiO1xuICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdXJsY29tcGxldGEgPSB1cmxzY29wdXMgOy8vK2tleStvcmNpZDtcbiAgXG4gICAgICAgICAgICBhZmZpbCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmKCAoYXV0aHF1ZXJ5IT09IFwiXCIpICYmIChvcmNpZCE9PVwiXCIpICYmIChhZmZpbCE9PVwiXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybGNvbXBsZXRhKz1xdWVyeStcIkFVVEhMQVNUTkFNRShcIithdXRocXVlcnkrXCIpIGFuZCBPUkNJRChcIitvcmNpZCtcIikgYW5kIEFGRklMKFwiK2FmZmlsK1wiKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigoYXV0aHF1ZXJ5IT09IFwiXCIpICYmIChvcmNpZCE9PVwiXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybGNvbXBsZXRhKz1xdWVyeStcIkFVVEhMQVNUTkFNRShcIithdXRocXVlcnkrXCIpIGFuZCBPUkNJRChcIitvcmNpZCtcIilcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cmxjb21wbGV0YTogXCIrdXJsY29tcGxldGEpO1xuXG4gICAgICAgICBcbiAgICAgICAgICAgIHZhciBtYWRvbm5hcHV0dGFuYSA9IGF3YWl0ICBodHRwTW9kdWxlMi5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHVybGNvbXBsZXRhLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIn0sIChlKSA9PiB7Y29uc29sZS5sb2coXCJlcnJvcmVcIik7fSk7IC8vZmV0Y2godXJsY29tcGxldGEpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGlvcG9yY29tYWlhbGUpO1xuICAgICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKG1hZG9ubmFwdXR0YW5hLmNvbnRlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb250cm9sbG9cIik7XG5cbiAgICAgICAgICAgICAgIHZhciBhcnRpY2xlVmlld3MgPSBbXTtcblxuICAgICAgICAgICAgICAgdmFyIGxlbl9hcnRjaWxlcyA9IGpzb25bXCJzZWFyY2gtcmVzdWx0c1wiXS5lbnRyeS5sZW5ndGg7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInF1YW50aXTDoCBkaSBhcnRpY29saTogXCIrIGxlbl9hcnRjaWxlcyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbl9hcnRjaWxlczsgaisrKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVWaWV3cy5wdXNoKHthcnRpY2xlVGl0bGU6IGpzb25bXCJzZWFyY2gtcmVzdWx0c1wiXVtcImVudHJ5XCJdW2pdW1wiZGM6dGl0bGVcIl0sIGF1dGhvcnNOYW1lOiBcIkF1dGhvcjogXCIranNvbltcInNlYXJjaC1yZXN1bHRzXCJdW1wiZW50cnlcIl1bal1bXCJkYzpjcmVhdG9yXCJdLGl0ZW1EZXNjIDpcIlB1Ymxpc2hlZCBpbjogXCIranNvbltcInNlYXJjaC1yZXN1bHRzXCJdW1wiZW50cnlcIl1bal1bXCJwcmlzbTpwdWJsaWNhdGlvbk5hbWVcIl19KTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkb2lzX2Zyb21fc2NvcHVzLnB1c2goanNvbltcInNlYXJjaC1yZXN1bHRzXCJdW1wiZW50cnlcIl1bal1bXCJwcmlzbTpkb2lcIl0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZVZpZXdzKTtcblxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG5cbiAgICAgICAgICAgIHBhZ2VEYXRhLnNldChcImFydGljbGVWaWV3c1wiLCBhcnRpY2xlVmlld3MpO1xuXG59XG5cblxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuXG5cbmV4cG9ydHMuZ29Ub0RvaSA9IGZ1bmN0aW9uKGFyZ3MpXG57XG4gICAgdmFyIGluZGV4ID0gYXJncy5pbmRleDtcbiAgICBjb25zb2xlLmxvZyhgU2Vjb25kIExpc3RWaWV3IGl0ZW0gdGFwICR7aW5kZXh9YCk7XG5cbiAgICBpZighZG9pc19mcm9tX3Njb3B1c1tpbmRleF0pXG4gICAge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiVGhlcmUgaXMgbm8gZG9pIGF2YWxpYWJsZVwiKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKFwiaHR0cHM6Ly9kb2kub3JnL1wiK2RvaXNfZnJvbV9zY29wdXNbaW5kZXhdKTtcbn1cblxuZXhwb3J0cy5nb0JhY2sgPSBmdW5jdGlvbihhcmdzKVxueyBcbiAgICBjb25zb2xlLmxvZyhcInByb3ZhXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xufSA7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZUF1dGhvci5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3BhZ2VBdXRob3IuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==