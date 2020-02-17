var view = require("ui/core/view"); // per acceder alla pagina web visibile xml
const httpModule = require("tns-core-modules/http");
const createViewModel = require("./showFirstResults-view-model").createViewModel;
const fromObject = require("tns-core-modules/data/observable").fromObject;
var frameModule = require("ui/frame");
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
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
}