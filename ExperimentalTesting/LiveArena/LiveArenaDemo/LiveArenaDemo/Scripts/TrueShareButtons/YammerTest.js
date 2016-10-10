// Options that dont work
var options1 = {
    customButton: true,
    classSelector: "fa fa-3x fa-jpy yammerbtn"
}
var options = {
    customButton: true, //false by default. Pass true if you are providing your own button to trigger the share popup
    classSelector: 'mybutton-css-class',//if customButton is true, you must pass the css class name of your button (so we can bind the click event for you)
    defaultMessage: 'My custom Message', //optionally pass a message to prepopulate your post
    pageUrl: 'www.microsoft.com' //current browser url is used by default. You can pass your own url if you want to generate the OG object from a different URL.
};

yam.platform.yammerShare();