describe('TumblrPostHandler', function() {

  describe('Handling a photo blog item', function(){

    var photoBlog;
    photoBlog = {"blog_name":"marissamayr","id":112559677614,"post_url":"http:\/\/marissamayr.tumblr.com\/post\/112559677614\/3400-people-getting-ready-to-break-the-guiness","slug":"3400-people-getting-ready-to-break-the-guiness","type":"photo","date":"2015-03-03 01:01:46 GMT","timestamp":1425344506,"state":"published","format":"html","reblog_key":"2iTAU4Cd","tags":[],"short_url":"http:\/\/tmblr.co\/Z4v08s1er562k","highlighted":[],"note_count":176,"caption":"\u003Cp\u003E3400+ people getting ready to break the Guiness Book&#8217;s world record for largest simultaneous yodel.  In honor of \u003Ca class=\u0022tumblelog\u0022 href=\u0022http:\/\/tmblr.co\/mxiVom33SfB4Ki2-qtjCHnQ\u0022\u003Eyahoo\u003C\/a\u003E\u0027s 20th birthday!\u003C\/p\u003E","image_permalink":"http:\/\/marissamayr.tumblr.com\/image\/112559677614","photos":[{"caption":"","alt_sizes":[{"width":1280,"height":960,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_1280.jpg"},{"width":500,"height":375,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_500.jpg"},{"width":400,"height":300,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_400.jpg"},{"width":250,"height":188,"url":"http:\/\/36.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_250.jpg"},{"width":100,"height":75,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_100.jpg"},{"width":75,"height":75,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_75sq.jpg"}],"original_size":{"width":1280,"height":960,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_1280.jpg"}}]};
    var tumblr = new TumblrPostHandler(photoBlog);

    it("should accept a blog object", function() {
      expect(tumblr.post).toEqual([photoBlog])
    });

    it('should be able to read the blog_name', function() {
      expect(tumblr.post[0].blog_name).toEqual("marissamayr")
    });

    it('should produce the image url for the image', function() {
      expect(tumblr.imageUrl()).toEqual("http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_1280.jpg")
    });

    it('should return the blogs date', function() {
      expect(tumblr.blogDate()).toEqual("2015-03-03 01:01:46 GMT")
    });

    it('should return an image caption', function() {
      expect(tumblr.imageCaption()).toEqual("\u003Cp\u003E3400+ people getting ready to break the Guiness Book&#8217;s world record for largest simultaneous yodel.  In honor of \u003Ca class=\u0022tumblelog\u0022 href=\u0022http:\/\/tmblr.co\/mxiVom33SfB4Ki2-qtjCHnQ\u0022\u003Eyahoo\u003C\/a\u003E\u0027s 20th birthday!\u003C\/p\u003E")
    });

  });

  describe('Handling a text blog item', function() {

    var textBlog;
    textBlog = {"blog_name":"marissamayr","id":103782866194,"post_url":"http:\/\/marissamayr.tumblr.com\/post\/103782866194\/happy-thanksgiving","slug":"happy-thanksgiving","type":"text","date":"2014-11-28 05:16:07 GMT","timestamp":1417151767,"state":"published","format":"html","reblog_key":"4PkwJzLN","tags":[],"short_url":"http:\/\/tmblr.co\/Z4v08s1WfyDqI","highlighted":[],"note_count":61,"title":"Happy Thanksgiving!","body":"\u003Cp\u003EHappy Thanksgiving with artistic interpretation:\u003C\/p\u003E\n\u003Cp\u003E\u003Ca href=\u0022http:\/\/www.hrothstein.com\/thanksgiving-special\/\u0022\u003Ehttp:\/\/www.hrothstein.com\/thanksgiving-special\/\u003C\/a\u003E\u003C\/p\u003E"};
    var tumblr = new TumblrPostHandler(textBlog);

    it('Should return the body of the text', function() {
      expect(tumblr.textBody()).toEqual("\u003Cp\u003EHappy Thanksgiving with artistic interpretation:\u003C\/p\u003E\n\u003Cp\u003E\u003Ca href=\u0022http:\/\/www.hrothstein.com\/thanksgiving-special\/\u0022\u003Ehttp:\/\/www.hrothstein.com\/thanksgiving-special\/\u003C\/a\u003E\u003C\/p\u003E")
    });

    it('should return the title of the text', function() {
      expect(tumblr.textTitle()).toEqual("Happy Thanksgiving!")
    });

    it('should NOT return an image url', function() {
      expect(tumblr.imageUrl()).toEqual('')
    });

    it('should NOT return an image caption', function() {
      expect(tumblr.imageCaption()).toEqual("")
    });


  });

});