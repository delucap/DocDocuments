require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./main-page.js": "./main-page.js",
	"./main-page.xml": "./main-page.xml",
	"./main-view-model.js": "./main-view-model.js",
	"./pageAuthor.js": "./pageAuthor.js",
	"./pageAuthor.xml": "./pageAuthor.xml",
	"./pageFifth.js": "./pageFifth.js",
	"./pageFifth.xml": "./pageFifth.xml",
	"./pageRefs.js": "./pageRefs.js",
	"./pageRefs.xml": "./pageRefs.xml",
	"./pageScopus.js": "./pageScopus.js",
	"./pageScopus.xml": "./pageScopus.xml",
	"./showFirstResults-view-model.js": "./showFirstResults-view-model.js",
	"./showFirstResults.js": "./showFirstResults.js",
	"./showFirstResults.xml": "./showFirstResults.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"main-page\">\n</Frame>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"comment","comment":"@import \"~@nativescript/theme/css/default.css\";"},{"type":"comment","comment":"@import '~@nativescript/theme/css/aqua.css';\n/* Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["CardView.cardStyle"],"declarations":[{"type":"declaration","property":"background-color","value":"#3489db"},{"type":"declaration","property":"color","value":"blue"}]},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"animation-name","value":"transformed"},{"type":"declaration","property":"animation-duration","value":"1"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"},{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"background-color","value":"green"},{"type":"declaration","property":"animation-name","value":"button_selected"},{"type":"declaration","property":"animation-duration","value":"2s"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"},{"type":"declaration","property":"color","value":"white"}]},{"type":"keyframes","name":"button_selected","keyframes":[{"type":"keyframe","values":["from"],"declarations":[{"type":"declaration","property":"background-color","value":"white"}]},{"type":"keyframe","values":["to"],"declarations":[{"type":"declaration","property":"background-color","value":"rgb(134, 103, 103)"},{"type":"declaration","property":"text-shadow","value":"20px 20px black"}]}]},{"type":"rule","selectors":["TextField.-secondary"],"declarations":[{"type":"declaration","property":"animation-name","value":"transformed"},{"type":"declaration","property":"animation-duration","value":"1s"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"}]},{"type":"rule","selectors":[".transformed"],"declarations":[{"type":"declaration","property":"animation-name","value":"transformed"},{"type":"declaration","property":"animation-duration","value":"1s"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"}]},{"type":"keyframes","name":"transformed","keyframes":[{"type":"keyframe","values":["from"],"declarations":[{"type":"declaration","property":"transform","value":"translate(1000, 100)"}]},{"type":"keyframe","values":["to"],"declarations":[{"type":"declaration","property":"transform","value":"rotate(0)"}]}]},{"type":"keyframes","name":"entry","keyframes":[{"type":"keyframe","values":["from"],"declarations":[{"type":"declaration","property":"transform","value":"translate(100, 0)"},{"type":"declaration","property":"opacity","value":"0"}]},{"type":"keyframe","values":["50%"],"declarations":[{"type":"declaration","property":"transform","value":"translate(-20,0)"},{"type":"declaration","property":"opacity","value":"0.8"}]},{"type":"keyframe","values":["to"],"declarations":[{"type":"declaration","property":"transform","value":"translate(0,0)"},{"type":"declaration","property":"opacity","value":"1"}]}]},{"type":"rule","selectors":["Label.-entry"],"declarations":[{"type":"declaration","property":"animation-name","value":"entry"},{"type":"declaration","property":"animation-duration","value":"1.5"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"},{"type":"declaration","property":"animation-iteration-count","value":"1"},{"type":"declaration","property":"animation-timing-function","value":"cubic-bezier(0.25, 0.1, 0.25, 1)"}]},{"type":"rule","selectors":["Image.-bounce"],"declarations":[{"type":"declaration","property":"animation-duration","value":"1s"},{"type":"declaration","property":"animation-name","value":"bounce"}]},{"type":"keyframes","name":"bounce","keyframes":[{"type":"keyframe","values":["from","20%","53%","80%","to"],"declarations":[{"type":"declaration","property":"animation-timing-function","value":"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},{"type":"declaration","property":"transform","value":"translate3d(-200,0,0)"}]},{"type":"keyframe","values":["to"],"declarations":[{"type":"declaration","property":"-webkit-transform","value":"translate3d(0,-4px,0)"},{"type":"declaration","property":"transform","value":"translate3d(0,-4px,0)"}]}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"width","value":"400"},{"type":"declaration","property":"height","value":"200"},{"type":"declaration","property":"animation-duration","value":"1.5s"},{"type":"declaration","property":"animation-name","value":"bounce2"}]},{"type":"rule","selectors":["Image.fas"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-solid-900\""},{"type":"declaration","property":"font-weight","value":"900"}]},{"type":"rule","selectors":["Image.t-36"],"declarations":[{"type":"declaration","property":"font-size","value":"36"}]},{"type":"keyframes","name":"bounce2","keyframes":[{"type":"keyframe","values":["from","20%","53%","80%","to"],"declarations":[{"type":"declaration","property":"animation-timing-function","value":"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},{"type":"declaration","property":"transform","value":"translate3d(-2000,0,0)"}]},{"type":"keyframe","values":["to"],"declarations":[{"type":"declaration","property":"-webkit-transform","value":"translate3d(0,-4px,0)"},{"type":"declaration","property":"transform","value":"translate3d(0,-4px,0)"}]}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        /*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
const createViewModel = __webpack_require__("./main-view-model.js").createViewModel;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js");
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

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
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-cardview", function() { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js"); });
global.registerModule("nativescript-cardview/CardView", function() { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js"); });

module.exports = "<!--\nThe markup in NativeScript apps contains a series of user interface components, each\nof which NativeScript renders with a platform-specific iOS or Android native control.\nYou can find a full list of user interface components you can use in your app at\nhttps://docs.nativescript.org/ui/components.\n-->\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\" class=\"diocan\" backgroundColor=\"rgb(210, 231, 239)\" xmlns:Card=\"nativescript-cardview\" xmlns:lv=\"nativescript-ui-listview\">\n    <!--\n    The ActionBar is the NativeScript common abstraction over the Android ActionBar and iOS NavigationBar.\n    http://docs.nativescript.org/ui/action-bar\n    -->\n    <ActionBar title=\"Doc Documents\" icon=\"\"></ActionBar>\n\n    <!--\n    The StackLayout stacks UI components on the screen—either vertically or horizontally.\n    In this case, the StackLayout does vertical stacking; you can change the stacking to\n    horizontal by applying a orientation=\"horizontal\" attribute to the <StackLayout> element.\n    You can learn more about NativeScript layouts at\n    https://docs.nativescript.org/ui/layout-containers.\n\n    These components make use of the NativeScript core theme, which styles them with element selectors.\n    The theme also provides a set of helper class names such as p-20, h1, h2, and text-center to enhance styling.\n    You can learn more about the NativeScript core theme at https://github.com/nativescript/theme\n    -->\n    <Card:CardView backgroundColor=\"rgb(210, 231, 239)\" class=\"cardStyle\" margin=\"10\" elevation=\"40\" radius=\"1\">\n\n    <StackLayout class=\"p-20\">\n    <Image src=\"https://i.ibb.co/D4bGXq4/Senza-titolo-1.png\" loadMode=\"async\" class=\"fas t-36\"></Image>\n\n        <TextField hint=\"Title publication\"  color=\"orangered\" backgroundColor=\"lightyellow\" id=\"tf1\" class=\"-secondary\"/>\n        <TextField hint=\"Almost one author...\"   color=\"orangered\" backgroundColor=\"lightyellow\" id=\"tf2\" class=\"-secondary\" />\n\n        <!-- Button text=\"GET REQUEST\" tap=\"{{ httpReq }}\" class=\"-primary\"/> -->\n        <Button text=\"Show results\" tap=\"changePage\" class=\"-primary\"/>\n        </StackLayout>\n    </Card:CardView>\n\n</Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./main-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
const httpModule = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js");

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
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ }),

/***/ "./pageAuthor.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js"); // per acceder alla pagina web visibile xml
const httpModule2 = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const createViewModel = __webpack_require__("./showFirstResults-view-model.js").createViewModel;
const fromObject = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").fromObject;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
const utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
const process = __webpack_require__("../node_modules/process/browser.js");
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;

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
} ; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageAuthor.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pageAuthor.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pageAuthor.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-ui-listview", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView.listViewLayout", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/ListViewLinearLayout", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView.itemTemplate", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });

module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\"  xmlns:Card=\"nativescript-cardview\" xmlns:lv=\"nativescript-ui-listview\" xmlns:lv=\"nativescript-ui-listview\" navigatingTo=\"onNavigatingTo\"><!-- loaded=\"pageLoaded\"-->\n    <ActionBar title=\"Author's articles\" class=\"action-bar\">\n         <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" tap=\"goBack\"></NavigationButton>\n    </ActionBar>\n\n\n<GridLayout backgroundColor=\"rgb(210, 231, 239)\">\n<lv:RadListView items=\"{{ articleViews }}\" class=\"list-group\" itemTap=\"goToDoi\" separatorColor=\"orangered\">\n    <lv:RadListView.listViewLayout>\n        <lv:ListViewLinearLayout scrollDirection=\"Vertical\"/>\n    </lv:RadListView.listViewLayout>\n    <lv:RadListView.itemTemplate>\n        <StackLayout orientation=\"vertical\" >\n                <Label text=\"{{ articleTitle }}\" textWrap=\"true\" class=\"-entry\"/>\n                <Label text=\"{{ authorsName }}\"  textWrap=\"true\" class=\"-entry\"/>\n                <Label text=\"{{ itemDesc }}\" textWrap=\"true\"  class=\"-entry\"/> \n                <StackLayout height=\"2\" backgroundColor=\"Black\"/>\n        </StackLayout>\n                <!--<Button text=\"Info authors\" textWrap=\"true\" class=\"list-gruoup-item-text\" tap=\"showInfoAuthors\"></Button>\n                <Button text=\"See references\" textWrap=\"true\" class=\"list-gruoup-item-text\" tap=\"showRefs\"></Button>\n                Label text=\"{{ authorsName }}\"  textWrap=\"true\" class=\"-entry\"/>\n                <Label text=\"{{ itemDesc }}\" textWrap=\"true\"  class=\"-entry\"/> -->\n    </lv:RadListView.itemTemplate>\n</lv:RadListView>\n</GridLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageAuthor.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pageAuthor.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

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

/***/ }),

/***/ "./pageFifth.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-ui-listview", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView.listViewLayout", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/ListViewLinearLayout", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView.itemTemplate", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });

