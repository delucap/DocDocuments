webpackHotUpdate("bundle",{

/***/ "./pageFifth.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js"); // per acceder alla pagina web visibile xml
const httpModule = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const httpModule2 = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const createViewModel = __webpack_require__("./showFirstResults-view-model.js").createViewModel;
const fromObject = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").fromObject;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
const utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
var pageData = new Observable();
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;

const modalViewModule = "ns-ui-category/modal-view/basics/modal-view-page";
const platformModule = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
const Color = __webpack_require__("../node_modules/@nativescript/core/color/color.js").Color;
const colors = __webpack_require__("../node_modules/@nativescript/core/color/known-colors.js");



var pageData = new Observable();
var itemsView = new ObservableArray([]);

var passToScopus = [];
var orcids_completi = [];
var references = [];
var flag_refs = false;

var url_tovisit = [];

var orcids_incompleti = [];

var family_names = [];

async function onNavigatingTo(args)
{
    itemsView = [];

    var page = args.object;

    var gotData = page.navigationContext;

    page.bindingContext = pageData;

    var results = gotData.param1;
    var index = gotData.param2;

    var descr = [];

    
    var URL = "";

    var showPageInfoAuthors = [];

var auth_show = [];

var title = "";

var flag_failed = false;

var authors2 = [];

/* Azzeramento variabili globali per evitare appending */
var affiliations = [];
passToScopus = [];
orcids_completi = [];
references = [];
flag_refs = false;
url_tovisit = [];
orcids_incompleti = [];
family_names = [];

    //console.log("Parametro 1 rec: "+gotData.param1);
    //console.log("Parametro 2 rec: "+gotData.param2);

    console.log("Data recieved: "+gotData.param1+"\t2: "+gotData.param2+" type: "+typeof(index));

    var authors1 = [];
    console.log("Number of authors: "+results.author.length);

    var orcids = [];

    for (let i = 0; i < results.author.length; i++) {
        //authors1.push({name: results.author[i].family+" "+results.author[i].given});
        //console.log("author["+i+"]: "+authors1[i]);   
        if(!results.author[0].ORCID)
            break;
        if(results.author[i].ORCID)
        {
        console.log("orcid for "+i+" exists");
        showPageInfoAuthors.push(results.author[i].ORCID);
        orcids_completi.push(results.author[i].ORCID);

        var letters = "";
        for (let k = 17; k < showPageInfoAuthors[i].length; k++) {
                letters+=results.author[i].ORCID[k];
        }
        orcids[i] = letters;
       // console.log("letters:");
    }
    }

    orcids_incompleti = orcids;

    var flag_scopus = false;


    console.log("check affiliations");
    if(orcids[0])
    {
    for (let t = 0; t < orcids.length; t++) {

        var urlscopus = "https://api.elsevier.com/content/search/author";
        var key = "?apiKey=5d4e82de1ea87e0ab10aab813087178c";
        var orcid = "&query=ORCID";
    
        //var orcid1 = "0000-0001-7031-920X";
       
        var urlcompleta = urlscopus+key+orcid+"("+orcids[t]+")";
        var js = "&httpAccept=application/json";
        urlcompleta += js;
        
        //var urlcompleta ="https://api.elsevier.com/content/search/author?apiKey=5d4e82de1ea87e0ab10aab813087178c&query=ORCID(0000-0001-7031-920X)&httpAccept=application/json";
        console.log("sending query: "+urlcompleta);
        //var dioporcomaiale = retrieveValues(urlcompleta);
        var madonnaputtana = await  httpModule2.request({
         url: urlcompleta,
         method: "GET"}, (e) => {console.log("errore");}); //fetch(urlcompleta);
 
        //console.log(dioporcomaiale);
        var json = JSON.parse(madonnaputtana.content.toString());
        //console.log(json);
        console.log("Controllo");

        if(json["service-error"])
        {
            console.log("ERRORE");
            for (let i = 0; i < results.author.length; i++) {
                authors1.push({name: results.author[i].family+" "+results.author[i].given});
                family_names.push(results.author[i].family);
            }
            flag_scopus = true;
            break;
        }
        else
        {
            var affil = "";
        if (json["search-results"]["opensearch:totalResults"]>0)
        {
         affil = json["search-results"]["entry"]["0"]["affiliation-current"]["affiliation-name"];
        }
        else
        {
            console.log("Errore");
        }
        console.log("end affiliation for "+t);
        authors1.push({name: results.author[t].family+" "+results.author[t].given+", "+affil});
        family_names.push(results.author[t].family);

        }
    }
    }
    else
    {
        for (let i = 0; i < results.author.length; i++) {
            authors1.push({name: results.author[i].family+" "+results.author[i].given});
        }
    }
    
    if(flag_scopus)
    {
        let options = {
            title: "Authentication Elsevier",
            message: "In order to show the author's affilation you must logged with Scopus",
            okButtonText: "OK"
        };
        dialogs.alert(options).then(function() {
            console.log("You must logged with Scopus!");
        });
    }
     console.log("check affiliations finished");
     passToScopus = authors1;

     
     console.log("start google scholar querying 1");

     console.log("length= "+authors1.length+ "\n"+authors1[0]["name"]);

    // RIEMPIMENTO STRUTTURA DATI PER PARTE VISUALE
    for (let m = 0; m < authors1.length; m++) {
            //itemsView.push({itemName: authors1[k].name});
            console.log("author["+m+"]: "+authors1[m]["name"]);
    }

    console.log("start google scholar querying");




    

    //Prelevo url del sito originale NELLA RELAZIONE DIRE CHE DEMANDA A DOI.org come se fosse un'altra fonte
    URL = results.URL;
    url_tovisit.push(URL);
    //retrieving article's title
    title = results.title;


    auth_show = authors1;

    var isbn = "";
    //console.log("type: "+results.isbn-type);

   // console.log("log: "+ getSafe(() => results["isbn-type"]["1"].properties));

    // console.log("start google scholar querying");
    // if(results["isbn-type"] && results["isbn-type"]["1"])
    // {console.log("se pò fa");
    // isbn = +results["isbn-type"]["1"].value;
    // }
  
    
    // if (results["isbn-type"] && results["isbn-type"]["0"])
    //     isbn = +results["isbn-type"]["0"].value;
    //     else
    //     console.log("NU SE Pò fa nu cazz");
    // }


    if (results.ISBN && results.ISBN["1"])
    isbn = +results.ISBN["1"];
    else if (results.ISBN && results.ISBN["0"])
    isbn = +results.ISBN["0"];
    else
    console.log("NU SE Pò fa nu cazz");

    console.log("isbn "+isbn);

    //diocane(isbn,args);

  console.log("seaerchQuery: "+isbn);    
    
  var searchQuery =  isbn;//  "978-3-030-34914-1"; //"$("#search_form").submit(function(e) {
  var thumb2 = [];
  var authors = [];
  var page = args.object;


  //var searchQuery = $("#search_txt").val();
  //searchQuery = searchQuery.split(" ").join("+");

  /*if (!searchQuery) {
    searchQuery = "paleo";
  }*/
  const view = args.object;
 

    if(searchQuery)
    {
    var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchQuery;
    console.log("sending query: "+ url);

    // httpModule.request({
    //     url: url,
    //     method: "GET"
    // }).then((response) => {

    var response = await httpModule.request({url: url, method: "GET"},(e) => {
        console.error("Errore dio porco madoona "+ e)});

      var json = JSON.parse(response.content.toString());

      console.log("REQUEST OK from GOOGLE BOOKS");
      if(json.totalItems == 0)
      {
        console.log("DIOCANEEEEEEEE");
        flag_failed = true;
      }
      else
      {
      console.log("length json: "+ json.items.length);
      var htmlcontent = "";
      var thumb = "";
      var author = "";
      var description = "";
      var isbn = "";
      var price = "";
      var valuta = "";

      var diocan = [];

      for (let  i = 0; i < json.items.length; i++) {
          console.log("Cerco immagini ed autori...");
        if (json.items[i].volumeInfo.imageLinks) {
          thumb = json.items[i].volumeInfo.imageLinks.smallThumbnail;
       
          console.log("image book achieved");

        } else {
          thumb = "http://i.imgur.com/oM3MdAi.png";
          console.log("image book undefined");

          //thumb = 'http://slems-oldboys.org.uk/library/wp-content/uploads/2013/11/library_nocover.jpg'
        }
        //console.log("IMMAGINE: "+thumb);
        var diocano = thumb.slice(0, 4) + "s" + thumb.slice(4);
    

        thumb2.push({imageUri: diocano});
        console.log("IMMAGINE: "+diocano);
        console.log("MANNAG A MARONNN;");


        var title_book = "";

        console.log("searching title book");
        // AUTHOR
       // console.log(json.items[i]["volumeInfo"]);
        if(!json.items[i]["volumeInfo"])
        {
            console.log("Nun cstann autori");
        }
        else
        {
            console.log("FRA ORA CERCOOOOO");
            if(!json.items[i].volumeInfo.authors)
                diocan.push("information not available");
            else
            {
            console.log("Cerco autori, length: "+ json.items[i].volumeInfo.authors.length);

            for (let j = 0; j < json.items[i].volumeInfo.authors.length; j++) {
            diocan.push(json.items[i].volumeInfo.authors[j]);
            console.log("author ["+j+"]: "+diocan[j]);
                }
            }
        if(!json.items[i].volumeInfo.title)
        {
            console.log("No eds informations");
        }
        else
            title_book += json.items[i].volumeInfo.title;
        }
        

        //description
        description = json.items[i].volumeInfo.description;
        console.log("pughin");
        descr.push({desc: description});
        console.log("pughi2n: "+descr.length);

    

        if(diocan.length>=0)
            authors.push({author: "Eds: "+ diocan[0]+" et al."});
        else
            authors.push({author: diocan[0]});
        

        
        

        /*console.log("description: "+description); */
        //console.log(thumb2[0],thumb2[1],thumb2[2]);
        
        isbn = json.items[i].volumeInfo.industryIdentifiers[0].identifier;
        console.log("isbn: "+isbn);

        if(json.items[i].saleInfo && json.items[i].saleInfo.listPrice)
        {
            price = json.items[i].saleInfo.listPrice.amount;
            valuta = json.items[i].saleInfo.listPrice.currencyCode;
        }
        else
        price= "Not for sale";
        valuta = "";

        console.log("Price: "+price+" "+valuta);

        console.log("processo di ricerca terminato");
       
        // const vm = fromObject({
        //     thumb2,
        //     descr,
        //     authors,
        //     auth_show,
        //     });
        
        //     page.bindingContext = vm;

            console.log("Size of thumb2: "+thumb2.length);
      }
    
      //setto l'array globale di autori con quello locale
      authors_complete = diocan;

    }

    console.log("USCITO");

    function trunc(s, n) {
        var t = s.indexOf(" ", n);
        if (t == -1) return s;
        return s.substring(0, t) + "...";
    }



    //console.log("analizo refs");
    if(!results.reference)
    {
        console.log("no refs");
    }
    else
    {
        for (let k = 0; k < results.reference.length; k++) {
            references.push({refName: results.reference[k].unstructured, DOI: results.reference[k].DOI});
        }
        //console.log(references);
        flag_refs = true;
    }

    // if(results.reference.length)
    // {
    // for (let k = 0; k < results.reference.length; k++) {
    //     references.push({refName: results.reference[k].unstructured, DOI: results.reference[k].DOI});
    // }
    // console.log(references);
    // flag_refs = true;
    // }

    

}
if(!searchQuery || (flag_failed && !searchQuery))
{
    console.log("ERRORE ISBN");
    var mannaggia= "Results not found";
    var showUrl = "Click here to show web site about paper";
    const vm = fromObject({
        mannaggia,
        showUrl
        });
    
    console.log("setto la pagina....");
    let options = {
        title: "No Results found",
        message: "Anything information has been found.",
        okButtonText: "OK"
    };


    dialogs.alert(options).then(function() {
        console.log("searching failed");
        const button = args.object;
        const page = button.page;
        page.frame.goBack();
    });

    flag_failed = false;

    page.bindingContext = vm;
}   
    
    //itemsView.push({itemImage: thumb2[0]["imageUri"], itemName: authors[0]["author"], itemDesc: descr[0]["desc"]});

    for (let k = 0; k < thumb2.length; k++) {
        itemsView.push({itemImage: (thumb2[k]["imageUri"] ? thumb2[k]["imageUri"] : "http://i.imgur.com/oM3MdAi.png"), itemTitle: "Book: "+title_book, itemName: (authors[k]["author"] ? authors[k]["author"] : "No author's information available"), itemDesc: (descr[k]["desc"] ? descr[k]["desc"] : "No description available"), titlePaper: title});
        //console.log(itemsView[k]);

    }
    //console.log(itemsView[0]);

 
    //PREPARAZIONE LISTA AUTHORS con ORCID ED AFFILIZAIONI
    // for (let k = 0; k < au.length; k++) {
    //     const element = au[k];
        
    // }
    console.log("length final data: "+itemsView.length);

    console.log("frateee += "+itemsView);
    if(!itemsView.length)
    {
        // let options = {
        //     title: "No Results found",
        //     message: "nienteeeeee 2",
        //     okButtonText: "OK"
        // };
        // dialogs.alert(options).then(function() {
        //     console.log("searching failed");
        //     const button = args.object;
        //     const page = button.page;
        //     page.frame.goBack();
        // });

        const button = args.object;
        const page = button.page;
        page.frame.goBack();

    }
   
    page.bindingContext = pageData;
    

    pageData.set("itemsView", itemsView);
    pageData.set("titlePaper", titlePaper);


       
}

  
exports.onNavigatingTo = onNavigatingTo;

exports.showInfoAuthors = function()
{


    const navigationEntry = {
        moduleName: "pageScopus",
        //backstackVisible: false,
        animated: true,
        transition: {
            name: "fade",
            duration: 380,
            curve: "easeIn"
        },
        //clearHistory: true,
        context: {
            param1: passToScopus,
            param2: orcids_completi,
            param3: orcids_incompleti,
            param4: family_names
        }
    };
    frameModule.topmost().navigate(navigationEntry);
}

exports.showRefs = function()
{
    if(!flag_refs)
    {
        let options = {
            title: "References Info",
            message: "No references information are available",
            okButtonText: "OK"
        };

        dialogs.alert(options).then(function() {
            console.log("");
        });
    }
    else
    {

    const navigationEntry = {
        moduleName: "pageRefs",
        //backstackVisible: false,
        animated: true,
        transition: {
            name: "fade",
            duration: 380,
            curve: "easeIn"
        },
        //clearHistory: true,
        context: {
            param1: references,
            param2: 1
        }
    };
    frameModule.topmost().navigate(navigationEntry);
    }
}


exports.goToURL = function (args)
{
    var index = args.index;
    console.log(` item tap ${index}`);
    console.log("e cliccat fraaaa");
    
    if(!url_tovisit[index])
    {
        let options = {
            title: "Article's Info",
            message: "No web site available",
            okButtonText: "OK"
        };

        dialogs.alert(options).then(function() {
            console.log("");
        });
    }
    else
    {
        utilsModule.openUrl(url_tovisit[index]);
    }
}









exports.showDesc = function()
{
    let options = {
        title: "Description of Book",
        message: descr[0].desc,
        okButtonText: "OK"
    };
    console.log(descr[0].desc);
    dialogs.alert(options).then(function() {
        console.log("Dialog closed!");
    });
}

exports.goToShop = function ()
{
    utilsModule.openUrl(URL);
}

exports.showAllAuthors = function ()
{
    var autori = "";
    for (let k = 0; k < authors_complete.length; k++) {
        autori += authors_complete[k] ;
        if(k != authors_complete.length-1)
        autori+=", " ;
    }
    let options = {
        title: "List of authors",
        message: autori,
        okButtonText: "OK"
    };
    dialogs.alert(options).then(function()
    {
        console.log("Dialog closed!");
        });
}

exports.showAuthInfo = function(args)
{
    var index = args.index;
    console.log(`Second ListView item tap ${index}`);
    console.log(showPageInfoAuthors[index]);

    if(!showPageInfoAuthors[index])
    {
        dialogs.alert("There are no information about "+auth_show[index]['name']);

    }
    else
         utilsModule.openUrl(showPageInfoAuthors[index]);

}


exports.showFullUrl = function (args)
{
    var index = args.index;
    console.log(`Second ListView item tap ${index}`);

    if(!URL)
    {
        dialogs.alert("There is no web site for "+title);
    }
    else
        utilsModule.openUrl(URL);

}

exports.rdlistloaded = function(args)
{
}

exports.onItemLoading = function(args)
    {
        console.log("loading items");
        if(platformModule.isAndroid){
            console.log(args.android);
            var newcolor = new Color(20,255,0,0);
            console.log(args.android.backgroundView);
            //args.android.backgroundView.backgroundColor = newcolor.ios;
        }
    }

    exports.goBack = function(args)
{ 
    console.log("prova");
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageFifth.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pageFifth.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlRmlmdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5REFBVyxtQkFBTyxDQUFDLHlEQUFjLEVBQUU7QUFDbkMsbUJBQW1CLG1CQUFPLENBQUMsaURBQXVCO0FBQ2xELG9CQUFvQixtQkFBTyxDQUFDLGlEQUF1QjtBQUNuRCx3QkFBd0IsbUJBQU8sQ0FBQyxrQ0FBK0I7QUFDL0QsbUJBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHNEQUFVO0FBQ3BDLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsMERBQTZCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLG1EQUE4QjtBQUMxRDtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLDhFQUF1Qjs7QUFFckQ7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyx5REFBMkI7QUFDMUQsY0FBYyxtQkFBTyxDQUFDLG1EQUF3QjtBQUM5QyxlQUFlLG1CQUFPLENBQUMsMERBQXFDOzs7O0FBSTVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLDJCQUEyQjtBQUM5Qyx5QkFBeUIsMkRBQTJEO0FBQ3BGLHFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjs7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QTRDLE1BQU07QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIseUNBQXlDO0FBQ3BFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS5kOThjZmVmMzc0ZTBlNjk5YTQwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpOyAvLyBwZXIgYWNjZWRlciBhbGxhIHBhZ2luYSB3ZWIgdmlzaWJpbGUgeG1sXG5jb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcbmNvbnN0IGh0dHBNb2R1bGUyID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL3Nob3dGaXJzdFJlc3VsdHMtdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XG5jb25zdCBmcm9tT2JqZWN0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLmZyb21PYmplY3Q7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5jb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG52YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG5jb25zdCB1dGlsc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbnZhciBPYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcblxuY29uc3QgbW9kYWxWaWV3TW9kdWxlID0gXCJucy11aS1jYXRlZ29yeS9tb2RhbC12aWV3L2Jhc2ljcy9tb2RhbC12aWV3LXBhZ2VcIjtcbmNvbnN0IHBsYXRmb3JtTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XG5jb25zdCBDb2xvciA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIpLkNvbG9yO1xuY29uc3QgY29sb3JzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3Iva25vd24tY29sb3JzXCIpO1xuXG5cblxudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbnZhciBpdGVtc1ZpZXcgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcblxudmFyIHBhc3NUb1Njb3B1cyA9IFtdO1xudmFyIG9yY2lkc19jb21wbGV0aSA9IFtdO1xudmFyIHJlZmVyZW5jZXMgPSBbXTtcbnZhciBmbGFnX3JlZnMgPSBmYWxzZTtcblxudmFyIHVybF90b3Zpc2l0ID0gW107XG5cbnZhciBvcmNpZHNfaW5jb21wbGV0aSA9IFtdO1xuXG52YXIgZmFtaWx5X25hbWVzwqA9IFtdO1xuXG5hc3luYyBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKVxue1xuICAgIGl0ZW1zVmlldyA9IFtdO1xuXG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcblxuICAgIHZhciBnb3REYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcblxuICAgIHZhciByZXN1bHRzID0gZ290RGF0YS5wYXJhbTE7XG4gICAgdmFyIGluZGV4ID0gZ290RGF0YS5wYXJhbTI7XG5cbiAgICB2YXIgZGVzY3IgPSBbXTtcblxuICAgIFxuICAgIHZhciBVUkwgPSBcIlwiO1xuXG4gICAgdmFyIHNob3dQYWdlSW5mb0F1dGhvcnMgPSBbXTtcblxudmFyIGF1dGhfc2hvdyA9IFtdO1xuXG52YXIgdGl0bGUgPSBcIlwiO1xuXG52YXIgZmxhZ19mYWlsZWQgPSBmYWxzZTtcblxudmFyIGF1dGhvcnMyID0gW107XG5cbi8qIEF6emVyYW1lbnRvIHZhcmlhYmlsaSBnbG9iYWxpIHBlciBldml0YXJlIGFwcGVuZGluZyAqL1xudmFyIGFmZmlsaWF0aW9uc8KgPSBbXTtcbnBhc3NUb1Njb3B1cyA9IFtdO1xub3JjaWRzX2NvbXBsZXRpID0gW107XG5yZWZlcmVuY2VzID0gW107XG5mbGFnX3JlZnMgPSBmYWxzZTtcbnVybF90b3Zpc2l0ID0gW107XG5vcmNpZHNfaW5jb21wbGV0aSA9IFtdO1xuZmFtaWx5X25hbWVzwqA9IFtdO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcIlBhcmFtZXRybyAxIHJlYzogXCIrZ290RGF0YS5wYXJhbTEpO1xuICAgIC8vY29uc29sZS5sb2coXCJQYXJhbWV0cm8gMiByZWM6IFwiK2dvdERhdGEucGFyYW0yKTtcblxuICAgIGNvbnNvbGUubG9nKFwiRGF0YSByZWNpZXZlZDogXCIrZ290RGF0YS5wYXJhbTErXCJcXHQyOiBcIitnb3REYXRhLnBhcmFtMitcIiB0eXBlOiBcIit0eXBlb2YoaW5kZXgpKTtcblxuICAgIHZhciBhdXRob3JzMSA9IFtdO1xuICAgIGNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIGF1dGhvcnM6IFwiK3Jlc3VsdHMuYXV0aG9yLmxlbmd0aCk7XG5cbiAgICB2YXIgb3JjaWRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMuYXV0aG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vYXV0aG9yczEucHVzaCh7bmFtZTogcmVzdWx0cy5hdXRob3JbaV0uZmFtaWx5K1wiIFwiK3Jlc3VsdHMuYXV0aG9yW2ldLmdpdmVufSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJhdXRob3JbXCIraStcIl06IFwiK2F1dGhvcnMxW2ldKTsgICBcbiAgICAgICAgaWYoIXJlc3VsdHMuYXV0aG9yWzBdLk9SQ0lEKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGlmKHJlc3VsdHMuYXV0aG9yW2ldLk9SQ0lEKVxuICAgICAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib3JjaWQgZm9yIFwiK2krXCIgZXhpc3RzXCIpO1xuICAgICAgICBzaG93UGFnZUluZm9BdXRob3JzLnB1c2gocmVzdWx0cy5hdXRob3JbaV0uT1JDSUQpO1xuICAgICAgICBvcmNpZHNfY29tcGxldGkucHVzaChyZXN1bHRzLmF1dGhvcltpXS5PUkNJRCk7XG5cbiAgICAgICAgdmFyIGxldHRlcnMgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBrID0gMTc7IGsgPCBzaG93UGFnZUluZm9BdXRob3JzW2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgbGV0dGVycys9cmVzdWx0cy5hdXRob3JbaV0uT1JDSURba107XG4gICAgICAgIH1cbiAgICAgICAgb3JjaWRzW2ldID0gbGV0dGVycztcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldHRlcnM6XCIpO1xuICAgIH1cbiAgICB9XG5cbiAgICBvcmNpZHNfaW5jb21wbGV0aSA9IG9yY2lkcztcblxuICAgIHZhciBmbGFnX3Njb3B1cyA9IGZhbHNlO1xuXG5cbiAgICBjb25zb2xlLmxvZyhcImNoZWNrIGFmZmlsaWF0aW9uc1wiKTtcbiAgICBpZihvcmNpZHNbMF0pXG4gICAge1xuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgb3JjaWRzLmxlbmd0aDsgdCsrKSB7XG5cbiAgICAgICAgdmFyIHVybHNjb3B1cyA9IFwiaHR0cHM6Ly9hcGkuZWxzZXZpZXIuY29tL2NvbnRlbnQvc2VhcmNoL2F1dGhvclwiO1xuICAgICAgICB2YXIga2V5ID0gXCI/YXBpS2V5PTVkNGU4MmRlMWVhODdlMGFiMTBhYWI4MTMwODcxNzhjXCI7XG4gICAgICAgIHZhciBvcmNpZCA9IFwiJnF1ZXJ5PU9SQ0lEXCI7XG4gICAgXG4gICAgICAgIC8vdmFyIG9yY2lkMSA9IFwiMDAwMC0wMDAxLTcwMzEtOTIwWFwiO1xuICAgICAgIFxuICAgICAgICB2YXIgdXJsY29tcGxldGEgPSB1cmxzY29wdXMra2V5K29yY2lkK1wiKFwiK29yY2lkc1t0XStcIilcIjtcbiAgICAgICAgdmFyIGpzID0gXCImaHR0cEFjY2VwdD1hcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgICAgIHVybGNvbXBsZXRhICs9IGpzO1xuICAgICAgICBcbiAgICAgICAgLy92YXIgdXJsY29tcGxldGEgPVwiaHR0cHM6Ly9hcGkuZWxzZXZpZXIuY29tL2NvbnRlbnQvc2VhcmNoL2F1dGhvcj9hcGlLZXk9NWQ0ZTgyZGUxZWE4N2UwYWIxMGFhYjgxMzA4NzE3OGMmcXVlcnk9T1JDSUQoMDAwMC0wMDAxLTcwMzEtOTIwWCkmaHR0cEFjY2VwdD1hcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBxdWVyeTogXCIrdXJsY29tcGxldGEpO1xuICAgICAgICAvL3ZhciBkaW9wb3Jjb21haWFsZSA9IHJldHJpZXZlVmFsdWVzKHVybGNvbXBsZXRhKTtcbiAgICAgICAgdmFyIG1hZG9ubmFwdXR0YW5hID0gYXdhaXQgIGh0dHBNb2R1bGUyLnJlcXVlc3Qoe1xuICAgICAgICAgdXJsOiB1cmxjb21wbGV0YSxcbiAgICAgICAgIG1ldGhvZDogXCJHRVRcIn0sIChlKSA9PiB7Y29uc29sZS5sb2coXCJlcnJvcmVcIik7fSk7IC8vZmV0Y2godXJsY29tcGxldGEpO1xuIFxuICAgICAgICAvL2NvbnNvbGUubG9nKGRpb3BvcmNvbWFpYWxlKTtcbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKG1hZG9ubmFwdXR0YW5hLmNvbnRlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29udHJvbGxvXCIpO1xuXG4gICAgICAgIGlmKGpzb25bXCJzZXJ2aWNlLWVycm9yXCJdKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SRVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5hdXRob3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhdXRob3JzMS5wdXNoKHtuYW1lOiByZXN1bHRzLmF1dGhvcltpXS5mYW1pbHkrXCIgXCIrcmVzdWx0cy5hdXRob3JbaV0uZ2l2ZW59KTtcbiAgICAgICAgICAgICAgICBmYW1pbHlfbmFtZXMucHVzaChyZXN1bHRzLmF1dGhvcltpXS5mYW1pbHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmxhZ19zY29wdXMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYWZmaWwgPSBcIlwiO1xuICAgICAgICBpZiAoanNvbltcInNlYXJjaC1yZXN1bHRzXCJdW1wib3BlbnNlYXJjaDp0b3RhbFJlc3VsdHNcIl0+MClcbiAgICAgICAge1xuICAgICAgICAgYWZmaWwgPSBqc29uW1wic2VhcmNoLXJlc3VsdHNcIl1bXCJlbnRyeVwiXVtcIjBcIl1bXCJhZmZpbGlhdGlvbi1jdXJyZW50XCJdW1wiYWZmaWxpYXRpb24tbmFtZVwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kIGFmZmlsaWF0aW9uIGZvciBcIit0KTtcbiAgICAgICAgYXV0aG9yczEucHVzaCh7bmFtZTogcmVzdWx0cy5hdXRob3JbdF0uZmFtaWx5K1wiIFwiK3Jlc3VsdHMuYXV0aG9yW3RdLmdpdmVuK1wiLCBcIithZmZpbH0pO1xuICAgICAgICBmYW1pbHlfbmFtZXMucHVzaChyZXN1bHRzLmF1dGhvclt0XS5mYW1pbHkpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5hdXRob3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF1dGhvcnMxLnB1c2goe25hbWU6IHJlc3VsdHMuYXV0aG9yW2ldLmZhbWlseStcIiBcIityZXN1bHRzLmF1dGhvcltpXS5naXZlbn0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmKGZsYWdfc2NvcHVzKVxuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJBdXRoZW50aWNhdGlvbiBFbHNldmllclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJJbiBvcmRlciB0byBzaG93IHRoZSBhdXRob3IncyBhZmZpbGF0aW9uIHlvdSBtdXN0IGxvZ2dlZCB3aXRoIFNjb3B1c1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfTtcbiAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgbXVzdCBsb2dnZWQgd2l0aCBTY29wdXMhXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgYWZmaWxpYXRpb25zIGZpbmlzaGVkXCIpO1xuICAgICBwYXNzVG9TY29wdXMgPSBhdXRob3JzMTtcblxuICAgICBcbiAgICAgY29uc29sZS5sb2coXCJzdGFydCBnb29nbGUgc2Nob2xhciBxdWVyeWluZyAxXCIpO1xuXG4gICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoPSBcIithdXRob3JzMS5sZW5ndGgrIFwiXFxuXCIrYXV0aG9yczFbMF1bXCJuYW1lXCJdKTtcblxuICAgIC8vIFJJRU1QSU1FTlRPIFNUUlVUVFVSQSBEQVRJIFBFUiBQQVJURSBWSVNVQUxFXG4gICAgZm9yIChsZXQgbSA9IDA7IG0gPCBhdXRob3JzMS5sZW5ndGg7IG0rKykge1xuICAgICAgICAgICAgLy9pdGVtc1ZpZXcucHVzaCh7aXRlbU5hbWU6IGF1dGhvcnMxW2tdLm5hbWV9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXV0aG9yW1wiK20rXCJdOiBcIithdXRob3JzMVttXVtcIm5hbWVcIl0pO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwic3RhcnQgZ29vZ2xlIHNjaG9sYXIgcXVlcnlpbmdcIik7XG5cblxuXG5cbiAgICBcblxuICAgIC8vUHJlbGV2byB1cmwgZGVsIHNpdG8gb3JpZ2luYWxlIE5FTExBIFJFTEFaSU9ORSBESVJFIENIRSBERU1BTkRBIEEgRE9JLm9yZyBjb21lIHNlIGZvc3NlIHVuJ2FsdHJhIGZvbnRlXG4gICAgVVJMID0gcmVzdWx0cy5VUkw7XG4gICAgdXJsX3RvdmlzaXQucHVzaChVUkwpO1xuICAgIC8vcmV0cmlldmluZyBhcnRpY2xlJ3MgdGl0bGVcbiAgICB0aXRsZSA9IHJlc3VsdHMudGl0bGU7XG5cblxuICAgIGF1dGhfc2hvdyA9IGF1dGhvcnMxO1xuXG4gICAgdmFyIGlzYm4gPSBcIlwiO1xuICAgIC8vY29uc29sZS5sb2coXCJ0eXBlOiBcIityZXN1bHRzLmlzYm4tdHlwZSk7XG5cbiAgIC8vIGNvbnNvbGUubG9nKFwibG9nOiBcIisgZ2V0U2FmZSgoKSA9PiByZXN1bHRzW1wiaXNibi10eXBlXCJdW1wiMVwiXS5wcm9wZXJ0aWVzKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IGdvb2dsZSBzY2hvbGFyIHF1ZXJ5aW5nXCIpO1xuICAgIC8vIGlmKHJlc3VsdHNbXCJpc2JuLXR5cGVcIl0gJiYgcmVzdWx0c1tcImlzYm4tdHlwZVwiXVtcIjFcIl0pXG4gICAgLy8ge2NvbnNvbGUubG9nKFwic2UgcMOyIGZhXCIpO1xuICAgIC8vIGlzYm4gPSArcmVzdWx0c1tcImlzYm4tdHlwZVwiXVtcIjFcIl0udmFsdWU7XG4gICAgLy8gfVxuICBcbiAgICBcbiAgICAvLyBpZiAocmVzdWx0c1tcImlzYm4tdHlwZVwiXSAmJiByZXN1bHRzW1wiaXNibi10eXBlXCJdW1wiMFwiXSlcbiAgICAvLyAgICAgaXNibiA9ICtyZXN1bHRzW1wiaXNibi10eXBlXCJdW1wiMFwiXS52YWx1ZTtcbiAgICAvLyAgICAgZWxzZVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk5VIFNFIFDDsiBmYSBudSBjYXp6XCIpO1xuICAgIC8vIH1cblxuXG4gICAgaWYgKHJlc3VsdHMuSVNCTiAmJiByZXN1bHRzLklTQk5bXCIxXCJdKVxuICAgIGlzYm4gPSArcmVzdWx0cy5JU0JOW1wiMVwiXTtcbiAgICBlbHNlIGlmIChyZXN1bHRzLklTQk4gJiYgcmVzdWx0cy5JU0JOW1wiMFwiXSlcbiAgICBpc2JuID0gK3Jlc3VsdHMuSVNCTltcIjBcIl07XG4gICAgZWxzZVxuICAgIGNvbnNvbGUubG9nKFwiTlUgU0UgUMOyIGZhIG51IGNhenpcIik7XG5cbiAgICBjb25zb2xlLmxvZyhcImlzYm4gXCIraXNibik7XG5cbiAgICAvL2Rpb2NhbmUoaXNibixhcmdzKTtcblxuICBjb25zb2xlLmxvZyhcInNlYWVyY2hRdWVyeTogXCIraXNibik7ICAgIFxuICAgIFxuICB2YXIgc2VhcmNoUXVlcnkgPSAgaXNibjsvLyAgXCI5NzgtMy0wMzAtMzQ5MTQtMVwiOyAvL1wiJChcIiNzZWFyY2hfZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICB2YXIgdGh1bWIyID0gW107XG4gIHZhciBhdXRob3JzID0gW107XG4gIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG5cblxuICAvL3ZhciBzZWFyY2hRdWVyeSA9ICQoXCIjc2VhcmNoX3R4dFwiKS52YWwoKTtcbiAgLy9zZWFyY2hRdWVyeSA9IHNlYXJjaFF1ZXJ5LnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcblxuICAvKmlmICghc2VhcmNoUXVlcnkpIHtcbiAgICBzZWFyY2hRdWVyeSA9IFwicGFsZW9cIjtcbiAgfSovXG4gIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdDtcbiBcblxuICAgIGlmKHNlYXJjaFF1ZXJ5KVxuICAgIHtcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9XCIgKyBzZWFyY2hRdWVyeTtcbiAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgcXVlcnk6IFwiKyB1cmwpO1xuXG4gICAgLy8gaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAvLyAgICAgdXJsOiB1cmwsXG4gICAgLy8gICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIC8vIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBodHRwTW9kdWxlLnJlcXVlc3Qoe3VybDogdXJsLCBtZXRob2Q6IFwiR0VUXCJ9LChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcmUgZGlvIHBvcmNvIG1hZG9vbmEgXCIrIGUpfSk7XG5cbiAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIlJFUVVFU1QgT0sgZnJvbSBHT09HTEUgQk9PS1NcIik7XG4gICAgICBpZihqc29uLnRvdGFsSXRlbXMgPT0gMClcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJESU9DQU5FRUVFRUVFRVwiKTtcbiAgICAgICAgZmxhZ19mYWlsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgY29uc29sZS5sb2coXCJsZW5ndGgganNvbjogXCIrIGpzb24uaXRlbXMubGVuZ3RoKTtcbiAgICAgIHZhciBodG1sY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgdGh1bWIgPSBcIlwiO1xuICAgICAgdmFyIGF1dGhvciA9IFwiXCI7XG4gICAgICB2YXIgZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgdmFyIGlzYm4gPSBcIlwiO1xuICAgICAgdmFyIHByaWNlID0gXCJcIjtcbiAgICAgIHZhciB2YWx1dGEgPSBcIlwiO1xuXG4gICAgICB2YXIgZGlvY2FuID0gW107XG5cbiAgICAgIGZvciAobGV0ICBpID0gMDsgaSA8IGpzb24uaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlcmNvIGltbWFnaW5pIGVkIGF1dG9yaS4uLlwiKTtcbiAgICAgICAgaWYgKGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby5pbWFnZUxpbmtzKSB7XG4gICAgICAgICAgdGh1bWIgPSBqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uaW1hZ2VMaW5rcy5zbWFsbFRodW1ibmFpbDtcbiAgICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlIGJvb2sgYWNoaWV2ZWRcIik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHVtYiA9IFwiaHR0cDovL2kuaW1ndXIuY29tL29NM01kQWkucG5nXCI7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZSBib29rIHVuZGVmaW5lZFwiKTtcblxuICAgICAgICAgIC8vdGh1bWIgPSAnaHR0cDovL3NsZW1zLW9sZGJveXMub3JnLnVrL2xpYnJhcnkvd3AtY29udGVudC91cGxvYWRzLzIwMTMvMTEvbGlicmFyeV9ub2NvdmVyLmpwZydcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiSU1NQUdJTkU6IFwiK3RodW1iKTtcbiAgICAgICAgdmFyIGRpb2Nhbm8gPSB0aHVtYi5zbGljZSgwLCA0KSArIFwic1wiICsgdGh1bWIuc2xpY2UoNCk7XG4gICAgXG5cbiAgICAgICAgdGh1bWIyLnB1c2goe2ltYWdlVXJpOiBkaW9jYW5vfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU1NQUdJTkU6IFwiK2Rpb2Nhbm8pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1BTk5BRyBBIE1BUk9OTk47XCIpO1xuXG5cbiAgICAgICAgdmFyIHRpdGxlX2Jvb2sgPSBcIlwiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIHRpdGxlIGJvb2tcIik7XG4gICAgICAgIC8vIEFVVEhPUlxuICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb24uaXRlbXNbaV1bXCJ2b2x1bWVJbmZvXCJdKTtcbiAgICAgICAgaWYoIWpzb24uaXRlbXNbaV1bXCJ2b2x1bWVJbmZvXCJdKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk51biBjc3Rhbm4gYXV0b3JpXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGUkEgT1JBIENFUkNPT09PT1wiKTtcbiAgICAgICAgICAgIGlmKCFqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uYXV0aG9ycylcbiAgICAgICAgICAgICAgICBkaW9jYW4ucHVzaChcImluZm9ybWF0aW9uIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlcmNvIGF1dG9yaSwgbGVuZ3RoOiBcIisganNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmF1dGhvcnMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uYXV0aG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgZGlvY2FuLnB1c2goanNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmF1dGhvcnNbal0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRob3IgW1wiK2orXCJdOiBcIitkaW9jYW5bal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYoIWpzb24uaXRlbXNbaV0udm9sdW1lSW5mby50aXRsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBlZHMgaW5mb3JtYXRpb25zXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRpdGxlX2Jvb2sgKz0ganNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLnRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vZGVzY3JpcHRpb25cbiAgICAgICAgZGVzY3JpcHRpb24gPSBqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVnaGluXCIpO1xuICAgICAgICBkZXNjci5wdXNoKHtkZXNjOiBkZXNjcmlwdGlvbn0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInB1Z2hpMm46IFwiK2Rlc2NyLmxlbmd0aCk7XG5cbiAgICBcblxuICAgICAgICBpZihkaW9jYW4ubGVuZ3RoPj0wKVxuICAgICAgICAgICAgYXV0aG9ycy5wdXNoKHthdXRob3I6IFwiRWRzOiBcIisgZGlvY2FuWzBdK1wiIGV0IGFsLlwifSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGF1dGhvcnMucHVzaCh7YXV0aG9yOiBkaW9jYW5bMF19KTtcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIC8qY29uc29sZS5sb2coXCJkZXNjcmlwdGlvbjogXCIrZGVzY3JpcHRpb24pOyAqL1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRodW1iMlswXSx0aHVtYjJbMV0sdGh1bWIyWzJdKTtcbiAgICAgICAgXG4gICAgICAgIGlzYm4gPSBqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uaW5kdXN0cnlJZGVudGlmaWVyc1swXS5pZGVudGlmaWVyO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzYm46IFwiK2lzYm4pO1xuXG4gICAgICAgIGlmKGpzb24uaXRlbXNbaV0uc2FsZUluZm8gJiYganNvbi5pdGVtc1tpXS5zYWxlSW5mby5saXN0UHJpY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByaWNlID0ganNvbi5pdGVtc1tpXS5zYWxlSW5mby5saXN0UHJpY2UuYW1vdW50O1xuICAgICAgICAgICAgdmFsdXRhID0ganNvbi5pdGVtc1tpXS5zYWxlSW5mby5saXN0UHJpY2UuY3VycmVuY3lDb2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgcHJpY2U9IFwiTm90IGZvciBzYWxlXCI7XG4gICAgICAgIHZhbHV0YSA9IFwiXCI7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJQcmljZTogXCIrcHJpY2UrXCIgXCIrdmFsdXRhKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2Nlc3NvIGRpIHJpY2VyY2EgdGVybWluYXRvXCIpO1xuICAgICAgIFxuICAgICAgICAvLyBjb25zdCB2bSA9IGZyb21PYmplY3Qoe1xuICAgICAgICAvLyAgICAgdGh1bWIyLFxuICAgICAgICAvLyAgICAgZGVzY3IsXG4gICAgICAgIC8vICAgICBhdXRob3JzLFxuICAgICAgICAvLyAgICAgYXV0aF9zaG93LFxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpemUgb2YgdGh1bWIyOiBcIit0aHVtYjIubGVuZ3RoKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vc2V0dG8gbCdhcnJheSBnbG9iYWxlIGRpIGF1dG9yaSBjb24gcXVlbGxvIGxvY2FsZVxuICAgICAgYXV0aG9yc19jb21wbGV0ZSA9IGRpb2NhbjtcblxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiVVNDSVRPXCIpO1xuXG4gICAgZnVuY3Rpb24gdHJ1bmMocywgbikge1xuICAgICAgICB2YXIgdCA9IHMuaW5kZXhPZihcIiBcIiwgbik7XG4gICAgICAgIGlmICh0ID09IC0xKSByZXR1cm4gcztcbiAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIHQpICsgXCIuLi5cIjtcbiAgICB9XG5cblxuXG4gICAgLy9jb25zb2xlLmxvZyhcImFuYWxpem8gcmVmc1wiKTtcbiAgICBpZighcmVzdWx0cy5yZWZlcmVuY2UpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHJlZnNcIik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmVzdWx0cy5yZWZlcmVuY2UubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHJlZmVyZW5jZXMucHVzaCh7cmVmTmFtZTogcmVzdWx0cy5yZWZlcmVuY2Vba10udW5zdHJ1Y3R1cmVkLCBET0k6IHJlc3VsdHMucmVmZXJlbmNlW2tdLkRPSX0pO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVmZXJlbmNlcyk7XG4gICAgICAgIGZsYWdfcmVmcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gaWYocmVzdWx0cy5yZWZlcmVuY2UubGVuZ3RoKVxuICAgIC8vIHtcbiAgICAvLyBmb3IgKGxldCBrID0gMDsgayA8IHJlc3VsdHMucmVmZXJlbmNlLmxlbmd0aDsgaysrKSB7XG4gICAgLy8gICAgIHJlZmVyZW5jZXMucHVzaCh7cmVmTmFtZTogcmVzdWx0cy5yZWZlcmVuY2Vba10udW5zdHJ1Y3R1cmVkLCBET0k6IHJlc3VsdHMucmVmZXJlbmNlW2tdLkRPSX0pO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhyZWZlcmVuY2VzKTtcbiAgICAvLyBmbGFnX3JlZnMgPSB0cnVlO1xuICAgIC8vIH1cblxuICAgIFxuXG59XG5pZighc2VhcmNoUXVlcnkgfHwgKGZsYWdfZmFpbGVkICYmICFzZWFyY2hRdWVyeSkpXG57XG4gICAgY29uc29sZS5sb2coXCJFUlJPUkUgSVNCTlwiKTtcbiAgICB2YXIgbWFubmFnZ2lhPSBcIlJlc3VsdHMgbm90IGZvdW5kXCI7XG4gICAgdmFyIHNob3dVcmwgPSBcIkNsaWNrIGhlcmUgdG8gc2hvdyB3ZWIgc2l0ZSBhYm91dCBwYXBlclwiO1xuICAgIGNvbnN0IHZtID0gZnJvbU9iamVjdCh7XG4gICAgICAgIG1hbm5hZ2dpYSxcbiAgICAgICAgc2hvd1VybFxuICAgICAgICB9KTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInNldHRvIGxhIHBhZ2luYS4uLi5cIik7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIk5vIFJlc3VsdHMgZm91bmRcIixcbiAgICAgICAgbWVzc2FnZTogXCJBbnl0aGluZyBpbmZvcm1hdGlvbiBoYXMgYmVlbiBmb3VuZC5cIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9O1xuXG5cbiAgICBkaWFsb2dzLmFsZXJ0KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIGZhaWxlZFwiKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICAgICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcbiAgICB9KTtcblxuICAgIGZsYWdfZmFpbGVkID0gZmFsc2U7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59ICAgXG4gICAgXG4gICAgLy9pdGVtc1ZpZXcucHVzaCh7aXRlbUltYWdlOiB0aHVtYjJbMF1bXCJpbWFnZVVyaVwiXSwgaXRlbU5hbWU6IGF1dGhvcnNbMF1bXCJhdXRob3JcIl0sIGl0ZW1EZXNjOiBkZXNjclswXVtcImRlc2NcIl19KTtcblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGh1bWIyLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGl0ZW1zVmlldy5wdXNoKHtpdGVtSW1hZ2U6ICh0aHVtYjJba11bXCJpbWFnZVVyaVwiXSA/IHRodW1iMltrXVtcImltYWdlVXJpXCJdIDogXCJodHRwOi8vaS5pbWd1ci5jb20vb00zTWRBaS5wbmdcIiksIGl0ZW1UaXRsZTogXCJCb29rOiBcIit0aXRsZV9ib29rLCBpdGVtTmFtZTogKGF1dGhvcnNba11bXCJhdXRob3JcIl0gPyBhdXRob3JzW2tdW1wiYXV0aG9yXCJdIDogXCJObyBhdXRob3IncyBpbmZvcm1hdGlvbiBhdmFpbGFibGVcIiksIGl0ZW1EZXNjOiAoZGVzY3Jba11bXCJkZXNjXCJdID8gZGVzY3Jba11bXCJkZXNjXCJdIDogXCJObyBkZXNjcmlwdGlvbiBhdmFpbGFibGVcIiksIHRpdGxlUGFwZXI6IHRpdGxlfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXRlbXNWaWV3W2tdKTtcblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGl0ZW1zVmlld1swXSk7XG5cbiBcbiAgICAvL1BSRVBBUkFaSU9ORSBMSVNUQSBBVVRIT1JTIGNvbiBPUkNJRCBFRCBBRkZJTElaQUlPTklcbiAgICAvLyBmb3IgKGxldCBrID0gMDsgayA8IGF1Lmxlbmd0aDsgaysrKSB7XG4gICAgLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBhdVtrXTtcbiAgICAgICAgXG4gICAgLy8gfVxuICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoIGZpbmFsIGRhdGE6IFwiK2l0ZW1zVmlldy5sZW5ndGgpO1xuXG4gICAgY29uc29sZS5sb2coXCJmcmF0ZWVlICs9IFwiK2l0ZW1zVmlldyk7XG4gICAgaWYoIWl0ZW1zVmlldy5sZW5ndGgpXG4gICAge1xuICAgICAgICAvLyBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgLy8gICAgIHRpdGxlOiBcIk5vIFJlc3VsdHMgZm91bmRcIixcbiAgICAgICAgLy8gICAgIG1lc3NhZ2U6IFwibmllbnRlZWVlZWUgMlwiLFxuICAgICAgICAvLyAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgZmFpbGVkXCIpO1xuICAgICAgICAvLyAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIC8vICAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgICAgIC8vICAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgICAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xuXG4gICAgfVxuICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHBhZ2VEYXRhO1xuICAgIFxuXG4gICAgcGFnZURhdGEuc2V0KFwiaXRlbXNWaWV3XCIsIGl0ZW1zVmlldyk7XG4gICAgcGFnZURhdGEuc2V0KFwidGl0bGVQYXBlclwiLCB0aXRsZVBhcGVyKTtcblxuXG4gICAgICAgXG59XG5cbiAgXG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5cbmV4cG9ydHMuc2hvd0luZm9BdXRob3JzID0gZnVuY3Rpb24oKVxue1xuXG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZVNjb3B1c1wiLFxuICAgICAgICAvL2JhY2tzdGFja1Zpc2libGU6IGZhbHNlLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy9jbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIHBhcmFtMTogcGFzc1RvU2NvcHVzLFxuICAgICAgICAgICAgcGFyYW0yOiBvcmNpZHNfY29tcGxldGksXG4gICAgICAgICAgICBwYXJhbTM6IG9yY2lkc19pbmNvbXBsZXRpLFxuICAgICAgICAgICAgcGFyYW00OiBmYW1pbHlfbmFtZXNcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKG5hdmlnYXRpb25FbnRyeSk7XG59XG5cbmV4cG9ydHMuc2hvd1JlZnMgPSBmdW5jdGlvbigpXG57XG4gICAgaWYoIWZsYWdfcmVmcylcbiAgICB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiUmVmZXJlbmNlcyBJbmZvXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIk5vIHJlZmVyZW5jZXMgaW5mb3JtYXRpb24gYXJlIGF2YWlsYWJsZVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfTtcblxuICAgICAgICBkaWFsb2dzLmFsZXJ0KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZVJlZnNcIixcbiAgICAgICAgLy9iYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICBwYXJhbTE6IHJlZmVyZW5jZXMsXG4gICAgICAgICAgICBwYXJhbTI6IDFcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKG5hdmlnYXRpb25FbnRyeSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydHMuZ29Ub1VSTCA9IGZ1bmN0aW9uIChhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYCBpdGVtIHRhcCAke2luZGV4fWApO1xuICAgIGNvbnNvbGUubG9nKFwiZSBjbGljY2F0IGZyYWFhYVwiKTtcbiAgICBcbiAgICBpZighdXJsX3RvdmlzaXRbaW5kZXhdKVxuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJBcnRpY2xlJ3MgSW5mb1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJObyB3ZWIgc2l0ZSBhdmFpbGFibGVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKHVybF90b3Zpc2l0W2luZGV4XSk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0cy5zaG93RGVzYyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiRGVzY3JpcHRpb24gb2YgQm9va1wiLFxuICAgICAgICBtZXNzYWdlOiBkZXNjclswXS5kZXNjLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG4gICAgY29uc29sZS5sb2coZGVzY3JbMF0uZGVzYyk7XG4gICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgIH0pO1xufVxuXG5leHBvcnRzLmdvVG9TaG9wID0gZnVuY3Rpb24gKClcbntcbiAgICB1dGlsc01vZHVsZS5vcGVuVXJsKFVSTCk7XG59XG5cbmV4cG9ydHMuc2hvd0FsbEF1dGhvcnMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBhdXRvcmkgPSBcIlwiO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYXV0aG9yc19jb21wbGV0ZS5sZW5ndGg7IGsrKykge1xuICAgICAgICBhdXRvcmkgKz0gYXV0aG9yc19jb21wbGV0ZVtrXSA7XG4gICAgICAgIGlmKGsgIT0gYXV0aG9yc19jb21wbGV0ZS5sZW5ndGgtMSlcbiAgICAgICAgYXV0b3JpKz1cIiwgXCIgO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiTGlzdCBvZiBhdXRob3JzXCIsXG4gICAgICAgIG1lc3NhZ2U6IGF1dG9yaSxcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9O1xuICAgIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0cy5zaG93QXV0aEluZm8gPSBmdW5jdGlvbihhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApO1xuICAgIGNvbnNvbGUubG9nKHNob3dQYWdlSW5mb0F1dGhvcnNbaW5kZXhdKTtcblxuICAgIGlmKCFzaG93UGFnZUluZm9BdXRob3JzW2luZGV4XSlcbiAgICB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUaGVyZSBhcmUgbm8gaW5mb3JtYXRpb24gYWJvdXQgXCIrYXV0aF9zaG93W2luZGV4XVsnbmFtZSddKTtcblxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKHNob3dQYWdlSW5mb0F1dGhvcnNbaW5kZXhdKTtcblxufVxuXG5cbmV4cG9ydHMuc2hvd0Z1bGxVcmwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcblxuICAgIGlmKCFVUkwpXG4gICAge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiVGhlcmUgaXMgbm8gd2ViIHNpdGUgZm9yIFwiK3RpdGxlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKFVSTCk7XG5cbn1cblxuZXhwb3J0cy5yZGxpc3Rsb2FkZWQgPSBmdW5jdGlvbihhcmdzKVxue1xufVxuXG5leHBvcnRzLm9uSXRlbUxvYWRpbmcgPSBmdW5jdGlvbihhcmdzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIGl0ZW1zXCIpO1xuICAgICAgICBpZihwbGF0Zm9ybU1vZHVsZS5pc0FuZHJvaWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXJncy5hbmRyb2lkKTtcbiAgICAgICAgICAgIHZhciBuZXdjb2xvciA9IG5ldyBDb2xvcigyMCwyNTUsMCwwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuYW5kcm9pZC5iYWNrZ3JvdW5kVmlldyk7XG4gICAgICAgICAgICAvL2FyZ3MuYW5kcm9pZC5iYWNrZ3JvdW5kVmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdjb2xvci5pb3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwicHJvdmFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VGaWZ0aC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3BhZ2VGaWZ0aC5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9