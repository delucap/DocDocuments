const Observable = require("tns-core-modules/data/observable").Observable;
const httpModule = require("tns-core-modules/http");
var view = require("ui/core/view");
const listViewModule = require("tns-core-modules/ui/list-view");
const fromObject = require("tns-core-modules/data/observable").fromObject;


function createViewModel(args, url1) {
    var page = args;
  
    const viewModel = new Observable();

    
    //page.bindingContext = vm;


    const listView = page.getViewById("listView");
    page.bindingContext.myTitles.push({ title: "Game of Thrones" });
// Manually trigger the update so that the new color is shown.
    listView.refresh();
    
    console.log("Starting HTTP Request to "+url1);
    httpModule.request({
        url: url1,
        method: "GET"
    }).then((response) => {
        console.log("Richiesta effettuata");

        /*var mamt = response.content.toJSON();
        console.log("Tipo di mammt2 "+ typeof(mamt));


        var contenuto = JSON.parse(mamt);
        console.log("Tipo contenuto: " + typeof(contenuto));
        */
        var sort = JSON.parse(response.content.toString());
        var chitammuo = sort.message.items[0].title;//['items'][0].reference-count;
        console.log("chiammuo = "+ chitammuo);

        viewModel.set("risposta", chitammuo);
        console.log("t'appo amooooo");

        // var results = sort.message.items;
        // console.log("Counter results: "+ items.length);
    

        var i = 0;
        var vm = fromObject({
            // Setting the listview binding source
           
            myTitles: [
                { title: "The Da Vinci Code" },
                { title: "Harry Potter and the Chamber of Secrets" },
                { title: "The Alchemist" },
                { title: "The Godfather" },
                { title: "Goodnight Moon" },
                { title: "The Hobbit" }
            ]
        });
        // Argument (response) is HttpResponse
    }, (e) => {
        console.error("Errore dio porco madoona "+ e);
    });


    return viewModel;
}

exports.createViewModel = createViewModel;