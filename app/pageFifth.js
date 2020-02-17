var view = require("ui/core/view"); // per acceder alla pagina web visibile xml
const httpModule = require("tns-core-modules/http");
const httpModule2 = require("tns-core-modules/http");
const createViewModel = require("./showFirstResults-view-model").createViewModel;
const fromObject = require("tns-core-modules/data/observable").fromObject;
var frameModule = require("ui/frame");
const Observable = require("tns-core-modules/data/observable").Observable;
var dialogs = require("tns-core-modules/ui/dialogs");
const utilsModule = require("tns-core-modules/utils/utils");
var pageData = new Observable();
var ObservableArray = require("data/observable-array").ObservableArray;

const modalViewModule = "ns-ui-category/modal-view/basics/modal-view-page";
const platformModule = require("tns-core-modules/platform");
const Color = require("tns-core-modules/color").Color;
const colors = require("tns-core-modules/color/known-colors");



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
}