var view = require("ui/core/view"); // per acceder alla pagina web visibile xml
const httpModule2 = require("tns-core-modules/http");
const createViewModel = require("./showFirstResults-view-model").createViewModel;
const fromObject = require("tns-core-modules/data/observable").fromObject;
var frameModule = require("ui/frame");
const Observable = require("tns-core-modules/data/observable").Observable;
var dialogs = require("tns-core-modules/ui/dialogs");
const utilsModule = require("tns-core-modules/utils/utils");
const process = require('process');
var ObservableArray = require("data/observable-array").ObservableArray;

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
} 