describe ('Api Query', function() {


  describe('hitting the Tumblr API', function() {

    var url ;
    url = 'marissamayr.tumblr.com'
    var querier;
    querier = new ApiQueryHandler(url);

    it('should accept a url', function() {
      expect(querier.url).toEqual('marissamayr.tumblr.com');
    });

    it('should know which Api to request', function() {
      expect(querier.targetAPI()).toEqual("https://api.tumblr.com/v2/blog/marissamayr.tumblr.com/posts?api_key=5P9JPiGHHbnItpkHuxR0z591UnVqoCmX1nSvFBJVtRqQBDS1gQ");
    });

  });

  describe('hitting the wordpress API', function() {
    var url ;
    url = 'appavaz.wordpress.com'
    var querier;
    querier = new ApiQueryHandler(url);

    it('should know which API to request', function() {
      expect(querier.targetAPI()).toEqual("https://public-api.wordpress.com/rest/v1.1/sites/appavaz.wordpress.com/posts/");
    });

  });

});