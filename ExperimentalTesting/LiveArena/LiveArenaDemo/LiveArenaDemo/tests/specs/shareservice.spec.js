describe("Share service", function () {

    var shareStuff = [
                { provider: "pinterest", imgUrl: "fa-pinterest-square", color: "color-pinterest-red" },
                { provider: "google", imgUrl: "fa-google-plus-square", color: "color-googleplus-red" },
                { provider: "linkedin", imgUrl: "fa-linkedin-square", color: "color-linkedin-blue" },
                { provider: "twitter", imgUrl: "fa-twitter-square", color: "color-twitter-blue" },
                { provider: "facebook", imgUrl: "fa-facebook-square", color: "color-facebook-blue" }
    ];

    //var shareService = {};

    beforeEach(module("ShareDemo"));
    //beforeEach(inject(function(_shareService_) {
    //    shareService = _shareService_;
    //}));

    it("Should say hello world", function () {
        var hello = "Hello World";

        expect(hello).toBe("Hello World");
    });

    //it("Should return a list of social media sharing providers", function () {
    //    var shareSites = shareService.getShareSites();

    //    expect(shareSites).toEqual(shareStuff);
    //});
});