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
                console.log("setto string 2");
                urlcompleta+=query+"AUTHLASTNAME("+authquery+") and ORCID("+orcid+")";
                console.log("l'agg settat 2");
            }

                      console.log("dioporco: "+urlcompleta);

         
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


exports.dioCaro = function(args)
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

module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\"  xmlns:Card=\"nativescript-cardview\" xmlns:lv=\"nativescript-ui-listview\" xmlns:lv=\"nativescript-ui-listview\" navigatingTo=\"onNavigatingTo\"><!-- loaded=\"pageLoaded\"-->\n    <ActionBar title=\"Author's articles\" class=\"action-bar\">\n         <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" tap=\"goBack\"></NavigationButton>\n    </ActionBar>\n\n\n<GridLayout backgroundColor=\"rgb(210, 231, 239)\">\n<lv:RadListView items=\"{{ articleViews }}\" class=\"list-group\" itemTap=\"dioCaro\" separatorColor=\"orangered\">\n    <lv:RadListView.listViewLayout>\n        <lv:ListViewLinearLayout scrollDirection=\"Vertical\"/>\n    </lv:RadListView.listViewLayout>\n    <lv:RadListView.itemTemplate>\n        <StackLayout orientation=\"vertical\" >\n                <Label text=\"{{ articleTitle }}\" textWrap=\"true\" class=\"-entry\"/>\n                <Label text=\"{{ authorsName }}\"  textWrap=\"true\" class=\"-entry\"/>\n                <Label text=\"{{ itemDesc }}\" textWrap=\"true\"  class=\"-entry\"/> \n                <StackLayout height=\"2\" backgroundColor=\"Black\"/>\n        </StackLayout>\n                <!--<Button text=\"Info authors\" textWrap=\"true\" class=\"list-gruoup-item-text\" tap=\"showInfoAuthors\"></Button>\n                <Button text=\"See references\" textWrap=\"true\" class=\"list-gruoup-item-text\" tap=\"showRefs\"></Button>\n                Label text=\"{{ authorsName }}\"  textWrap=\"true\" class=\"-entry\"/>\n                <Label text=\"{{ itemDesc }}\" textWrap=\"true\"  class=\"-entry\"/> -->\n    </lv:RadListView.itemTemplate>\n</lv:RadListView>\n</GridLayout>\n</Page>"; 
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
        //var dioporcomaiale = retrieveValues(urlcompleta);
        var madonnaputtana = await  httpModule2.request({
         url: urlcompleta,
         method: "GET"}, (e) => {console.log("errore");}); //fetch(urlcompleta);
 
        //console.log(dioporcomaiale);
        var json = JSON.parse(madonnaputtana.content.toString());
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
    for (let m = 0; m < authors1.length; m++) {
            //itemsView.push({itemName: authors1[k].name});
            console.log("author["+m+"]: "+authors1[m]["name"]);
    }

    console.log("start google scholar querying");




    

    //Prelevo url del sito originale NELLA RELAZIONE DIRE CHE DEMANDA A DOI.org come se fosse un'altra fonte
    URL = results.URL;
    url_tovisit.push(URL);
    //retrieving article's title
    title = results.title;


    auth_show = authors1;

    var isbn = "";
    //console.log("type: "+results.isbn-type);

   // console.log("log: "+ getSafe(() => results["isbn-type"]["1"].properties));

    // console.log("start google scholar querying");
    // if(results["isbn-type"] && results["isbn-type"]["1"])
    // {console.log("se pò fa");
    // isbn = +results["isbn-type"]["1"].value;
    // }
  
    
    // if (results["isbn-type"] && results["isbn-type"]["0"])
    //     isbn = +results["isbn-type"]["0"].value;
    //     else
    //     console.log("NU SE Pò fa nu cazz");
    // }


    if (results.ISBN && results.ISBN["1"])
    isbn = +results.ISBN["1"];
    else if (results.ISBN && results.ISBN["0"])
    isbn = +results.ISBN["0"];
    else
    console.log("NU SE Pò fa nu cazz");

    console.log("isbn "+isbn);

    //diocane(isbn,args);

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
        console.log("DIOCANEEEEEEEE");
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

      var diocan = [];

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
        var diocano = thumb.slice(0, 4) + "s" + thumb.slice(4);
    

        thumb2.push({imageUri: diocano});
        console.log("IMMAGINE: "+diocano);
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
                diocan.push("information not available");
            else
            {
            console.log("Cerco autori, length: "+ json.items[i].volumeInfo.authors.length);

            for (let j = 0; j < json.items[i].volumeInfo.authors.length; j++) {
            diocan.push(json.items[i].volumeInfo.authors[j]);
            console.log("author ["+j+"]: "+diocan[j]);
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

    

        if(diocan.length>=0)
            authors.push({author: "Eds: "+ diocan[0]+" et al."});
        else
            authors.push({author: diocan[0]});
        

        
        

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
       
        // const vm = fromObject({
        //     thumb2,
        //     descr,
        //     authors,
        //     auth_show,
        //     });
        
        //     page.bindingContext = vm;

            console.log("Size of thumb2: "+thumb2.length);
      }
    
      //setto l'array globale di autori con quello locale
      authors_complete = diocan;

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

    // if(results.reference.length)
    // {
    // for (let k = 0; k < results.reference.length; k++) {
    //     references.push({refName: results.reference[k].unstructured, DOI: results.reference[k].DOI});
    // }
    // console.log(references);
    // flag_refs = true;
    // }

    

}
if(!searchQuery || (flag_failed && !searchQuery))
{
    console.log("ERRORE ISBN");
    var mannaggia= "Results not found";
    var showUrl = "Click here to show web site about paper";
    const vm = fromObject({
        mannaggia,
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


exports.dioCaro = function (args)
{
    var index = args.index;
    console.log(` item tap ${index}`);
    console.log("e cliccat fraaaa");
    
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

module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" xmlns:lv=\"nativescript-ui-listview\" navigatingTo=\"onNavigatingTo\" class=\"diocan\" backgroundColor=\"rgb(210, 231, 239)\"><!-- loaded=\"pageLoaded\"-->\n    <ActionBar title=\"Results \" class=\"action-bar\" >\n         <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" tap=\"goBack\"></NavigationButton>\n    </ActionBar>\n\n<lv:RadListView items=\"{{ itemsView }}\" class=\"list-group\" itemTap=\"dioCaro\" loaded=\"rdlistloaded\" itemLoading=\"onItemLoading\" backgroundColor=\"transparent\" > \n    <lv:RadListView.listViewLayout>\n        <lv:ListViewLinearLayout scrollDirection=\"Vertical\"/>\n    </lv:RadListView.listViewLayout>\n    <lv:RadListView.itemTemplate>\n        <GridLayout class=\"list-group-item\" rows=\"auto\" columns=\"auto, *\" backgroundColor=\"rgb(210, 231, 239)\">\n            <Image width=\"150\" height=\"150\" row=\"0\" col=\"0\" src=\"{{ itemImage }}\" class=\"-bounce\"/>\n            <StackLayout row=\"0\" col=\"1\">\n                <Label text=\"{{ itemTitle }}\" textWrap=\"true\" class=\"list-group-item-heading\" class=\"-entry\"/>\n                <Label text=\"{{ itemName }}\" textWrap=\"true\" class=\"list-group-item-heading\" class=\"-entry\"/>\n                <Label text=\"{{ itemDesc }}\" textWrap=\"true\" class=\"list-group-item-text\" class=\"-entry\"/>\n                <Button text=\"Info authors\" textWrap=\"true\" class=\"list-gruoup-item-text\" tap=\"showInfoAuthors\" class=\"-primary\"></Button>\n                <Button text=\"See references\" textWrap=\"true\" class=\"list-gruoup-item-text\" tap=\"showRefs\" class=\"-primary\"></Button>\n             <StackLayout height=\"4\" backgroundColor=\"Black\"/>\n            </StackLayout>\n      \n        </GridLayout>\n    </lv:RadListView.itemTemplate>\n</lv:RadListView>\n</Page>"; 
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
    console.log("ENTRO IN REFSSSS");
    /* Azzeramento vettori per evitare appending ogni chiamata alla pagina */
    itemsView = [];
    var page = args.object;
    var gotData = page.navigationContext;

    refs = [];
    autori2 = [];


    
     refs = gotData.param1;
    console.log("PRELEVO DATI");

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
    console.log("prova");
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
        console.error("Errore dio porco madoona "+ e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UueG1sIiwid2VicGFjazovLy8uL21haW4tdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlQXV0aG9yLmpzIiwid2VicGFjazovLy8uL3BhZ2VBdXRob3IueG1sIiwid2VicGFjazovLy8uL3BhZ2VGaWZ0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlRmlmdGgueG1sIiwid2VicGFjazovLy8uL3BhZ2VSZWZzLmpzIiwid2VicGFjazovLy8uL3BhZ2VSZWZzLnhtbCIsIndlYnBhY2s6Ly8vLi9wYWdlU2NvcHVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VTY29wdXMueG1sIiwid2VicGFjazovLy8uL3Nob3dGaXJzdFJlc3VsdHMtdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zaG93Rmlyc3RSZXN1bHRzLmpzIiwid2VicGFjazovLy8uL3Nob3dGaXJzdFJlc3VsdHMueG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7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Q0E7QUFDQSwyQkFBMkIsZ0RBQWdEO0FBQzNFLEtBQUs7QUFDTCxDOzs7Ozs7OztBQy9OQSx5R0FBMkQsUUFBUSxtQkFBTyxDQUFDLG1EQUF1QixFQUFFLEVBQUU7QUFDdEcsb0VBQW9FLFFBQVEsbUJBQU8sQ0FBQyxtREFBdUIsRUFBRSxFQUFFOztBQUUvRyw0TUFBNE0sYUFBYSxtUUFBbVEsZ0xBQWdMLFVBQVUsd0RBQXdELFlBQVksNERBQTRELG9CQUFvQiwwY0FBMGMsNkJBQTZCLHdMO0FBQ2p4QyxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixpREFBaUQ7QUFDNUUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9tYWluLXBhZ2UuanNcIjogXCIuL21haW4tcGFnZS5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi9tYWluLXZpZXctbW9kZWwuanNcIixcblx0XCIuL3BhZ2VBdXRob3IuanNcIjogXCIuL3BhZ2VBdXRob3IuanNcIixcblx0XCIuL3BhZ2VBdXRob3IueG1sXCI6IFwiLi9wYWdlQXV0aG9yLnhtbFwiLFxuXHRcIi4vcGFnZUZpZnRoLmpzXCI6IFwiLi9wYWdlRmlmdGguanNcIixcblx0XCIuL3BhZ2VGaWZ0aC54bWxcIjogXCIuL3BhZ2VGaWZ0aC54bWxcIixcblx0XCIuL3BhZ2VSZWZzLmpzXCI6IFwiLi9wYWdlUmVmcy5qc1wiLFxuXHRcIi4vcGFnZVJlZnMueG1sXCI6IFwiLi9wYWdlUmVmcy54bWxcIixcblx0XCIuL3BhZ2VTY29wdXMuanNcIjogXCIuL3BhZ2VTY29wdXMuanNcIixcblx0XCIuL3BhZ2VTY29wdXMueG1sXCI6IFwiLi9wYWdlU2NvcHVzLnhtbFwiLFxuXHRcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsLmpzXCI6IFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWwuanNcIixcblx0XCIuL3Nob3dGaXJzdFJlc3VsdHMuanNcIjogXCIuL3Nob3dGaXJzdFJlc3VsdHMuanNcIixcblx0XCIuL3Nob3dGaXJzdFJlc3VsdHMueG1sXCI6IFwiLi9zaG93Rmlyc3RSZXN1bHRzLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwibWFpbi1wYWdlXFxcIj5cXG48L0ZyYW1lPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhlIFxcbk5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9uYXRpdmVzY3JpcHQvdGhlbWVcXG5UaGUgaW1wb3J0ZWQgQ1NTIHJ1bGVzIG11c3QgcHJlY2VkZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMuXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJAaW1wb3J0IFxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcXFwiO1wifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYXF1YS5jc3MnO1xcbi8qIFBsYWNlIGFueSBDU1MgcnVsZXMgeW91IHdhbnQgdG8gYXBwbHkgb24gYm90aCBpT1MgYW5kIEFuZHJvaWQgaGVyZS5cXG5UaGlzIGlzIHdoZXJlIHRoZSB2YXN0IG1ham9yaXR5IG9mIHlvdXIgQ1NTIGNvZGUgZ29lcy4gXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcblRoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIGFsbCBCdXR0b25zIHRoYXQgaGF2ZSB0aGVcXG5cXFwiLXByaW1hcnlcXFwiIGNsYXNzIG1vZGlmaWVyLlxcblwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJDYXJkVmlldy5jYXJkU3R5bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzM0ODlkYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmx1ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1uYW1lXCIsXCJ2YWx1ZVwiOlwidHJhbnNmb3JtZWRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZHVyYXRpb25cIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWZpbGwtbW9kZVwiLFwidmFsdWVcIjpcImZvcndhcmRzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiZ3JlZW5cIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tbmFtZVwiLFwidmFsdWVcIjpcImJ1dHRvbl9zZWxlY3RlZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1kdXJhdGlvblwiLFwidmFsdWVcIjpcIjJzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWZpbGwtbW9kZVwiLFwidmFsdWVcIjpcImZvcndhcmRzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwiYnV0dG9uX3NlbGVjdGVkXCIsXCJrZXlmcmFtZXNcIjpbe1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcImZyb21cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1widG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDEzNCwgMTAzLCAxMDMpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1zaGFkb3dcIixcInZhbHVlXCI6XCIyMHB4IDIwcHggYmxhY2tcIn1dfV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRGaWVsZC4tc2Vjb25kYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLW5hbWVcIixcInZhbHVlXCI6XCJ0cmFuc2Zvcm1lZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1kdXJhdGlvblwiLFwidmFsdWVcIjpcIjFzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWZpbGwtbW9kZVwiLFwidmFsdWVcIjpcImZvcndhcmRzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRyYW5zZm9ybWVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLW5hbWVcIixcInZhbHVlXCI6XCJ0cmFuc2Zvcm1lZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1kdXJhdGlvblwiLFwidmFsdWVcIjpcIjFzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWZpbGwtbW9kZVwiLFwidmFsdWVcIjpcImZvcndhcmRzXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVzXCIsXCJuYW1lXCI6XCJ0cmFuc2Zvcm1lZFwiLFwia2V5ZnJhbWVzXCI6W3tcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCJmcm9tXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidHJhbnNsYXRlKDEwMDAsIDEwMClcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1widG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJyb3RhdGUoMClcIn1dfV19LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwiZW50cnlcIixcImtleWZyYW1lc1wiOlt7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiZnJvbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZSgxMDAsIDApXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiNTAlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidHJhbnNsYXRlKC0yMCwwKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjhcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1widG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ0cmFuc2xhdGUoMCwwKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9XX1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMYWJlbC4tZW50cnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tbmFtZVwiLFwidmFsdWVcIjpcImVudHJ5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWR1cmF0aW9uXCIsXCJ2YWx1ZVwiOlwiMS41XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWZpbGwtbW9kZVwiLFwidmFsdWVcIjpcImZvcndhcmRzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsXCJ2YWx1ZVwiOlwiY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZS4tYm91bmNlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWR1cmF0aW9uXCIsXCJ2YWx1ZVwiOlwiMXNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tbmFtZVwiLFwidmFsdWVcIjpcImJvdW5jZVwifV19LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwiYm91bmNlXCIsXCJrZXlmcmFtZXNcIjpbe1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcImZyb21cIixcIjIwJVwiLFwiNTMlXCIsXCI4MCVcIixcInRvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiLFwidmFsdWVcIjpcImN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ0cmFuc2xhdGUzZCgtMjAwLDAsMClcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1widG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItd2Via2l0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZTNkKDAsLTRweCwwKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZTNkKDAsLTRweCwwKVwifV19XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjQwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjIwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1kdXJhdGlvblwiLFwidmFsdWVcIjpcIjEuNXNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tbmFtZVwiLFwidmFsdWVcIjpcImJvdW5jZTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZS5mYXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXNvbGlkLTkwMFxcXCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjkwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkltYWdlLnQtMzZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIzNlwifV19LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwiYm91bmNlMlwiLFwia2V5ZnJhbWVzXCI6W3tcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCJmcm9tXCIsXCIyMCVcIixcIjUzJVwiLFwiODAlXCIsXCJ0b1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIixcInZhbHVlXCI6XCJjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidHJhbnNsYXRlM2QoLTIwMDAsMCwwKVwifV19LHtcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCJ0b1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi13ZWJraXQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidHJhbnNsYXRlM2QoMCwtNHB4LDApXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidHJhbnNsYXRlM2QoMCwtNHB4LDApXCJ9XX1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgICAgICBpZiAoYXBwbGljYXRpb25DaGVja1BsYXRmb3JtLmFuZHJvaWQgJiYgIWdsb2JhbFtcIl9fc25hcHNob3RcIl0pIHtcbiAgICAgICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xucmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgICAgIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MtcmVndWxhclwiKSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhtclVwZGF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yXCIpLmhtclVwZGF0ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBMaXZlU3luY1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGhvdCB1cGRhdGVzIGFyZSBhcHBsaWVkLCBhc2sgdGhlIG1vZHVsZXMgdG8gYXBwbHkgdGhlIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gaW5pdGlhbCBhcHAgc3RhcnRcbiAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKSg/PCFcXC5cXC9cXGJ0ZXN0c1xcYlxcLy4qPylcXC4oeG1sfGNzc3xqc3woPzwhXFwuZFxcLil0c3woPzwhXFxiX1tcXHctXSpcXC4pc2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoY29udGV4dC5pZCwgKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJITVI6IEFjY2VwdCBtb2R1bGUgJ1wiICsgY29udGV4dC5pZCArIFwiJyBmcm9tICdcIiArIG1vZHVsZS5pZCArIFwiJ1wiKTsgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgLypcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5qcyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLlxuWW91IGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcbnB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cbiovXG5cbmNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG5cbmFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6IFwiYXBwLXJvb3RcIiB9KTtcblxuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9hcHAuanNcIiB9KTtcbiAgICB9KTtcbn0gXG4gICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAiLCIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG4vKlxuTmF0aXZlU2NyaXB0IGFkaGVyZXMgdG8gdGhlIENvbW1vbkpTIHNwZWNpZmljYXRpb24gZm9yIGRlYWxpbmcgd2l0aFxuSmF2YVNjcmlwdCBtb2R1bGVzLiBUaGUgQ29tbW9uSlMgcmVxdWlyZSgpIGZ1bmN0aW9uIGlzIGhvdyB5b3UgaW1wb3J0XG5KYXZhU2NyaXB0IG1vZHVsZXMgZGVmaW5lZCBpbiBvdGhlciBmaWxlcy5cbiovXG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9tYWluLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xudmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuXG52YXIgcGFnZTE7XG5cbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIFxuICAgIC8qXG4gICAgQSBwYWdl4oCZcyBiaW5kaW5nQ29udGV4dCBpcyBhbiBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwZXJmb3JtXG4gICAgZGF0YSBiaW5kaW5nIGJldHdlZW4gWE1MIG1hcmt1cCBhbmQgSmF2YVNjcmlwdCBjb2RlLiBQcm9wZXJ0aWVzXG4gICAgb24gdGhlIGJpbmRpbmdDb250ZXh0IGNhbiBiZSBhY2Nlc3NlZCB1c2luZyB0aGUge3sgfX0gc3ludGF4IGluIFhNTC5cbiAgICBJbiB0aGlzIGV4YW1wbGUsIHRoZSB7eyBtZXNzYWdlIH19IGFuZCB7eyBvblRhcCB9fSBiaW5kaW5ncyBhcmUgcmVzb2x2ZWRcbiAgICBhZ2FpbnN0IHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgY3JlYXRlVmlld01vZGVsKCkuXG5cbiAgICBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgZGF0YSBiaW5kaW5nIGluIE5hdGl2ZVNjcmlwdCBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2NvcmUtY29uY2VwdHMvZGF0YS1iaW5kaW5nLlxuICAgICovXG4gICAgcGFnZTEgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gY3JlYXRlVmlld01vZGVsKGFyZ3Mub2JqZWN0KTtcbiAgXG59XG5cbi8qXG5FeHBvcnRpbmcgYSBmdW5jdGlvbiBpbiBhIE5hdGl2ZVNjcmlwdCBjb2RlLWJlaGluZCBmaWxlIG1ha2VzIGl0IGFjY2Vzc2libGVcbnRvIHRoZSBmaWxl4oCZcyBjb3JyZXNwb25kaW5nIFhNTCBmaWxlLiBJbiB0aGlzIGNhc2UsIGV4cG9ydGluZyB0aGUgb25OYXZpZ2F0aW5nVG9cbmZ1bmN0aW9uIGhlcmUgbWFrZXMgdGhlIG5hdmlnYXRpbmdUbz1cIm9uTmF2aWdhdGluZ1RvXCIgYmluZGluZyBpbiB0aGlzIHBhZ2XigJlzIFhNTFxuZmlsZSB3b3JrLlxuKi9cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcblxuZXhwb3J0cy5jaGFuZ2VQYWdlID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zb2xlLmxvZyhcIlN0byBwZXIgZWZmZXR0dWFyZSBsYSByZXF1ZXN0LCBwcmVsZXZvIGRhdGkgZGEgZm9ybVwiKTtcbiAgICAgICAgdmFyIHB1Yk5hbWUgPSB2aWV3LmdldFZpZXdCeUlkKHBhZ2UxLCBcInRmMVwiKS50ZXh0O1xuICAgICAgICB2YXIgYXV0aE5hbWUgPSB2aWV3LmdldFZpZXdCeUlkKHBhZ2UxLCBcInRmMlwiKS50ZXh0O1xuXG4gICAgICAgIGlmKCFwdWJOYW1lIHx8ICghcHViTmFtZSAmJiBhdXRoTmFtZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJBcnRpY2xlJ3MgbmFtZSBpcyByZXF1aXJlZCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcInB1Ym5hbWU9IFwiKyBwdWJOYW1lKTtcbiAgICAgICAgXG4gICAgICAgIHZhciBwdWJOYW1lMiA9IHB1Yk5hbWUucmVwbGFjZSgvXFxzL2csIFwiK1wiKTtcbiAgICAgICAgdmFyIGF1dGhOYW1lMiA9IGF1dGhOYW1lLnJlcGxhY2UoL1xccy9nLCBcIitcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVibmFtZSAyID0gXCIrIHB1Yk5hbWUyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRobmFtZSAyID0gXCIrIGF1dGhOYW1lMik7XG5cbiAgICAgICBcbiAgICAgICAgaWYgKGF1dGhOYW1lMiA9PT0gXCJcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldHRvIHNlbnphIGF1dGhvcmVcIik7XG4gICAgICAgICAgICB1cmwxID0gXCJodHRwczovL2FwaS5jcm9zc3JlZi5vcmcvd29ya3M/cXVlcnkuYmlibGlvZ3JhcGhpYz1cIitwdWJOYW1lMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXR0byBjb24gYXV0aG9yZVwiKTtcblxuICAgICAgICAgICAgdXJsMSA9IFwiaHR0cHM6Ly9hcGkuY3Jvc3NyZWYub3JnL3dvcmtzP3F1ZXJ5LmJpYmxpb2dyYXBoaWM9XCIrcHViTmFtZTIrXCImcXVlcnkuYXV0aG9yPVwiK2F1dGhOYW1lMjtcblxuICAgICAgICB9XG5cbiAgICB2YXIgbmF2aWdhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICdzaG93Rmlyc3RSZXN1bHRzJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiB1cmwxLFxuICAgICAgICAgICAgcGFyYW0yOiBwdWJOYW1lXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbk9wdGlvbnMpO1xuICAgIH1cbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3L0NhcmRWaWV3XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKTsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXCI8IS0tXFxuVGhlIG1hcmt1cCBpbiBOYXRpdmVTY3JpcHQgYXBwcyBjb250YWlucyBhIHNlcmllcyBvZiB1c2VyIGludGVyZmFjZSBjb21wb25lbnRzLCBlYWNoXFxub2Ygd2hpY2ggTmF0aXZlU2NyaXB0IHJlbmRlcnMgd2l0aCBhIHBsYXRmb3JtLXNwZWNpZmljIGlPUyBvciBBbmRyb2lkIG5hdGl2ZSBjb250cm9sLlxcbllvdSBjYW4gZmluZCBhIGZ1bGwgbGlzdCBvZiB1c2VyIGludGVyZmFjZSBjb21wb25lbnRzIHlvdSBjYW4gdXNlIGluIHlvdXIgYXBwIGF0XFxuaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvY29tcG9uZW50cy5cXG4tLT5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiBjbGFzcz1cXFwiZGlvY2FuXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCIgeG1sbnM6Q2FyZD1cXFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XFxcIiB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIj5cXG4gICAgPCEtLVxcbiAgICBUaGUgQWN0aW9uQmFyIGlzIHRoZSBOYXRpdmVTY3JpcHQgY29tbW9uIGFic3RyYWN0aW9uIG92ZXIgdGhlIEFuZHJvaWQgQWN0aW9uQmFyIGFuZCBpT1MgTmF2aWdhdGlvbkJhci5cXG4gICAgaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9hY3Rpb24tYmFyXFxuICAgIC0tPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJEb2MgRG9jdW1lbnRzXFxcIiBpY29uPVxcXCJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbiAgICA8IS0tXFxuICAgIFRoZSBTdGFja0xheW91dCBzdGFja3MgVUkgY29tcG9uZW50cyBvbiB0aGUgc2NyZWVu4oCUZWl0aGVyIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxcbiAgICBJbiB0aGlzIGNhc2UsIHRoZSBTdGFja0xheW91dCBkb2VzIHZlcnRpY2FsIHN0YWNraW5nOyB5b3UgY2FuIGNoYW5nZSB0aGUgc3RhY2tpbmcgdG9cXG4gICAgaG9yaXpvbnRhbCBieSBhcHBseWluZyBhIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBhdHRyaWJ1dGUgdG8gdGhlIDxTdGFja0xheW91dD4gZWxlbWVudC5cXG4gICAgWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IE5hdGl2ZVNjcmlwdCBsYXlvdXRzIGF0XFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL2xheW91dC1jb250YWluZXJzLlxcblxcbiAgICBUaGVzZSBjb21wb25lbnRzIG1ha2UgdXNlIG9mIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSwgd2hpY2ggc3R5bGVzIHRoZW0gd2l0aCBlbGVtZW50IHNlbGVjdG9ycy5cXG4gICAgVGhlIHRoZW1lIGFsc28gcHJvdmlkZXMgYSBzZXQgb2YgaGVscGVyIGNsYXNzIG5hbWVzIHN1Y2ggYXMgcC0yMCwgaDEsIGgyLCBhbmQgdGV4dC1jZW50ZXIgdG8gZW5oYW5jZSBzdHlsaW5nLlxcbiAgICBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9uYXRpdmVzY3JpcHQvdGhlbWVcXG4gICAgLS0+XFxuICAgIDxDYXJkOkNhcmRWaWV3IGJhY2tncm91bmRDb2xvcj1cXFwicmdiKDIxMCwgMjMxLCAyMzkpXFxcIiBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBlbGV2YXRpb249XFxcIjQwXFxcIiByYWRpdXM9XFxcIjFcXFwiPlxcblxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiPlxcbiAgICA8SW1hZ2Ugc3JjPVxcXCJodHRwczovL2kuaWJiLmNvL0Q0YkdYcTQvU2VuemEtdGl0b2xvLTEucG5nXFxcIiBsb2FkTW9kZT1cXFwiYXN5bmNcXFwiIGNsYXNzPVxcXCJmYXMgdC0zNlxcXCI+PC9JbWFnZT5cXG5cXG4gICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiVGl0bGUgcHVibGljYXRpb25cXFwiICBjb2xvcj1cXFwib3JhbmdlcmVkXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcImxpZ2h0eWVsbG93XFxcIiBpZD1cXFwidGYxXFxcIiBjbGFzcz1cXFwiLXNlY29uZGFyeVxcXCIvPlxcbiAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJBbG1vc3Qgb25lIGF1dGhvci4uLlxcXCIgICBjb2xvcj1cXFwib3JhbmdlcmVkXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcImxpZ2h0eWVsbG93XFxcIiBpZD1cXFwidGYyXFxcIiBjbGFzcz1cXFwiLXNlY29uZGFyeVxcXCIgLz5cXG5cXG4gICAgICAgIDwhLS0gQnV0dG9uIHRleHQ9XFxcIkdFVCBSRVFVRVNUXFxcIiB0YXA9XFxcInt7IGh0dHBSZXEgfX1cXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCIvPiAtLT5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2hvdyByZXN1bHRzXFxcIiB0YXA9XFxcImNoYW5nZVBhZ2VcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCIvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9DYXJkOkNhcmRWaWV3PlxcblxcbjwvUGFnZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG5jb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcbnZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcblxuZnVuY3Rpb24gZ2V0TWVzc2FnZShjb3VudGVyKSB7XG4gICAgaWYgKGNvdW50ZXIgPD0gMCkge1xuICAgICAgICByZXR1cm4gXCJIb29ycmFhYXkhIFlvdSB1bmxvY2tlZCB0aGUgTmF0aXZlU2NyaXB0IGNsaWNrZXIgYWNoaWV2ZW1lbnQhXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke2NvdW50ZXJ9IG1vbnRlbGxpYDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbChhcmdzKSB7XG4gICAgdmFyIHBhZ2UgPSBhcmdzO1xuXG4gICAgY29uc3Qgdmlld01vZGVsID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB2aWV3TW9kZWwuY291bnRlciA9IDQyO1xuICAgIHZpZXdNb2RlbC5tZXNzYWdlID0gZ2V0TWVzc2FnZSh2aWV3TW9kZWwuY291bnRlcik7XG5cbiAgICB2aWV3TW9kZWwub25UYXAgPSAoKSA9PiB7XG4gICAgICAgIHZpZXdNb2RlbC5jb3VudGVyLS07XG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJtZXNzYWdlXCIsXCJwZXNjbWFuXCIrXCIgXCIrZ2V0TWVzc2FnZSh2aWV3TW9kZWwuY291bnRlcikpO1xuXG4gICAgfTtcblxuICAgIHZpZXdNb2RlbC5odHRwUmVxID0gKCkgPT57XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0byBwZXIgZWZmZXR0dWFyZSBsYSByZXF1ZXN0LCBwcmVsZXZvIGRhdGkgZGEgZm9ybVwiKTtcbiAgICAgICAgdmFyIHB1Yk5hbWUgPSB2aWV3LmdldFZpZXdCeUlkKHBhZ2UsIFwidGYxXCIpLnRleHQ7XG4gICAgICAgIHZhciBhdXRoTmFtZSA9IHZpZXcuZ2V0Vmlld0J5SWQocGFnZSwgXCJ0ZjJcIikudGV4dDtcblxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJwdWJuYW1lPSBcIisgcHViTmFtZSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHViTmFtZTIgPSBwdWJOYW1lLnJlcGxhY2UoL1xccy9nLCBcIitcIik7XG4gICAgICAgIHZhciBhdXRoTmFtZTIgPSBhdXRoTmFtZS5yZXBsYWNlKC9cXHMvZywgXCIrXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInB1Ym5hbWUgMiA9IFwiKyBwdWJOYW1lMik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXV0aG5hbWUgMiA9IFwiKyBhdXRoTmFtZTIpO1xuXG4gICAgICAgXG4gICAgICAgIGlmIChhdXRoTmFtZTIgPT09IFwiXCIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXR0byBzZW56YSBhdXRob3JlXCIpO1xuICAgICAgICAgICAgdXJsMSA9IFwiaHR0cHM6Ly9hcGkuY3Jvc3NyZWYub3JnL3dvcmtzP3F1ZXJ5LmJpYmxpb2dyYXBoaWM9XCIrcHViTmFtZTI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0dG8gY29uIGF1dGhvcmVcIik7XG5cbiAgICAgICAgICAgIHVybDEgPSBcImh0dHBzOi8vYXBpLmNyb3NzcmVmLm9yZy93b3Jrcz9xdWVyeS5iaWJsaW9ncmFwaGljPVwiK3B1Yk5hbWUyK1wiJnF1ZXJ5LmF1dGhvcj1cIithdXRoTmFtZTI7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogdXJsMSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSaWNoaWVzdGEgZWZmZXR0dWF0YVwiKTtcblxuICAgICAgICAgICAgLyp2YXIgbWFtdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpcG8gZGkgbWFtbXQyIFwiKyB0eXBlb2YobWFtdCkpO1xuXG5cbiAgICAgICAgICAgIHZhciBjb250ZW51dG8gPSBKU09OLnBhcnNlKG1hbXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaXBvIGNvbnRlbnV0bzogXCIgKyB0eXBlb2YoY29udGVudXRvKSk7XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHNvcnQgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmNvbnRlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB2YXIgY2hpdGFtbXVvID0gc29ydC5tZXNzYWdlLml0ZW1zWzBdLnRpdGxlOy8vWydpdGVtcyddWzBdLnJlZmVyZW5jZS1jb3VudDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hpYW1tdW8gPSBcIisgY2hpdGFtbXVvKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zZXQoXCJyaXNwb3N0YVwiLCBjaGl0YW1tdW8pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0J2FwcG8gYW1vb29vb1wiKTtcbiAgICAgICAgICAgIC8vIEFyZ3VtZW50IChyZXNwb25zZSkgaXMgSHR0cFJlc3BvbnNlXG4gICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3JlIGRpbyBwb3JjbyBtYWRvb25hIFwiKyBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTsgLy8gcGVyIGFjY2VkZXIgYWxsYSBwYWdpbmEgd2ViIHZpc2liaWxlIHhtbFxuY29uc3QgaHR0cE1vZHVsZTIgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcbmNvbnN0IGZyb21PYmplY3QgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuZnJvbU9iamVjdDtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbmNvbnN0IHV0aWxzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG5jb25zdCBwcm9jZXNzID0gcmVxdWlyZSgncHJvY2VzcycpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG4vLy9sZXQgc2Nob2xhciA9IHJlcXVpcmUoJ2dvb2dsZS1zY2hvbGFyLWV4dGVuZGVkJyk7XG5cblxudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbnZhciBpdGVtc1ZpZXcgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuXG52YXIgZG9pc19mcm9tX3Njb3B1cyA9IFtdO1xuXG5hc3luYyBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKVxue1xuICAgIGNvbnNvbGUubG9nKFwiRU5UUk8gSU4gQVVUT1JFRUVFXCIpO1xuICAgIGRvaXNfZnJvbV9zY29wdXMgPSBbXTtcblxuICAgIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgdmFyIGdvdERhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuXG4gICAgdmFyIGF1dG9yZSA9IGdvdERhdGEucGFyYW0xO1xuICAgIHZhciBvcmNpZCA9IGdvdERhdGEucGFyYW0yO1xuICAgIHZhciBmYW1pbHlfbmFtZXMgPSBnb3REYXRhLnBhcmFtMztcblxuICAgIHZhciBhdXRob3JOYW1lID0gXCJcIjtcbiAgICBhdXRob3JOYW1lICs9IGF1dG9yZTtcblxuICAgIHZhciBpbmRpY2UgPSAwO1xuICAgIHZhciBhZmZpbCA9IFwiXCI7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV0b3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihhdXRvcmVbaV0gPT0gJywnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluZGljZSA9IGk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRpY2UgdHJvdmF0byA9IFwiK2luZGljZStcIiBsZW5ndGg6IFwiK2F1dG9yZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSAgICBcbiAgICB9XG4gICAgXG4gICAgYWZmaWwgKz0gYXV0aG9yTmFtZS5zbGljZShpbmRpY2UrMSk7XG5cbiAgICB2YXIgYXV0aHF1ZXJ5ID0gZmFtaWx5X25hbWVzO1xuXG4gICAgY29uc29sZS5sb2coXCJhdXRob3IgbmFtZSA9IFwiK2F1dGhxdWVyeSk7XG4gICAgIGNvbnNvbGUubG9nKFwiQUZGSUwgOiBcIithZmZpbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJOT01FIFJJQ0VWVVRPOlwiICthdXRvcmUrXCIgb3JjaWQ6IFwiK29yY2lkKTtcblxuICAgIGNvbnN0IHZtID0gZnJvbU9iamVjdCh7XG4gICAgICAgIGF1dGhvck5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuXG4gICAgXG4gICAgICAgICAgICB2YXIgdXJsc2NvcHVzID0gXCJodHRwczovL2FwaS5lbHNldmllci5jb20vY29udGVudC9zZWFyY2gvc2NvcHVzXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0gXCI/YXBpS2V5PTVkNGU4MmRlMWVhODdlMGFiMTBhYWI4MTMwODcxNzhjXCI7XG4gICAgICAgICAgICB2YXIganMgPSBcIiZodHRwQWNjZXB0PWFwcGxpY2F0aW9uL2pzb25cIjtcblxuICAgICAgICAgICAgdXJsc2NvcHVzICs9IGtleTtcbiAgICAgICAgICAgIHVybHNjb3B1cyArPSBqcztcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IFwiJnF1ZXJ5PVwiO1xuICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdXJsY29tcGxldGEgPSB1cmxzY29wdXMgOy8vK2tleStvcmNpZDtcbiAgXG4gICAgICAgICAgICBhZmZpbCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmKCAoYXV0aHF1ZXJ5IT09IFwiXCIpICYmIChvcmNpZCE9PVwiXCIpICYmIChhZmZpbCE9PVwiXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybGNvbXBsZXRhKz1xdWVyeStcIkFVVEhMQVNUTkFNRShcIithdXRocXVlcnkrXCIpIGFuZCBPUkNJRChcIitvcmNpZCtcIikgYW5kIEFGRklMKFwiK2FmZmlsK1wiKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigoYXV0aHF1ZXJ5IT09IFwiXCIpICYmIChvcmNpZCE9PVwiXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0dG8gc3RyaW5nIDJcIik7XG4gICAgICAgICAgICAgICAgdXJsY29tcGxldGErPXF1ZXJ5K1wiQVVUSExBU1ROQU1FKFwiK2F1dGhxdWVyeStcIikgYW5kIE9SQ0lEKFwiK29yY2lkK1wiKVwiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibCdhZ2cgc2V0dGF0IDJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpb3BvcmNvOiBcIit1cmxjb21wbGV0YSk7XG5cbiAgICAgICAgIFxuICAgICAgICAgICAgdmFyIG1hZG9ubmFwdXR0YW5hID0gYXdhaXQgIGh0dHBNb2R1bGUyLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybDogdXJsY29tcGxldGEsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwifSwgKGUpID0+IHtjb25zb2xlLmxvZyhcImVycm9yZVwiKTt9KTsgLy9mZXRjaCh1cmxjb21wbGV0YSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkaW9wb3Jjb21haWFsZSk7XG4gICAgICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UobWFkb25uYXB1dHRhbmEuY29udGVudC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRyb2xsb1wiKTtcblxuICAgICAgICAgICAgICAgdmFyIGFydGljbGVWaWV3cyA9IFtdO1xuXG4gICAgICAgICAgICAgICB2YXIgbGVuX2FydGNpbGVzID0ganNvbltcInNlYXJjaC1yZXN1bHRzXCJdLmVudHJ5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVhbnRpdMOgIGRpIGFydGljb2xpOiBcIisgbGVuX2FydGNpbGVzKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuX2FydGNpbGVzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZVZpZXdzLnB1c2goe2FydGljbGVUaXRsZToganNvbltcInNlYXJjaC1yZXN1bHRzXCJdW1wiZW50cnlcIl1bal1bXCJkYzp0aXRsZVwiXSwgYXV0aG9yc05hbWU6IFwiQXV0aG9yOiBcIitqc29uW1wic2VhcmNoLXJlc3VsdHNcIl1bXCJlbnRyeVwiXVtqXVtcImRjOmNyZWF0b3JcIl0saXRlbURlc2MgOlwiUHVibGlzaGVkIGluOiBcIitqc29uW1wic2VhcmNoLXJlc3VsdHNcIl1bXCJlbnRyeVwiXVtqXVtcInByaXNtOnB1YmxpY2F0aW9uTmFtZVwiXX0pOyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRvaXNfZnJvbV9zY29wdXMucHVzaChqc29uW1wic2VhcmNoLXJlc3VsdHNcIl1bXCJlbnRyeVwiXVtqXVtcInByaXNtOmRvaVwiXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnRpY2xlVmlld3MpO1xuXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcblxuICAgICAgICAgICAgcGFnZURhdGEuc2V0KFwiYXJ0aWNsZVZpZXdzXCIsIGFydGljbGVWaWV3cyk7XG5cbn1cblxuXG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5cblxuZXhwb3J0cy5kaW9DYXJvID0gZnVuY3Rpb24oYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcblxuICAgIGlmKCFkb2lzX2Zyb21fc2NvcHVzW2luZGV4XSlcbiAgICB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUaGVyZSBpcyBubyBkb2kgYXZhbGlhYmxlXCIpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL2RvaS5vcmcvXCIrZG9pc19mcm9tX3Njb3B1c1tpbmRleF0pO1xufVxuXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwicHJvdmFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG59IDsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlQXV0aG9yLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vcGFnZUF1dGhvci5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvTGlzdFZpZXdMaW5lYXJMYXlvdXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiICB4bWxuczpDYXJkPVxcXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcXFwiIHhtbG5zOmx2PVxcXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcXFwiIHhtbG5zOmx2PVxcXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPjwhLS0gbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIi0tPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJBdXRob3IncyBhcnRpY2xlc1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0ZXh0PVxcXCJCYWNrXFxcIiB0YXA9XFxcImdvQmFja1xcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8L0FjdGlvbkJhcj5cXG5cXG5cXG48R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCI+XFxuPGx2OlJhZExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBhcnRpY2xlVmlld3MgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBpdGVtVGFwPVxcXCJkaW9DYXJvXFxcIiBzZXBhcmF0b3JDb2xvcj1cXFwib3JhbmdlcmVkXFxcIj5cXG4gICAgPGx2OlJhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0PlxcbiAgICAgICAgPGx2Okxpc3RWaWV3TGluZWFyTGF5b3V0IHNjcm9sbERpcmVjdGlvbj1cXFwiVmVydGljYWxcXFwiLz5cXG4gICAgPC9sdjpSYWRMaXN0Vmlldy5saXN0Vmlld0xheW91dD5cXG4gICAgPGx2OlJhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiID5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGFydGljbGVUaXRsZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCItZW50cnlcXFwiLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGF1dGhvcnNOYW1lIH19XFxcIiAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCItZW50cnlcXFwiLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW1EZXNjIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgIGNsYXNzPVxcXCItZW50cnlcXFwiLz4gXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjJcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiQmxhY2tcXFwiLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwhLS08QnV0dG9uIHRleHQ9XFxcIkluZm8gYXV0aG9yc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJsaXN0LWdydW91cC1pdGVtLXRleHRcXFwiIHRhcD1cXFwic2hvd0luZm9BdXRob3JzXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTZWUgcmVmZXJlbmNlc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJsaXN0LWdydW91cC1pdGVtLXRleHRcXFwiIHRhcD1cXFwic2hvd1JlZnNcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICBMYWJlbCB0ZXh0PVxcXCJ7eyBhdXRob3JzTmFtZSB9fVxcXCIgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiLWVudHJ5XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtRGVzYyB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiICBjbGFzcz1cXFwiLWVudHJ5XFxcIi8+IC0tPlxcbiAgICA8L2x2OlJhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG48L2x2OlJhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZUF1dGhvci54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlQXV0aG9yLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7IC8vIHBlciBhY2NlZGVyIGFsbGEgcGFnaW5hIHdlYiB2aXNpYmlsZSB4bWxcbmNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpO1xuY29uc3QgaHR0cE1vZHVsZTIgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vc2hvd0ZpcnN0UmVzdWx0cy12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcbmNvbnN0IGZyb21PYmplY3QgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuZnJvbU9iamVjdDtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbmNvbnN0IHV0aWxzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG52YXIgcGFnZURhdGEgPSBuZXcgT2JzZXJ2YWJsZSgpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG5jb25zdCBtb2RhbFZpZXdNb2R1bGUgPSBcIm5zLXVpLWNhdGVnb3J5L21vZGFsLXZpZXcvYmFzaWNzL21vZGFsLXZpZXctcGFnZVwiO1xuY29uc3QgcGxhdGZvcm1Nb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcbmNvbnN0IENvbG9yID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIikuQ29sb3I7XG5jb25zdCBjb2xvcnMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9rbm93bi1jb2xvcnNcIik7XG5cblxuXG52YXIgcGFnZURhdGEgPSBuZXcgT2JzZXJ2YWJsZSgpO1xudmFyIGl0ZW1zVmlldyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuXG52YXIgcGFzc1RvU2NvcHVzID0gW107XG52YXIgb3JjaWRzX2NvbXBsZXRpID0gW107XG52YXIgcmVmZXJlbmNlcyA9IFtdO1xudmFyIGZsYWdfcmVmcyA9IGZhbHNlO1xuXG52YXIgdXJsX3RvdmlzaXQgPSBbXTtcblxudmFyIG9yY2lkc19pbmNvbXBsZXRpID0gW107XG5cbnZhciBmYW1pbHlfbmFtZXPCoD0gW107XG5cbmFzeW5jIGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpXG57XG4gICAgaXRlbXNWaWV3ID0gW107XG5cbiAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgdmFyIGdvdERhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHBhZ2VEYXRhO1xuXG4gICAgdmFyIHJlc3VsdHMgPSBnb3REYXRhLnBhcmFtMTtcbiAgICB2YXIgaW5kZXggPSBnb3REYXRhLnBhcmFtMjtcblxuICAgIHZhciBkZXNjciA9IFtdO1xuXG4gICAgXG4gICAgdmFyIFVSTCA9IFwiXCI7XG5cbiAgICB2YXIgc2hvd1BhZ2VJbmZvQXV0aG9ycyA9IFtdO1xuXG52YXIgYXV0aF9zaG93ID0gW107XG5cbnZhciB0aXRsZSA9IFwiXCI7XG5cbnZhciBmbGFnX2ZhaWxlZCA9IGZhbHNlO1xuXG52YXIgYXV0aG9yczIgPSBbXTtcblxuLyogQXp6ZXJhbWVudG8gdmFyaWFiaWxpIGdsb2JhbGkgcGVyIGV2aXRhcmUgYXBwZW5kaW5nICovXG52YXIgYWZmaWxpYXRpb25zwqA9IFtdO1xucGFzc1RvU2NvcHVzID0gW107XG5vcmNpZHNfY29tcGxldGkgPSBbXTtcbnJlZmVyZW5jZXMgPSBbXTtcbmZsYWdfcmVmcyA9IGZhbHNlO1xudXJsX3RvdmlzaXQgPSBbXTtcbm9yY2lkc19pbmNvbXBsZXRpID0gW107XG5mYW1pbHlfbmFtZXPCoD0gW107XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiUGFyYW1ldHJvIDEgcmVjOiBcIitnb3REYXRhLnBhcmFtMSk7XG4gICAgLy9jb25zb2xlLmxvZyhcIlBhcmFtZXRybyAyIHJlYzogXCIrZ290RGF0YS5wYXJhbTIpO1xuXG4gICAgY29uc29sZS5sb2coXCJEYXRhIHJlY2lldmVkOiBcIitnb3REYXRhLnBhcmFtMStcIlxcdDI6IFwiK2dvdERhdGEucGFyYW0yK1wiIHR5cGU6IFwiK3R5cGVvZihpbmRleCkpO1xuXG4gICAgdmFyIGF1dGhvcnMxID0gW107XG4gICAgY29uc29sZS5sb2coXCJOdW1iZXIgb2YgYXV0aG9yczogXCIrcmVzdWx0cy5hdXRob3IubGVuZ3RoKTtcblxuICAgIHZhciBvcmNpZHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5hdXRob3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9hdXRob3JzMS5wdXNoKHtuYW1lOiByZXN1bHRzLmF1dGhvcltpXS5mYW1pbHkrXCIgXCIrcmVzdWx0cy5hdXRob3JbaV0uZ2l2ZW59KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImF1dGhvcltcIitpK1wiXTogXCIrYXV0aG9yczFbaV0pOyAgIFxuICAgICAgICBpZighcmVzdWx0cy5hdXRob3JbMF0uT1JDSUQpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgaWYocmVzdWx0cy5hdXRob3JbaV0uT1JDSUQpXG4gICAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvcmNpZCBmb3IgXCIraStcIiBleGlzdHNcIik7XG4gICAgICAgIHNob3dQYWdlSW5mb0F1dGhvcnMucHVzaChyZXN1bHRzLmF1dGhvcltpXS5PUkNJRCk7XG4gICAgICAgIG9yY2lkc19jb21wbGV0aS5wdXNoKHJlc3VsdHMuYXV0aG9yW2ldLk9SQ0lEKTtcblxuICAgICAgICB2YXIgbGV0dGVycyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGsgPSAxNzsgayA8IHNob3dQYWdlSW5mb0F1dGhvcnNbaV0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXJzKz1yZXN1bHRzLmF1dGhvcltpXS5PUkNJRFtrXTtcbiAgICAgICAgfVxuICAgICAgICBvcmNpZHNbaV0gPSBsZXR0ZXJzO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGV0dGVyczpcIik7XG4gICAgfVxuICAgIH1cblxuICAgIG9yY2lkc19pbmNvbXBsZXRpID0gb3JjaWRzO1xuXG4gICAgdmFyIGZsYWdfc2NvcHVzID0gZmFsc2U7XG5cblxuICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgYWZmaWxpYXRpb25zXCIpO1xuICAgIGlmKG9yY2lkc1swXSlcbiAgICB7XG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCBvcmNpZHMubGVuZ3RoOyB0KyspIHtcblxuICAgICAgICB2YXIgdXJsc2NvcHVzID0gXCJodHRwczovL2FwaS5lbHNldmllci5jb20vY29udGVudC9zZWFyY2gvYXV0aG9yXCI7XG4gICAgICAgIHZhciBrZXkgPSBcIj9hcGlLZXk9NWQ0ZTgyZGUxZWE4N2UwYWIxMGFhYjgxMzA4NzE3OGNcIjtcbiAgICAgICAgdmFyIG9yY2lkID0gXCImcXVlcnk9T1JDSURcIjtcbiAgICBcbiAgICAgICAgLy92YXIgb3JjaWQxID0gXCIwMDAwLTAwMDEtNzAzMS05MjBYXCI7XG4gICAgICAgXG4gICAgICAgIHZhciB1cmxjb21wbGV0YSA9IHVybHNjb3B1cytrZXkrb3JjaWQrXCIoXCIrb3JjaWRzW3RdK1wiKVwiO1xuICAgICAgICB2YXIganMgPSBcIiZodHRwQWNjZXB0PWFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICAgICAgdXJsY29tcGxldGEgKz0ganM7XG4gICAgICAgIFxuICAgICAgICAvL3ZhciB1cmxjb21wbGV0YSA9XCJodHRwczovL2FwaS5lbHNldmllci5jb20vY29udGVudC9zZWFyY2gvYXV0aG9yP2FwaUtleT01ZDRlODJkZTFlYTg3ZTBhYjEwYWFiODEzMDg3MTc4YyZxdWVyeT1PUkNJRCgwMDAwLTAwMDEtNzAzMS05MjBYKSZodHRwQWNjZXB0PWFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIHF1ZXJ5OiBcIit1cmxjb21wbGV0YSk7XG4gICAgICAgIC8vdmFyIGRpb3BvcmNvbWFpYWxlID0gcmV0cmlldmVWYWx1ZXModXJsY29tcGxldGEpO1xuICAgICAgICB2YXIgbWFkb25uYXB1dHRhbmEgPSBhd2FpdCAgaHR0cE1vZHVsZTIucmVxdWVzdCh7XG4gICAgICAgICB1cmw6IHVybGNvbXBsZXRhLFxuICAgICAgICAgbWV0aG9kOiBcIkdFVFwifSwgKGUpID0+IHtjb25zb2xlLmxvZyhcImVycm9yZVwiKTt9KTsgLy9mZXRjaCh1cmxjb21wbGV0YSk7XG4gXG4gICAgICAgIC8vY29uc29sZS5sb2coZGlvcG9yY29tYWlhbGUpO1xuICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UobWFkb25uYXB1dHRhbmEuY29udGVudC50b1N0cmluZygpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb250cm9sbG9cIik7XG5cbiAgICAgICAgaWYoanNvbltcInNlcnZpY2UtZXJyb3JcIl0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JFXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmF1dGhvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGF1dGhvcnMxLnB1c2goe25hbWU6IHJlc3VsdHMuYXV0aG9yW2ldLmZhbWlseStcIiBcIityZXN1bHRzLmF1dGhvcltpXS5naXZlbn0pO1xuICAgICAgICAgICAgICAgIGZhbWlseV9uYW1lcy5wdXNoKHJlc3VsdHMuYXV0aG9yW2ldLmZhbWlseSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmbGFnX3Njb3B1cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhZmZpbCA9IFwiXCI7XG4gICAgICAgIGlmIChqc29uW1wic2VhcmNoLXJlc3VsdHNcIl1bXCJvcGVuc2VhcmNoOnRvdGFsUmVzdWx0c1wiXT4wKVxuICAgICAgICB7XG4gICAgICAgICBhZmZpbCA9IGpzb25bXCJzZWFyY2gtcmVzdWx0c1wiXVtcImVudHJ5XCJdW1wiMFwiXVtcImFmZmlsaWF0aW9uLWN1cnJlbnRcIl1bXCJhZmZpbGlhdGlvbi1uYW1lXCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJlbmQgYWZmaWxpYXRpb24gZm9yIFwiK3QpO1xuICAgICAgICBhdXRob3JzMS5wdXNoKHtuYW1lOiByZXN1bHRzLmF1dGhvclt0XS5mYW1pbHkrXCIgXCIrcmVzdWx0cy5hdXRob3JbdF0uZ2l2ZW4rXCIsIFwiK2FmZmlsfSk7XG4gICAgICAgIGZhbWlseV9uYW1lcy5wdXNoKHJlc3VsdHMuYXV0aG9yW3RdLmZhbWlseSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmF1dGhvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXV0aG9yczEucHVzaCh7bmFtZTogcmVzdWx0cy5hdXRob3JbaV0uZmFtaWx5K1wiIFwiK3Jlc3VsdHMuYXV0aG9yW2ldLmdpdmVufSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYoZmxhZ19zY29wdXMpXG4gICAge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkF1dGhlbnRpY2F0aW9uIEVsc2V2aWVyXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkluIG9yZGVyIHRvIHNob3cgdGhlIGF1dGhvcidzIGFmZmlsYXRpb24geW91IG11c3QgbG9nZ2VkIHdpdGggU2NvcHVzXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9O1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBtdXN0IGxvZ2dlZCB3aXRoIFNjb3B1cyFcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAgY29uc29sZS5sb2coXCJjaGVjayBhZmZpbGlhdGlvbnMgZmluaXNoZWRcIik7XG4gICAgIHBhc3NUb1Njb3B1cyA9IGF1dGhvcnMxO1xuXG4gICAgIFxuICAgICBjb25zb2xlLmxvZyhcInN0YXJ0IGdvb2dsZSBzY2hvbGFyIHF1ZXJ5aW5nIDFcIik7XG5cbiAgICAgY29uc29sZS5sb2coXCJsZW5ndGg9IFwiK2F1dGhvcnMxLmxlbmd0aCsgXCJcXG5cIithdXRob3JzMVswXVtcIm5hbWVcIl0pO1xuXG4gICAgLy8gUklFTVBJTUVOVE8gU1RSVVRUVVJBIERBVEkgUEVSIFBBUlRFIFZJU1VBTEVcbiAgICBmb3IgKGxldCBtID0gMDsgbSA8IGF1dGhvcnMxLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgICAvL2l0ZW1zVmlldy5wdXNoKHtpdGVtTmFtZTogYXV0aG9yczFba10ubmFtZX0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRob3JbXCIrbStcIl06IFwiK2F1dGhvcnMxW21dW1wibmFtZVwiXSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJzdGFydCBnb29nbGUgc2Nob2xhciBxdWVyeWluZ1wiKTtcblxuXG5cblxuICAgIFxuXG4gICAgLy9QcmVsZXZvIHVybCBkZWwgc2l0byBvcmlnaW5hbGUgTkVMTEEgUkVMQVpJT05FIERJUkUgQ0hFIERFTUFOREEgQSBET0kub3JnIGNvbWUgc2UgZm9zc2UgdW4nYWx0cmEgZm9udGVcbiAgICBVUkwgPSByZXN1bHRzLlVSTDtcbiAgICB1cmxfdG92aXNpdC5wdXNoKFVSTCk7XG4gICAgLy9yZXRyaWV2aW5nIGFydGljbGUncyB0aXRsZVxuICAgIHRpdGxlID0gcmVzdWx0cy50aXRsZTtcblxuXG4gICAgYXV0aF9zaG93ID0gYXV0aG9yczE7XG5cbiAgICB2YXIgaXNibiA9IFwiXCI7XG4gICAgLy9jb25zb2xlLmxvZyhcInR5cGU6IFwiK3Jlc3VsdHMuaXNibi10eXBlKTtcblxuICAgLy8gY29uc29sZS5sb2coXCJsb2c6IFwiKyBnZXRTYWZlKCgpID0+IHJlc3VsdHNbXCJpc2JuLXR5cGVcIl1bXCIxXCJdLnByb3BlcnRpZXMpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgZ29vZ2xlIHNjaG9sYXIgcXVlcnlpbmdcIik7XG4gICAgLy8gaWYocmVzdWx0c1tcImlzYm4tdHlwZVwiXSAmJiByZXN1bHRzW1wiaXNibi10eXBlXCJdW1wiMVwiXSlcbiAgICAvLyB7Y29uc29sZS5sb2coXCJzZSBww7IgZmFcIik7XG4gICAgLy8gaXNibiA9ICtyZXN1bHRzW1wiaXNibi10eXBlXCJdW1wiMVwiXS52YWx1ZTtcbiAgICAvLyB9XG4gIFxuICAgIFxuICAgIC8vIGlmIChyZXN1bHRzW1wiaXNibi10eXBlXCJdICYmIHJlc3VsdHNbXCJpc2JuLXR5cGVcIl1bXCIwXCJdKVxuICAgIC8vICAgICBpc2JuID0gK3Jlc3VsdHNbXCJpc2JuLXR5cGVcIl1bXCIwXCJdLnZhbHVlO1xuICAgIC8vICAgICBlbHNlXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTlUgU0UgUMOyIGZhIG51IGNhenpcIik7XG4gICAgLy8gfVxuXG5cbiAgICBpZiAocmVzdWx0cy5JU0JOICYmIHJlc3VsdHMuSVNCTltcIjFcIl0pXG4gICAgaXNibiA9ICtyZXN1bHRzLklTQk5bXCIxXCJdO1xuICAgIGVsc2UgaWYgKHJlc3VsdHMuSVNCTiAmJiByZXN1bHRzLklTQk5bXCIwXCJdKVxuICAgIGlzYm4gPSArcmVzdWx0cy5JU0JOW1wiMFwiXTtcbiAgICBlbHNlXG4gICAgY29uc29sZS5sb2coXCJOVSBTRSBQw7IgZmEgbnUgY2F6elwiKTtcblxuICAgIGNvbnNvbGUubG9nKFwiaXNibiBcIitpc2JuKTtcblxuICAgIC8vZGlvY2FuZShpc2JuLGFyZ3MpO1xuXG4gIGNvbnNvbGUubG9nKFwic2VhZXJjaFF1ZXJ5OiBcIitpc2JuKTsgICAgXG4gICAgXG4gIHZhciBzZWFyY2hRdWVyeSA9ICBpc2JuOy8vICBcIjk3OC0zLTAzMC0zNDkxNC0xXCI7IC8vXCIkKFwiI3NlYXJjaF9mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbihlKSB7XG4gIHZhciB0aHVtYjIgPSBbXTtcbiAgdmFyIGF1dGhvcnMgPSBbXTtcbiAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcblxuXG4gIC8vdmFyIHNlYXJjaFF1ZXJ5ID0gJChcIiNzZWFyY2hfdHh0XCIpLnZhbCgpO1xuICAvL3NlYXJjaFF1ZXJ5ID0gc2VhcmNoUXVlcnkuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpO1xuXG4gIC8qaWYgKCFzZWFyY2hRdWVyeSkge1xuICAgIHNlYXJjaFF1ZXJ5ID0gXCJwYWxlb1wiO1xuICB9Ki9cbiAgY29uc3QgdmlldyA9IGFyZ3Mub2JqZWN0O1xuIFxuXG4gICAgaWYoc2VhcmNoUXVlcnkpXG4gICAge1xuICAgIHZhciB1cmwgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1cIiArIHNlYXJjaFF1ZXJ5O1xuICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBxdWVyeTogXCIrIHVybCk7XG5cbiAgICAvLyBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgIC8vICAgICB1cmw6IHVybCxcbiAgICAvLyAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgLy8gfSkudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGh0dHBNb2R1bGUucmVxdWVzdCh7dXJsOiB1cmwsIG1ldGhvZDogXCJHRVRcIn0sKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yZSBkaW8gcG9yY28gbWFkb29uYSBcIisgZSl9KTtcblxuICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlLmNvbnRlbnQudG9TdHJpbmcoKSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUkVRVUVTVCBPSyBmcm9tIEdPT0dMRSBCT09LU1wiKTtcbiAgICAgIGlmKGpzb24udG90YWxJdGVtcyA9PSAwKVxuICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRJT0NBTkVFRUVFRUVFXCIpO1xuICAgICAgICBmbGFnX2ZhaWxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBqc29uOiBcIisganNvbi5pdGVtcy5sZW5ndGgpO1xuICAgICAgdmFyIGh0bWxjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciB0aHVtYiA9IFwiXCI7XG4gICAgICB2YXIgYXV0aG9yID0gXCJcIjtcbiAgICAgIHZhciBkZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICB2YXIgaXNibiA9IFwiXCI7XG4gICAgICB2YXIgcHJpY2UgPSBcIlwiO1xuICAgICAgdmFyIHZhbHV0YSA9IFwiXCI7XG5cbiAgICAgIHZhciBkaW9jYW4gPSBbXTtcblxuICAgICAgZm9yIChsZXQgIGkgPSAwOyBpIDwganNvbi5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VyY28gaW1tYWdpbmkgZWQgYXV0b3JpLi4uXCIpO1xuICAgICAgICBpZiAoanNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLmltYWdlTGlua3MpIHtcbiAgICAgICAgICB0aHVtYiA9IGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby5pbWFnZUxpbmtzLnNtYWxsVGh1bWJuYWlsO1xuICAgICAgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgYm9vayBhY2hpZXZlZFwiKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRodW1iID0gXCJodHRwOi8vaS5pbWd1ci5jb20vb00zTWRBaS5wbmdcIjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlIGJvb2sgdW5kZWZpbmVkXCIpO1xuXG4gICAgICAgICAgLy90aHVtYiA9ICdodHRwOi8vc2xlbXMtb2xkYm95cy5vcmcudWsvbGlicmFyeS93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8xMS9saWJyYXJ5X25vY292ZXIuanBnJ1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJJTU1BR0lORTogXCIrdGh1bWIpO1xuICAgICAgICB2YXIgZGlvY2FubyA9IHRodW1iLnNsaWNlKDAsIDQpICsgXCJzXCIgKyB0aHVtYi5zbGljZSg0KTtcbiAgICBcblxuICAgICAgICB0aHVtYjIucHVzaCh7aW1hZ2VVcmk6IGRpb2Nhbm99KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTU1BR0lORTogXCIrZGlvY2Fubyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUFOTkFHIEEgTUFST05OTjtcIik7XG5cblxuICAgICAgICB2YXIgdGl0bGVfYm9vayA9IFwiXCI7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgdGl0bGUgYm9va1wiKTtcbiAgICAgICAgLy8gQVVUSE9SXG4gICAgICAgLy8gY29uc29sZS5sb2coanNvbi5pdGVtc1tpXVtcInZvbHVtZUluZm9cIl0pO1xuICAgICAgICBpZighanNvbi5pdGVtc1tpXVtcInZvbHVtZUluZm9cIl0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTnVuIGNzdGFubiBhdXRvcmlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZSQSBPUkEgQ0VSQ09PT09PXCIpO1xuICAgICAgICAgICAgaWYoIWpzb24uaXRlbXNbaV0udm9sdW1lSW5mby5hdXRob3JzKVxuICAgICAgICAgICAgICAgIGRpb2Nhbi5wdXNoKFwiaW5mb3JtYXRpb24gbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VyY28gYXV0b3JpLCBsZW5ndGg6IFwiKyBqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uYXV0aG9ycy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby5hdXRob3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBkaW9jYW4ucHVzaChqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8uYXV0aG9yc1tqXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dGhvciBbXCIraitcIl06IFwiK2Rpb2NhbltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBpZighanNvbi5pdGVtc1tpXS52b2x1bWVJbmZvLnRpdGxlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGVkcyBpbmZvcm1hdGlvbnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGl0bGVfYm9vayArPSBqc29uLml0ZW1zW2ldLnZvbHVtZUluZm8udGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgLy9kZXNjcmlwdGlvblxuICAgICAgICBkZXNjcmlwdGlvbiA9IGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2coXCJwdWdoaW5cIik7XG4gICAgICAgIGRlc2NyLnB1c2goe2Rlc2M6IGRlc2NyaXB0aW9ufSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHVnaGkybjogXCIrZGVzY3IubGVuZ3RoKTtcblxuICAgIFxuXG4gICAgICAgIGlmKGRpb2Nhbi5sZW5ndGg+PTApXG4gICAgICAgICAgICBhdXRob3JzLnB1c2goe2F1dGhvcjogXCJFZHM6IFwiKyBkaW9jYW5bMF0rXCIgZXQgYWwuXCJ9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYXV0aG9ycy5wdXNoKHthdXRob3I6IGRpb2NhblswXX0pO1xuICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgLypjb25zb2xlLmxvZyhcImRlc2NyaXB0aW9uOiBcIitkZXNjcmlwdGlvbik7ICovXG4gICAgICAgIC8vY29uc29sZS5sb2codGh1bWIyWzBdLHRodW1iMlsxXSx0aHVtYjJbMl0pO1xuICAgICAgICBcbiAgICAgICAgaXNibiA9IGpzb24uaXRlbXNbaV0udm9sdW1lSW5mby5pbmR1c3RyeUlkZW50aWZpZXJzWzBdLmlkZW50aWZpZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXNibjogXCIraXNibik7XG5cbiAgICAgICAgaWYoanNvbi5pdGVtc1tpXS5zYWxlSW5mbyAmJiBqc29uLml0ZW1zW2ldLnNhbGVJbmZvLmxpc3RQcmljZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcHJpY2UgPSBqc29uLml0ZW1zW2ldLnNhbGVJbmZvLmxpc3RQcmljZS5hbW91bnQ7XG4gICAgICAgICAgICB2YWx1dGEgPSBqc29uLml0ZW1zW2ldLnNhbGVJbmZvLmxpc3RQcmljZS5jdXJyZW5jeUNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICBwcmljZT0gXCJOb3QgZm9yIHNhbGVcIjtcbiAgICAgICAgdmFsdXRhID0gXCJcIjtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlByaWNlOiBcIitwcmljZStcIiBcIit2YWx1dGEpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvY2Vzc28gZGkgcmljZXJjYSB0ZXJtaW5hdG9cIik7XG4gICAgICAgXG4gICAgICAgIC8vIGNvbnN0IHZtID0gZnJvbU9iamVjdCh7XG4gICAgICAgIC8vICAgICB0aHVtYjIsXG4gICAgICAgIC8vICAgICBkZXNjcixcbiAgICAgICAgLy8gICAgIGF1dGhvcnMsXG4gICAgICAgIC8vICAgICBhdXRoX3Nob3csXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZSBvZiB0aHVtYjI6IFwiK3RodW1iMi5sZW5ndGgpO1xuICAgICAgfVxuICAgIFxuICAgICAgLy9zZXR0byBsJ2FycmF5IGdsb2JhbGUgZGkgYXV0b3JpIGNvbiBxdWVsbG8gbG9jYWxlXG4gICAgICBhdXRob3JzX2NvbXBsZXRlID0gZGlvY2FuO1xuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJVU0NJVE9cIik7XG5cbiAgICBmdW5jdGlvbiB0cnVuYyhzLCBuKSB7XG4gICAgICAgIHZhciB0ID0gcy5pbmRleE9mKFwiIFwiLCBuKTtcbiAgICAgICAgaWYgKHQgPT0gLTEpIHJldHVybiBzO1xuICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgdCkgKyBcIi4uLlwiO1xuICAgIH1cblxuXG5cbiAgICAvL2NvbnNvbGUubG9nKFwiYW5hbGl6byByZWZzXCIpO1xuICAgIGlmKCFyZXN1bHRzLnJlZmVyZW5jZSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gcmVmc1wiKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByZXN1bHRzLnJlZmVyZW5jZS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgcmVmZXJlbmNlcy5wdXNoKHtyZWZOYW1lOiByZXN1bHRzLnJlZmVyZW5jZVtrXS51bnN0cnVjdHVyZWQsIERPSTogcmVzdWx0cy5yZWZlcmVuY2Vba10uRE9JfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZWZlcmVuY2VzKTtcbiAgICAgICAgZmxhZ19yZWZzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBpZihyZXN1bHRzLnJlZmVyZW5jZS5sZW5ndGgpXG4gICAgLy8ge1xuICAgIC8vIGZvciAobGV0IGsgPSAwOyBrIDwgcmVzdWx0cy5yZWZlcmVuY2UubGVuZ3RoOyBrKyspIHtcbiAgICAvLyAgICAgcmVmZXJlbmNlcy5wdXNoKHtyZWZOYW1lOiByZXN1bHRzLnJlZmVyZW5jZVtrXS51bnN0cnVjdHVyZWQsIERPSTogcmVzdWx0cy5yZWZlcmVuY2Vba10uRE9JfSk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKHJlZmVyZW5jZXMpO1xuICAgIC8vIGZsYWdfcmVmcyA9IHRydWU7XG4gICAgLy8gfVxuXG4gICAgXG5cbn1cbmlmKCFzZWFyY2hRdWVyeSB8fCAoZmxhZ19mYWlsZWQgJiYgIXNlYXJjaFF1ZXJ5KSlcbntcbiAgICBjb25zb2xlLmxvZyhcIkVSUk9SRSBJU0JOXCIpO1xuICAgIHZhciBtYW5uYWdnaWE9IFwiUmVzdWx0cyBub3QgZm91bmRcIjtcbiAgICB2YXIgc2hvd1VybCA9IFwiQ2xpY2sgaGVyZSB0byBzaG93IHdlYiBzaXRlIGFib3V0IHBhcGVyXCI7XG4gICAgY29uc3Qgdm0gPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgbWFubmFnZ2lhLFxuICAgICAgICBzaG93VXJsXG4gICAgICAgIH0pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwic2V0dG8gbGEgcGFnaW5hLi4uLlwiKTtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiTm8gUmVzdWx0cyBmb3VuZFwiLFxuICAgICAgICBtZXNzYWdlOiBcIkFueXRoaW5nIGluZm9ybWF0aW9uIGhhcyBiZWVuIGZvdW5kLlwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG5cblxuICAgIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgZmFpbGVkXCIpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgICAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xuICAgIH0pO1xuXG4gICAgZmxhZ19mYWlsZWQgPSBmYWxzZTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn0gICBcbiAgICBcbiAgICAvL2l0ZW1zVmlldy5wdXNoKHtpdGVtSW1hZ2U6IHRodW1iMlswXVtcImltYWdlVXJpXCJdLCBpdGVtTmFtZTogYXV0aG9yc1swXVtcImF1dGhvclwiXSwgaXRlbURlc2M6IGRlc2NyWzBdW1wiZGVzY1wiXX0pO1xuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aHVtYjIubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgaXRlbXNWaWV3LnB1c2goe2l0ZW1JbWFnZTogKHRodW1iMltrXVtcImltYWdlVXJpXCJdID8gdGh1bWIyW2tdW1wiaW1hZ2VVcmlcIl0gOiBcImh0dHA6Ly9pLmltZ3VyLmNvbS9vTTNNZEFpLnBuZ1wiKSwgaXRlbVRpdGxlOiBcIkJvb2s6IFwiK3RpdGxlX2Jvb2ssIGl0ZW1OYW1lOiAoYXV0aG9yc1trXVtcImF1dGhvclwiXSA/IGF1dGhvcnNba11bXCJhdXRob3JcIl0gOiBcIk5vIGF1dGhvcidzIGluZm9ybWF0aW9uIGF2YWlsYWJsZVwiKSwgaXRlbURlc2M6IChkZXNjcltrXVtcImRlc2NcIl0gPyBkZXNjcltrXVtcImRlc2NcIl0gOiBcIk5vIGRlc2NyaXB0aW9uIGF2YWlsYWJsZVwiKSwgdGl0bGVQYXBlcjogdGl0bGV9KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtc1ZpZXdba10pO1xuXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coaXRlbXNWaWV3WzBdKTtcblxuIFxuICAgIC8vUFJFUEFSQVpJT05FIExJU1RBIEFVVEhPUlMgY29uIE9SQ0lEIEVEIEFGRklMSVpBSU9OSVxuICAgIC8vIGZvciAobGV0IGsgPSAwOyBrIDwgYXUubGVuZ3RoOyBrKyspIHtcbiAgICAvLyAgICAgY29uc3QgZWxlbWVudCA9IGF1W2tdO1xuICAgICAgICBcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coXCJsZW5ndGggZmluYWwgZGF0YTogXCIraXRlbXNWaWV3Lmxlbmd0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZyYXRlZWUgKz0gXCIraXRlbXNWaWV3KTtcbiAgICBpZighaXRlbXNWaWV3Lmxlbmd0aClcbiAgICB7XG4gICAgICAgIC8vIGxldCBvcHRpb25zID0ge1xuICAgICAgICAvLyAgICAgdGl0bGU6IFwiTm8gUmVzdWx0cyBmb3VuZFwiLFxuICAgICAgICAvLyAgICAgbWVzc2FnZTogXCJuaWVudGVlZWVlZSAyXCIsXG4gICAgICAgIC8vICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBkaWFsb2dzLmFsZXJ0KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBmYWlsZWRcIik7XG4gICAgICAgIC8vICAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgLy8gICAgIGNvbnN0IHBhZ2UgPSBidXR0b24ucGFnZTtcbiAgICAgICAgLy8gICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG5cbiAgICB9XG4gICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG4gICAgXG5cbiAgICBwYWdlRGF0YS5zZXQoXCJpdGVtc1ZpZXdcIiwgaXRlbXNWaWV3KTtcbiAgICBwYWdlRGF0YS5zZXQoXCJ0aXRsZVBhcGVyXCIsIHRpdGxlUGFwZXIpO1xuXG5cbiAgICAgICBcbn1cblxuICBcbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcblxuZXhwb3J0cy5zaG93SW5mb0F1dGhvcnMgPSBmdW5jdGlvbigpXG57XG5cblxuICAgIGNvbnN0IG5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlU2NvcHVzXCIsXG4gICAgICAgIC8vYmFja3N0YWNrVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICB9LFxuICAgICAgICAvL2NsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiBwYXNzVG9TY29wdXMsXG4gICAgICAgICAgICBwYXJhbTI6IG9yY2lkc19jb21wbGV0aSxcbiAgICAgICAgICAgIHBhcmFtMzogb3JjaWRzX2luY29tcGxldGksXG4gICAgICAgICAgICBwYXJhbTQ6IGZhbWlseV9uYW1lc1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbkVudHJ5KTtcbn1cblxuZXhwb3J0cy5zaG93UmVmcyA9IGZ1bmN0aW9uKClcbntcbiAgICBpZighZmxhZ19yZWZzKVxuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJSZWZlcmVuY2VzIEluZm9cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gcmVmZXJlbmNlcyBpbmZvcm1hdGlvbiBhcmUgYXZhaWxhYmxlXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQob3B0aW9ucykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcblxuICAgIGNvbnN0IG5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlUmVmc1wiLFxuICAgICAgICAvL2JhY2tzdGFja1Zpc2libGU6IGZhbHNlLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy9jbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIHBhcmFtMTogcmVmZXJlbmNlcyxcbiAgICAgICAgICAgIHBhcmFtMjogMVxuICAgICAgICB9XG4gICAgfTtcbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbkVudHJ5KTtcbiAgICB9XG59XG5cblxuZXhwb3J0cy5kaW9DYXJvID0gZnVuY3Rpb24gKGFyZ3MpXG57XG4gICAgdmFyIGluZGV4ID0gYXJncy5pbmRleDtcbiAgICBjb25zb2xlLmxvZyhgIGl0ZW0gdGFwICR7aW5kZXh9YCk7XG4gICAgY29uc29sZS5sb2coXCJlIGNsaWNjYXQgZnJhYWFhXCIpO1xuICAgIFxuICAgIGlmKCF1cmxfdG92aXNpdFtpbmRleF0pXG4gICAge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFydGljbGUncyBJbmZvXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIk5vIHdlYiBzaXRlIGF2YWlsYWJsZVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfTtcblxuICAgICAgICBkaWFsb2dzLmFsZXJ0KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwodXJsX3RvdmlzaXRbaW5kZXhdKTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5leHBvcnRzLnNob3dEZXNjID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCJEZXNjcmlwdGlvbiBvZiBCb29rXCIsXG4gICAgICAgIG1lc3NhZ2U6IGRlc2NyWzBdLmRlc2MsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhkZXNjclswXS5kZXNjKTtcbiAgICBkaWFsb2dzLmFsZXJ0KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgfSk7XG59XG5cbmV4cG9ydHMuZ29Ub1Nob3AgPSBmdW5jdGlvbiAoKVxue1xuICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoVVJMKTtcbn1cblxuZXhwb3J0cy5zaG93QWxsQXV0aG9ycyA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGF1dG9yaSA9IFwiXCI7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBhdXRob3JzX2NvbXBsZXRlLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGF1dG9yaSArPSBhdXRob3JzX2NvbXBsZXRlW2tdIDtcbiAgICAgICAgaWYoayAhPSBhdXRob3JzX2NvbXBsZXRlLmxlbmd0aC0xKVxuICAgICAgICBhdXRvcmkrPVwiLCBcIiA7XG4gICAgfVxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCJMaXN0IG9mIGF1dGhvcnNcIixcbiAgICAgICAgbWVzc2FnZTogYXV0b3JpLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG4gICAgZGlhbG9ncy5hbGVydChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnRzLnNob3dBdXRoSW5mbyA9IGZ1bmN0aW9uKGFyZ3MpXG57XG4gICAgdmFyIGluZGV4ID0gYXJncy5pbmRleDtcbiAgICBjb25zb2xlLmxvZyhgU2Vjb25kIExpc3RWaWV3IGl0ZW0gdGFwICR7aW5kZXh9YCk7XG4gICAgY29uc29sZS5sb2coc2hvd1BhZ2VJbmZvQXV0aG9yc1tpbmRleF0pO1xuXG4gICAgaWYoIXNob3dQYWdlSW5mb0F1dGhvcnNbaW5kZXhdKVxuICAgIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlRoZXJlIGFyZSBubyBpbmZvcm1hdGlvbiBhYm91dCBcIithdXRoX3Nob3dbaW5kZXhdWyduYW1lJ10pO1xuXG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgIHV0aWxzTW9kdWxlLm9wZW5Vcmwoc2hvd1BhZ2VJbmZvQXV0aG9yc1tpbmRleF0pO1xuXG59XG5cblxuZXhwb3J0cy5zaG93RnVsbFVybCA9IGZ1bmN0aW9uIChhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApO1xuXG4gICAgaWYoIVVSTClcbiAgICB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUaGVyZSBpcyBubyB3ZWIgc2l0ZSBmb3IgXCIrdGl0bGUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoVVJMKTtcblxufVxuXG5leHBvcnRzLnJkbGlzdGxvYWRlZCA9IGZ1bmN0aW9uKGFyZ3MpXG57XG59XG5cbmV4cG9ydHMub25JdGVtTG9hZGluZyA9IGZ1bmN0aW9uKGFyZ3MpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgaXRlbXNcIik7XG4gICAgICAgIGlmKHBsYXRmb3JtTW9kdWxlLmlzQW5kcm9pZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmFuZHJvaWQpO1xuICAgICAgICAgICAgdmFyIG5ld2NvbG9yID0gbmV3IENvbG9yKDIwLDI1NSwwLDApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXJncy5hbmRyb2lkLmJhY2tncm91bmRWaWV3KTtcbiAgICAgICAgICAgIC8vYXJncy5hbmRyb2lkLmJhY2tncm91bmRWaWV3LmJhY2tncm91bmRDb2xvciA9IG5ld2NvbG9yLmlvcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydHMuZ29CYWNrID0gZnVuY3Rpb24oYXJncylcbnsgXG4gICAgY29uc29sZS5sb2coXCJwcm92YVwiKTtcbiAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZUZpZnRoLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vcGFnZUZpZnRoLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvUmFkTGlzdFZpZXcubGlzdFZpZXdMYXlvdXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9MaXN0Vmlld0xpbmVhckxheW91dFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgY2xhc3M9XFxcImRpb2NhblxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJyZ2IoMjEwLCAyMzEsIDIzOSlcXFwiPjwhLS0gbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIi0tPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJSZXN1bHRzIFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiID5cXG4gICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGV4dD1cXFwiQmFja1xcXCIgdGFwPVxcXCJnb0JhY2tcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuXFxuPGx2OlJhZExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBpdGVtc1ZpZXcgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBpdGVtVGFwPVxcXCJkaW9DYXJvXFxcIiBsb2FkZWQ9XFxcInJkbGlzdGxvYWRlZFxcXCIgaXRlbUxvYWRpbmc9XFxcIm9uSXRlbUxvYWRpbmdcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiID4gXFxuICAgIDxsdjpSYWRMaXN0Vmlldy5saXN0Vmlld0xheW91dD5cXG4gICAgICAgIDxsdjpMaXN0Vmlld0xpbmVhckxheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIi8+XFxuICAgIDwvbHY6UmFkTGlzdFZpZXcubGlzdFZpZXdMYXlvdXQ+XFxuICAgIDxsdjpSYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHdpZHRoPVxcXCIxNTBcXFwiIGhlaWdodD1cXFwiMTUwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgc3JjPVxcXCJ7eyBpdGVtSW1hZ2UgfX1cXFwiIGNsYXNzPVxcXCItYm91bmNlXFxcIi8+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW1UaXRsZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0taGVhZGluZ1xcXCIgY2xhc3M9XFxcIi1lbnRyeVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbU5hbWUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcXFwiIGNsYXNzPVxcXCItZW50cnlcXFwiLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW1EZXNjIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbS10ZXh0XFxcIiBjbGFzcz1cXFwiLWVudHJ5XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSW5mbyBhdXRob3JzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3J1b3VwLWl0ZW0tdGV4dFxcXCIgdGFwPVxcXCJzaG93SW5mb0F1dGhvcnNcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2VlIHJlZmVyZW5jZXNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwibGlzdC1ncnVvdXAtaXRlbS10ZXh0XFxcIiB0YXA9XFxcInNob3dSZWZzXFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVxcXCI0XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIkJsYWNrXFxcIi8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICBcXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9sdjpSYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuPC9sdjpSYWRMaXN0Vmlldz5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZUZpZnRoLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VGaWZ0aC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpOyAvLyBwZXIgYWNjZWRlciBhbGxhIHBhZ2luYSB3ZWIgdmlzaWJpbGUgeG1sXG5jb25zdCBodHRwTW9kdWxlMiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xuY29uc3QgZnJvbU9iamVjdCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5mcm9tT2JqZWN0O1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcbmNvbnN0IHByb2Nlc3MgPSByZXF1aXJlKCdwcm9jZXNzJyk7XG52YXIgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cblxudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbnZhciBpdGVtc1ZpZXcgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuXG52YXIgcmVmcyA9IFtdO1xuXG5hc3luYyBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKVxue1xuICAgIGNvbnNvbGUubG9nKFwiRU5UUk8gSU4gUkVGU1NTU1wiKTtcbiAgICAvKiBBenplcmFtZW50byB2ZXR0b3JpIHBlciBldml0YXJlIGFwcGVuZGluZyBvZ25pIGNoaWFtYXRhIGFsbGEgcGFnaW5hICovXG4gICAgaXRlbXNWaWV3ID0gW107XG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICB2YXIgZ290RGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG5cbiAgICByZWZzID0gW107XG4gICAgYXV0b3JpMiA9IFtdO1xuXG5cbiAgICBcbiAgICAgcmVmcyA9IGdvdERhdGEucGFyYW0xO1xuICAgIGNvbnNvbGUubG9nKFwiUFJFTEVWTyBEQVRJXCIpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhyZWZzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtc1ZpZXcucHVzaCh7cmVmTmFtZTogcmVmc1tpXVtcInJlZk5hbWVcIl0sIERPSTogcmVmc1tpXVtcIkRPSVwiXX0pO1xuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJnZXREYXRhOiBcIityZWZzWzBdW1wiRE9JXCJdKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcblxuXG4gICAgcGFnZURhdGEuc2V0KFwiaXRlbXNWaWV3XCIsIGl0ZW1zVmlldyk7XG5cbn1cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcblxuZXhwb3J0cy5zaG93RnVsbFVybCA9IGZ1bmN0aW9uIChhcmdzKVxue1xuICAgIHZhciBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgY29uc29sZS5sb2coYFNlY29uZCBMaXN0VmlldyBpdGVtIHRhcCAke2luZGV4fWApO1xuXG4gICAgaWYoIXJlZnNbaW5kZXhdW1wiRE9JXCJdKVxuICAgIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydChcIlRoZXJlIGlzIG5vIHdlYiBzaXRlIGZvciBcIityZWZzW2luZGV4XVtcInJlZk5hbWVcIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL2RvaS5vcmcvXCIrcmVmc1tpbmRleF1bXCJET0lcIl0pO1xuXG59XG5cbmV4cG9ydHMuZ29CYWNrID0gZnVuY3Rpb24oYXJncylcbnsgXG4gICAgY29uc29sZS5sb2coXCJwcm92YVwiKTtcbiAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZVJlZnMuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9wYWdlUmVmcy5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlldy9DYXJkVmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIik7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgeG1sbnM6Q2FyZD1cXFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XFxcIiB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIj48IS0tIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCItLT5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJSZWZlcmVuY2VzXFxcIj5cXG4gICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0ZXh0PVxcXCJCYWNrXFxcIiB0YXA9XFxcImdvQmFja1xcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcblxcbjwvQWN0aW9uQmFyPiBcXG48R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCI+XFxuXFxuPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBpdGVtc1ZpZXcgfX1cXFwiIFxcbiAgICAgICAgICBpdGVtVGFwPVxcXCJzaG93RnVsbFVybFxcXCIgXFxuICAgICAgICAgIGxvYWRlZD1cXFwie3sgb25MaXN0Vmlld0xvYWRlZCB9fVxcXCIgXFxuICAgICAgICAgIHNlcGFyYXRvckNvbG9yPVxcXCJvcmFuZ2VyZWRcXFwiIHJvd0hlaWdodD1cXFwiMTA1XFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCIgaWQ9XFxcImxpc3RWaWV3XFxcIiBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiPlxcbiAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPCEtLSBUaGUgaXRlbSB0ZW1wbGF0ZSBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHJvb3QgdmlldyBjb250YWluZXIgKGUuZy4gR3JpTGF5b3V0LCBTdGFja0xheW91dCwgZXRjLikgLS0+XFxuICAgICAgICA8Q2FyZDpDYXJkVmlldyBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCIgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxXFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJtYW10XFxcIiBjbGFzcz1cXFwiaWNvXFxcIiBjbGFzcz1cXFwiLWVudHJ5XFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHJlZk5hbWUgfHwgJ0Rvd25sb2FkaW5nLi4uJyB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgY2xhc3M9XFxcIi1lbnRyeVxcXCIvPlxcblxcbiAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG48L0xpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cXG48L1BhZ2U+XFxuXFxuXFxuPCEtLSAgICAgICAgPExhYmVsIHRleHQ9XFxcImh0dHBzOi8vYXBleGNvdmFudGFnZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvT1JDSUQtSWNvbi5wbmdcXFwiIGNsYXNzPVxcXCJpY29cXFwiLz5cXG4tLT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlUmVmcy54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlUmVmcy54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpOyAvLyBwZXIgYWNjZWRlciBhbGxhIHBhZ2luYSB3ZWIgdmlzaWJpbGUgeG1sXG5jb25zdCBodHRwTW9kdWxlMiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xuY29uc3QgZnJvbU9iamVjdCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5mcm9tT2JqZWN0O1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcbmNvbnN0IHByb2Nlc3MgPSByZXF1aXJlKCdwcm9jZXNzJyk7XG52YXIgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cblxudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbnZhciBpdGVtc1ZpZXcgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuXG52YXIgb3JjaWRzX2NvbXBsZXRpMiA9IFtdO1xudmFyIGF1dG9yaTIgPSBbXTtcbnZhciBvcmNpZF9pbmNvbXBsZXRpID0gW107XG52YXIgZmFtaWx5X25hbWVzID0gW107XG5hc3luYyBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKVxue1xuICAgIC8qIEF6emVyYW1lbnRvIHZldHRvcmkgcGVyIGV2aXRhcmUgYXBwZW5kaW5nIG9nbmkgY2hpYW1hdGEgYWxsYSBwYWdpbmEgKi9cbiAgICBpdGVtc1ZpZXcgPSBbXTtcbiAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHZhciBnb3REYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcbiAgICBvcmNpZHNfY29tcGxldGkyID0gW107XG4gICAgYXV0b3JpMiA9IFtdO1xuICAgIG9yY2lkX2luY29tcGxldGkgPSBbXTtcbiAgICBmYW1pbHlfbmFtZXMgPSBbXTtcblxuICAgIHZhciBzaG93UGFnZUluZm9BdXRob3JzID0gW107XG5cbiAgICBcbiAgICB2YXIgYXV0b3JpID0gZ290RGF0YS5wYXJhbTE7XG4gICAgdmFyIG9yY2lkc19jb21wbGV0aSA9IGdvdERhdGEucGFyYW0yO1xuICAgIG9yY2lkX2luY29tcGxldGkgPSBnb3REYXRhLnBhcmFtMztcbiAgICBmYW1pbHlfbmFtZXMgPSBnb3REYXRhLnBhcmFtNDtcblxuXG4gICAgb3JjaWRzX2NvbXBsZXRpMiA9IG9yY2lkc19jb21wbGV0aTtcbiAgICBhdXRvcmkyID0gYXV0b3JpO1xuXG4gICAgY29uc29sZS5sb2coYXV0b3JpKTtcbiAgICBjb25zb2xlLmxvZyhvcmNpZHNfY29tcGxldGkpO1xuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKG9yY2lkX251bWVyaWNpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV0b3JpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW1zVmlldy5wdXNoKHtpdGVtSW1hZ2U6IFwiaHR0cHM6Ly9hcGV4Y292YW50YWdlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOC9PUkNJRC1JY29uLnBuZ1wiLCBpdGVtTmFtZTogYXV0b3JpW2ldW1wibmFtZVwiXX0pO1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIFxuICAgIHBhZ2VEYXRhLnNldChcIml0ZW1zVmlld1wiLCBpdGVtc1ZpZXcpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcblxuXG59XG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5cbmV4cG9ydHMuc2hvd0Z1bGxVcmwgPSBmdW5jdGlvbiAoYXJncylcbntcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcblxuICAgIGlmKCFvcmNpZHNfY29tcGxldGkyW2luZGV4XSlcbiAgICB7XG4gICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcblxuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiVGhlcmUgaXMgbm8gd2ViIHNpdGUgZm9yIFwiK2F1dG9yaTJbaW5kZXhdW1wibmFtZVwiXSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG5cbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VBdXRob3JcIixcbiAgICAgICAgLy9iYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICBwYXJhbTE6IGF1dG9yaTJbaW5kZXhdW1wibmFtZVwiXSxcbiAgICAgICAgICAgIHBhcmFtMjogb3JjaWRfaW5jb21wbGV0aVtpbmRleF0sXG4gICAgICAgICAgICBwYXJhbTM6IGZhbWlseV9uYW1lc1tpbmRleF1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG4gICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbCB0ZXh0XCIsXG4gICAgICAgIGFjdGlvbnM6IFtcIlNob3cgT1JDSUQgcHJvZmlsZVwiLCBcIlNob3cgcmVsYXRlZCBwcm9maWxlc1wiXVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgIGlmKHJlc3VsdCA9PSBcIlNob3cgT1JDSUQgcHJvZmlsZVwiKXtcbiAgICAgICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoXCJodHRwczovL29yY2lkLm9yZy9cIitvcmNpZF9pbmNvbXBsZXRpW2luZGV4XSk7XG4gICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PSBcIlNob3cgcmVsYXRlZCBwcm9maWxlc1wiKXtcbiAgICAgICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xuXG4gICAgICAgIH1cbn0pO1xuICAgICAgICAgICAgLy91dGlsc01vZHVsZS5vcGVuVXJsKG9yY2lkc19jb21wbGV0aTJbaW5kZXhdKTtcbiAgICAgICAgfVxufVxuXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwicHJvdmFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VTY29wdXMuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9wYWdlU2NvcHVzLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3L0NhcmRWaWV3XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKTsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiB4bWxuczpDYXJkPVxcXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcXFwiIHhtbG5zOmx2PVxcXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPjwhLS0gbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIi0tPlxcblxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIkF1dGhvcnNcXFwiPlxcbiAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGV4dD1cXFwiQmFja1xcXCIgdGFwPVxcXCJnb0JhY2tcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG5cXG48L0FjdGlvbkJhcj4gXFxuPEdyaWRMYXlvdXQgYmFja2dyb3VuZENvbG9yPVxcXCJyZ2IoMjEwLCAyMzEsIDIzOSlcXFwiPlxcbjxMaXN0VmlldyBpdGVtcz1cXFwie3sgaXRlbXNWaWV3IH19XFxcIiBcXG4gICAgICAgICAgaXRlbVRhcD1cXFwic2hvd0Z1bGxVcmxcXFwiIFxcbiAgICAgICAgICBsb2FkZWQ9XFxcInt7IG9uTGlzdFZpZXdMb2FkZWQgfX1cXFwiIFxcbiAgICAgICAgICBzZXBhcmF0b3JDb2xvcj1cXFwib3JhbmdlcmVkXFxcIiByb3dIZWlnaHQ9XFxcIjUwXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwiZGlvY2FuXFxcIiBpZD1cXFwibGlzdFZpZXdcXFwiIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgPlxcbiAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPCEtLSBUaGUgaXRlbSB0ZW1wbGF0ZSBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHJvb3QgdmlldyBjb250YWluZXIgKGUuZy4gR3JpTGF5b3V0LCBTdGFja0xheW91dCwgZXRjLikgLS0+XFxuICAgICAgICA8Q2FyZDpDYXJkVmlldyBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCIgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxXFxcIj5cXG4gICAgICBcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtTmFtZSB8fCAnRG93bmxvYWRpbmcuLi4nIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIiAgY2xhc3M9XFxcIi1lbnRyeVxcXCIgLz5cXG5cXG4gICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuPC9MaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlxcblxcblxcbjwhLS0gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJodHRwczovL2FwZXhjb3ZhbnRhZ2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA4L09SQ0lELUljb24ucG5nXFxcIiBjbGFzcz1cXFwiaWNvXFxcIi8+ICA8TGFiZWwgdGV4dD1cXFwibWFtdFxcXCIgY2xhc3M9XFxcImljb1xcXCIgY2xhc3M9XFxcIi1lbnRyeVxcXCI+PC9MYWJlbD5cXG4tLT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlU2NvcHVzLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VTY29wdXMueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbmNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpO1xudmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpO1xuY29uc3QgbGlzdFZpZXdNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIik7XG5jb25zdCBmcm9tT2JqZWN0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLmZyb21PYmplY3Q7XG5cblxuZnVuY3Rpb24gY3JlYXRlVmlld01vZGVsKGFyZ3MsIHVybDEpIHtcbiAgICB2YXIgcGFnZSA9IGFyZ3M7XG4gIFxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbiAgICBcbiAgICAvL3BhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcblxuXG4gICAgY29uc3QgbGlzdFZpZXcgPSBwYWdlLmdldFZpZXdCeUlkKFwibGlzdFZpZXdcIik7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dC5teVRpdGxlcy5wdXNoKHsgdGl0bGU6IFwiR2FtZSBvZiBUaHJvbmVzXCIgfSk7XG4vLyBNYW51YWxseSB0cmlnZ2VyIHRoZSB1cGRhdGUgc28gdGhhdCB0aGUgbmV3IGNvbG9yIGlzIHNob3duLlxuICAgIGxpc3RWaWV3LnJlZnJlc2goKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIEhUVFAgUmVxdWVzdCB0byBcIit1cmwxKTtcbiAgICBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHVybDEsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmljaGllc3RhIGVmZmV0dHVhdGFcIik7XG5cbiAgICAgICAgLyp2YXIgbWFtdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlwbyBkaSBtYW1tdDIgXCIrIHR5cGVvZihtYW10KSk7XG5cblxuICAgICAgICB2YXIgY29udGVudXRvID0gSlNPTi5wYXJzZShtYW10KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaXBvIGNvbnRlbnV0bzogXCIgKyB0eXBlb2YoY29udGVudXRvKSk7XG4gICAgICAgICovXG4gICAgICAgIHZhciBzb3J0ID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICB2YXIgY2hpdGFtbXVvID0gc29ydC5tZXNzYWdlLml0ZW1zWzBdLnRpdGxlOy8vWydpdGVtcyddWzBdLnJlZmVyZW5jZS1jb3VudDtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGlhbW11byA9IFwiKyBjaGl0YW1tdW8pO1xuXG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJyaXNwb3N0YVwiLCBjaGl0YW1tdW8pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInQnYXBwbyBhbW9vb29vXCIpO1xuXG4gICAgICAgIC8vIHZhciByZXN1bHRzID0gc29ydC5tZXNzYWdlLml0ZW1zO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvdW50ZXIgcmVzdWx0czogXCIrIGl0ZW1zLmxlbmd0aCk7XG4gICAgXG5cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgdm0gPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgdGhlIGxpc3R2aWV3IGJpbmRpbmcgc291cmNlXG4gICAgICAgICAgIFxuICAgICAgICAgICAgbXlUaXRsZXM6IFtcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIlRoZSBEYSBWaW5jaSBDb2RlXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkhhcnJ5IFBvdHRlciBhbmQgdGhlIENoYW1iZXIgb2YgU2VjcmV0c1wiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJUaGUgQWxjaGVtaXN0XCIgfSxcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIlRoZSBHb2RmYXRoZXJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiR29vZG5pZ2h0IE1vb25cIiB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIEhvYmJpdFwiIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFyZ3VtZW50IChyZXNwb25zZSkgaXMgSHR0cFJlc3BvbnNlXG4gICAgfSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yZSBkaW8gcG9yY28gbWFkb29uYSBcIisgZSk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiB2aWV3TW9kZWw7XG59XG5cbmV4cG9ydHMuY3JlYXRlVmlld01vZGVsID0gY3JlYXRlVmlld01vZGVsOzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9zaG93Rmlyc3RSZXN1bHRzLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpOyAvLyBwZXIgYWNjZWRlciBhbGxhIHBhZ2luYSB3ZWIgdmlzaWJpbGUgeG1sXG5jb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL3Nob3dGaXJzdFJlc3VsdHMtdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XG5jb25zdCBmcm9tT2JqZWN0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLmZyb21PYmplY3Q7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5jb25zdCBnZXRGcmFtZUJ5SWQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKS5nZXRGcmFtZUJ5SWQ7XG4vL2NvbnN0IGZyYW1lID0gZ2V0RnJhbWVCeUlkKFwibXktZnJhbWUtaWRcIik7XG5cbnZhciBkb2lzID0gW107XG52YXIgb3JjaWRzID0gW107XG52YXIgcmVzdWx0cyA9IFtdO1xuXG5cbi8qIENhY2hpbmcgKi9cbnZhciBleF9kYXRhID0gW107XG52YXIgcGFzdF9kYXRhID0gW107XG5cbnZhciBmbGFnX2NhY2hlID0gZmFsc2U7XG5cbmFzeW5jIGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgdmFyIGluZGV4ID0gMDtcblxuICAgIHZhciBnb3REYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcblxuICAgIGNvbnNvbGUubG9nKFwiUGFyYW1ldHJvIDEgcmVjOiBcIitnb3REYXRhLnBhcmFtMSk7XG4gICAgY29uc29sZS5sb2coXCJQYXJhbWV0cm8gMiByZWM6IFwiK2dvdERhdGEucGFyYW0yKTtcblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZXhfZGF0YS5sZW5ndGg7IGsrKykge1xuICAgICAgICBpZihnb3REYXRhLnBhcmFtMSA9PT0gZXhfZGF0YVtrXVtcInBhc3RfdXJsXCJdKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBhbHJlYWR5IGRvbmUhXCIpO1xuICAgICAgICAgICAgZmxhZ19jYWNoZSA9IHRydWU7XG4gICAgICAgICAgICBpbmRleCA9IGs7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImtbXCIraytcIl06IFwiK2V4X2RhdGFba10pOyAgIFxuICAgIH1cblxuICAgIGV4X2RhdGEucHVzaCh7cGFzdF91cmw6IGdvdERhdGEucGFyYW0xfSk7XG5cbiAgICB2YXIgc2VhcmNoaW5nID0gZ290RGF0YS5wYXJhbTI7XG5cbiAgICB1cmwxID0gZ290RGF0YS5wYXJhbTE7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBIVFRQIFJlcXVlc3RcIik7XG4gICAgY29uc29sZS5sb2coXCJTdGF0byBmbGFnIFwiICsgZmxhZ19jYWNoZSk7XG5cbiAgICBpZighZmxhZ19jYWNoZSlcbiAgICB7XG4gICAgICAgICAgICBcbiAgICBkb2lzID0gW107XG4gICAgb3JjaWRzID0gW107XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsMSxcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgfSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yZSBkaW8gcG9yY28gbWFkb29uYSBcIisgZSk7XG4gICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmljaGllc3RhIGVmZmV0dHVhdGFcIik7XG5cbiAgICAgICAgLyp2YXIgbWFtdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlwbyBkaSBtYW1tdDIgXCIrIHR5cGVvZihtYW10KSk7XG5cblxuICAgICAgICB2YXIgY29udGVudXRvID0gSlNPTi5wYXJzZShtYW10KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaXBvIGNvbnRlbnV0bzogXCIgKyB0eXBlb2YoY29udGVudXRvKSk7XG4gICAgICAgICovXG4gICAgICAgIHZhciBzb3J0ID0gSlNPTi5wYXJzZShyZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICB2YXIgY2hpdGFtbXVvID0gc29ydC5tZXNzYWdlLml0ZW1zWzBdLnRpdGxlOy8vWydpdGVtcyddWzBdLnJlZmVyZW5jZS1jb3VudDtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGlhbW11byA9IFwiKyBjaGl0YW1tdW8pO1xuXG4gICAgICAgIC8vdmlld01vZGVsLnNldChcInJpc3Bvc3RhXCIsIGNoaXRhbW11byk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidCdhcHBvIGFtb29vb29cIik7XG5cblxuICAgICAgICByZXN1bHRzID0gc29ydC5tZXNzYWdlLml0ZW1zO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvdW50ZXIgcmVzdWx0czogXCIrIHJlc3VsdHMubGVuZ3RoKTtcblxuICAgICAgICB2YXIgbXlUaXRsZXMgPSBbXTtcbiAgICAgICAgdmFyIGlzc25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0X3N0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAvLyBkZWNvbW1lbnRhXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibGVuZ2h0IGRvaSBmb3IgXCIraStcIiBhcnRpY2xlOiBcIityZXN1bHRzW2ldLkRPSS5sZW5ndGgpO1xuICAgICAgICAgICAgZG9pcy5wdXNoKHJlc3VsdHNbaV0uRE9JKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXN1bHRzW2ldLmF1dGhvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgYXV0aG9ycyA9IHJlc3VsdHNbaV0uYXV0aG9yO1xuICAgICAgICAgICAgICAgIC8vIGRlY29tbWVudGFcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb3VudGVyIGF1dGhvcnM6IFwiKyBhdXRob3JzLmxlbmd0aCk7XG4gICAgICAgICAgICBpbnNlcnRfc3RyaW5nID0gcmVzdWx0c1tpXS50aXRsZSArIFwiLFxcbiBcIjtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhdXRob3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3N0cmluZyArPSBcIiBcIithdXRob3JzW2pdLmZhbWlseStcIiwgXCIrYXV0aG9yc1tqXS5naXZlblswXStcIi4gXCI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWNvbW1lbnRhXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidGl0bGUgXCIraStcIiA9IFwiKyBpbnNlcnRfc3RyaW5nICsgXCIsIERPSTogXCIgKyBkb2lzW2ldKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9pc2Jucy5wdXNoKHJlc3VsdHNbaV0uaXNibi10eXBlWzFdLnZhbHVlKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpc2JuOiBcIitpc2Juc1tqXSk7XG5cbiAgICAgICAgICAgIG15VGl0bGVzLnB1c2goe3RpdGxlOiBpbnNlcnRfc3RyaW5nfSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidGl0W1wiK2krXCJdIGluc2VydGVkXCIpO1xuICAgICAgICAgICAgLy9teVRpdGxlcy5wdXNoKHJlc3VsdHNbaV0udGl0bGUpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhcInNpemUgb2YgbXlUaXRsZXM6IFwiKyBteVRpdGxlcy5sZW5ndGgpO1xuXG5cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgdm0gPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgICAgIG15VGl0bGVzLFxuICAgICAgICAgICAgc2VhcmNoaW5nXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFzdF9kYXRhLnB1c2godm0pO1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG5cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDQUNIRSBTVEFSVEVEXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHBhc3RfZGF0YVtpbmRleF0pO1xuICAgICAgICB2YXIgdGVtcCA9IHBhc3RfZGF0YVtpbmRleF07XG4gICAgICAgIHBhc3RfZGF0YS5wb3AoKTtcbiAgICAgICAgZXhfZGF0YSA9IFtdO1xuXG4gICAgICAgIGZsYWdfY2FjaGUgPSBmYWxzZTtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHRlbXA7XG5cbiAgICB9XG5cbiAgICAgICAgLy8gQXJndW1lbnQgKHJlc3BvbnNlKSBpcyBIdHRwUmVzcG9uc2VcbiAgICAgICAgICAgLy9wYWdlLmJpbmRpbmdDb250ZXh0ID0gY3JlYXRlVmlld01vZGVsKGFyZ3Mub2JqZWN0LCB1cmwxKTtcblxufVxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuXG5mdW5jdGlvbiBvbkxpc3RWaWV3TG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCBsaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xufVxuZXhwb3J0cy5vbkxpc3RWaWV3TG9hZGVkID0gb25MaXN0Vmlld0xvYWRlZDtcblxuZnVuY3Rpb24gb25JdGVtVGFwKGFyZ3MpIHtcbiAgICB2YXIgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgTGlzdFZpZXcgaXRlbSB0YXAgJHtpbmRleH1gKTtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIGFydGljbGUncyBkb2k6IFwiKyBkb2lzW2luZGV4XSk7XG5cbiAgICAvKnZhciBuYXZpZ2F0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3BhZ2VGb3VyJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiByZXN1bHRzW2luZGV4XSxcbiAgICAgICAgICAgIHBhcmFtMjogaW5kZXhcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKmlmKHJlc3VsdHNbaW5kZXhdLnB1Ymxpc2hlciA9PSBcIklFRUVcIilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSUVFRUVFRUVFRUVFIFBVQkxJU0hFUlwiKTtcbiAgICAgICAgdmFyIG5hdmlnYXRpb25PcHRpb25zID0ge1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3BhZ2VGb3VySUVFRScsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgcGFyYW0xOiByZXN1bHRzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBwYXJhbTI6IGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy9mcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbk9wdGlvbnMpO1xuICAgIFxuICAgIH1cbiAgICBlbHNle1xuICAgIHZhciBuYXZpZ2F0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3BhZ2VGb3VyJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiByZXN1bHRzW2luZGV4XSxcbiAgICAgICAgICAgIHBhcmFtMjogaW5kZXhcbiAgICAgICAgfVxuICAgIH1cbiAgICB9Ki9cbiAgICBjb25zdCBuYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZUZpZnRoXCIsXG4gICAgICAgIC8vYmFja3N0YWNrVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICB9LFxuICAgICAgICAvL2NsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgcGFyYW0xOiByZXN1bHRzW2luZGV4XSxcbiAgICAgICAgICAgIHBhcmFtMjogaW5kZXhcbiAgICAgICAgfVxuICAgIH07XG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKG5hdmlnYXRpb25FbnRyeSk7IC8vbmF2aWdhdGUobmF2aWdhdGlvbk9wdGlvbnMpO1xuXG59XG5leHBvcnRzLm9uSXRlbVRhcCA9IG9uSXRlbVRhcDtcblxuXG5leHBvcnRzLmdvQmFjayA9IGZ1bmN0aW9uKGFyZ3MpXG57IFxuICAgIGNvbnNvbGUubG9nKFwicHJvdmFcIik7XG4gICAgY29uc3QgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3Nob3dGaXJzdFJlc3VsdHMuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9zaG93Rmlyc3RSZXN1bHRzLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3L0NhcmRWaWV3XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKTsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiB4bWxuczpDYXJkPVxcXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcXFwiIHhtbG5zOmx2PVxcXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcInt7IHNlYXJjaGluZyB9fVxcXCI+XFxuICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGV4dD1cXFwiQmFja1xcXCIgdGFwPVxcXCJnb0JhY2tcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG5cXG4gICA8IS0tIDxOYXZpZ2F0aW9uQnV0dG9uIHNyYz1cXFwiaHR0cHM6Ly9pLmliYi5jby93YzRDZDVML2JhY2sucG5nXFxcIiB0YXA9XFxcImdvQmFja1xcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPiBcXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwiZm9udDovLyYjeGYwMTM7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIiB0aXRsZT1cXFwicHJvdmFcXFwiID48L0FjdGlvbkl0ZW0+IC0tPlxcbjwvQWN0aW9uQmFyPiBcXG5cXG4gIDxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwicmdiKDIxMCwgMjMxLCAyMzkpXFxcIj5cXG4gICAgPCEtLSA8TGFiZWwgdGV4dD1cXFwie3tyaXNwb3N0YX19XFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiLz4gLS0+XFxuICAgIFxcbiAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IG15VGl0bGVzIH19XFxcIiBcXG4gICAgICAgICAgaXRlbVRhcD1cXFwib25JdGVtVGFwXFxcIiBcXG4gICAgICAgICAgbG9hZGVkPVxcXCJ7eyBvbkxpc3RWaWV3TG9hZGVkIH19XFxcIiBcXG4gICAgICAgICAgc2VwYXJhdG9yQ29sb3I9XFxcIm9yYW5nZXJlZFxcXCIgXFxuICAgICAgICAgIGNsYXNzPVxcXCJkaW9jYW5cXFwiIGlkPVxcXCJsaXN0Vmlld1xcXCIgcm93PVxcXCIyXFxcIj5cXG4gICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgIDwhLS0gVGhlIGl0ZW0gdGVtcGxhdGUgY2FuIG9ubHkgaGF2ZSBhIHNpbmdsZSByb290IHZpZXcgY29udGFpbmVyIChlLmcuIEdyaUxheW91dCwgU3RhY2tMYXlvdXQsIGV0Yy4pIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBiYWNrZ3JvdW5kQ29sb3I9XFxcInJnYigyMTAsIDIzMSwgMjM5KVxcXCIgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdGl0bGUgfHwgJ0Rvd25sb2FkaW5nLi4uJyB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCIgY2xhc3M9XFxcIi1lbnRyeVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG48L0xpc3RWaWV3PlxcbiAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zaG93Rmlyc3RSZXN1bHRzLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3Nob3dGaXJzdFJlc3VsdHMueG1sXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=