module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" xmlns:lv=\"nativescript-ui-listview\" navigatingTo=\"onNavigatingTo\" class=\"diocan\" backgroundColor=\"rgb(210, 231, 239)\"><!-- loaded=\"pageLoaded\"-->\n    <ActionBar title=\"Results \" class=\"action-bar\" >\n         <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" tap=\"goBack\"></NavigationButton>\n    </ActionBar>\n\n<lv:RadListView items=\"{{ itemsView }}\" class=\"list-group\" itemTap=\"goToURL\" loaded=\"rdlistloaded\" itemLoading=\"onItemLoading\" backgroundColor=\"transparent\" > \n    <lv:RadListView.listViewLayout>\n        <lv:ListViewLinearLayout scrollDirection=\"Vertical\"/>\n    </lv:RadListView.listViewLayout>\n    <lv:RadListView.itemTemplate>\n        <GridLayout class=\"list-group-item\" rows=\"auto\" columns=\"auto, *\" backgroundColor=\"rgb(210, 231, 239)\">\n            <Image width=\"150\" height=\"150\" row=\"0\" col=\"0\" src=\"{{ itemImage }}\" class=\"-bounce\"/>\n            <StackLayout row=\"0\" col=\"1\">\n                <Label text=\"{{ itemTitle }}\" textWrap=\"true\" class=\"list-group-item-heading\" class=\"-entry\"/>\n                <Label text=\"{{ itemName }}\" textWrap=\"true\" class=\"list-group-item-heading\" class=\"-entry\"/>\n                <Label text=\"{{ itemDesc }}\" textWrap=\"true\" class=\"list-group-item-text\" class=\"-entry\"/>\n                <Button text=\"Info authors\" textWrap=\"true\" class=\"list-gruoup-item-text\" tap=\"showInfoAuthors\" class=\"-primary\"></Button>\n                <Button text=\"See references\" textWrap=\"true\" class=\"list-gruoup-item-text\" tap=\"showRefs\" class=\"-primary\"></Button>\n             <StackLayout height=\"4\" backgroundColor=\"Black\"/>\n            </StackLayout>\n      \n        </GridLayout>\n    </lv:RadListView.itemTemplate>\n</lv:RadListView>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageFifth.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pageFifth.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pageRefs.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js"); // per acceder alla pagina web visibile xml
const httpModule2 = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const createViewModel = __webpack_require__("./showFirstResults-view-model.js").createViewModel;
const fromObject = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").fromObject;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
const utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
const process = __webpack_require__("../node_modules/process/browser.js");
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;


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
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageRefs.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pageRefs.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pageRefs.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-cardview", function() { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js"); });
global.registerModule("nativescript-cardview/CardView", function() { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js"); });

module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" xmlns:Card=\"nativescript-cardview\" xmlns:lv=\"nativescript-ui-listview\" navigatingTo=\"onNavigatingTo\"><!-- loaded=\"pageLoaded\"-->\n<ActionBar title=\"References\">\n     <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" tap=\"goBack\"></NavigationButton>\n\n</ActionBar> \n<GridLayout backgroundColor=\"rgb(210, 231, 239)\">\n\n<ListView items=\"{{ itemsView }}\" \n          itemTap=\"showFullUrl\" \n          loaded=\"{{ onListViewLoaded }}\" \n          separatorColor=\"orangered\" rowHeight=\"105\"\n          class=\"list-group\" id=\"listView\" col=\"0\" colSpan=\"2\">\n    <ListView.itemTemplate>\n        <!-- The item template can only have a single root view container (e.g. GriLayout, StackLayout, etc.) -->\n        <Card:CardView backgroundColor=\"rgb(210, 231, 239)\" class=\"cardStyle\" margin=\"10\" elevation=\"40\" radius=\"1\">\n        <Label text=\"mamt\" class=\"ico\" class=\"-entry\"></Label>\n        <Label text=\"{{ refName || 'Downloading...' }}\" textWrap=\"true\" class=\"title\" class=\"-entry\"/>\n\n        </Card:CardView>\n    </ListView.itemTemplate>\n</ListView>\n</GridLayout>\n</Page>\n\n\n<!--        <Label text=\"https://apexcovantage.com/wp-content/uploads/2017/08/ORCID-Icon.png\" class=\"ico\"/>\n-->"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageRefs.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pageRefs.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pageScopus.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js"); // per acceder alla pagina web visibile xml
const httpModule2 = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const createViewModel = __webpack_require__("./showFirstResults-view-model.js").createViewModel;
const fromObject = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").fromObject;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
const utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
const process = __webpack_require__("../node_modules/process/browser.js");
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;


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
        var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

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

    var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
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
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageScopus.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pageScopus.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pageScopus.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-cardview", function() { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js"); });
global.registerModule("nativescript-cardview/CardView", function() { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js"); });

module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" xmlns:Card=\"nativescript-cardview\" xmlns:lv=\"nativescript-ui-listview\" navigatingTo=\"onNavigatingTo\"><!-- loaded=\"pageLoaded\"-->\n\n<ActionBar title=\"Authors\">\n       <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" tap=\"goBack\"></NavigationButton>\n\n</ActionBar> \n<GridLayout backgroundColor=\"rgb(210, 231, 239)\">\n<ListView items=\"{{ itemsView }}\" \n          itemTap=\"showFullUrl\" \n          loaded=\"{{ onListViewLoaded }}\" \n          separatorColor=\"orangered\" rowHeight=\"50\"\n          class=\"diocan\" id=\"listView\" col=\"0\" colSpan=\"2\" >\n    <ListView.itemTemplate>\n        <!-- The item template can only have a single root view container (e.g. GriLayout, StackLayout, etc.) -->\n        <Card:CardView backgroundColor=\"rgb(210, 231, 239)\" class=\"cardStyle\" margin=\"10\" elevation=\"40\" radius=\"1\">\n      \n        <Label text=\"{{ itemName || 'Downloading...' }}\" textWrap=\"true\" class=\"title\"  class=\"-entry\" />\n\n        </Card:CardView>\n    </ListView.itemTemplate>\n</ListView>\n</GridLayout>\n</Page>\n\n\n<!--        <Label text=\"https://apexcovantage.com/wp-content/uploads/2017/08/ORCID-Icon.png\" class=\"ico\"/>  <Label text=\"mamt\" class=\"ico\" class=\"-entry\"></Label>\n-->"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pageScopus.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pageScopus.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./showFirstResults-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
const httpModule = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js");
const listViewModule = __webpack_require__("../node_modules/@nativescript/core/ui/list-view/list-view.js");
const fromObject = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").fromObject;


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

exports.createViewModel = createViewModel;; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./showFirstResults-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./showFirstResults-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./showFirstResults.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var view = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js"); // per acceder alla pagina web visibile xml
const httpModule = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
const createViewModel = __webpack_require__("./showFirstResults-view-model.js").createViewModel;
const fromObject = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").fromObject;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
const getFrameById = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js").getFrameById;
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
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./showFirstResults.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./showFirstResults.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./showFirstResults.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-cardview", function() { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js"); });
global.registerModule("nativescript-cardview/CardView", function() { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js"); });

module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" xmlns:Card=\"nativescript-cardview\" xmlns:lv=\"nativescript-ui-listview\" navigatingTo=\"onNavigatingTo\">\n<ActionBar title=\"{{ searching }}\">\n     <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" tap=\"goBack\"></NavigationButton>\n\n   <!-- <NavigationButton src=\"https://i.ibb.co/wc4Cd5L/back.png\" tap=\"goBack\"></NavigationButton> \n    <ActionItem icon=\"font://&#xf013;\" class=\"fas\" android.position=\"left\" title=\"prova\" ></ActionItem> -->\n</ActionBar> \n\n  <GridLayout backgroundColor=\"rgb(210, 231, 239)\">\n    <!-- <Label text=\"{{risposta}}\" class=\"title\"/> -->\n    \n    <ListView items=\"{{ myTitles }}\" \n          itemTap=\"onItemTap\" \n          loaded=\"{{ onListViewLoaded }}\" \n          separatorColor=\"orangered\" \n          class=\"diocan\" id=\"listView\" row=\"2\">\n    <ListView.itemTemplate>\n        <!-- The item template can only have a single root view container (e.g. GriLayout, StackLayout, etc.) -->\n        <StackLayout class=\"list-group-item\">\n                <Card:CardView backgroundColor=\"rgb(210, 231, 239)\" class=\"cardStyle\" margin=\"10\" elevation=\"40\" radius=\"1\">\n            <Label text=\"{{ title || 'Downloading...' }}\" textWrap=\"true\" class=\"title\" class=\"-entry\"/>\n                </Card:CardView>\n        </StackLayout>\n    </ListView.itemTemplate>\n</ListView>\n  </GridLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./showFirstResults.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./showFirstResults.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UueG1sIiwid2VicGFjazovLy8uL21haW4tdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlQXV0aG9yLmpzIiwid2VicGFjazovLy8uL3BhZ2VBdXRob3IueG1sIiwid2VicGFjazovLy8uL3BhZ2VGaWZ0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlRmlmdGgueG1sIiwid2VicGFjazovLy8uL3BhZ2VSZWZzLmpzIiwid2VicGFjazovLy8uL3BhZ2VSZWZzLnhtbCIsIndlYnBhY2s6Ly8vLi9wYWdlU2NvcHVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VTY29wdXMueG1sIiwid2VicGFjazovLy8uL3Nob3dGaXJzdFJlc3VsdHMtdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zaG93Rmlyc3RSZXN1bHRzLmpzIiwid2VicGFjazovLy8uL3Nob3dGaXJzdFJlc3VsdHMueG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDO0FB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TDtBQUNqeEMsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsaURBQWlEO0FBQzVFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLmpzXCI6IFwiLi9tYWluLXBhZ2UuanNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL21haW4tcGFnZS54bWxcIixcblx0XCIuL21haW4tdmlldy1tb2RlbC5qc1wiOiBcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9wYWdlQXV0aG9yLmpzXCI6IFwiLi9wYWdlQXV0aG9yLmpzXCIsXG5cdFwiLi9wYWdlQXV0aG9yLnhtbFwiOiBcIi4vcGFnZUF1dGhvci54bWxcIixcblx0XCIuL3BhZ2VGaWZ0aC5qc1wiOiBcIi4vcGFnZUZpZnRoLmpzXCIsXG5cdFwiLi9wYWdlRmlmdGgueG1sXCI6IFwiLi9wYWdlRmlmdGgueG1sXCIsXG5cdFwiLi9wYWdlUmVmcy5qc1wiOiBcIi4vcGFnZVJlZnMuanNcIixcblx0XCIuL3BhZ2VSZWZzLnhtbFwiOiBcIi4vcGFnZVJlZnMueG1sXCIsXG5cdFwiLi9wYWdlU2NvcHVzLmpzXCI6IFwiLi9wYWdlU2NvcHVzLmpzXCIsXG5cdFwiLi9wYWdlU2NvcHVzLnhtbFwiOiBcIi4vcGFnZVNjb3B1cy54bWxcIixcblx0XCIuL3Nob3dGaXJzdFJlc3VsdHMtdmlldy1tb2RlbC5qc1wiOiBcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9zaG93Rmlyc3RSZXN1bHRzLmpzXCI6IFwiLi9zaG93Rmlyc3RSZXN1bHRzLmpzXCIsXG5cdFwiLi9zaG93Rmlyc3RSZXN1bHRzLnhtbFwiOiBcIi4vc2hvd0ZpcnN0UmVzdWx0cy54bWxcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIm1haW4tcGFnZVxcXCI+XFxuPC9GcmFtZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBcXG5OYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiQGltcG9ydCBcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXFxcIjtcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiQGltcG9ydCAnfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2FxdWEuY3NzJztcXG4vKiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5UaGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgQnV0dG9ucyB0aGF0IGhhdmUgdGhlXFxuXFxcIi1wcmltYXJ5XFxcIiBjbGFzcyBtb2RpZmllci5cXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQ2FyZFZpZXcuY2FyZFN0eWxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNDg5ZGJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsdWVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tbmFtZVwiLFwidmFsdWVcIjpcInRyYW5zZm9ybWVkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWR1cmF0aW9uXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1maWxsLW1vZGVcIixcInZhbHVlXCI6XCJmb3J3YXJkc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcImdyZWVuXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLW5hbWVcIixcInZhbHVlXCI6XCJidXR0b25fc2VsZWN0ZWRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZHVyYXRpb25cIixcInZhbHVlXCI6XCIyc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1maWxsLW1vZGVcIixcInZhbHVlXCI6XCJmb3J3YXJkc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcImJ1dHRvbl9zZWxlY3RlZFwiLFwia2V5ZnJhbWVzXCI6W3tcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCJmcm9tXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcInRvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigxMzQsIDEwMywgMTAzKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtc2hhZG93XCIsXCJ2YWx1ZVwiOlwiMjBweCAyMHB4IGJsYWNrXCJ9XX1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0RmllbGQuLXNlY29uZGFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1uYW1lXCIsXCJ2YWx1ZVwiOlwidHJhbnNmb3JtZWRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZHVyYXRpb25cIixcInZhbHVlXCI6XCIxc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1maWxsLW1vZGVcIixcInZhbHVlXCI6XCJmb3J3YXJkc1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50cmFuc2Zvcm1lZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1uYW1lXCIsXCJ2YWx1ZVwiOlwidHJhbnNmb3JtZWRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZHVyYXRpb25cIixcInZhbHVlXCI6XCIxc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1maWxsLW1vZGVcIixcInZhbHVlXCI6XCJmb3J3YXJkc1wifV19LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwidHJhbnNmb3JtZWRcIixcImtleWZyYW1lc1wiOlt7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiZnJvbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZSgxMDAwLCAxMDApXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcInRvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwicm90YXRlKDApXCJ9XX1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcImVudHJ5XCIsXCJrZXlmcmFtZXNcIjpbe1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcImZyb21cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ0cmFuc2xhdGUoMTAwLCAwKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcIjUwJVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZSgtMjAsMClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC44XCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcInRvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidHJhbnNsYXRlKDAsMClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifV19XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGFiZWwuLWVudHJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLW5hbWVcIixcInZhbHVlXCI6XCJlbnRyeVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1kdXJhdGlvblwiLFwidmFsdWVcIjpcIjEuNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1maWxsLW1vZGVcIixcInZhbHVlXCI6XCJmb3J3YXJkc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiLFwidmFsdWVcIjpcImN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiSW1hZ2UuLWJvdW5jZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1kdXJhdGlvblwiLFwidmFsdWVcIjpcIjFzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLW5hbWVcIixcInZhbHVlXCI6XCJib3VuY2VcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcImJvdW5jZVwiLFwia2V5ZnJhbWVzXCI6W3tcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCJmcm9tXCIsXCIyMCVcIixcIjUzJVwiLFwiODAlXCIsXCJ0b1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIixcInZhbHVlXCI6XCJjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidHJhbnNsYXRlM2QoLTIwMCwwLDApXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcInRvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLXdlYmtpdC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ0cmFuc2xhdGUzZCgwLC00cHgsMClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ0cmFuc2xhdGUzZCgwLC00cHgsMClcIn1dfV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI0MDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIyMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZHVyYXRpb25cIixcInZhbHVlXCI6XCIxLjVzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLW5hbWVcIixcInZhbHVlXCI6XCJib3VuY2UyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiSW1hZ2UuZmFzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1zb2xpZC05MDBcXFwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI5MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZS50LTM2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzZcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcImJvdW5jZTJcIixcImtleWZyYW1lc1wiOlt7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiZnJvbVwiLFwiMjAlXCIsXCI1MyVcIixcIjgwJVwiLFwidG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsXCJ2YWx1ZVwiOlwiY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZTNkKC0yMDAwLDAsMClcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1widG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItd2Via2l0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZTNkKDAsLTRweCwwKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZTNkKDAsLTRweCwwKVwifV19XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgIGxldCBhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybS5hbmRyb2lkICYmICFnbG9iYWxbXCJfX3NuYXBzaG90XCJdKSB7XG4gICAgICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIC8qXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuanMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG4qL1xuXG5jb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgIiwiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuLypcbk5hdGl2ZVNjcmlwdCBhZGhlcmVzIHRvIHRoZSBDb21tb25KUyBzcGVjaWZpY2F0aW9uIGZvciBkZWFsaW5nIHdpdGhcbkphdmFTY3JpcHQgbW9kdWxlcy4gVGhlIENvbW1vbkpTIHJlcXVpcmUoKSBmdW5jdGlvbiBpcyBob3cgeW91IGltcG9ydFxuSmF2YVNjcmlwdCBtb2R1bGVzIGRlZmluZWQgaW4gb3RoZXIgZmlsZXMuXG4qL1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vbWFpbi12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbnZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcblxudmFyIHBhZ2UxO1xuXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgLypcbiAgICBUaGlzIGdldHMgYSByZWZlcmVuY2UgdGhpcyBwYWdl4oCZcyA8UGFnZT4gVUkgY29tcG9uZW50LiBZb3UgY2FuXG4gICAgdmlldyB0aGUgQVBJIHJlZmVyZW5jZSBvZiB0aGUgUGFnZSB0byBzZWUgd2hhdOKAmXMgYXZhaWxhYmxlIGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9jbGFzc2VzL191aV9wYWdlXy5wYWdlLmh0bWxcbiAgICAqL1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBcbiAgICAvKlxuICAgIEEgcGFnZeKAmXMgYmluZGluZ0NvbnRleHQgaXMgYW4gb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcGVyZm9ybVxuICAgIGRhdGEgYmluZGluZyBiZXR3ZWVuIFhNTCBtYXJrdXAgYW5kIEphdmFTY3JpcHQgY29kZS4gUHJvcGVydGllc1xuICAgIG9uIHRoZSBiaW5kaW5nQ29udGV4dCBjYW4gYmUgYWNjZXNzZWQgdXNpbmcgdGhlIHt7IH19IHN5bnRheCBpbiBYTUwuXG4gICAgSW4gdGhpcyBleGFtcGxlLCB0aGUge3sgbWVzc2FnZSB9fSBhbmQge3sgb25UYXAgfX0gYmluZGluZ3MgYXJlIHJlc29sdmVkXG4gICAgYWdhaW5zdCB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IGNyZWF0ZVZpZXdNb2RlbCgpLlxuXG4gICAgWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGRhdGEgYmluZGluZyBpbiBOYXRpdmVTY3JpcHQgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9jb3JlLWNvbmNlcHRzL2RhdGEtYmluZGluZy5cbiAgICAqL1xuICAgIHBhZ2UxID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGNyZWF0ZVZpZXdNb2RlbChhcmdzLm9iamVjdCk7XG4gIFxufVxuXG4vKlxuRXhwb3J0aW5nIGEgZnVuY3Rpb24gaW4gYSBOYXRpdmVTY3JpcHQgY29kZS1iZWhpbmQgZmlsZSBtYWtlcyBpdCBhY2Nlc3NpYmxlXG50byB0aGUgZmlsZeKAmXMgY29ycmVzcG9uZGluZyBYTUwgZmlsZS4gSW4gdGhpcyBjYXNlLCBleHBvcnRpbmcgdGhlIG9uTmF2aWdhdGluZ1RvXG5mdW5jdGlvbiBoZXJlIG1ha2VzIHRoZSBuYXZpZ2F0aW5nVG89XCJvbk5hdmlnYXRpbmdUb1wiIGJpbmRpbmcgaW4gdGhpcyBwYWdl4oCZcyBYTUxcbmZpbGUgd29yay5cbiovXG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5cbmV4cG9ydHMuY2hhbmdlUGFnZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc29sZS5sb2coXCJTdG8gcGVyIGVmZmV0dHVhcmUgbGEgcmVxdWVzdCwgcHJlbGV2byBkYXRpIGRhIGZvcm1cIik7XG4gICAgICAgIHZhciBwdWJOYW1lID0gdmlldy5nZXRWaWV3QnlJZChwYWdlMSwgXCJ0ZjFcIikudGV4dDtcbiAgICAgICAgdmFyIGF1dGhOYW1lID0gdmlldy5nZXRWaWV3QnlJZChwYWdlMSwgXCJ0ZjJcIikudGV4dDtcblxuICAgICAgICBpZighcHViTmFtZSB8fCAoIXB1Yk5hbWUgJiYgYXV0aE5hbWUpKVxuICAgICAgICB7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiQXJ0aWNsZSdzIG5hbWUgaXMgcmVxdWlyZWQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJwdWJuYW1lPSBcIisgcHViTmFtZSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHViTmFtZTIgPSBwdWJOYW1lLnJlcGxhY2UoL1xccy9nLCBcIitcIik7XG4gICAgICAgIHZhciBhdXRoTmFtZTIgPSBhdXRoTmFtZS5yZXBsYWNlKC9cXHMvZywgXCIrXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInB1Ym5hbWUgMiA9IFwiKyBwdWJOYW1lMik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXV0aG5hbWUgMiA9IFwiKyBhdXRoTmFtZTIpO1xuXG4gICAgICAgXG4gICAgICAgIGlmIChhdXRoTmFtZTIgPT09IFwiXCIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXR0byBzZW56YSBhdXRob3JlXCIpO1xuICAgICAgICAgICAgdXJsMSA9IFwiaHR0cHM6Ly9hcGkuY3Jvc3NyZWYub3JnL3dvcmtzP3F1ZXJ5LmJpYmxpb2dyYXBoaWM9XCIrcHViTmFtZTI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0dG8gY29uIGF1dGhvcmVcIik7XG5cbiAgICAgICAgICAgIHVybDEgPSBcImh0dHBzOi8vYXBpLmNyb3NzcmVmLm9yZy93b3Jrcz9xdWVyeS5iaWJsaW9ncmFwaGljPVwiK3B1Yk5hbWUyK1wiJnF1ZXJ5LmF1dGhvcj1cIithdXRoTmFtZTI7XG5cbiAgICAgICAgfVxuXG4gICAgdmFyIG5hdmlnYXRpb25PcHRpb25zID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiAnc2hvd0ZpcnN0UmVzdWx0cycsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIHBhcmFtMTogdXJsMSxcbiAgICAgICAgICAgIHBhcmFtMjogcHViTmFtZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKG5hdmlnYXRpb25PcHRpb25zKTtcbiAgICB9XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlldy9DYXJkVmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIik7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiPCEtLVxcblRoZSBtYXJrdXAgaW4gTmF0aXZlU2NyaXB0IGFwcHMgY29udGFpbnMgYSBzZXJpZXMgb2YgdXNlciBpbnRlcmZhY2UgY29tcG9uZW50cywgZWFjaFxcbm9mIHdoaWNoIE5hdGl2ZVNjcmlwdCByZW5kZXJzIHdpdGggYSBwbGF0Zm9ybS1zcGVjaWZpYyBpT1Mgb3IgQW5kcm9pZCBuYXRpdmUgY29udHJvbC5cXG5Zb3UgY2FuIGZpbmQgYSBmdWxsIGxpc3Qgb2YgdXNlciBpbnRlcmZhY2UgY29tcG9uZW50cyB5b3UgY2FuIHVzZSBpbiB5b3VyIGFwcCBhdFxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL2NvbXBvbmVudHMuXFxuLS0+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgY2xhc3M9XFxcImRpb2NhblxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJyZ2IoMjEwLCAyMzEsIDIzOSlcXFwiIHhtbG5zOkNhcmQ9XFxcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1xcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCI+XFxuICAgIDwhLS1cXG4gICAgVGhlIEFjdGlvbkJhciBpcyB0aGUgTmF0aXZlU2NyaXB0IGNvbW1vbiBhYnN0cmFjdGlvbiBvdmVyIHRoZSBBbmRyb2lkIEFjdGlvbkJhciBhbmQgaU9TIE5hdmlnYXRpb25CYXIuXFxuICAgIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvYWN0aW9uLWJhclxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiRG9jIERvY3VtZW50c1xcXCIgaWNvbj1cXFwiXFxcIj48L0FjdGlvbkJhcj5cXG5cXG4gICAgPCEtLVxcbiAgICBUaGUgU3RhY2tMYXlvdXQgc3RhY2tzIFVJIGNvbXBvbmVudHMgb24gdGhlIHNjcmVlbuKAlGVpdGhlciB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cXG4gICAgSW4gdGhpcyBjYXNlLCB0aGUgU3RhY2tMYXlvdXQgZG9lcyB2ZXJ0aWNhbCBzdGFja2luZzsgeW91IGNhbiBjaGFuZ2UgdGhlIHN0YWNraW5nIHRvXFxuICAgIGhvcml6b250YWwgYnkgYXBwbHlpbmcgYSBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgYXR0cmlidXRlIHRvIHRoZSA8U3RhY2tMYXlvdXQ+IGVsZW1lbnQuXFxuICAgIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBOYXRpdmVTY3JpcHQgbGF5b3V0cyBhdFxcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9sYXlvdXQtY29udGFpbmVycy5cXG5cXG4gICAgVGhlc2UgY29tcG9uZW50cyBtYWtlIHVzZSBvZiB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUsIHdoaWNoIHN0eWxlcyB0aGVtIHdpdGggZWxlbWVudCBzZWxlY3RvcnMuXFxuICAgIFRoZSB0aGVtZSBhbHNvIHByb3ZpZGVzIGEgc2V0IG9mIGhlbHBlciBjbGFzcyBuYW1lcyBzdWNoIGFzIHAtMjAsIGgxLCBoMiwgYW5kIHRleHQtY2VudGVyIHRvIGVuaGFuY2Ugc3R5bGluZy5cXG4gICAgWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuICAgIC0tPlxcbiAgICA8Q2FyZDpDYXJkVmlldyBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCIgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxXFxcIj5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIj5cXG4gICAgPEltYWdlIHNyYz1cXFwiaHR0cHM6Ly9pLmliYi5jby9ENGJHWHE0L1NlbnphLXRpdG9sby0xLnBuZ1xcXCIgbG9hZE1vZGU9XFxcImFzeW5jXFxcIiBjbGFzcz1cXFwiZmFzIHQtMzZcXFwiPjwvSW1hZ2U+XFxuXFxuICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlRpdGxlIHB1YmxpY2F0aW9uXFxcIiAgY29sb3I9XFxcIm9yYW5nZXJlZFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJsaWdodHllbGxvd1xcXCIgaWQ9XFxcInRmMVxcXCIgY2xhc3M9XFxcIi1zZWNvbmRhcnlcXFwiLz5cXG4gICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiQWxtb3N0IG9uZSBhdXRob3IuLi5cXFwiICAgY29sb3I9XFxcIm9yYW5nZXJlZFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJsaWdodHllbGxvd1xcXCIgaWQ9XFxcInRmMlxcXCIgY2xhc3M9XFxcIi1zZWNvbmRhcnlcXFwiIC8+XFxuXFxuICAgICAgICA8IS0tIEJ1dHRvbiB0ZXh0PVxcXCJHRVQgUkVRVUVTVFxcXCIgdGFwPVxcXCJ7eyBodHRwUmVxIH19XFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiLz4gLS0+XFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNob3cgcmVzdWx0c1xcXCIgdGFwPVxcXCJjaGFuZ2VQYWdlXFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvQ2FyZDpDYXJkVmlldz5cXG5cXG48L1BhZ2U+XFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL21haW4tcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xuY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG52YXIgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7XG5cbmZ1bmN0aW9uIGdldE1lc3NhZ2UoY291bnRlcikge1xuICAgIGlmIChjb3VudGVyIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIFwiSG9vcnJhYWF5ISBZb3UgdW5sb2NrZWQgdGhlIE5hdGl2ZVNjcmlwdCBjbGlja2VyIGFjaGlldmVtZW50IVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgJHtjb3VudGVyfSBtb250ZWxsaWA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVWaWV3TW9kZWwoYXJncykge1xuICAgIHZhciBwYWdlID0gYXJncztcblxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgdmlld01vZGVsLmNvdW50ZXIgPSA0MjtcbiAgICB2aWV3TW9kZWwubWVzc2FnZSA9IGdldE1lc3NhZ2Uodmlld01vZGVsLmNvdW50ZXIpO1xuXG4gICAgdmlld01vZGVsLm9uVGFwID0gKCkgPT4ge1xuICAgICAgICB2aWV3TW9kZWwuY291bnRlci0tO1xuICAgICAgICB2aWV3TW9kZWwuc2V0KFwibWVzc2FnZVwiLFwicGVzY21hblwiK1wiIFwiK2dldE1lc3NhZ2Uodmlld01vZGVsLmNvdW50ZXIpKTtcblxuICAgIH07XG5cbiAgICB2aWV3TW9kZWwuaHR0cFJlcSA9ICgpID0+e1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJTdG8gcGVyIGVmZmV0dHVhcmUgbGEgcmVxdWVzdCwgcHJlbGV2byBkYXRpIGRhIGZvcm1cIik7XG4gICAgICAgIHZhciBwdWJOYW1lID0gdmlldy5nZXRWaWV3QnlJZChwYWdlLCBcInRmMVwiKS50ZXh0O1xuICAgICAgICB2YXIgYXV0aE5hbWUgPSB2aWV3LmdldFZpZXdCeUlkKHBhZ2UsIFwidGYyXCIpLnRleHQ7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVibmFtZT0gXCIrIHB1Yk5hbWUpO1xuICAgICAgICBcbiAgICAgICAgdmFyIHB1Yk5hbWUyID0gcHViTmFtZS5yZXBsYWNlKC9cXHMvZywgXCIrXCIpO1xuICAgICAgICB2YXIgYXV0aE5hbWUyID0gYXV0aE5hbWUucmVwbGFjZSgvXFxzL2csIFwiK1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwdWJuYW1lIDIgPSBcIisgcHViTmFtZTIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1dGhuYW1lIDIgPSBcIisgYXV0aE5hbWUyKTtcblxuICAgICAgIFxuICAgICAgICBpZiAoYXV0aE5hbWUyID09PSBcIlwiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0dG8gc2VuemEgYXV0aG9yZVwiKTtcbiAgICAgICAgICAgIHVybDEgPSBcImh0dHBzOi8vYXBpLmNyb3NzcmVmLm9yZy93b3Jrcz9xdWVyeS5iaWJsaW9ncmFwaGljPVwiK3B1Yk5hbWUyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldHRvIGNvbiBhdXRob3JlXCIpO1xuXG4gICAgICAgICAgICB1cmwxID0gXCJodHRwczovL2FwaS5jcm9zc3JlZi5vcmcvd29ya3M/cXVlcnkuYmlibGlvZ3JhcGhpYz1cIitwdWJOYW1lMitcIiZxdWVyeS5hdXRob3I9XCIrYXV0aE5hbWUyO1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHVybDEsXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmljaGllc3RhIGVmZmV0dHVhdGFcIik7XG5cbiAgICAgICAgICAgIC8qdmFyIG1hbXQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaXBvIGRpIG1hbW10MiBcIisgdHlwZW9mKG1hbXQpKTtcblxuXG4gICAgICAgICAgICB2YXIgY29udGVudXRvID0gSlNPTi5wYXJzZShtYW10KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGlwbyBjb250ZW51dG86IFwiICsgdHlwZW9mKGNvbnRlbnV0bykpO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBzb3J0ID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdmFyIGNoaXRhbW11byA9IHNvcnQubWVzc2FnZS5pdGVtc1swXS50aXRsZTsvL1snaXRlbXMnXVswXS5yZWZlcmVuY2UtY291bnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoaWFtbXVvID0gXCIrIGNoaXRhbW11byk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2V0KFwicmlzcG9zdGFcIiwgY2hpdGFtbXVvKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidCdhcHBvIGFtb29vb29cIik7XG4gICAgICAgICAgICAvLyBBcmd1bWVudCAocmVzcG9uc2UpIGlzIEh0dHBSZXNwb25zZVxuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yZSBkaW8gcG9yY28gbWFkb29uYSBcIisgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3TW9kZWw7XG59XG5cbmV4cG9ydHMuY3JlYXRlVmlld01vZGVsID0gY3JlYXRlVmlld01vZGVsO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7IC8vIHBlciBhY2NlZGVyIGFsbGEgcGFnaW5hIHdlYiB2aXNpYmlsZSB4bWxcbmNvbnN0IGh0dHBNb2R1bGUyID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL3Nob3dGaXJzdFJlc3VsdHMtdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XG5jb25zdCBmcm9tT2JqZWN0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLmZyb21PYmplY3Q7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5jb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG52YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG5jb25zdCB1dGlsc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xuY29uc3QgcHJvY2VzcyA9IHJlcXVpcmUoJ3Byb2Nlc3MnKTtcbnZhciBPYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcblxuLy8vbGV0IHNjaG9sYXIgPSByZXF1aXJlKCdnb29nbGUtc2Nob2xhci1leHRlbmRlZCcpO1xuXG5cbnZhciBwYWdlRGF0YSA9IG5ldyBPYnNlcnZhYmxlKCk7XG52YXIgaXRlbXNWaWV3ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG5cblxudmFyIGRvaXNfZnJvbV9zY29wdXMgPSBbXTtcblxuYXN5bmMgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncylcbntcbiAgICBjb25zb2xlLmxvZyhcIkVOVFJPIElOIEFVVE9SRUVFRVwiKTtcbiAgICBkb2lzX2Zyb21fc2NvcHVzID0gW107XG5cbiAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHZhciBnb3REYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcblxuICAgIHZhciBhdXRvcmUgPSBnb3REYXRhLnBhcmFtMTtcbiAgICB2YXIgb3JjaWQgPSBnb3REYXRhLnBhcmFtMjtcbiAgICB2YXIgZmFtaWx5X25hbWVzID0gZ290RGF0YS5wYXJhbTM7XG5cbiAgICB2YXIgYXV0aG9yTmFtZSA9IFwiXCI7XG4gICAgYXV0aG9yTmFtZSArPSBhdXRvcmU7XG5cbiAgICB2YXIgaW5kaWNlID0gMDtcbiAgICB2YXIgYWZmaWwgPSBcIlwiO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1dG9yZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoYXV0b3JlW2ldID09ICcsJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmRpY2UgPSBpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5kaWNlIHRyb3ZhdG8gPSBcIitpbmRpY2UrXCIgbGVuZ3RoOiBcIithdXRvcmUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gICAgXG4gICAgfVxuICAgIFxuICAgIGFmZmlsICs9IGF1dGhvck5hbWUuc2xpY2UoaW5kaWNlKzEpO1xuXG4gICAgdmFyIGF1dGhxdWVyeSA9IGZhbWlseV9uYW1lcztcblxuICAgIGNvbnNvbGUubG9nKFwiYXV0aG9yIG5hbWUgPSBcIithdXRocXVlcnkpO1xuICAgICBjb25zb2xlLmxvZyhcIkFGRklMIDogXCIrYWZmaWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiTk9NRSBSSUNFVlVUTzpcIiArYXV0b3JlK1wiIG9yY2lkOiBcIitvcmNpZCk7XG5cbiAgICBjb25zdCB2bSA9IGZyb21PYmplY3Qoe1xuICAgICAgICBhdXRob3JOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcblxuICAgIFxuICAgICAgICAgICAgdmFyIHVybHNjb3B1cyA9IFwiaHR0cHM6Ly9hcGkuZWxzZXZpZXIuY29tL2NvbnRlbnQvc2VhcmNoL3Njb3B1c1wiO1xuICAgICAgICAgICAgdmFyIGtleSA9IFwiP2FwaUtleT01ZDRlODJkZTFlYTg3ZTBhYjEwYWFiODEzMDg3MTc4Y1wiO1xuICAgICAgICAgICAgdmFyIGpzID0gXCImaHR0cEFjY2VwdD1hcHBsaWNhdGlvbi9qc29uXCI7XG5cbiAgICAgICAgICAgIHVybHNjb3B1cyArPSBrZXk7XG4gICAgICAgICAgICB1cmxzY29wdXMgKz0ganM7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSBcIiZxdWVyeT1cIjtcbiAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHVybGNvbXBsZXRhID0gdXJsc2NvcHVzIDsvLytrZXkrb3JjaWQ7XG4gIFxuICAgICAgICAgICAgYWZmaWwgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZiggKGF1dGhxdWVyeSE9PSBcIlwiKSAmJiAob3JjaWQhPT1cIlwiKSAmJiAoYWZmaWwhPT1cIlwiKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmxjb21wbGV0YSs9cXVlcnkrXCJBVVRITEFTVE5BTUUoXCIrYXV0aHF1ZXJ5K1wiKSBhbmQgT1JDSUQoXCIrb3JjaWQrXCIpIGFuZCBBRkZJTChcIithZmZpbCtcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoKGF1dGhxdWVyeSE9PSBcIlwiKSAmJiAob3JjaWQhPT1cIlwiKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmxjb21wbGV0YSs9cXVlcnkrXCJBVVRITEFTVE5BTUUoXCIrYXV0aHF1ZXJ5K1wiKSBhbmQgT1JDSUQoXCIrb3JjaWQrXCIpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXJsY29tcGxldGE6IFwiK3VybGNvbXBsZXRhKTtcblxuICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbWFkb25uYXB1dHRhbmEgPSBhd2FpdCAgaHR0cE1vZHVsZTIucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgdXJsOiB1cmxjb21wbGV0YSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJ9LCAoZSkgPT4ge2NvbnNvbGUubG9nKFwiZXJyb3JlXCIpO30pOyAvL2ZldGNoKHVybGNvbXBsZXRhKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRpb3BvcmNvbWFpYWxlKTtcbiAgICAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShtYWRvbm5hcHV0dGFuYS5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udHJvbGxvXCIpO1xuXG4gICAgICAgICAgICAgICB2YXIgYXJ0aWNsZVZpZXdzID0gW107XG5cbiAgICAgICAgICAgICAgIHZhciBsZW5fYXJ0Y2lsZXMgPSBqc29uW1wic2VhcmNoLXJlc3VsdHNcIl0uZW50cnkubGVuZ3RoO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWFudGl0w6AgZGkgYXJ0aWNvbGk6IFwiKyBsZW5fYXJ0Y2lsZXMpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5fYXJ0Y2lsZXM7IGorKykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlVmlld3MucHVzaCh7YXJ0aWNsZVRpdGxlOiBqc29uW1wic2VhcmNoLXJlc3VsdHNcIl1bXCJlbnRyeVwiXVtqXVtcImRjOnRpdGxlXCJdLCBhdXRob3JzTmFtZTogXCJBdXRob3I6IFwiK2pzb25bXCJzZWFyY2gtcmVzdWx0c1wiXVtcImVudHJ5XCJdW2pdW1wiZGM6Y3JlYXRvclwiXSxpdGVtRGVzYyA6XCJQdWJsaXNoZWQgaW46IFwiK2pzb25bXCJzZWFyY2gtcmVzdWx0c1wiXVtcImVudHJ5XCJdW2pdW1wicHJpc206cHVibGljYXRpb25OYW1lXCJdfSk7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZG9pc19mcm9tX3Njb3B1cy5wdXNoKGpzb25bXCJzZWFyY2gtcmVzdWx0c1wiXVtcImVudHJ5XCJdW2pdW1wicHJpc206ZG9pXCJdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFydGljbGVWaWV3cyk7XG5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHBhZ2VEYXRhO1xuXG4gICAgICAgICAgICBwYWdlRGF0YS5zZXQoXCJhcnRpY2xlVmlld3NcIiwgYXJ0aWNsZVZpZXdzKTtcblxufVxuXG5cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcblxuXG5leHBvcnRzLmdvVG9Eb2kgPSBmdW5jdGlvbihhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApO1xuXG4gICAgaWYoIWRvaXNfZnJvbV9zY29wdXNbaW5kZXhdKVxuICAgIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlRoZXJlIGlzIG5vIGRvaSBhdmFsaWFibGVcIik7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdXRpbHNNb2R1bGUub3BlblVybChcImh0dHBzOi8vZG9pLm9yZy9cIitkb2lzX2Zyb21fc2NvcHVzW2luZGV4XSk7XG59XG5cbmV4cG9ydHMuZ29CYWNrID0gZnVuY3Rpb24oYXJncylcbnsgXG4gICAgY29uc29sZS5sb2coXCJwcm92YVwiKTtcbiAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcbn0gOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VBdXRob3IuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9wYWdlQXV0aG9yLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvUmFkTGlzdFZpZXcubGlzdFZpZXdMYXlvdXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9MaXN0Vmlld0xpbmVhckxheW91dFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgIHhtbG5zOkNhcmQ9XFxcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1xcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+PCEtLSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiLS0+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkF1dGhvcidzIGFydGljbGVzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRleHQ9XFxcIkJhY2tcXFwiIHRhcD1cXFwiZ29CYWNrXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcblxcblxcbjxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwicmdiKDIxMCwgMjMxLCAyMzkpXFxcIj5cXG48bHY6UmFkTGlzdFZpZXcgaXRlbXM9XFxcInt7IGFydGljbGVWaWV3cyB9fVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiIGl0ZW1UYXA9XFxcImdvVG9Eb2lcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJvcmFuZ2VyZWRcXFwiPlxcbiAgICA8bHY6UmFkTGlzdFZpZXcubGlzdFZpZXdMYXlvdXQ+XFxuICAgICAgICA8bHY6TGlzdFZpZXdMaW5lYXJMYXlvdXQgc2Nyb2xsRGlyZWN0aW9uPVxcXCJWZXJ0aWNhbFxcXCIvPlxcbiAgICA8L2x2OlJhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0PlxcbiAgICA8bHY6UmFkTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgYXJ0aWNsZVRpdGxlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIi1lbnRyeVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgYXV0aG9yc05hbWUgfX1cXFwiICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIi1lbnRyeVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbURlc2MgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAgY2xhc3M9XFxcIi1lbnRyeVxcXCIvPiBcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cXFwiMlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJCbGFja1xcXCIvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPCEtLTxCdXR0b24gdGV4dD1cXFwiSW5mbyBhdXRob3JzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3J1b3VwLWl0ZW0tdGV4dFxcXCIgdGFwPVxcXCJzaG93SW5mb0F1dGhvcnNcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNlZSByZWZlcmVuY2VzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3J1b3VwLWl0ZW0tdGV4dFxcXCIgdGFwPVxcXCJzaG93UmVmc1xcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIExhYmVsIHRleHQ9XFxcInt7IGF1dGhvcnNOYW1lIH19XFxcIiAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCItZW50cnlcXFwiLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW1EZXNjIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgIGNsYXNzPVxcXCItZW50cnlcXFwiLz4gLS0+XFxuICAgIDwvbHY6UmFkTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbjwvbHY6UmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlQXV0aG9yLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VBdXRob3IueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTsgLy8gcGVyIGFjY2VkZXIgYWxsYSBwYWdpbmEgd2ViIHZpc2liaWxlIHhtbFxuY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBodHRwTW9kdWxlMiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xuY29uc3QgZnJvbU9iamVjdCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5mcm9tT2JqZWN0O1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcbnZhciBwYWdlRGF0YSA9IG5ldyBPYnNlcnZhYmxlKCk7XG52YXIgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cbmNvbnN0IG1vZGFsVmlld01vZHVsZSA9IFwibnMtdWktY2F0ZWdvcnkvbW9kYWwtdmlldy9iYXNpY3MvbW9kYWwtdmlldy1wYWdlXCI7XG5jb25zdCBwbGF0Zm9ybU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpO1xuY29uc3QgQ29sb3IgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiKS5Db2xvcjtcbmNvbnN0IGNvbG9ycyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2tub3duLWNvbG9yc1wiKTtcblxuXG5cbnZhciBwYWdlRGF0YSA9IG5ldyBPYnNlcnZhYmxlKCk7XG52YXIgaXRlbXNWaWV3ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG5cbnZhciBwYXNzVG9TY29wdXMgPSBbXTtcbnZhciBvcmNpZHNfY29tcGxldGkgPSBbXTtcbnZhciByZWZlcmVuY2VzID0gW107XG52YXIgZmxhZ19yZWZzID0gZmFsc2U7XG5cbnZhciB1cmxfdG92aXNpdCA9IFtdO1xuXG52YXIgb3JjaWRzX2luY29tcGxldGkgPSBbXTtcblxudmFyIGZhbWlseV9uYW1lc8KgPSBbXTtcblxuYXN5bmMgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncylcbntcbiAgICBpdGVtc1ZpZXcgPSBbXTtcblxuICAgIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG5cbiAgICB2YXIgZ290RGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG5cbiAgICB2YXIgcmVzdWx0cyA9IGdvdERhdGEucGFyYW0xO1xuICAgIHZhciBpbmRleCA9IGdvdERhdGEucGFyYW0yO1xuXG4gICAgdmFyIGRlc2NyID0gW107XG5cbiAgICBcbiAgICB2YXIgVVJMID0gXCJcIjtcblxuICAgIHZhciBzaG93UGFnZUluZm9BdXRob3JzID0gW107XG5cbnZhciBhdXRoX3Nob3cgPSBbXTtcblxudmFyIHRpdGxlID0gXCJcIjtcblxudmFyIGZsYWdfZmFpbGVkID0gZmFsc2U7XG5cbnZhciBhdXRob3JzMiA9IFtdO1xuXG4vKiBBenplcmFtZW50byB2YXJpYWJpbGkgZ2xvYmFsaSBwZXIgZXZpdGFyZSBhcHBlbmRpbmcgKi9cbnZhciBhZmZpbGlhdGlvbnPCoD0gW107XG5wYXNzVG9TY29wdXMgPSBbXTtcbm9yY2lkc19jb21wbGV0aSA9IFtdO1xucmVmZXJlbmNlcyA9IFtdO1xuZmxhZ19yZWZzID0gZmFsc2U7XG51cmxfdG92aXNpdCA9IFtdO1xub3JjaWRzX2luY29tcGxldGkgPSBbXTtcbmZhbWlseV9uYW1lc8KgPSBbXTtcblxuICAgIC8vY29uc29sZS5sb2coXCJQYXJhbWV0cm8gMSByZWM6IFwiK2dvdERhdGEucGFyYW0xKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiUGFyYW1ldHJvIDIgcmVjOiBcIitnb3REYXRhLnBhcmFtMik7XG5cbiAgICBjb25zb2xlLmxvZyhcIkRhdGEgcmVjaWV2ZWQ6IFwiK2dvdERhdGEucGFyYW0xK1wiXFx0MjogXCIrZ290RGF0YS5wYXJhbTIrXCIgdHlwZTogXCIrdHlwZW9mKGluZGV4KSk7XG5cbiAgICB2YXIgYXV0aG9yczEgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiBhdXRob3JzOiBcIityZXN1bHRzLmF1dGhvci5sZW5ndGgpO1xuXG4gICAgdmFyIG9yY2lkcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmF1dGhvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL2F1dGhvcnMxLnB1c2goe25hbWU6IHJlc3VsdHMuYXV0aG9yW2ldLmZhbWlseStcIiBcIityZXN1bHRzLmF1dGhvcltpXS5naXZlbn0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXV0aG9yW1wiK2krXCJdOiBcIithdXRob3JzMVtpXSk7ICAgXG4gICAgICAgIGlmKCFyZXN1bHRzLmF1dGhvclswXS5PUkNJRClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBpZihyZXN1bHRzLmF1dGhvcltpXS5PUkNJRClcbiAgICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9yY2lkIGZvciBcIitpK1wiIGV4aXN0c1wiKTtcbiAgICAgICAgc2hvd1BhZ2VJbmZvQXV0aG9ycy5wdXNoKHJlc3VsdHMuYXV0aG9yW2ldLk9SQ0lEKTtcbiAgICAgICAgb3JjaWRzX2NvbXBsZXRpLnB1c2gocmVzdWx0cy5hdXRob3JbaV0uT1JDSUQpO1xuXG4gICAgICAgIHZhciBsZXR0ZXJzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgayA9IDE3OyBrIDwgc2hvd1BhZ2VJbmZvQXV0aG9yc1tpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIGxldHRlcnMrPXJlc3VsdHMuYXV0aG9yW2ldLk9SQ0lEW2tdO1xuICAgICAgICB9XG4gICAgICAgIG9yY2lkc1tpXSA9IGxldHRlcnM7XG4gICAgICAgLy8gY29uc29sZS5sb2coXCJsZXR0ZXJzOlwiKTtcbiAgICB9XG4gICAgfVxuXG4gICAgb3JjaWRzX2luY29tcGxldGkgPSBvcmNpZHM7XG5cbiAgICB2YXIgZmxhZ19zY29wdXMgPSBmYWxzZTtcblxuXG4gICAgY29uc29sZS5sb2coXCJjaGVjayBhZmZpbGlhdGlvbnNcIik7XG4gICAgaWYob3JjaWRzWzBdKVxuICAgIHtcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IG9yY2lkcy5sZW5ndGg7IHQrKykge1xuXG4gICAgICAgIHZhciB1cmxzY29wdXMgPSBcImh0dHBzOi8vYXBpLmVsc2V2aWVyLmNvbS9jb250ZW50L3NlYXJjaC9hdXRob3JcIjtcbiAgICAgICAgdmFyIGtleSA9IFwiP2FwaUtleT01ZDRlODJkZTFlYTg3ZTBhYjEwYWFiODEzMDg3MTc4Y1wiO1xuICAgICAgICB2YXIgb3JjaWQgPSBcIiZxdWVyeT1PUkNJRFwiO1xuICAgIFxuICAgICAgICAvL3ZhciBvcmNpZDEgPSBcIjAwMDAtMDAwMS03MDMxLTkyMFhcIjtcbiAgICAgICBcbiAgICAgICAgdmFyIHVybGNvbXBsZXRhID0gdXJsc2NvcHVzK2tleStvcmNpZCtcIihcIitvcmNpZHNbdF0rXCIpXCI7XG4gICAgICAgIHZhciBqcyA9IFwiJmh0dHBBY2NlcHQ9YXBwbGljYXRpb24vanNvblwiO1xuICAgICAgICB1cmxjb21wbGV0YSArPSBqcztcbiAgICAgICAgXG4gICAgICAgIC8vdmFyIHVybGNvbXBsZXRhID1cImh0dHBzOi8vYXBpLmVsc2V2aWVyLmNvbS9jb250ZW50L3NlYXJjaC9hdXRob3I/YXBpS2V5PTVkNGU4MmRlMWVhODdlMGFiMTBhYWI4MTMwODcxNzhjJnF1ZXJ5PU9SQ0lEKDAwMDAtMDAwMS03MDMxLTkyMFgpJmh0dHBBY2NlcHQ9YXBwbGljYXRpb24vanNvblwiO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgcXVlcnk6IFwiK3VybGNvbXBsZXRhKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlMiA9IGF3YWl0ICBodHRwTW9kdWxlMi5yZXF1ZXN0KHtcbiAgICAgICAgIHVybDogdXJsY29tcGxldGEsXG4gICAgICAgICBtZXRob2Q6IFwiR0VUXCJ9LCAoZSkgPT4ge2NvbnNvbGUubG9nKFwiZXJyb3JlXCIpO30pOyAvL2ZldGNoKHVybGNvbXBsZXRhKTtcbiBcbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlMi5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRyb2xsb1wiKTtcblxuICAgICAgICBpZihqc29uW1wic2VydmljZS1lcnJvclwiXSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUkVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMuYXV0aG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yczEucHVzaCh7bmFtZTogcmVzdWx0cy5hdXRob3JbaV0uZmFtaWx5K1wiIFwiK3Jlc3VsdHMuYXV0aG9yW2ldLmdpdmVufSk7XG4gICAgICAgICAgICAgICAgZmFtaWx5X25hbWVzLnB1c2gocmVzdWx0cy5hdXRob3JbaV0uZmFtaWx5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZsYWdfc2NvcHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFmZmlsID0gXCJcIjtcbiAgICAgICAgaWYgKGpzb25bXCJzZWFyY2gtcmVzdWx0c1wiXVtcIm9wZW5zZWFyY2g6dG90YWxSZXN1bHRzXCJdPjApXG4gICAgICAgIHtcbiAgICAgICAgIGFmZmlsID0ganNvbltcInNlYXJjaC1yZXN1bHRzXCJdW1wiZW50cnlcIl1bXCIwXCJdW1wiYWZmaWxpYXRpb24tY3VycmVudFwiXVtcImFmZmlsaWF0aW9uLW5hbWVcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZCBhZmZpbGlhdGlvbiBmb3IgXCIrdCk7XG4gICAgICAgIGF1dGhvcnMxLnB1c2goe25hbWU6IHJlc3VsdHMuYXV0aG9yW3RdLmZhbWlseStcIiBcIityZXN1bHRzLmF1dGhvclt0XS5naXZlbitcIiwgXCIrYWZmaWx9KTtcbiAgICAgICAgZmFtaWx5X25hbWVzLnB1c2gocmVzdWx0cy5hdXRob3JbdF0uZmFtaWx5KTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMuYXV0aG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhdXRob3JzMS5wdXNoKHtuYW1lOiByZXN1bHRzLmF1dGhvcltpXS5mYW1pbHkrXCIgXCIrcmVzdWx0cy5hdXRob3JbaV0uZ2l2ZW59KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZihmbGFnX3Njb3B1cylcbiAgICB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiQXV0aGVudGljYXRpb24gRWxzZXZpZXJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW4gb3JkZXIgdG8gc2hvdyB0aGUgYXV0aG9yJ3MgYWZmaWxhdGlvbiB5b3UgbXVzdCBsb2dnZWQgd2l0aCBTY29wdXNcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH07XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IG11c3QgbG9nZ2VkIHdpdGggU2NvcHVzIVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGFmZmlsaWF0aW9ucyBmaW5pc2hlZFwiKTtcbiAgICAgcGFzc1RvU2NvcHVzID0gYXV0aG9yczE7XG5cbiAgICAgXG4gICAgIGNvbnNvbGUubG9nKFwic3RhcnQgZ29vZ2xlIHNjaG9sYXIgcXVlcnlpbmcgMVwiKTtcblxuICAgICBjb25zb2xlLmxvZyhcImxlbmd0aD0gXCIrYXV0aG9yczEubGVuZ3RoKyBcIlxcblwiK2F1dGhvcnMxWzBdW1wibmFtZVwiXSk7XG5cbiAgICAvLyBSSUVNUElNRU5UTyBTVFJVVFRVUkEgREFUSSBQRVIgUEFSVEUgVklTVUFMRVxuICAgIC8vIGZvciAobGV0IG0gPSAwOyBtIDwgYXV0aG9yczEubGVuZ3RoOyBtKyspIHtcbiAgICAvLyAgICAgICAgIC8vaXRlbXNWaWV3LnB1c2goe2l0ZW1OYW1lOiBhdXRob3JzMVtrXS5uYW1lfSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImF1dGhvcltcIittK1wiXTogXCIrYXV0aG9yczFbbV1bXCJuYW1lXCJdKTtcbiAgICAvLyB9XG5cbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0IGdvb2dsZSBzY2hvbGFyIHF1ZXJ5aW5nXCIpO1xuXG5cblxuXG4gICAgXG5cbiAgICAvL1ByZWxldm8gdXJsIGRlbCBzaXRvIG9yaWdpbmFsZSBORUxMQSBSRUxBWklPTkUgRElSRSBDSEUgREVNQU5EQSBBIERPSS5vcmcgY29tZSBzZSBmb3NzZSB1bidhbHRyYSBmb250ZVxuICAgIFVSTCA9IHJlc3VsdHMuVVJMO1xuICAgIHVybF90b3Zpc2l0LnB1c2goVVJMKTtcbiAgICAvL3JldHJpZXZpbmcgYXJ0aWNsZSdzIHRpdGxlXG4gICAgdGl0bGUgPSByZXN1bHRzLnRpdGxlO1xuXG5cbiAgICBhdXRoX3Nob3cgPSBhdXRob3JzMTtcblxuICAgIHZhciBpc2JuID0gXCJcIjtcblxuXG4gICAgaWYgKHJlc3VsdHMuSVNCTiAmJiByZXN1bHRzLklTQk5bXCIxXCJdKVxuICAgIGlzYm4gPSArcmVzdWx0cy5JU0JOW1wiMVwiXTtcbiAgICBlbHNlIGlmIChyZXN1bHRzLklTQk4gJiYgcmVzdWx0cy5JU0JOW1wiMFwiXSlcbiAgICBpc2JuID0gK3Jlc3VsdHMuSVNCTltcIjBcIl07XG4gICAgZWxzZVxuICAgIGNvbnNvbGUubG9nKFwiTlUgU0UgUMOyIGZhIG51IGNhenpcIik7XG5cbiAgICBjb25zb2xlLmxvZyhcImlzYm4gXCIraXNibik7XG5cblxuICBjb25zb2xlLmxvZyhcInNlYWVyY2hRdWVyeTogXCIraXNibik7ICAgIFxuICAgIFxuICB2YXIgc2VhcmNoUXVlcnkgPSAgaXNibjsvLyAgXCI5NzgtMy0wMzAtMzQ5MTQtMVwiOyAvL1wiJChcIiNzZWFyY2hfZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICB2YXIgdGh1bWIyID0gW107XG4gIHZhciBhdXRob3JzID0gW107XG4gIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG5cblxuICAvL3ZhciBzZWFyY2hRdWVyeSA9ICQoXCIjc2VhcmNoX3R4dFwiKS52YWwoKTtcbiAgLy9zZWFyY2hRdWVyeSA9IHNlYXJjaFF1ZXJ5LnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcblxuICAvKmlmICghc2VhcmNoUXVlcnkpIHtcbiAgICBzZWFyY2hRdWVyeSA9IFwicGFsZW9cIjtcbiAgfSovXG4gIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdDtcbiBcblxuICAgIGlmKHNlYXJjaFF1ZXJ5KVxuICAgIHtcbiAgICB2YXIgdXJsID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9XCIgKyBzZWFyY2hRdWVyeTtcbiAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgcXVlcnk6IFwiKyB1cmwpO1xuXG4gICAgLy8gaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAvLyAgICAgdXJsOiB1cmwsXG4gICAgLy8gICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIC8vIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBodHRwTW9kdWxlLnJlcXVlc3Qoe3VybDogdXJsLCBtZXRob2Q6IFwiR0VUXCJ9LChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcmUgZGlvIHBvcmNvIG1hZG9vbmEgXCIrIGUpfSk7XG5cbiAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIlJFUVVFU1QgT0sgZnJvbSBHT09HTEUgQk9PS1NcIik7XG4gICAgICBpZihqc29uLnRvdGFsSXRlbXMgPT0gMClcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBpdGVtc1wiKTtcbiAgICAgICAgZmxhZ19mYWlsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgY29uc29sZS5sb2coXCJsZW5ndGgganNvbjogXCIrIGpzb24uaXRlbXMubGVuZ3RoKTtcbiAgICAgIHZhciBodG1sY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgdGh1bWIgPSBcIlwiO1xuICAgICAgdmFyIGF1dGhvciA9IFwiXCI7XG4gICAgICB2YXIgZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgdmFyIGlzYm4gPSBcIlwiO1xuICAgICAgdmFyIHByaWNlID0gXCJcIjtcbiAgICAgIHZhciB2YWx1dGEgPSBcIlwiO1xuXG4gICAgICB2YXIgZWRpdG9ycyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCAgaSA9IDA7IGkgPCBqc29uLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDZXJjbyBpbW1hZ2luaSBlZCBhdXRvcmkuLi5cIik7XG4gICAgICAgIGlmIChqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uaW1hZ2VMaW5rcykge1xuICAgICAgICAgIHRodW1iID0ganNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmltYWdlTGlua3Muc21hbGxUaHVtYm5haWw7XG4gICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZSBib29rIGFjaGlldmVkXCIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGh1bWIgPSBcImh0dHA6Ly9pLmltZ3VyLmNvbS9vTTNNZEFpLnBuZ1wiO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgYm9vayB1bmRlZmluZWRcIik7XG5cbiAgICAgICAgICAvL3RodW1iID0gJ2h0dHA6Ly9zbGVtcy1vbGRib3lzLm9yZy51ay9saWJyYXJ5L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzExL2xpYnJhcnlfbm9jb3Zlci5qcGcnXG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIklNTUFHSU5FOiBcIit0aHVtYik7XG4gICAgICAgIHZhciB0aHVtYl90ZW1wID0gdGh1bWIuc2xpY2UoMCwgNCkgKyBcInNcIiArIHRodW1iLnNsaWNlKDQpO1xuICAgIFxuXG4gICAgICAgIHRodW1iMi5wdXNoKHtpbWFnZVVyaTogdGh1bWJfdGVtcH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIklNTUFHSU5FOiBcIit0aHVtYl90ZW1wKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJNQU5OQUcgQSBNQVJPTk5OO1wiKTtcblxuXG4gICAgICAgIHZhciB0aXRsZV9ib29rID0gXCJcIjtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyB0aXRsZSBib29rXCIpO1xuICAgICAgICAvLyBBVVRIT1JcbiAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uLml0ZW1zW2ldW1widm9sdW1lSW5mb1wiXSk7XG4gICAgICAgIGlmKCFqc29uLml0ZW1zW2ldW1widm9sdW1lSW5mb1wiXSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOdW4gY3N0YW5uIGF1dG9yaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRlJBIE9SQSBDRVJDT09PT09cIik7XG4gICAgICAgICAgICBpZighanNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmF1dGhvcnMpXG4gICAgICAgICAgICAgICAgZWRpdG9ycy5wdXNoKFwiaW5mb3JtYXRpb24gbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VyY28gYXV0b3JpLCBsZW5ndGg6IFwiKyBqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uYXV0aG9ycy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby5hdXRob3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBlZGl0b3JzLnB1c2goanNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmF1dGhvcnNbal0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRob3IgW1wiK2orXCJdOiBcIitlZGl0b3JzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmKCFqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8udGl0bGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZWRzIGluZm9ybWF0aW9uc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aXRsZV9ib29rICs9IGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvL2Rlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uID0ganNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZyhcInB1Z2hpblwiKTtcbiAgICAgICAgZGVzY3IucHVzaCh7ZGVzYzogZGVzY3JpcHRpb259KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwdWdoaTJuOiBcIitkZXNjci5sZW5ndGgpO1xuXG4gICAgXG5cbiAgICAgICAgaWYoZWRpdG9ycy5sZW5ndGg+PTApXG4gICAgICAgICAgICBhdXRob3JzLnB1c2goe2F1dGhvcjogXCJFZHM6IFwiKyBlZGl0b3JzWzBdK1wiIGV0IGFsLlwifSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGF1dGhvcnMucHVzaCh7YXV0aG9yOiBlZGl0b3JzWzBdfSk7XG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICAvKmNvbnNvbGUubG9nKFwiZGVzY3JpcHRpb246IFwiK2Rlc2NyaXB0aW9uKTsgKi9cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aHVtYjJbMF0sdGh1bWIyWzFdLHRodW1iMlsyXSk7XG4gICAgICAgIFxuICAgICAgICBpc2JuID0ganNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmluZHVzdHJ5SWRlbnRpZmllcnNbMF0uaWRlbnRpZmllcjtcbiAgICAgICAgY29uc29sZS5sb2coXCJpc2JuOiBcIitpc2JuKTtcblxuICAgICAgICBpZihqc29uLml0ZW1zW2ldLnNhbGVJbmZvICYmIGpzb24uaXRlbXNbaV0uc2FsZUluZm8ubGlzdFByaWNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBwcmljZSA9IGpzb24uaXRlbXNbaV0uc2FsZUluZm8ubGlzdFByaWNlLmFtb3VudDtcbiAgICAgICAgICAgIHZhbHV0YSA9IGpzb24uaXRlbXNbaV0uc2FsZUluZm8ubGlzdFByaWNlLmN1cnJlbmN5Q29kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHByaWNlPSBcIk5vdCBmb3Igc2FsZVwiO1xuICAgICAgICB2YWx1dGEgPSBcIlwiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJpY2U6IFwiK3ByaWNlK1wiIFwiK3ZhbHV0YSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9jZXNzbyBkaSByaWNlcmNhIHRlcm1pbmF0b1wiKTtcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpemUgb2YgdGh1bWIyOiBcIit0aHVtYjIubGVuZ3RoKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vc2V0dG8gbCdhcnJheSBnbG9iYWxlIGRpIGF1dG9yaSBjb24gcXVlbGxvIGxvY2FsZVxuICAgICAgYXV0aG9yc19jb21wbGV0ZSA9IGVkaXRvcnM7XG5cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIlVTQ0lUT1wiKTtcblxuICAgIGZ1bmN0aW9uIHRydW5jKHMsIG4pIHtcbiAgICAgICAgdmFyIHQgPSBzLmluZGV4T2YoXCIgXCIsIG4pO1xuICAgICAgICBpZiAodCA9PSAtMSkgcmV0dXJuIHM7XG4gICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCB0KSArIFwiLi4uXCI7XG4gICAgfVxuXG5cblxuICAgIC8vY29uc29sZS5sb2coXCJhbmFsaXpvIHJlZnNcIik7XG4gICAgaWYoIXJlc3VsdHMucmVmZXJlbmNlKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJubyByZWZzXCIpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJlc3VsdHMucmVmZXJlbmNlLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICByZWZlcmVuY2VzLnB1c2goe3JlZk5hbWU6IHJlc3VsdHMucmVmZXJlbmNlW2tdLnVuc3RydWN0dXJlZCwgRE9JOiByZXN1bHRzLnJlZmVyZW5jZVtrXS5ET0l9KTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlZmVyZW5jZXMpO1xuICAgICAgICBmbGFnX3JlZnMgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgXG5cbn1cbmlmKCFzZWFyY2hRdWVyeSB8fCAoZmxhZ19mYWlsZWQgJiYgIXNlYXJjaFF1ZXJ5KSlcbntcbiAgICBjb25zb2xlLmxvZyhcIkVSUk9SRSBJU0JOXCIpO1xuICAgIHZhciBwcm9ibGVtPSBcIlJlc3VsdHMgbm90IGZvdW5kXCI7XG4gICAgdmFyIHNob3dVcmwgPSBcIkNsaWNrIGhlcmUgdG8gc2hvdyB3ZWIgc2l0ZSBhYm91dCBwYXBlclwiO1xuICAgIGNvbnN0IHZtID0gZnJvbU9iamVjdCh7XG4gICAgICAgIHByb2JsZW0sXG4gICAgICAgIHNob3dVcmxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJzZXR0byBsYSBwYWdpbmEuLi4uXCIpO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCJObyBSZXN1bHRzIGZvdW5kXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiQW55dGhpbmcgaW5mb3JtYXRpb24gaGFzIGJlZW4gZm91bmQuXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgfTtcblxuXG4gICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBmYWlsZWRcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG4gICAgfSk7XG5cbiAgICBmbGFnX2ZhaWxlZCA9IGZhbHNlO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufSAgIFxuICAgIFxuICAgIC8vaXRlbXNWaWV3LnB1c2goe2l0ZW1JbWFnZTogdGh1bWIyWzBdW1wiaW1hZ2VVcmlcIl0sIGl0ZW1OYW1lOiBhdXRob3JzWzBdW1wiYXV0aG9yXCJdLCBpdGVtRGVzYzogZGVzY3JbMF1bXCJkZXNjXCJdfSk7XG5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHRodW1iMi5sZW5ndGg7IGsrKykge1xuICAgICAgICBpdGVtc1ZpZXcucHVzaCh7aXRlbUltYWdlOiAodGh1bWIyW2tdW1wiaW1hZ2VVcmlcIl0gPyB0aHVtYjJba11bXCJpbWFnZVVyaVwiXSA6IFwiaHR0cDovL2kuaW1ndXIuY29tL29NM01kQWkucG5nXCIpLCBpdGVtVGl0bGU6IFwiQm9vazogXCIrdGl0bGVfYm9vaywgaXRlbU5hbWU6IChhdXRob3JzW2tdW1wiYXV0aG9yXCJdID8gYXV0aG9yc1trXVtcImF1dGhvclwiXSA6IFwiTm8gYXV0aG9yJ3MgaW5mb3JtYXRpb24gYXZhaWxhYmxlXCIpLCBpdGVtRGVzYzogKGRlc2NyW2tdW1wiZGVzY1wiXSA/IGRlc2NyW2tdW1wiZGVzY1wiXSA6IFwiTm8gZGVzY3JpcHRpb24gYXZhaWxhYmxlXCIpLCB0aXRsZVBhcGVyOiB0aXRsZX0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW1zVmlld1trXSk7XG5cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhpdGVtc1ZpZXdbMF0pO1xuXG4gXG4gICAgLy9QUkVQQVJBWklPTkUgTElTVEEgQVVUSE9SUyBjb24gT1JDSUQgRUQgQUZGSUxJWkFJT05JXG4gICAgLy8gZm9yIChsZXQgayA9IDA7IGsgPCBhdS5sZW5ndGg7IGsrKykge1xuICAgIC8vICAgICBjb25zdCBlbGVtZW50ID0gYXVba107XG4gICAgICAgIFxuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBmaW5hbCBkYXRhOiBcIitpdGVtc1ZpZXcubGVuZ3RoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiZnJhdGVlZSArPSBcIitpdGVtc1ZpZXcpO1xuICAgIGlmKCFpdGVtc1ZpZXcubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgLy8gbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIC8vICAgICB0aXRsZTogXCJObyBSZXN1bHRzIGZvdW5kXCIsXG4gICAgICAgIC8vICAgICBtZXNzYWdlOiBcIm5pZW50ZWVlZWVlIDJcIixcbiAgICAgICAgLy8gICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIGZhaWxlZFwiKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAvLyAgICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgICAgICAvLyAgICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICAgICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcblxuICAgIH1cbiAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcbiAgICBcblxuICAgIHBhZ2VEYXRhLnNldChcIml0ZW1zVmlld1wiLCBpdGVtc1ZpZXcpO1xuICAgIHBhZ2VEYXRhLnNldChcInRpdGxlUGFwZXJcIiwgdGl0bGVQYXBlcik7XG5cblxuICAgICAgIFxufVxuXG4gIFxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuXG5leHBvcnRzLnNob3dJbmZvQXV0aG9ycyA9IGZ1bmN0aW9uKClcbntcblxuXG4gICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VTY29wdXNcIixcbiAgICAgICAgLy9iYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICBwYXJhbTE6IHBhc3NUb1Njb3B1cyxcbiAgICAgICAgICAgIHBhcmFtMjogb3JjaWRzX2NvbXBsZXRpLFxuICAgICAgICAgICAgcGFyYW0zOiBvcmNpZHNfaW5jb21wbGV0aSxcbiAgICAgICAgICAgIHBhcmFtNDogZmFtaWx5X25hbWVzXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xufVxuXG5leHBvcnRzLnNob3dSZWZzID0gZnVuY3Rpb24oKVxue1xuICAgIGlmKCFmbGFnX3JlZnMpXG4gICAge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlZmVyZW5jZXMgSW5mb1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJObyByZWZlcmVuY2VzIGluZm9ybWF0aW9uIGFyZSBhdmFpbGFibGVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuXG4gICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VSZWZzXCIsXG4gICAgICAgIC8vYmFja3N0YWNrVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICB9LFxuICAgICAgICAvL2NsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiByZWZlcmVuY2VzLFxuICAgICAgICAgICAgcGFyYW0yOiAxXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xuICAgIH1cbn1cblxuXG5leHBvcnRzLmdvVG9VUkwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGAgaXRlbSB0YXAgJHtpbmRleH1gKTtcbiAgICBcbiAgICBpZighdXJsX3RvdmlzaXRbaW5kZXhdKVxuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJBcnRpY2xlJ3MgSW5mb1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJObyB3ZWIgc2l0ZSBhdmFpbGFibGVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKHVybF90b3Zpc2l0W2luZGV4XSk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0cy5zaG93RGVzYyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiRGVzY3JpcHRpb24gb2YgQm9va1wiLFxuICAgICAgICBtZXNzYWdlOiBkZXNjclswXS5kZXNjLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG4gICAgY29uc29sZS5sb2coZGVzY3JbMF0uZGVzYyk7XG4gICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgIH0pO1xufVxuXG5leHBvcnRzLmdvVG9TaG9wID0gZnVuY3Rpb24gKClcbntcbiAgICB1dGlsc01vZHVsZS5vcGVuVXJsKFVSTCk7XG59XG5cbmV4cG9ydHMuc2hvd0FsbEF1dGhvcnMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBhdXRvcmkgPSBcIlwiO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYXV0aG9yc19jb21wbGV0ZS5sZW5ndGg7IGsrKykge1xuICAgICAgICBhdXRvcmkgKz0gYXV0aG9yc19jb21wbGV0ZVtrXSA7XG4gICAgICAgIGlmKGsgIT0gYXV0aG9yc19jb21wbGV0ZS5sZW5ndGgtMSlcbiAgICAgICAgYXV0b3JpKz1cIiwgXCIgO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiTGlzdCBvZiBhdXRob3JzXCIsXG4gICAgICAgIG1lc3NhZ2U6IGF1dG9yaSxcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9O1xuICAgIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0cy5zaG93QXV0aEluZm8gPSBmdW5jdGlvbihhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApO1xuICAgIGNvbnNvbGUubG9nKHNob3dQYWdlSW5mb0F1dGhvcnNbaW5kZXhdKTtcblxuICAgIGlmKCFzaG93UGFnZUluZm9BdXRob3JzW2luZGV4XSlcbiAgICB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUaGVyZSBhcmUgbm8gaW5mb3JtYXRpb24gYWJvdXQgXCIrYXV0aF9zaG93W2luZGV4XVsnbmFtZSddKTtcblxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKHNob3dQYWdlSW5mb0F1dGhvcnNbaW5kZXhdKTtcblxufVxuXG5cbmV4cG9ydHMuc2hvd0Z1bGxVcmwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcblxuICAgIGlmKCFVUkwpXG4gICAge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiVGhlcmUgaXMgbm8gd2ViIHNpdGUgZm9yIFwiK3RpdGxlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKFVSTCk7XG5cbn1cblxuZXhwb3J0cy5yZGxpc3Rsb2FkZWQgPSBmdW5jdGlvbihhcmdzKVxue1xufVxuXG5leHBvcnRzLm9uSXRlbUxvYWRpbmcgPSBmdW5jdGlvbihhcmdzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIGl0ZW1zXCIpO1xuICAgICAgICBpZihwbGF0Zm9ybU1vZHVsZS5pc0FuZHJvaWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXJncy5hbmRyb2lkKTtcbiAgICAgICAgICAgIHZhciBuZXdjb2xvciA9IG5ldyBDb2xvcigyMCwyNTUsMCwwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuYW5kcm9pZC5iYWNrZ3JvdW5kVmlldyk7XG4gICAgICAgICAgICAvL2FyZ3MuYW5kcm9pZC5iYWNrZ3JvdW5kVmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdjb2xvci5pb3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwicHJvdmFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VGaWZ0aC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3BhZ2VGaWZ0aC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvTGlzdFZpZXdMaW5lYXJMYXlvdXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIHhtbG5zOmx2PVxcXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiIGNsYXNzPVxcXCJkaW9jYW5cXFwiIGJhY2tncm91bmRDb2xvcj1cXFwicmdiKDIxMCwgMjMxLCAyMzkpXFxcIj48IS0tIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCItLT5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiUmVzdWx0cyBcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiA+XFxuICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRleHQ9XFxcIkJhY2tcXFwiIHRhcD1cXFwiZ29CYWNrXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcblxcbjxsdjpSYWRMaXN0VmlldyBpdGVtcz1cXFwie3sgaXRlbXNWaWV3IH19XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgaXRlbVRhcD1cXFwiZ29Ub1VSTFxcXCIgbG9hZGVkPVxcXCJyZGxpc3Rsb2FkZWRcXFwiIGl0ZW1Mb2FkaW5nPVxcXCJvbkl0ZW1Mb2FkaW5nXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiA+IFxcbiAgICA8bHY6UmFkTGlzdFZpZXcubGlzdFZpZXdMYXlvdXQ+XFxuICAgICAgICA8bHY6TGlzdFZpZXdMaW5lYXJMYXlvdXQgc2Nyb2xsRGlyZWN0aW9uPVxcXCJWZXJ0aWNhbFxcXCIvPlxcbiAgICA8L2x2OlJhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0PlxcbiAgICA8bHY6UmFkTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJyZ2IoMjEwLCAyMzEsIDIzOSlcXFwiPlxcbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cXFwiMTUwXFxcIiBoZWlnaHQ9XFxcIjE1MFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHNyYz1cXFwie3sgaXRlbUltYWdlIH19XFxcIiBjbGFzcz1cXFwiLWJvdW5jZVxcXCIvPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtVGl0bGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcXFwiIGNsYXNzPVxcXCItZW50cnlcXFwiLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW1OYW1lIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nXFxcIiBjbGFzcz1cXFwiLWVudHJ5XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtRGVzYyB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFxcXCIgY2xhc3M9XFxcIi1lbnRyeVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkluZm8gYXV0aG9yc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJsaXN0LWdydW91cC1pdGVtLXRleHRcXFwiIHRhcD1cXFwic2hvd0luZm9BdXRob3JzXFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNlZSByZWZlcmVuY2VzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3J1b3VwLWl0ZW0tdGV4dFxcXCIgdGFwPVxcXCJzaG93UmVmc1xcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cXFwiNFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJCbGFja1xcXCIvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgXFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvbHY6UmFkTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbjwvbHY6UmFkTGlzdFZpZXc+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VGaWZ0aC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlRmlmdGgueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTsgLy8gcGVyIGFjY2VkZXIgYWxsYSBwYWdpbmEgd2ViIHZpc2liaWxlIHhtbFxuY29uc3QgaHR0cE1vZHVsZTIgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcbmNvbnN0IGZyb21PYmplY3QgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuZnJvbU9iamVjdDtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbmNvbnN0IHV0aWxzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG5jb25zdCBwcm9jZXNzID0gcmVxdWlyZSgncHJvY2VzcycpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG5cbnZhciBwYWdlRGF0YSA9IG5ldyBPYnNlcnZhYmxlKCk7XG52YXIgaXRlbXNWaWV3ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG5cblxudmFyIHJlZnMgPSBbXTtcblxuYXN5bmMgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncylcbntcbiAgICBjb25zb2xlLmxvZyhcIioqUkVGUyBQQUdFICoqKlwiKTtcbiAgICAvKiBBenplcmFtZW50byB2ZXR0b3JpIHBlciBldml0YXJlIGFwcGVuZGluZyBvZ25pIGNoaWFtYXRhIGFsbGEgcGFnaW5hICovXG4gICAgaXRlbXNWaWV3ID0gW107XG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICB2YXIgZ290RGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG5cbiAgICByZWZzID0gW107XG4gICAgYXV0b3JpMiA9IFtdO1xuXG5cbiAgICBcbiAgICAgcmVmcyA9IGdvdERhdGEucGFyYW0xO1xuXG4gICAgLy9jb25zb2xlLmxvZyhyZWZzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtc1ZpZXcucHVzaCh7cmVmTmFtZTogcmVmc1tpXVtcInJlZk5hbWVcIl0sIERPSTogcmVmc1tpXVtcIkRPSVwiXX0pO1xuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJnZXREYXRhOiBcIityZWZzWzBdW1wiRE9JXCJdKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcblxuXG4gICAgcGFnZURhdGEuc2V0KFwiaXRlbXNWaWV3XCIsIGl0ZW1zVmlldyk7XG5cbn1cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcblxuZXhwb3J0cy5zaG93RnVsbFVybCA9IGZ1bmN0aW9uIChhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApO1xuXG4gICAgaWYoIXJlZnNbaW5kZXhdW1wiRE9JXCJdKVxuICAgIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlRoZXJlIGlzIG5vIHdlYiBzaXRlIGZvciBcIityZWZzW2luZGV4XVtcInJlZk5hbWVcIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL2RvaS5vcmcvXCIrcmVmc1tpbmRleF1bXCJET0lcIl0pO1xuXG59XG5cbmV4cG9ydHMuZ29CYWNrID0gZnVuY3Rpb24oYXJncylcbnsgXG4gICAgY29uc29sZS5sb2coXCJwcm92YVwiKTtcbiAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZVJlZnMuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9wYWdlUmVmcy5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlldy9DYXJkVmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIik7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgeG1sbnM6Q2FyZD1cXFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XFxcIiB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj48IS0tIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCItLT5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJSZWZlcmVuY2VzXFxcIj5cXG4gICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0ZXh0PVxcXCJCYWNrXFxcIiB0YXA9XFxcImdvQmFja1xcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcblxcbjwvQWN0aW9uQmFyPiBcXG48R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCI+XFxuXFxuPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBpdGVtc1ZpZXcgfX1cXFwiIFxcbiAgICAgICAgICBpdGVtVGFwPVxcXCJzaG93RnVsbFVybFxcXCIgXFxuICAgICAgICAgIGxvYWRlZD1cXFwie3sgb25MaXN0Vmlld0xvYWRlZCB9fVxcXCIgXFxuICAgICAgICAgIHNlcGFyYXRvckNvbG9yPVxcXCJvcmFuZ2VyZWRcXFwiIHJvd0hlaWdodD1cXFwiMTA1XFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgaWQ9XFxcImxpc3RWaWV3XFxcIiBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiPlxcbiAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPCEtLSBUaGUgaXRlbSB0ZW1wbGF0ZSBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHJvb3QgdmlldyBjb250YWluZXIgKGUuZy4gR3JpTGF5b3V0LCBTdGFja0xheW91dCwgZXRjLikgLS0+XFxuICAgICAgICA8Q2FyZDpDYXJkVmlldyBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCIgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxXFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJtYW10XFxcIiBjbGFzcz1cXFwiaWNvXFxcIiBjbGFzcz1cXFwiLWVudHJ5XFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHJlZk5hbWUgfHwgJ0Rvd25sb2FkaW5nLi4uJyB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgY2xhc3M9XFxcIi1lbnRyeVxcXCIvPlxcblxcbiAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG48L0xpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cXG48L1BhZ2U+XFxuXFxuXFxuPCEtLSAgICAgICAgPExhYmVsIHRleHQ9XFxcImh0dHBzOi8vYXBleGNvdmFudGFnZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvT1JDSUQtSWNvbi5wbmdcXFwiIGNsYXNzPVxcXCJpY29cXFwiLz5cXG4tLT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlUmVmcy54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlUmVmcy54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpOyAvLyBwZXIgYWNjZWRlciBhbGxhIHBhZ2luYSB3ZWIgdmlzaWJpbGUgeG1sXG5jb25zdCBodHRwTW9kdWxlMiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xuY29uc3QgZnJvbU9iamVjdCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5mcm9tT2JqZWN0O1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcbmNvbnN0IHByb2Nlc3MgPSByZXF1aXJlKCdwcm9jZXNzJyk7XG52YXIgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cblxudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbnZhciBpdGVtc1ZpZXcgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuXG52YXIgb3JjaWRzX2NvbXBsZXRpMiA9IFtdO1xudmFyIGF1dG9yaTIgPSBbXTtcbnZhciBvcmNpZF9pbmNvbXBsZXRpID0gW107XG52YXIgZmFtaWx5X25hbWVzID0gW107XG5hc3luYyBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKVxue1xuICAgIC8qIEF6emVyYW1lbnRvIHZldHRvcmkgcGVyIGV2aXRhcmUgYXBwZW5kaW5nIG9nbmkgY2hpYW1hdGEgYWxsYSBwYWdpbmEgKi9cbiAgICBpdGVtc1ZpZXcgPSBbXTtcbiAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHZhciBnb3REYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcbiAgICBvcmNpZHNfY29tcGxldGkyID0gW107XG4gICAgYXV0b3JpMiA9IFtdO1xuICAgIG9yY2lkX2luY29tcGxldGkgPSBbXTtcbiAgICBmYW1pbHlfbmFtZXMgPSBbXTtcblxuICAgIHZhciBzaG93UGFnZUluZm9BdXRob3JzID0gW107XG5cbiAgICBcbiAgICB2YXIgYXV0b3JpID0gZ290RGF0YS5wYXJhbTE7XG4gICAgdmFyIG9yY2lkc19jb21wbGV0aSA9IGdvdERhdGEucGFyYW0yO1xuICAgIG9yY2lkX2luY29tcGxldGkgPSBnb3REYXRhLnBhcmFtMztcbiAgICBmYW1pbHlfbmFtZXMgPSBnb3REYXRhLnBhcmFtNDtcblxuXG4gICAgb3JjaWRzX2NvbXBsZXRpMiA9IG9yY2lkc19jb21wbGV0aTtcbiAgICBhdXRvcmkyID0gYXV0b3JpO1xuXG4gICAgY29uc29sZS5sb2coYXV0b3JpKTtcbiAgICBjb25zb2xlLmxvZyhvcmNpZHNfY29tcGxldGkpO1xuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKG9yY2lkX251bWVyaWNpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV0b3JpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW1zVmlldy5wdXNoKHtpdGVtSW1hZ2U6IFwiaHR0cHM6Ly9hcGV4Y292YW50YWdlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOC9PUkNJRC1JY29uLnBuZ1wiLCBpdGVtTmFtZTogYXV0b3JpW2ldW1wibmFtZVwiXX0pO1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIFxuICAgIHBhZ2VEYXRhLnNldChcIml0ZW1zVmlld1wiLCBpdGVtc1ZpZXcpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcblxuXG59XG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5cbmV4cG9ydHMuc2hvd0Z1bGxVcmwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcblxuICAgIGlmKCFvcmNpZHNfY29tcGxldGkyW2luZGV4XSlcbiAgICB7XG4gICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcblxuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiVGhlcmUgaXMgbm8gd2ViIHNpdGUgZm9yIFwiK2F1dG9yaTJbaW5kZXhdW1wibmFtZVwiXSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG5cbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VBdXRob3JcIixcbiAgICAgICAgLy9iYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICBwYXJhbTE6IGF1dG9yaTJbaW5kZXhdW1wibmFtZVwiXSxcbiAgICAgICAgICAgIHBhcmFtMjogb3JjaWRfaW5jb21wbGV0aVtpbmRleF0sXG4gICAgICAgICAgICBwYXJhbTM6IGZhbWlseV9uYW1lc1tpbmRleF1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG4gICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbCB0ZXh0XCIsXG4gICAgICAgIGFjdGlvbnM6IFtcIlNob3cgT1JDSUQgcHJvZmlsZVwiLCBcIlNob3cgcmVsYXRlZCBwcm9maWxlc1wiXVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgIGlmKHJlc3VsdCA9PSBcIlNob3cgT1JDSUQgcHJvZmlsZVwiKXtcbiAgICAgICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL29yY2lkLm9yZy9cIitvcmNpZF9pbmNvbXBsZXRpW2luZGV4XSk7XG4gICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PSBcIlNob3cgcmVsYXRlZCBwcm9maWxlc1wiKXtcbiAgICAgICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xuXG4gICAgICAgIH1cbn0pO1xuICAgICAgICAgICAgLy91dGlsc01vZHVsZS5vcGVuVXJsKG9yY2lkc19jb21wbGV0aTJbaW5kZXhdKTtcbiAgICAgICAgfVxufVxuXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwiZ29CYWNrIGZ1bmN0aW9uXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlU2NvcHVzLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vcGFnZVNjb3B1cy5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlldy9DYXJkVmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIik7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgeG1sbnM6Q2FyZD1cXFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XFxcIiB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj48IS0tIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCItLT5cXG5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJBdXRob3JzXFxcIj5cXG4gICAgICAgPE5hdmlnYXRpb25CdXR0b24gYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRleHQ9XFxcIkJhY2tcXFwiIHRhcD1cXFwiZ29CYWNrXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuXFxuPC9BY3Rpb25CYXI+IFxcbjxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwicmdiKDIxMCwgMjMxLCAyMzkpXFxcIj5cXG48TGlzdFZpZXcgaXRlbXM9XFxcInt7IGl0ZW1zVmlldyB9fVxcXCIgXFxuICAgICAgICAgIGl0ZW1UYXA9XFxcInNob3dGdWxsVXJsXFxcIiBcXG4gICAgICAgICAgbG9hZGVkPVxcXCJ7eyBvbkxpc3RWaWV3TG9hZGVkIH19XFxcIiBcXG4gICAgICAgICAgc2VwYXJhdG9yQ29sb3I9XFxcIm9yYW5nZXJlZFxcXCIgcm93SGVpZ2h0PVxcXCI1MFxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImRpb2NhblxcXCIgaWQ9XFxcImxpc3RWaWV3XFxcIiBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiID5cXG4gICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgIDwhLS0gVGhlIGl0ZW0gdGVtcGxhdGUgY2FuIG9ubHkgaGF2ZSBhIHNpbmdsZSByb290IHZpZXcgY29udGFpbmVyIChlLmcuIEdyaUxheW91dCwgU3RhY2tMYXlvdXQsIGV0Yy4pIC0tPlxcbiAgICAgICAgPENhcmQ6Q2FyZFZpZXcgYmFja2dyb3VuZENvbG9yPVxcXCJyZ2IoMjEwLCAyMzEsIDIzOSlcXFwiIGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiIG1hcmdpbj1cXFwiMTBcXFwiIGVsZXZhdGlvbj1cXFwiNDBcXFwiIHJhZGl1cz1cXFwiMVxcXCI+XFxuICAgICAgXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbU5hbWUgfHwgJ0Rvd25sb2FkaW5nLi4uJyB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgIGNsYXNzPVxcXCItZW50cnlcXFwiIC8+XFxuXFxuICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbjwvTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cXG5cXG5cXG48IS0tICAgICAgICA8TGFiZWwgdGV4dD1cXFwiaHR0cHM6Ly9hcGV4Y292YW50YWdlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOC9PUkNJRC1JY29uLnBuZ1xcXCIgY2xhc3M9XFxcImljb1xcXCIvPiAgPExhYmVsIHRleHQ9XFxcIm1hbXRcXFwiIGNsYXNzPVxcXCJpY29cXFwiIGNsYXNzPVxcXCItZW50cnlcXFwiPjwvTGFiZWw+XFxuLS0+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZVNjb3B1cy54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlU2NvcHVzLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG5jb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcbnZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcbmNvbnN0IGxpc3RWaWV3TW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCIpO1xuY29uc3QgZnJvbU9iamVjdCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5mcm9tT2JqZWN0O1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbChhcmdzLCB1cmwxKSB7XG4gICAgdmFyIHBhZ2UgPSBhcmdzO1xuICBcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG4gICAgXG4gICAgLy9wYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG5cblxuICAgIGNvbnN0IGxpc3RWaWV3ID0gcGFnZS5nZXRWaWV3QnlJZChcImxpc3RWaWV3XCIpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQubXlUaXRsZXMucHVzaCh7IHRpdGxlOiBcIkdhbWUgb2YgVGhyb25lc1wiIH0pO1xuLy8gTWFudWFsbHkgdHJpZ2dlciB0aGUgdXBkYXRlIHNvIHRoYXQgdGhlIG5ldyBjb2xvciBpcyBzaG93bi5cbiAgICBsaXN0Vmlldy5yZWZyZXNoKCk7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJTdGFydGluZyBIVFRQIFJlcXVlc3QgdG8gXCIrdXJsMSk7XG4gICAgaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmwxLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJpY2hpZXN0YSBlZmZldHR1YXRhXCIpO1xuXG4gICAgICAgIC8qdmFyIG1hbXQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpcG8gZGkgbWFtbXQyIFwiKyB0eXBlb2YobWFtdCkpO1xuXG5cbiAgICAgICAgdmFyIGNvbnRlbnV0byA9IEpTT04ucGFyc2UobWFtdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlwbyBjb250ZW51dG86IFwiICsgdHlwZW9mKGNvbnRlbnV0bykpO1xuICAgICAgICAqL1xuICAgICAgICB2YXIgc29ydCA9IEpTT04ucGFyc2UocmVzcG9uc2UuY29udGVudC50b1N0cmluZygpKTtcbiAgICAgICAgdmFyIGNoaXRhbW11byA9IHNvcnQubWVzc2FnZS5pdGVtc1swXS50aXRsZTsvL1snaXRlbXMnXVswXS5yZWZlcmVuY2UtY291bnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hpYW1tdW8gPSBcIisgY2hpdGFtbXVvKTtcblxuICAgICAgICB2aWV3TW9kZWwuc2V0KFwicmlzcG9zdGFcIiwgY2hpdGFtbXVvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0J2FwcG8gYW1vb29vb1wiKTtcblxuICAgICAgICAvLyB2YXIgcmVzdWx0cyA9IHNvcnQubWVzc2FnZS5pdGVtcztcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJDb3VudGVyIHJlc3VsdHM6IFwiKyBpdGVtcy5sZW5ndGgpO1xuICAgIFxuXG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHZtID0gZnJvbU9iamVjdCh7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBsaXN0dmlldyBiaW5kaW5nIHNvdXJjZVxuICAgICAgICAgICBcbiAgICAgICAgICAgIG15VGl0bGVzOiBbXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJUaGUgRGEgVmluY2kgQ29kZVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBDaGFtYmVyIG9mIFNlY3JldHNcIiB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIEFsY2hlbWlzdFwiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJUaGUgR29kZmF0aGVyXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkdvb2RuaWdodCBNb29uXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIlRoZSBIb2JiaXRcIiB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBcmd1bWVudCAocmVzcG9uc2UpIGlzIEh0dHBSZXNwb25zZVxuICAgIH0sIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcmUgZGlvIHBvcmNvIG1hZG9vbmEgXCIrIGUpO1xuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gdmlld01vZGVsO1xufVxuXG5leHBvcnRzLmNyZWF0ZVZpZXdNb2RlbCA9IGNyZWF0ZVZpZXdNb2RlbDs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTsgLy8gcGVyIGFjY2VkZXIgYWxsYSBwYWdpbmEgd2ViIHZpc2liaWxlIHhtbFxuY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xuY29uc3QgZnJvbU9iamVjdCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5mcm9tT2JqZWN0O1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgZ2V0RnJhbWVCeUlkID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIikuZ2V0RnJhbWVCeUlkO1xuLy9jb25zdCBmcmFtZSA9IGdldEZyYW1lQnlJZChcIm15LWZyYW1lLWlkXCIpO1xuXG52YXIgZG9pcyA9IFtdO1xudmFyIG9yY2lkcyA9IFtdO1xudmFyIHJlc3VsdHMgPSBbXTtcblxuXG4vKiBDYWNoaW5nICovXG52YXIgZXhfZGF0YSA9IFtdO1xudmFyIHBhc3RfZGF0YSA9IFtdO1xuXG52YXIgZmxhZ19jYWNoZSA9IGZhbHNlO1xuXG5hc3luYyBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcblxuICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICB2YXIgZ290RGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG5cbiAgICBjb25zb2xlLmxvZyhcIlBhcmFtZXRybyAxIHJlYzogXCIrZ290RGF0YS5wYXJhbTEpO1xuICAgIGNvbnNvbGUubG9nKFwiUGFyYW1ldHJvIDIgcmVjOiBcIitnb3REYXRhLnBhcmFtMik7XG5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGV4X2RhdGEubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgaWYoZ290RGF0YS5wYXJhbTEgPT09IGV4X2RhdGFba11bXCJwYXN0X3VybFwiXSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgYWxyZWFkeSBkb25lIVwiKTtcbiAgICAgICAgICAgIGZsYWdfY2FjaGUgPSB0cnVlO1xuICAgICAgICAgICAgaW5kZXggPSBrO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJrW1wiK2srXCJdOiBcIitleF9kYXRhW2tdKTsgICBcbiAgICB9XG5cbiAgICBleF9kYXRhLnB1c2goe3Bhc3RfdXJsOiBnb3REYXRhLnBhcmFtMX0pO1xuXG4gICAgdmFyIHNlYXJjaGluZyA9IGdvdERhdGEucGFyYW0yO1xuXG4gICAgdXJsMSA9IGdvdERhdGEucGFyYW0xO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgSFRUUCBSZXF1ZXN0XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiU3RhdG8gZmxhZyBcIiArIGZsYWdfY2FjaGUpO1xuXG4gICAgaWYoIWZsYWdfY2FjaGUpXG4gICAge1xuICAgICAgICAgICAgXG4gICAgZG9pcyA9IFtdO1xuICAgIG9yY2lkcyA9IFtdO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHVybDEsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIH0sIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIrIGUpO1xuICAgIH0pO1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIlJpY2hpZXN0YSBlZmZldHR1YXRhXCIpO1xuXG4gICAgICAgIC8qdmFyIG1hbXQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpcG8gZGkgbWFtbXQyIFwiKyB0eXBlb2YobWFtdCkpO1xuXG5cbiAgICAgICAgdmFyIGNvbnRlbnV0byA9IEpTT04ucGFyc2UobWFtdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlwbyBjb250ZW51dG86IFwiICsgdHlwZW9mKGNvbnRlbnV0bykpO1xuICAgICAgICAqL1xuICAgICAgICB2YXIgc29ydCA9IEpTT04ucGFyc2UocmVzcG9uc2UuY29udGVudC50b1N0cmluZygpKTtcbiAgICAgICAgdmFyIGNoaXRhbW11byA9IHNvcnQubWVzc2FnZS5pdGVtc1swXS50aXRsZTsvL1snaXRlbXMnXVswXS5yZWZlcmVuY2UtY291bnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hpYW1tdW8gPSBcIisgY2hpdGFtbXVvKTtcblxuICAgICAgICAvL3ZpZXdNb2RlbC5zZXQoXCJyaXNwb3N0YVwiLCBjaGl0YW1tdW8pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInQnYXBwbyBhbW9vb29vXCIpO1xuXG5cbiAgICAgICAgcmVzdWx0cyA9IHNvcnQubWVzc2FnZS5pdGVtcztcbiAgICAgICAgY29uc29sZS5sb2coXCJDb3VudGVyIHJlc3VsdHM6IFwiKyByZXN1bHRzLmxlbmd0aCk7XG5cbiAgICAgICAgdmFyIG15VGl0bGVzID0gW107XG4gICAgICAgIHZhciBpc3NucyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGluc2VydF9zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgLy8gZGVjb21tZW50YVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImxlbmdodCBkb2kgZm9yIFwiK2krXCIgYXJ0aWNsZTogXCIrcmVzdWx0c1tpXS5ET0kubGVuZ3RoKTtcbiAgICAgICAgICAgIGRvaXMucHVzaChyZXN1bHRzW2ldLkRPSSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzdWx0c1tpXS5hdXRob3IpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGF1dGhvcnMgPSByZXN1bHRzW2ldLmF1dGhvcjtcbiAgICAgICAgICAgICAgICAvLyBkZWNvbW1lbnRhXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ291bnRlciBhdXRob3JzOiBcIisgYXV0aG9ycy5sZW5ndGgpO1xuICAgICAgICAgICAgaW5zZXJ0X3N0cmluZyA9IHJlc3VsdHNbaV0udGl0bGUgKyBcIixcXG4gXCI7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXV0aG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGluc2VydF9zdHJpbmcgKz0gXCIgXCIrYXV0aG9yc1tqXS5mYW1pbHkrXCIsIFwiK2F1dGhvcnNbal0uZ2l2ZW5bMF0rXCIuIFwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVjb21tZW50YVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRpdGxlIFwiK2krXCIgPSBcIisgaW5zZXJ0X3N0cmluZyArIFwiLCBET0k6IFwiICsgZG9pc1tpXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vaXNibnMucHVzaChyZXN1bHRzW2ldLmlzYm4tdHlwZVsxXS52YWx1ZSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXNibjogXCIraXNibnNbal0pO1xuXG4gICAgICAgICAgICBteVRpdGxlcy5wdXNoKHt0aXRsZTogaW5zZXJ0X3N0cmluZ30pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRpdFtcIitpK1wiXSBpbnNlcnRlZFwiKTtcbiAgICAgICAgICAgIC8vbXlUaXRsZXMucHVzaChyZXN1bHRzW2ldLnRpdGxlKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzaXplIG9mIG15VGl0bGVzOiBcIisgbXlUaXRsZXMubGVuZ3RoKTtcblxuXG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHZtID0gZnJvbU9iamVjdCh7XG4gICAgICAgICAgICBteVRpdGxlcyxcbiAgICAgICAgICAgIHNlYXJjaGluZ1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBhc3RfZGF0YS5wdXNoKHZtKTtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0FDSEUgU1RBUlRFRFwiKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXN0X2RhdGFbaW5kZXhdKTtcbiAgICAgICAgdmFyIHRlbXAgPSBwYXN0X2RhdGFbaW5kZXhdO1xuICAgICAgICBwYXN0X2RhdGEucG9wKCk7XG4gICAgICAgIGV4X2RhdGEgPSBbXTtcblxuICAgICAgICBmbGFnX2NhY2hlID0gZmFsc2U7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB0ZW1wO1xuXG4gICAgfVxuXG4gICAgICAgIC8vIEFyZ3VtZW50IChyZXNwb25zZSkgaXMgSHR0cFJlc3BvbnNlXG4gICAgICAgICAgIC8vcGFnZS5iaW5kaW5nQ29udGV4dCA9IGNyZWF0ZVZpZXdNb2RlbChhcmdzLm9iamVjdCwgdXJsMSk7XG5cbn1cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcblxuZnVuY3Rpb24gb25MaXN0Vmlld0xvYWRlZChhcmdzKSB7XG4gICAgY29uc3QgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbn1cbmV4cG9ydHMub25MaXN0Vmlld0xvYWRlZCA9IG9uTGlzdFZpZXdMb2FkZWQ7XG5cbmZ1bmN0aW9uIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgdmFyIGluZGV4ID0gYXJncy5pbmRleDtcbiAgICBjb25zb2xlLmxvZyhgU2Vjb25kIExpc3RWaWV3IGl0ZW0gdGFwICR7aW5kZXh9YCk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCBhcnRpY2xlJ3MgZG9pOiBcIisgZG9pc1tpbmRleF0pO1xuXG4gICAgLyp2YXIgbmF2aWdhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICdwYWdlRm91cicsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIHBhcmFtMTogcmVzdWx0c1tpbmRleF0sXG4gICAgICAgICAgICBwYXJhbTI6IGluZGV4XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyppZihyZXN1bHRzW2luZGV4XS5wdWJsaXNoZXIgPT0gXCJJRUVFXCIpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklFRUVFRUVFRUVFRSBQVUJMSVNIRVJcIik7XG4gICAgICAgIHZhciBuYXZpZ2F0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdwYWdlRm91cklFRUUnLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHBhcmFtMTogcmVzdWx0c1tpbmRleF0sXG4gICAgICAgICAgICAgICAgcGFyYW0yOiBpbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKG5hdmlnYXRpb25PcHRpb25zKTtcbiAgICBcbiAgICB9XG4gICAgZWxzZXtcbiAgICB2YXIgbmF2aWdhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICdwYWdlRm91cicsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIHBhcmFtMTogcmVzdWx0c1tpbmRleF0sXG4gICAgICAgICAgICBwYXJhbTI6IGluZGV4XG4gICAgICAgIH1cbiAgICB9XG4gICAgfSovXG4gICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VGaWZ0aFwiLFxuICAgICAgICAvL2JhY2tzdGFja1Zpc2libGU6IGZhbHNlLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy9jbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIHBhcmFtMTogcmVzdWx0c1tpbmRleF0sXG4gICAgICAgICAgICBwYXJhbTI6IGluZGV4XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpOyAvL25hdmlnYXRlKG5hdmlnYXRpb25PcHRpb25zKTtcblxufVxuZXhwb3J0cy5vbkl0ZW1UYXAgPSBvbkl0ZW1UYXA7XG5cblxuZXhwb3J0cy5nb0JhY2sgPSBmdW5jdGlvbihhcmdzKVxueyBcbiAgICBjb25zb2xlLmxvZyhcInByb3ZhXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zaG93Rmlyc3RSZXN1bHRzLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vc2hvd0ZpcnN0UmVzdWx0cy5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlldy9DYXJkVmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIik7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgeG1sbnM6Q2FyZD1cXFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XFxcIiB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyBzZWFyY2hpbmcgfX1cXFwiPlxcbiAgICAgPE5hdmlnYXRpb25CdXR0b24gYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRleHQ9XFxcIkJhY2tcXFwiIHRhcD1cXFwiZ29CYWNrXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuXFxuICAgPCEtLSA8TmF2aWdhdGlvbkJ1dHRvbiBzcmM9XFxcImh0dHBzOi8vaS5pYmIuY28vd2M0Q2Q1TC9iYWNrLnBuZ1xcXCIgdGFwPVxcXCJnb0JhY2tcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj4gXFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcImZvbnQ6Ly8mI3hmMDEzO1xcXCIgY2xhc3M9XFxcImZhc1xcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwibGVmdFxcXCIgdGl0bGU9XFxcInByb3ZhXFxcIiA+PC9BY3Rpb25JdGVtPiAtLT5cXG48L0FjdGlvbkJhcj4gXFxuXFxuICA8R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCI+XFxuICAgIDwhLS0gPExhYmVsIHRleHQ9XFxcInt7cmlzcG9zdGF9fVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIi8+IC0tPlxcbiAgICBcXG4gICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBteVRpdGxlcyB9fVxcXCIgXFxuICAgICAgICAgIGl0ZW1UYXA9XFxcIm9uSXRlbVRhcFxcXCIgXFxuICAgICAgICAgIGxvYWRlZD1cXFwie3sgb25MaXN0Vmlld0xvYWRlZCB9fVxcXCIgXFxuICAgICAgICAgIHNlcGFyYXRvckNvbG9yPVxcXCJvcmFuZ2VyZWRcXFwiIFxcbiAgICAgICAgICBjbGFzcz1cXFwiZGlvY2FuXFxcIiBpZD1cXFwibGlzdFZpZXdcXFwiIHJvdz1cXFwiMlxcXCI+XFxuICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8IS0tIFRoZSBpdGVtIHRlbXBsYXRlIGNhbiBvbmx5IGhhdmUgYSBzaW5nbGUgcm9vdCB2aWV3IGNvbnRhaW5lciAoZS5nLiBHcmlMYXlvdXQsIFN0YWNrTGF5b3V0LCBldGMuKSAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgYmFja2dyb3VuZENvbG9yPVxcXCJyZ2IoMjEwLCAyMzEsIDIzOSlcXFwiIGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiIG1hcmdpbj1cXFwiMTBcXFwiIGVsZXZhdGlvbj1cXFwiNDBcXFwiIHJhZGl1cz1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRpdGxlIHx8ICdEb3dubG9hZGluZy4uLicgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCItZW50cnlcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuPC9MaXN0Vmlldz5cXG4gIDwvR3JpZExheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2hvd0ZpcnN0UmVzdWx0cy54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9zaG93Rmlyc3RSZXN1bHRzLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9