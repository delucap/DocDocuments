const Observable = require("tns-core-modules/data/observable").Observable;
const httpModule = require("tns-core-modules/http");
var view = require("ui/core/view");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} montelli`;
    }
}

function createViewModel(args) {
    var page = args;

    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message","pescman"+" "+getMessage(viewModel.counter));

    };

    viewModel.httpReq = () =>{
        
        console.log("Sto per effettuare la request, prelevo dati da form");
        var pubName = view.getViewById(page, "tf1").text;
        var authName = view.getViewById(page, "tf2").text;

        
        console.log("pubname= "+ pubName);
        
        var pubName2 = pubName.replace(/\s/g, "+");
        var authName2 = authName.replace(/\s/g, "+");
        console.log("pubname 2 = "+ pubName2);
        console.log("authname 2 = "+ authName2);

       
        if (authName2 === ""){
            console.log("setto senza authore");
            url1 = "https://api.crossref.org/works?query.bibliographic="+pubName2;
        }
        else{
            console.log("setto con authore");

            url1 = "https://api.crossref.org/works?query.bibliographic="+pubName2+"&query.author="+authName2;

        }


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
            // Argument (response) is HttpResponse
        }, (e) => {
            console.error("Errore dio porco madoona "+ e);
        });
    }

    return viewModel;
}

exports.createViewModel = createViewModel;
