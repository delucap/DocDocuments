/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
const createViewModel = require("./main-view-model").createViewModel;
var frameModule = require("ui/frame");
var view = require("ui/core/view");
var dialogs = require("tns-core-modules/ui/dialogs");

var page1;

function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = args.object;
    
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and JavaScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page1 = args.object;
    page.bindingContext = createViewModel(args.object);
  
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;

exports.changePage = function ()
{
    console.log("Sto per effettuare la request, prelevo dati da form");
        var pubName = view.getViewById(page1, "tf1").text;
        var authName = view.getViewById(page1, "tf2").text;

        if(!pubName || (!pubName && authName))
        {
            dialogs.alert("Article's name is required!");
        }
        else
        {
        
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

    var navigationOptions = {
        moduleName: 'showFirstResults',
        context: {
            param1: url1,
            param2: pubName
        }
    }

    frameModule.topmost().navigate(navigationOptions);
    }
}