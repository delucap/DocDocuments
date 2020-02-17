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
        var response2 = await  httpModule2.request({
         url: urlcompleta,
         method: "GET"}, (e) => {console.log("errore");}); //fetch(urlcompleta);
 
        var json = JSON.parse(response2.content.toString());
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
    // for (let m = 0; m < authors1.length; m++) {
    //         //itemsView.push({itemName: authors1[k].name});
    //         console.log("author["+m+"]: "+authors1[m]["name"]);
    // }

    console.log("start google scholar querying");




    

    //Prelevo url del sito originale NELLA RELAZIONE DIRE CHE DEMANDA A DOI.org come se fosse un'altra fonte
    URL = results.URL;
    url_tovisit.push(URL);
    //retrieving article's title
    title = results.title;


    auth_show = authors1;

    var isbn = "";


    if (results.ISBN && results.ISBN["1"])
    isbn = +results.ISBN["1"];
    else if (results.ISBN && results.ISBN["0"])
    isbn = +results.ISBN["0"];
    else
    console.log("NU SE Pò fa nu cazz");

    console.log("isbn "+isbn);


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
        console.log("No items");
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

      var editors = [];

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
        var thumb_temp = thumb.slice(0, 4) + "s" + thumb.slice(4);
    

        thumb2.push({imageUri: thumb_temp});
        console.log("IMMAGINE: "+thumb_temp);
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
                editors.push("information not available");
            else
            {
            console.log("Cerco autori, length: "+ json.items[i].volumeInfo.authors.length);

            for (let j = 0; j < json.items[i].volumeInfo.authors.length; j++) {
            editors.push(json.items[i].volumeInfo.authors[j]);
            console.log("author ["+j+"]: "+editors[j]);
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

    

        if(editors.length>=0)
            authors.push({author: "Eds: "+ editors[0]+" et al."});
        else
            authors.push({author: editors[0]});
        

        
        

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


            console.log("Size of thumb2: "+thumb2.length);
      }
    
      //setto l'array globale di autori con quello locale
      authors_complete = editors;

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


    

}
if(!searchQuery || (flag_failed && !searchQuery))
{
    console.log("ERRORE ISBN");
    var problem= "Results not found";
    var showUrl = "Click here to show web site about paper";
    const vm = fromObject({
        problem,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlRmlmdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5REFBVyxtQkFBTyxDQUFDLHlEQUFjLEVBQUU7QUFDbkMsbUJBQW1CLG1CQUFPLENBQUMsaURBQXVCO0FBQ2xELG9CQUFvQixtQkFBTyxDQUFDLGlEQUF1QjtBQUNuRCx3QkFBd0IsbUJBQU8sQ0FBQyxrQ0FBK0I7QUFDL0QsbUJBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHNEQUFVO0FBQ3BDLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsMERBQTZCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLG1EQUE4QjtBQUMxRDtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLDhFQUF1Qjs7QUFFckQ7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyx5REFBMkI7QUFDMUQsY0FBYyxtQkFBTyxDQUFDLG1EQUF3QjtBQUM5QyxlQUFlLG1CQUFPLENBQUMsMERBQXFDOzs7O0FBSTVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLDJCQUEyQjtBQUM5Qyx5QkFBeUIsMkRBQTJEO0FBQ3BGLHFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjs7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QUFFWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlDQUF5QztBQUNwRSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuOGM0ZWRlMzU3ZGRiZDNjNDM5NTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTsgLy8gcGVyIGFjY2VkZXIgYWxsYSBwYWdpbmEgd2ViIHZpc2liaWxlIHhtbFxuY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBodHRwTW9kdWxlMiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xuY29uc3QgZnJvbU9iamVjdCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5mcm9tT2JqZWN0O1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcbnZhciBwYWdlRGF0YSA9IG5ldyBPYnNlcnZhYmxlKCk7XG52YXIgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cbmNvbnN0IG1vZGFsVmlld01vZHVsZSA9IFwibnMtdWktY2F0ZWdvcnkvbW9kYWwtdmlldy9iYXNpY3MvbW9kYWwtdmlldy1wYWdlXCI7XG5jb25zdCBwbGF0Zm9ybU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpO1xuY29uc3QgQ29sb3IgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiKS5Db2xvcjtcbmNvbnN0IGNvbG9ycyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2tub3duLWNvbG9yc1wiKTtcblxuXG5cbnZhciBwYWdlRGF0YSA9IG5ldyBPYnNlcnZhYmxlKCk7XG52YXIgaXRlbXNWaWV3ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG5cbnZhciBwYXNzVG9TY29wdXMgPSBbXTtcbnZhciBvcmNpZHNfY29tcGxldGkgPSBbXTtcbnZhciByZWZlcmVuY2VzID0gW107XG52YXIgZmxhZ19yZWZzID0gZmFsc2U7XG5cbnZhciB1cmxfdG92aXNpdCA9IFtdO1xuXG52YXIgb3JjaWRzX2luY29tcGxldGkgPSBbXTtcblxudmFyIGZhbWlseV9uYW1lc8KgPSBbXTtcblxuYXN5bmMgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncylcbntcbiAgICBpdGVtc1ZpZXcgPSBbXTtcblxuICAgIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG5cbiAgICB2YXIgZ290RGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG5cbiAgICB2YXIgcmVzdWx0cyA9IGdvdERhdGEucGFyYW0xO1xuICAgIHZhciBpbmRleCA9IGdvdERhdGEucGFyYW0yO1xuXG4gICAgdmFyIGRlc2NyID0gW107XG5cbiAgICBcbiAgICB2YXIgVVJMID0gXCJcIjtcblxuICAgIHZhciBzaG93UGFnZUluZm9BdXRob3JzID0gW107XG5cbnZhciBhdXRoX3Nob3cgPSBbXTtcblxudmFyIHRpdGxlID0gXCJcIjtcblxudmFyIGZsYWdfZmFpbGVkID0gZmFsc2U7XG5cbnZhciBhdXRob3JzMiA9IFtdO1xuXG4vKiBBenplcmFtZW50byB2YXJpYWJpbGkgZ2xvYmFsaSBwZXIgZXZpdGFyZSBhcHBlbmRpbmcgKi9cbnZhciBhZmZpbGlhdGlvbnPCoD0gW107XG5wYXNzVG9TY29wdXMgPSBbXTtcbm9yY2lkc19jb21wbGV0aSA9IFtdO1xucmVmZXJlbmNlcyA9IFtdO1xuZmxhZ19yZWZzID0gZmFsc2U7XG51cmxfdG92aXNpdCA9IFtdO1xub3JjaWRzX2luY29tcGxldGkgPSBbXTtcbmZhbWlseV9uYW1lc8KgPSBbXTtcblxuICAgIC8vY29uc29sZS5sb2coXCJQYXJhbWV0cm8gMSByZWM6IFwiK2dvdERhdGEucGFyYW0xKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiUGFyYW1ldHJvIDIgcmVjOiBcIitnb3REYXRhLnBhcmFtMik7XG5cbiAgICBjb25zb2xlLmxvZyhcIkRhdGEgcmVjaWV2ZWQ6IFwiK2dvdERhdGEucGFyYW0xK1wiXFx0MjogXCIrZ290RGF0YS5wYXJhbTIrXCIgdHlwZTogXCIrdHlwZW9mKGluZGV4KSk7XG5cbiAgICB2YXIgYXV0aG9yczEgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiBhdXRob3JzOiBcIityZXN1bHRzLmF1dGhvci5sZW5ndGgpO1xuXG4gICAgdmFyIG9yY2lkcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmF1dGhvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL2F1dGhvcnMxLnB1c2goe25hbWU6IHJlc3VsdHMuYXV0aG9yW2ldLmZhbWlseStcIiBcIityZXN1bHRzLmF1dGhvcltpXS5naXZlbn0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXV0aG9yW1wiK2krXCJdOiBcIithdXRob3JzMVtpXSk7ICAgXG4gICAgICAgIGlmKCFyZXN1bHRzLmF1dGhvclswXS5PUkNJRClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBpZihyZXN1bHRzLmF1dGhvcltpXS5PUkNJRClcbiAgICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9yY2lkIGZvciBcIitpK1wiIGV4aXN0c1wiKTtcbiAgICAgICAgc2hvd1BhZ2VJbmZvQXV0aG9ycy5wdXNoKHJlc3VsdHMuYXV0aG9yW2ldLk9SQ0lEKTtcbiAgICAgICAgb3JjaWRzX2NvbXBsZXRpLnB1c2gocmVzdWx0cy5hdXRob3JbaV0uT1JDSUQpO1xuXG4gICAgICAgIHZhciBsZXR0ZXJzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgayA9IDE3OyBrIDwgc2hvd1BhZ2VJbmZvQXV0aG9yc1tpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIGxldHRlcnMrPXJlc3VsdHMuYXV0aG9yW2ldLk9SQ0lEW2tdO1xuICAgICAgICB9XG4gICAgICAgIG9yY2lkc1tpXSA9IGxldHRlcnM7XG4gICAgICAgLy8gY29uc29sZS5sb2coXCJsZXR0ZXJzOlwiKTtcbiAgICB9XG4gICAgfVxuXG4gICAgb3JjaWRzX2luY29tcGxldGkgPSBvcmNpZHM7XG5cbiAgICB2YXIgZmxhZ19zY29wdXMgPSBmYWxzZTtcblxuXG4gICAgY29uc29sZS5sb2coXCJjaGVjayBhZmZpbGlhdGlvbnNcIik7XG4gICAgaWYob3JjaWRzWzBdKVxuICAgIHtcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IG9yY2lkcy5sZW5ndGg7IHQrKykge1xuXG4gICAgICAgIHZhciB1cmxzY29wdXMgPSBcImh0dHBzOi8vYXBpLmVsc2V2aWVyLmNvbS9jb250ZW50L3NlYXJjaC9hdXRob3JcIjtcbiAgICAgICAgdmFyIGtleSA9IFwiP2FwaUtleT01ZDRlODJkZTFlYTg3ZTBhYjEwYWFiODEzMDg3MTc4Y1wiO1xuICAgICAgICB2YXIgb3JjaWQgPSBcIiZxdWVyeT1PUkNJRFwiO1xuICAgIFxuICAgICAgICAvL3ZhciBvcmNpZDEgPSBcIjAwMDAtMDAwMS03MDMxLTkyMFhcIjtcbiAgICAgICBcbiAgICAgICAgdmFyIHVybGNvbXBsZXRhID0gdXJsc2NvcHVzK2tleStvcmNpZCtcIihcIitvcmNpZHNbdF0rXCIpXCI7XG4gICAgICAgIHZhciBqcyA9IFwiJmh0dHBBY2NlcHQ9YXBwbGljYXRpb24vanNvblwiO1xuICAgICAgICB1cmxjb21wbGV0YSArPSBqcztcbiAgICAgICAgXG4gICAgICAgIC8vdmFyIHVybGNvbXBsZXRhID1cImh0dHBzOi8vYXBpLmVsc2V2aWVyLmNvbS9jb250ZW50L3NlYXJjaC9hdXRob3I/YXBpS2V5PTVkNGU4MmRlMWVhODdlMGFiMTBhYWI4MTMwODcxNzhjJnF1ZXJ5PU9SQ0lEKDAwMDAtMDAwMS03MDMxLTkyMFgpJmh0dHBBY2NlcHQ9YXBwbGljYXRpb24vanNvblwiO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgcXVlcnk6IFwiK3VybGNvbXBsZXRhKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlMiA9IGF3YWl0ICBodHRwTW9kdWxlMi5yZXF1ZXN0KHtcbiAgICAgICAgIHVybDogdXJsY29tcGxldGEsXG4gICAgICAgICBtZXRob2Q6IFwiR0VUXCJ9LCAoZSkgPT4ge2NvbnNvbGUubG9nKFwiZXJyb3JlXCIpO30pOyAvL2ZldGNoKHVybGNvbXBsZXRhKTtcbiBcbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlMi5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRyb2xsb1wiKTtcblxuICAgICAgICBpZihqc29uW1wic2VydmljZS1lcnJvclwiXSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUkVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMuYXV0aG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yczEucHVzaCh7bmFtZTogcmVzdWx0cy5hdXRob3JbaV0uZmFtaWx5K1wiIFwiK3Jlc3VsdHMuYXV0aG9yW2ldLmdpdmVufSk7XG4gICAgICAgICAgICAgICAgZmFtaWx5X25hbWVzLnB1c2gocmVzdWx0cy5hdXRob3JbaV0uZmFtaWx5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZsYWdfc2NvcHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFmZmlsID0gXCJcIjtcbiAgICAgICAgaWYgKGpzb25bXCJzZWFyY2gtcmVzdWx0c1wiXVtcIm9wZW5zZWFyY2g6dG90YWxSZXN1bHRzXCJdPjApXG4gICAgICAgIHtcbiAgICAgICAgIGFmZmlsID0ganNvbltcInNlYXJjaC1yZXN1bHRzXCJdW1wiZW50cnlcIl1bXCIwXCJdW1wiYWZmaWxpYXRpb24tY3VycmVudFwiXVtcImFmZmlsaWF0aW9uLW5hbWVcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZCBhZmZpbGlhdGlvbiBmb3IgXCIrdCk7XG4gICAgICAgIGF1dGhvcnMxLnB1c2goe25hbWU6IHJlc3VsdHMuYXV0aG9yW3RdLmZhbWlseStcIiBcIityZXN1bHRzLmF1dGhvclt0XS5naXZlbitcIiwgXCIrYWZmaWx9KTtcbiAgICAgICAgZmFtaWx5X25hbWVzLnB1c2gocmVzdWx0cy5hdXRob3JbdF0uZmFtaWx5KTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMuYXV0aG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhdXRob3JzMS5wdXNoKHtuYW1lOiByZXN1bHRzLmF1dGhvcltpXS5mYW1pbHkrXCIgXCIrcmVzdWx0cy5hdXRob3JbaV0uZ2l2ZW59KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZihmbGFnX3Njb3B1cylcbiAgICB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiQXV0aGVudGljYXRpb24gRWxzZXZpZXJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW4gb3JkZXIgdG8gc2hvdyB0aGUgYXV0aG9yJ3MgYWZmaWxhdGlvbiB5b3UgbXVzdCBsb2dnZWQgd2l0aCBTY29wdXNcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH07XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IG11c3QgbG9nZ2VkIHdpdGggU2NvcHVzIVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGFmZmlsaWF0aW9ucyBmaW5pc2hlZFwiKTtcbiAgICAgcGFzc1RvU2NvcHVzID0gYXV0aG9yczE7XG5cbiAgICAgXG4gICAgIGNvbnNvbGUubG9nKFwic3RhcnQgZ29vZ2xlIHNjaG9sYXIgcXVlcnlpbmcgMVwiKTtcblxuICAgICBjb25zb2xlLmxvZyhcImxlbmd0aD0gXCIrYXV0aG9yczEubGVuZ3RoKyBcIlxcblwiK2F1dGhvcnMxWzBdW1wibmFtZVwiXSk7XG5cbiAgICAvLyBSSUVNUElNRU5UTyBTVFJVVFRVUkEgREFUSSBQRVIgUEFSVEUgVklTVUFMRVxuICAgIC8vIGZvciAobGV0IG0gPSAwOyBtIDwgYXV0aG9yczEubGVuZ3RoOyBtKyspIHtcbiAgICAvLyAgICAgICAgIC8vaXRlbXNWaWV3LnB1c2goe2l0ZW1OYW1lOiBhdXRob3JzMVtrXS5uYW1lfSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImF1dGhvcltcIittK1wiXTogXCIrYXV0aG9yczFbbV1bXCJuYW1lXCJdKTtcbiAgICAvLyB9XG5cbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0IGdvb2dsZSBzY2hvbGFyIHF1ZXJ5aW5nXCIpO1xuXG5cblxuXG4gICAgXG5cbiAgICAvL1ByZWxldm8gdXJsIGRlbCBzaXRvIG9yaWdpbmFsZSBORUxMQSBSRUxBWklPTkUgRElSRSBDSEUgREVNQU5EQSBBIERPSS5vcmcgY29tZSBzZSBmb3NzZSB1bidhbHRyYSBmb250ZVxuICAgIFVSTCA9IHJlc3VsdHMuVVJMO1xuICAgIHVybF90b3Zpc2l0LnB1c2goVVJMKTtcbiAgICAvL3JldHJpZXZpbmcgYXJ0aWNsZSdzIHRpdGxlXG4gICAgdGl0bGUgPSByZXN1bHRzLnRpdGxlO1xuXG5cbiAgICBhdXRoX3Nob3cgPSBhdXRob3JzMTtcblxuICAgIHZhciBpc2JuID0gXCJcIjtcblxuXG4gICAgaWYgKHJlc3VsdHMuSVNCTiAmJiByZXN1bHRzLklTQk5bXCIxXCJdKVxuICAgIGlzYm4gPSArcmVzdWx0cy5JU0JOW1wiMVwiXTtcbiAgICBlbHNlIGlmIChyZXN1bHRzLklTQk4gJiYgcmVzdWx0cy5JU0JOW1wiMFwiXSlcbiAgICBpc2JuID0gK3Jlc3VsdHMuSVNCTltcIjBcIl07XG4gICAgZWxzZVxuICAgIGNvbnNvbGUubG9nKFwiTlUgU0UgUMOyIGZhIG51IGNhenpcIik7XG5cbiAgICBjb25zb2xlLmxvZyhcImlzYm4gXCIraXNibik7XG5cblxuICBjb25zb2xlLmxvZyhcInNlYWVyY2hRdWVyeTogXCIraXNibik7ICAgIFxuICAgIFxuICB2YXIgc2VhcmNoUXVlcnkgPSAgaXNibjsvLyAgXCI5NzgtMy0wMzAtMzQ5MTQtMVwiOyAvL1wiJChcIiNzZWFyY2hfZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICB2YXIgdGh1bWIyID0gW107XG4gIHZhciBhdXRob3JzID0gW107XG4gIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG5cblxuICAvL3ZhciBzZWFyY2hRdWVyeSA9ICQoXCIjc2VhcmNoX3R4dFwiKS52YWwoKTtcbiAgLy9zZWFyY2hRdWVyeSA9IHNlYXJjaFF1ZXJ5LnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcblxuICAvKmlmICghc2VhcmNoUXVlcnkpIHtcbiAgICBzZWFyY2hRdWVyeSA9IFwicGFsZW9cIjtcbiAgfSovXG4gIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdDtcbiBcblxuICAgIGlmKHNlYXJjaFF1ZXJ5KVxuICAgIHtcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9XCIgKyBzZWFyY2hRdWVyeTtcbiAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgcXVlcnk6IFwiKyB1cmwpO1xuXG4gICAgLy8gaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAvLyAgICAgdXJsOiB1cmwsXG4gICAgLy8gICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIC8vIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBodHRwTW9kdWxlLnJlcXVlc3Qoe3VybDogdXJsLCBtZXRob2Q6IFwiR0VUXCJ9LChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcmUgZGlvIHBvcmNvIG1hZG9vbmEgXCIrIGUpfSk7XG5cbiAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIlJFUVVFU1QgT0sgZnJvbSBHT09HTEUgQk9PS1NcIik7XG4gICAgICBpZihqc29uLnRvdGFsSXRlbXMgPT0gMClcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBpdGVtc1wiKTtcbiAgICAgICAgZmxhZ19mYWlsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgY29uc29sZS5sb2coXCJsZW5ndGgganNvbjogXCIrIGpzb24uaXRlbXMubGVuZ3RoKTtcbiAgICAgIHZhciBodG1sY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgdGh1bWIgPSBcIlwiO1xuICAgICAgdmFyIGF1dGhvciA9IFwiXCI7XG4gICAgICB2YXIgZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgdmFyIGlzYm4gPSBcIlwiO1xuICAgICAgdmFyIHByaWNlID0gXCJcIjtcbiAgICAgIHZhciB2YWx1dGEgPSBcIlwiO1xuXG4gICAgICB2YXIgZWRpdG9ycyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCAgaSA9IDA7IGkgPCBqc29uLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDZXJjbyBpbW1hZ2luaSBlZCBhdXRvcmkuLi5cIik7XG4gICAgICAgIGlmIChqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uaW1hZ2VMaW5rcykge1xuICAgICAgICAgIHRodW1iID0ganNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmltYWdlTGlua3Muc21hbGxUaHVtYm5haWw7XG4gICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZSBib29rIGFjaGlldmVkXCIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGh1bWIgPSBcImh0dHA6Ly9pLmltZ3VyLmNvbS9vTTNNZEFpLnBuZ1wiO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgYm9vayB1bmRlZmluZWRcIik7XG5cbiAgICAgICAgICAvL3RodW1iID0gJ2h0dHA6Ly9zbGVtcy1vbGRib3lzLm9yZy51ay9saWJyYXJ5L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzExL2xpYnJhcnlfbm9jb3Zlci5qcGcnXG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIklNTUFHSU5FOiBcIit0aHVtYik7XG4gICAgICAgIHZhciB0aHVtYl90ZW1wID0gdGh1bWIuc2xpY2UoMCwgNCkgKyBcInNcIiArIHRodW1iLnNsaWNlKDQpO1xuICAgIFxuXG4gICAgICAgIHRodW1iMi5wdXNoKHtpbWFnZVVyaTogdGh1bWJfdGVtcH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIklNTUFHSU5FOiBcIit0aHVtYl90ZW1wKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJNQU5OQUcgQSBNQVJPTk5OO1wiKTtcblxuXG4gICAgICAgIHZhciB0aXRsZV9ib29rID0gXCJcIjtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyB0aXRsZSBib29rXCIpO1xuICAgICAgICAvLyBBVVRIT1JcbiAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uLml0ZW1zW2ldW1widm9sdW1lSW5mb1wiXSk7XG4gICAgICAgIGlmKCFqc29uLml0ZW1zW2ldW1widm9sdW1lSW5mb1wiXSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOdW4gY3N0YW5uIGF1dG9yaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRlJBIE9SQSBDRVJDT09PT09cIik7XG4gICAgICAgICAgICBpZighanNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmF1dGhvcnMpXG4gICAgICAgICAgICAgICAgZWRpdG9ycy5wdXNoKFwiaW5mb3JtYXRpb24gbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VyY28gYXV0b3JpLCBsZW5ndGg6IFwiKyBqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uYXV0aG9ycy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby5hdXRob3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBlZGl0b3JzLnB1c2goanNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmF1dGhvcnNbal0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRob3IgW1wiK2orXCJdOiBcIitlZGl0b3JzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmKCFqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8udGl0bGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZWRzIGluZm9ybWF0aW9uc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aXRsZV9ib29rICs9IGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvL2Rlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uID0ganNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZyhcInB1Z2hpblwiKTtcbiAgICAgICAgZGVzY3IucHVzaCh7ZGVzYzogZGVzY3JpcHRpb259KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwdWdoaTJuOiBcIitkZXNjci5sZW5ndGgpO1xuXG4gICAgXG5cbiAgICAgICAgaWYoZWRpdG9ycy5sZW5ndGg+PTApXG4gICAgICAgICAgICBhdXRob3JzLnB1c2goe2F1dGhvcjogXCJFZHM6IFwiKyBlZGl0b3JzWzBdK1wiIGV0IGFsLlwifSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGF1dGhvcnMucHVzaCh7YXV0aG9yOiBlZGl0b3JzWzBdfSk7XG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICAvKmNvbnNvbGUubG9nKFwiZGVzY3JpcHRpb246IFwiK2Rlc2NyaXB0aW9uKTsgKi9cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aHVtYjJbMF0sdGh1bWIyWzFdLHRodW1iMlsyXSk7XG4gICAgICAgIFxuICAgICAgICBpc2JuID0ganNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmluZHVzdHJ5SWRlbnRpZmllcnNbMF0uaWRlbnRpZmllcjtcbiAgICAgICAgY29uc29sZS5sb2coXCJpc2JuOiBcIitpc2JuKTtcblxuICAgICAgICBpZihqc29uLml0ZW1zW2ldLnNhbGVJbmZvICYmIGpzb24uaXRlbXNbaV0uc2FsZUluZm8ubGlzdFByaWNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBwcmljZSA9IGpzb24uaXRlbXNbaV0uc2FsZUluZm8ubGlzdFByaWNlLmFtb3VudDtcbiAgICAgICAgICAgIHZhbHV0YSA9IGpzb24uaXRlbXNbaV0uc2FsZUluZm8ubGlzdFByaWNlLmN1cnJlbmN5Q29kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHByaWNlPSBcIk5vdCBmb3Igc2FsZVwiO1xuICAgICAgICB2YWx1dGEgPSBcIlwiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJpY2U6IFwiK3ByaWNlK1wiIFwiK3ZhbHV0YSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9jZXNzbyBkaSByaWNlcmNhIHRlcm1pbmF0b1wiKTtcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpemUgb2YgdGh1bWIyOiBcIit0aHVtYjIubGVuZ3RoKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vc2V0dG8gbCdhcnJheSBnbG9iYWxlIGRpIGF1dG9yaSBjb24gcXVlbGxvIGxvY2FsZVxuICAgICAgYXV0aG9yc19jb21wbGV0ZSA9IGVkaXRvcnM7XG5cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIlVTQ0lUT1wiKTtcblxuICAgIGZ1bmN0aW9uIHRydW5jKHMsIG4pIHtcbiAgICAgICAgdmFyIHQgPSBzLmluZGV4T2YoXCIgXCIsIG4pO1xuICAgICAgICBpZiAodCA9PSAtMSkgcmV0dXJuIHM7XG4gICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCB0KSArIFwiLi4uXCI7XG4gICAgfVxuXG5cblxuICAgIC8vY29uc29sZS5sb2coXCJhbmFsaXpvIHJlZnNcIik7XG4gICAgaWYoIXJlc3VsdHMucmVmZXJlbmNlKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJubyByZWZzXCIpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJlc3VsdHMucmVmZXJlbmNlLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICByZWZlcmVuY2VzLnB1c2goe3JlZk5hbWU6IHJlc3VsdHMucmVmZXJlbmNlW2tdLnVuc3RydWN0dXJlZCwgRE9JOiByZXN1bHRzLnJlZmVyZW5jZVtrXS5ET0l9KTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlZmVyZW5jZXMpO1xuICAgICAgICBmbGFnX3JlZnMgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgXG5cbn1cbmlmKCFzZWFyY2hRdWVyeSB8fCAoZmxhZ19mYWlsZWQgJiYgIXNlYXJjaFF1ZXJ5KSlcbntcbiAgICBjb25zb2xlLmxvZyhcIkVSUk9SRSBJU0JOXCIpO1xuICAgIHZhciBwcm9ibGVtPSBcIlJlc3VsdHMgbm90IGZvdW5kXCI7XG4gICAgdmFyIHNob3dVcmwgPSBcIkNsaWNrIGhlcmUgdG8gc2hvdyB3ZWIgc2l0ZSBhYm91dCBwYXBlclwiO1xuICAgIGNvbnN0IHZtID0gZnJvbU9iamVjdCh7XG4gICAgICAgIHByb2JsZW0sXG4gICAgICAgIHNob3dVcmxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJzZXR0byBsYSBwYWdpbmEuLi4uXCIpO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCJObyBSZXN1bHRzIGZvdW5kXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiQW55dGhpbmcgaW5mb3JtYXRpb24gaGFzIGJlZW4gZm91bmQuXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgfTtcblxuXG4gICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBmYWlsZWRcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG4gICAgfSk7XG5cbiAgICBmbGFnX2ZhaWxlZCA9IGZhbHNlO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufSAgIFxuICAgIFxuICAgIC8vaXRlbXNWaWV3LnB1c2goe2l0ZW1JbWFnZTogdGh1bWIyWzBdW1wiaW1hZ2VVcmlcIl0sIGl0ZW1OYW1lOiBhdXRob3JzWzBdW1wiYXV0aG9yXCJdLCBpdGVtRGVzYzogZGVzY3JbMF1bXCJkZXNjXCJdfSk7XG5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHRodW1iMi5sZW5ndGg7IGsrKykge1xuICAgICAgICBpdGVtc1ZpZXcucHVzaCh7aXRlbUltYWdlOiAodGh1bWIyW2tdW1wiaW1hZ2VVcmlcIl0gPyB0aHVtYjJba11bXCJpbWFnZVVyaVwiXSA6IFwiaHR0cDovL2kuaW1ndXIuY29tL29NM01kQWkucG5nXCIpLCBpdGVtVGl0bGU6IFwiQm9vazogXCIrdGl0bGVfYm9vaywgaXRlbU5hbWU6IChhdXRob3JzW2tdW1wiYXV0aG9yXCJdID8gYXV0aG9yc1trXVtcImF1dGhvclwiXSA6IFwiTm8gYXV0aG9yJ3MgaW5mb3JtYXRpb24gYXZhaWxhYmxlXCIpLCBpdGVtRGVzYzogKGRlc2NyW2tdW1wiZGVzY1wiXSA/IGRlc2NyW2tdW1wiZGVzY1wiXSA6IFwiTm8gZGVzY3JpcHRpb24gYXZhaWxhYmxlXCIpLCB0aXRsZVBhcGVyOiB0aXRsZX0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW1zVmlld1trXSk7XG5cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhpdGVtc1ZpZXdbMF0pO1xuXG4gXG4gICAgLy9QUkVQQVJBWklPTkUgTElTVEEgQVVUSE9SUyBjb24gT1JDSUQgRUQgQUZGSUxJWkFJT05JXG4gICAgLy8gZm9yIChsZXQgayA9IDA7IGsgPCBhdS5sZW5ndGg7IGsrKykge1xuICAgIC8vICAgICBjb25zdCBlbGVtZW50ID0gYXVba107XG4gICAgICAgIFxuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBmaW5hbCBkYXRhOiBcIitpdGVtc1ZpZXcubGVuZ3RoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiZnJhdGVlZSArPSBcIitpdGVtc1ZpZXcpO1xuICAgIGlmKCFpdGVtc1ZpZXcubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgLy8gbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIC8vICAgICB0aXRsZTogXCJObyBSZXN1bHRzIGZvdW5kXCIsXG4gICAgICAgIC8vICAgICBtZXNzYWdlOiBcIm5pZW50ZWVlZWVlIDJcIixcbiAgICAgICAgLy8gICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIGZhaWxlZFwiKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAvLyAgICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgICAgICAvLyAgICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICAgICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcblxuICAgIH1cbiAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcbiAgICBcblxuICAgIHBhZ2VEYXRhLnNldChcIml0ZW1zVmlld1wiLCBpdGVtc1ZpZXcpO1xuICAgIHBhZ2VEYXRhLnNldChcInRpdGxlUGFwZXJcIiwgdGl0bGVQYXBlcik7XG5cblxuICAgICAgIFxufVxuXG4gIFxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuXG5leHBvcnRzLnNob3dJbmZvQXV0aG9ycyA9IGZ1bmN0aW9uKClcbntcblxuXG4gICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VTY29wdXNcIixcbiAgICAgICAgLy9iYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICBwYXJhbTE6IHBhc3NUb1Njb3B1cyxcbiAgICAgICAgICAgIHBhcmFtMjogb3JjaWRzX2NvbXBsZXRpLFxuICAgICAgICAgICAgcGFyYW0zOiBvcmNpZHNfaW5jb21wbGV0aSxcbiAgICAgICAgICAgIHBhcmFtNDogZmFtaWx5X25hbWVzXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xufVxuXG5leHBvcnRzLnNob3dSZWZzID0gZnVuY3Rpb24oKVxue1xuICAgIGlmKCFmbGFnX3JlZnMpXG4gICAge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlZmVyZW5jZXMgSW5mb1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJObyByZWZlcmVuY2VzIGluZm9ybWF0aW9uIGFyZSBhdmFpbGFibGVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuXG4gICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VSZWZzXCIsXG4gICAgICAgIC8vYmFja3N0YWNrVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICB9LFxuICAgICAgICAvL2NsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiByZWZlcmVuY2VzLFxuICAgICAgICAgICAgcGFyYW0yOiAxXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xuICAgIH1cbn1cblxuXG5leHBvcnRzLmdvVG9VUkwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGAgaXRlbSB0YXAgJHtpbmRleH1gKTtcbiAgICBcbiAgICBpZighdXJsX3RvdmlzaXRbaW5kZXhdKVxuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJBcnRpY2xlJ3MgSW5mb1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJObyB3ZWIgc2l0ZSBhdmFpbGFibGVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKHVybF90b3Zpc2l0W2luZGV4XSk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0cy5zaG93RGVzYyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiRGVzY3JpcHRpb24gb2YgQm9va1wiLFxuICAgICAgICBtZXNzYWdlOiBkZXNjclswXS5kZXNjLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG4gICAgY29uc29sZS5sb2coZGVzY3JbMF0uZGVzYyk7XG4gICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgIH0pO1xufVxuXG5leHBvcnRzLmdvVG9TaG9wID0gZnVuY3Rpb24gKClcbntcbiAgICB1dGlsc01vZHVsZS5vcGVuVXJsKFVSTCk7XG59XG5cbmV4cG9ydHMuc2hvd0FsbEF1dGhvcnMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBhdXRvcmkgPSBcIlwiO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYXV0aG9yc19jb21wbGV0ZS5sZW5ndGg7IGsrKykge1xuICAgICAgICBhdXRvcmkgKz0gYXV0aG9yc19jb21wbGV0ZVtrXSA7XG4gICAgICAgIGlmKGsgIT0gYXV0aG9yc19jb21wbGV0ZS5sZW5ndGgtMSlcbiAgICAgICAgYXV0b3JpKz1cIiwgXCIgO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiTGlzdCBvZiBhdXRob3JzXCIsXG4gICAgICAgIG1lc3NhZ2U6IGF1dG9yaSxcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9O1xuICAgIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0cy5zaG93QXV0aEluZm8gPSBmdW5jdGlvbihhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApO1xuICAgIGNvbnNvbGUubG9nKHNob3dQYWdlSW5mb0F1dGhvcnNbaW5kZXhdKTtcblxuICAgIGlmKCFzaG93UGFnZUluZm9BdXRob3JzW2luZGV4XSlcbiAgICB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUaGVyZSBhcmUgbm8gaW5mb3JtYXRpb24gYWJvdXQgXCIrYXV0aF9zaG93W2luZGV4XVsnbmFtZSddKTtcblxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKHNob3dQYWdlSW5mb0F1dGhvcnNbaW5kZXhdKTtcblxufVxuXG5cbmV4cG9ydHMuc2hvd0Z1bGxVcmwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcblxuICAgIGlmKCFVUkwpXG4gICAge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiVGhlcmUgaXMgbm8gd2ViIHNpdGUgZm9yIFwiK3RpdGxlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKFVSTCk7XG5cbn1cblxuZXhwb3J0cy5yZGxpc3Rsb2FkZWQgPSBmdW5jdGlvbihhcmdzKVxue1xufVxuXG5leHBvcnRzLm9uSXRlbUxvYWRpbmcgPSBmdW5jdGlvbihhcmdzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIGl0ZW1zXCIpO1xuICAgICAgICBpZihwbGF0Zm9ybU1vZHVsZS5pc0FuZHJvaWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXJncy5hbmRyb2lkKTtcbiAgICAgICAgICAgIHZhciBuZXdjb2xvciA9IG5ldyBDb2xvcigyMCwyNTUsMCwwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuYW5kcm9pZC5iYWNrZ3JvdW5kVmlldyk7XG4gICAgICAgICAgICAvL2FyZ3MuYW5kcm9pZC5iYWNrZ3JvdW5kVmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdjb2xvci5pb3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwicHJvdmFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VGaWZ0aC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3BhZ2VGaWZ0aC5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9