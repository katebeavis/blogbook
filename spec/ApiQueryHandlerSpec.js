describe ('Api Query', function() {


  describe('hitting the Tumblr API', function() {

    var url;
    url = 'marissamayr.tumblr.com'
    var urlWP;
    urlWP = "katebeavis.wordpress.com"
    var querier;
    querier = new ApiQueryHandler(url);
    querierWP = new ApiQueryHandler(urlWP);

    it('should accept a url', function() {
      expect(querier.url).toEqual('marissamayr.tumblr.com');
    });

    it('should know which Api to request', function() {
      expect(querierWP.targetAPI()).toEqual("https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/");
      expect(querier.targetAPI()).toEqual("https://api.tumblr.com/v2/blog/marissamayr.tumblr.com/posts?api_key=5P9JPiGHHbnItpkHuxR0z591UnVqoCmX1nSvFBJVtRqQBDS1gQ");
    });

  });

  describe('hitting the wordpress API', function() {
    var url ;
    url = 'appavaz.wordpress.com'
    var querier;
    querier = new ApiQueryHandler(url);

    xit("can pull content from Wordpress API when given a wordpress link", function() {
      var test;
      test = new ApiQueryHandler("katebeavis.wordpress.com")
      test.targetAPI();
      expect(querier.listCreator).toHaveBeenCalled()
    });


    it('should know which API to request', function() {
      expect(querier.targetAPI()).toEqual("https://public-api.wordpress.com/rest/v1.1/sites/appavaz.wordpress.com/posts/");
    });

  });
  
});
