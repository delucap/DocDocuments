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
        var dialogs = require("tns-core-modules/ui/dialogs");

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

    var dialogs = require("tns-core-modules/ui/dialogs");
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
}