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
}