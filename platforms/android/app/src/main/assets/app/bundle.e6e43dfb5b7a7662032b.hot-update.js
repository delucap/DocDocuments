webpackHotUpdate("bundle",{

/***/ "./showFirstResults.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js"); // per acceder alla pagina web visibile xml
const httpModule = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const createViewModel = __webpack_require__("./showFirstResults-view-model.js").createViewModel;
const fromObject = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").fromObject;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
const getFrameById = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js").getFrameById;
//const frame = getFrameById("my-frame-id");

var dois = [];
var orcids = [];
var results = [];


/* Caching */
var ex_data = [];
var past_data = [];

var flag_cache = false;

async function onNavigatingTo(args) {
    var page = args.object;

    var index = 0;

    var gotData = page.navigationContext;

    console.log("Parametro 1 rec: "+gotData.param1);
    console.log("Parametro 2 rec: "+gotData.param2);

    for (let k = 0; k < ex_data.length; k++) {
        if(gotData.param1 === ex_data[k]["past_url"])
        {
            console.log("searching already done!");
            flag_cache = true;
            index = k;
        }
        //console.log("k["+k+"]: "+ex_data[k]);   
    }

    ex_data.push({past_url: gotData.param1});

    var searching = gotData.param2;

    url1 = gotData.param1;

        console.log("Starting HTTP Request");
    console.log("Stato flag " + flag_cache);

    if(!flag_cache)
    {
            
    dois = [];
    orcids = [];
    results = [];
    var response = await httpModule.request({
        url: url1,
        method: "GET"
    }, (e) => {
        console.error("Error: "+ e);
    });
    
        console.log("Richiesta effettuata");

        /*var mamt = response.content.toJSON();
        console.log("Tipo di mammt2 "+ typeof(mamt));


        var contenuto = JSON.parse(mamt);
        console.log("Tipo contenuto: " + typeof(contenuto));
        */
        var sort = JSON.parse(response.content.toString());
        var chitammuo = sort.message.items[0].title;//['items'][0].reference-count;
        console.log("chiammuo = "+ chitammuo);

        //viewModel.set("risposta", chitammuo);
        console.log("t'appo amooooo");


        results = sort.message.items;
        console.log("Counter results: "+ results.length);

        var myTitles = [];
        var issns = [];

        for (let i = 0; i < results.length; i++) {
            var insert_string = "";
            // decommenta
            //console.log("lenght doi for "+i+" article: "+results[i].DOI.length);
            dois.push(results[i].DOI);
            
            
            if(results[i].author)
            {
                var authors = results[i].author;
                // decommenta
            //console.log("Counter authors: "+ authors.length);
            insert_string = results[i].title + ",\n ";

            for (let j = 0; j < authors.length; j++) {
                insert_string += " "+authors[j].family+", "+authors[j].given[0]+". ";
                
            }
            }
            // decommenta
            //console.log("title "+i+" = "+ insert_string + ", DOI: " + dois[i]);
            
            //isbns.push(results[i].isbn-type[1].value);
            //console.log("isbn: "+isbns[j]);

            myTitles.push({title: insert_string});
            //console.log("tit["+i+"] inserted");
            //myTitles.push(results[i].title);
        }


        console.log("size of myTitles: "+ myTitles.length);


        var i = 0;
        var vm = fromObject({
            myTitles,
            searching

        });

        past_data.push(vm);
        page.bindingContext = vm;

    }
    else
    {
        console.log("CACHE STARTED");
        //console.log(past_data[index]);
        var temp = past_data[index];
        past_data.pop();
        ex_data = [];

        flag_cache = false;
        page.bindingContext = temp;

    }

        // Argument (response) is HttpResponse
           //page.bindingContext = createViewModel(args.object, url1);

}
exports.onNavigatingTo = onNavigatingTo;

function onListViewLoaded(args) {
    const listView = args.object;
}
exports.onListViewLoaded = onListViewLoaded;

function onItemTap(args) {
    var index = args.index;
    console.log(`Second ListView item tap ${index}`);
    console.log("selected article's doi: "+ dois[index]);

    /*var navigationOptions = {
        moduleName: 'pageFour',
        context: {
            param1: results[index],
            param2: index
        }
    }
    
    /*if(results[index].publisher == "IEEE")
    {
        console.log("IEEEEEEEEEEE PUBLISHER");
        var navigationOptions = {
            moduleName: 'pageFourIEEE',
            context: {
                param1: results[index],
                param2: index
            }
        }
    
        //frameModule.topmost().navigate(navigationOptions);
    
    }
    else{
    var navigationOptions = {
        moduleName: 'pageFour',
        context: {
            param1: results[index],
            param2: index
        }
    }
    }*/
    const navigationEntry = {
        moduleName: "pageFifth",
        //backstackVisible: false,
        animated: true,
        transition: {
            name: "fade",
            duration: 380,
            curve: "easeIn"
        },
        //clearHistory: true,
        context: {
            param1: results[index],
            param2: index
        }
    };
    frameModule.topmost().navigate(navigationEntry); //navigate(navigationOptions);

}
exports.onItemTap = onItemTap;


exports.goBack = function(args)
{ 
    console.log("prova");
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./showFirstResults.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./showFirstResults.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaG93Rmlyc3RSZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseURBQVcsbUJBQU8sQ0FBQyx5REFBYyxFQUFFO0FBQ25DLG1CQUFtQixtQkFBTyxDQUFDLGlEQUF1QjtBQUNsRCx3QkFBd0IsbUJBQU8sQ0FBQyxrQ0FBK0I7QUFDL0QsbUJBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHNEQUFVO0FBQ3BDLHFCQUFxQixtQkFBTyxDQUFDLHNEQUEyQjtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBOztBQUVBLGtCQUFrQix5QkFBeUI7O0FBRTNDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLG9CQUFvQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTs7O0FBR0E7QUFDQSxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQWdEO0FBQzNFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS5lNmU0M2RmYjViN2E3NjYyMDMyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpOyAvLyBwZXIgYWNjZWRlciBhbGxhIHBhZ2luYSB3ZWIgdmlzaWJpbGUgeG1sXG5jb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL3Nob3dGaXJzdFJlc3VsdHMtdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XG5jb25zdCBmcm9tT2JqZWN0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLmZyb21PYmplY3Q7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5jb25zdCBnZXRGcmFtZUJ5SWQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKS5nZXRGcmFtZUJ5SWQ7XG4vL2NvbnN0IGZyYW1lID0gZ2V0RnJhbWVCeUlkKFwibXktZnJhbWUtaWRcIik7XG5cbnZhciBkb2lzID0gW107XG52YXIgb3JjaWRzID0gW107XG52YXIgcmVzdWx0cyA9IFtdO1xuXG5cbi8qIENhY2hpbmcgKi9cbnZhciBleF9kYXRhID0gW107XG52YXIgcGFzdF9kYXRhID0gW107XG5cbnZhciBmbGFnX2NhY2hlID0gZmFsc2U7XG5cbmFzeW5jIGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgdmFyIGluZGV4ID0gMDtcblxuICAgIHZhciBnb3REYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcblxuICAgIGNvbnNvbGUubG9nKFwiUGFyYW1ldHJvIDEgcmVjOiBcIitnb3REYXRhLnBhcmFtMSk7XG4gICAgY29uc29sZS5sb2coXCJQYXJhbWV0cm8gMiByZWM6IFwiK2dvdERhdGEucGFyYW0yKTtcblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZXhfZGF0YS5sZW5ndGg7IGsrKykge1xuICAgICAgICBpZihnb3REYXRhLnBhcmFtMSA9PT0gZXhfZGF0YVtrXVtcInBhc3RfdXJsXCJdKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBhbHJlYWR5IGRvbmUhXCIpO1xuICAgICAgICAgICAgZmxhZ19jYWNoZSA9IHRydWU7XG4gICAgICAgICAgICBpbmRleCA9IGs7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImtbXCIraytcIl06IFwiK2V4X2RhdGFba10pOyAgIFxuICAgIH1cblxuICAgIGV4X2RhdGEucHVzaCh7cGFzdF91cmw6IGdvdERhdGEucGFyYW0xfSk7XG5cbiAgICB2YXIgc2VhcmNoaW5nID0gZ290RGF0YS5wYXJhbTI7XG5cbiAgICB1cmwxID0gZ290RGF0YS5wYXJhbTE7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBIVFRQIFJlcXVlc3RcIik7XG4gICAgY29uc29sZS5sb2coXCJTdGF0byBmbGFnIFwiICsgZmxhZ19jYWNoZSk7XG5cbiAgICBpZighZmxhZ19jYWNoZSlcbiAgICB7XG4gICAgICAgICAgICBcbiAgICBkb2lzID0gW107XG4gICAgb3JjaWRzID0gW107XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsMSxcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgfSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIisgZSk7XG4gICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmljaGllc3RhIGVmZmV0dHVhdGFcIik7XG5cbiAgICAgICAgLyp2YXIgbWFtdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlwbyBkaSBtYW1tdDIgXCIrIHR5cGVvZihtYW10KSk7XG5cblxuICAgICAgICB2YXIgY29udGVudXRvID0gSlNPTi5wYXJzZShtYW10KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaXBvIGNvbnRlbnV0bzogXCIgKyB0eXBlb2YoY29udGVudXRvKSk7XG4gICAgICAgICovXG4gICAgICAgIHZhciBzb3J0ID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICB2YXIgY2hpdGFtbXVvID0gc29ydC5tZXNzYWdlLml0ZW1zWzBdLnRpdGxlOy8vWydpdGVtcyddWzBdLnJlZmVyZW5jZS1jb3VudDtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGlhbW11byA9IFwiKyBjaGl0YW1tdW8pO1xuXG4gICAgICAgIC8vdmlld01vZGVsLnNldChcInJpc3Bvc3RhXCIsIGNoaXRhbW11byk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidCdhcHBvIGFtb29vb29cIik7XG5cblxuICAgICAgICByZXN1bHRzID0gc29ydC5tZXNzYWdlLml0ZW1zO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvdW50ZXIgcmVzdWx0czogXCIrIHJlc3VsdHMubGVuZ3RoKTtcblxuICAgICAgICB2YXIgbXlUaXRsZXMgPSBbXTtcbiAgICAgICAgdmFyIGlzc25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0X3N0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAvLyBkZWNvbW1lbnRhXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibGVuZ2h0IGRvaSBmb3IgXCIraStcIiBhcnRpY2xlOiBcIityZXN1bHRzW2ldLkRPSS5sZW5ndGgpO1xuICAgICAgICAgICAgZG9pcy5wdXNoKHJlc3VsdHNbaV0uRE9JKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXN1bHRzW2ldLmF1dGhvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgYXV0aG9ycyA9IHJlc3VsdHNbaV0uYXV0aG9yO1xuICAgICAgICAgICAgICAgIC8vIGRlY29tbWVudGFcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb3VudGVyIGF1dGhvcnM6IFwiKyBhdXRob3JzLmxlbmd0aCk7XG4gICAgICAgICAgICBpbnNlcnRfc3RyaW5nID0gcmVzdWx0c1tpXS50aXRsZSArIFwiLFxcbiBcIjtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhdXRob3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3N0cmluZyArPSBcIiBcIithdXRob3JzW2pdLmZhbWlseStcIiwgXCIrYXV0aG9yc1tqXS5naXZlblswXStcIi4gXCI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWNvbW1lbnRhXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidGl0bGUgXCIraStcIiA9IFwiKyBpbnNlcnRfc3RyaW5nICsgXCIsIERPSTogXCIgKyBkb2lzW2ldKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9pc2Jucy5wdXNoKHJlc3VsdHNbaV0uaXNibi10eXBlWzFdLnZhbHVlKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpc2JuOiBcIitpc2Juc1tqXSk7XG5cbiAgICAgICAgICAgIG15VGl0bGVzLnB1c2goe3RpdGxlOiBpbnNlcnRfc3RyaW5nfSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidGl0W1wiK2krXCJdIGluc2VydGVkXCIpO1xuICAgICAgICAgICAgLy9teVRpdGxlcy5wdXNoKHJlc3VsdHNbaV0udGl0bGUpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhcInNpemUgb2YgbXlUaXRsZXM6IFwiKyBteVRpdGxlcy5sZW5ndGgpO1xuXG5cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgdm0gPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgICAgIG15VGl0bGVzLFxuICAgICAgICAgICAgc2VhcmNoaW5nXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFzdF9kYXRhLnB1c2godm0pO1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG5cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDQUNIRSBTVEFSVEVEXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHBhc3RfZGF0YVtpbmRleF0pO1xuICAgICAgICB2YXIgdGVtcCA9IHBhc3RfZGF0YVtpbmRleF07XG4gICAgICAgIHBhc3RfZGF0YS5wb3AoKTtcbiAgICAgICAgZXhfZGF0YSA9IFtdO1xuXG4gICAgICAgIGZsYWdfY2FjaGUgPSBmYWxzZTtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHRlbXA7XG5cbiAgICB9XG5cbiAgICAgICAgLy8gQXJndW1lbnQgKHJlc3BvbnNlKSBpcyBIdHRwUmVzcG9uc2VcbiAgICAgICAgICAgLy9wYWdlLmJpbmRpbmdDb250ZXh0ID0gY3JlYXRlVmlld01vZGVsKGFyZ3Mub2JqZWN0LCB1cmwxKTtcblxufVxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuXG5mdW5jdGlvbiBvbkxpc3RWaWV3TG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCBsaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xufVxuZXhwb3J0cy5vbkxpc3RWaWV3TG9hZGVkID0gb25MaXN0Vmlld0xvYWRlZDtcblxuZnVuY3Rpb24gb25JdGVtVGFwKGFyZ3MpIHtcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIGFydGljbGUncyBkb2k6IFwiKyBkb2lzW2luZGV4XSk7XG5cbiAgICAvKnZhciBuYXZpZ2F0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3BhZ2VGb3VyJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiByZXN1bHRzW2luZGV4XSxcbiAgICAgICAgICAgIHBhcmFtMjogaW5kZXhcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKmlmKHJlc3VsdHNbaW5kZXhdLnB1Ymxpc2hlciA9PSBcIklFRUVcIilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSUVFRUVFRUVFRUVFIFBVQkxJU0hFUlwiKTtcbiAgICAgICAgdmFyIG5hdmlnYXRpb25PcHRpb25zID0ge1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3BhZ2VGb3VySUVFRScsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgcGFyYW0xOiByZXN1bHRzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBwYXJhbTI6IGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy9mcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbk9wdGlvbnMpO1xuICAgIFxuICAgIH1cbiAgICBlbHNle1xuICAgIHZhciBuYXZpZ2F0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3BhZ2VGb3VyJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiByZXN1bHRzW2luZGV4XSxcbiAgICAgICAgICAgIHBhcmFtMjogaW5kZXhcbiAgICAgICAgfVxuICAgIH1cbiAgICB9Ki9cbiAgICBjb25zdCBuYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZUZpZnRoXCIsXG4gICAgICAgIC8vYmFja3N0YWNrVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICB9LFxuICAgICAgICAvL2NsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiByZXN1bHRzW2luZGV4XSxcbiAgICAgICAgICAgIHBhcmFtMjogaW5kZXhcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKG5hdmlnYXRpb25FbnRyeSk7IC8vbmF2aWdhdGUobmF2aWdhdGlvbk9wdGlvbnMpO1xuXG59XG5leHBvcnRzLm9uSXRlbVRhcCA9IG9uSXRlbVRhcDtcblxuXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwicHJvdmFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3Nob3dGaXJzdFJlc3VsdHMuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9zaG93Rmlyc3RSZXN1bHRzLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=