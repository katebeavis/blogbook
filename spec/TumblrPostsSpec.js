describe('TumblrPosts', function() {

  var tumblr = new TumblrPosts();

it("should produce a json response", function() {
  expect(tumblr.callApi()).toEqual("marissamayr")
});


});