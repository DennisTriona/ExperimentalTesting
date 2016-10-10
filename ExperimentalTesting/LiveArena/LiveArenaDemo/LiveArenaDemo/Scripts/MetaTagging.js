// Loads the DOM to late for the source
//$(document)
//    .ready(function () {
//        $("head").append("<meta property=og:site_name content=LiveArenaShare />");
//        $("head").append("<meta property=og:description content=Cheesecake />");
//    });

//// Same thing with JS targeting
//window.document.getElementsByName("title")[0].content = "Awesome App!";
//window.document.getElementsByName("description")[0].content = "I would say this is very awesome!";

document.getElementsByTagName('head')[0].appendChild('"<meta property=og:description content=Cheesecake />"');