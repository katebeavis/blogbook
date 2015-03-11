describe('TumblrPostHandler', function() {

  describe('All post types', function() {

    var photoBlog;
    photoBlog = {"blog_name":"marissamayr","id":112559677614,"post_url":"http:\/\/marissamayr.tumblr.com\/post\/112559677614\/3400-people-getting-ready-to-break-the-guiness","slug":"3400-people-getting-ready-to-break-the-guiness","type":"photo","date":"2015-03-03 01:01:46 GMT","timestamp":1425344506,"state":"published","format":"html","reblog_key":"2iTAU4Cd","tags":[],"short_url":"http:\/\/tmblr.co\/Z4v08s1er562k","highlighted":[],"note_count":176,"caption":"\u003Cp\u003E3400+ people getting ready to break the Guiness Book&#8217;s world record for largest simultaneous yodel.  In honor of \u003Ca class=\u0022tumblelog\u0022 href=\u0022http:\/\/tmblr.co\/mxiVom33SfB4Ki2-qtjCHnQ\u0022\u003Eyahoo\u003C\/a\u003E\u0027s 20th birthday!\u003C\/p\u003E","image_permalink":"http:\/\/marissamayr.tumblr.com\/image\/112559677614","photos":[{"caption":"","alt_sizes":[{"width":1280,"height":960,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_1280.jpg"},{"width":500,"height":375,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_500.jpg"},{"width":400,"height":300,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_400.jpg"},{"width":250,"height":188,"url":"http:\/\/36.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_250.jpg"},{"width":100,"height":75,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_100.jpg"},{"width":75,"height":75,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_75sq.jpg"}],"original_size":{"width":1280,"height":960,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_1280.jpg"}}]};
    var tumblr = new TumblrPostHandler(photoBlog);

    it("accepts a blog object", function() {
      expect(tumblr.post).toEqual([photoBlog])
    });

    it('is able to read the blog_name', function() {
      expect(tumblr.post[0].blog_name).toEqual("marissamayr")
    });

    it('returns the blogs date', function() {
      expect(tumblr.blogDate()).toEqual("2015-03-03 01:01:46 GMT")
    });

    it('returns a hypertext link to the blog', function() {
      expect(tumblr.blogLink()).toEqual("http:\/\/marissamayr.tumblr.com\/post\/112559677614\/3400-people-getting-ready-to-break-the-guiness")
    });

  });

  describe('Handling a photo blog item', function(){

    var photoBlog;
    photoBlog = {"blog_name":"marissamayr","id":112559677614,"post_url":"http:\/\/marissamayr.tumblr.com\/post\/112559677614\/3400-people-getting-ready-to-break-the-guiness","slug":"3400-people-getting-ready-to-break-the-guiness","type":"photo","date":"2015-03-03 01:01:46 GMT","timestamp":1425344506,"state":"published","format":"html","reblog_key":"2iTAU4Cd","tags":[],"short_url":"http:\/\/tmblr.co\/Z4v08s1er562k","highlighted":[],"note_count":176,"caption":"\u003Cp\u003E3400+ people getting ready to break the Guiness Book&#8217;s world record for largest simultaneous yodel.  In honor of \u003Ca class=\u0022tumblelog\u0022 href=\u0022http:\/\/tmblr.co\/mxiVom33SfB4Ki2-qtjCHnQ\u0022\u003Eyahoo\u003C\/a\u003E\u0027s 20th birthday!\u003C\/p\u003E","image_permalink":"http:\/\/marissamayr.tumblr.com\/image\/112559677614","photos":[{"caption":"","alt_sizes":[{"width":1280,"height":960,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_1280.jpg"},{"width":500,"height":375,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_500.jpg"},{"width":400,"height":300,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_400.jpg"},{"width":250,"height":188,"url":"http:\/\/36.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_250.jpg"},{"width":100,"height":75,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_100.jpg"},{"width":75,"height":75,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_75sq.jpg"}],"original_size":{"width":1280,"height":960,"url":"http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_1280.jpg"}}]};
    var tumblr = new TumblrPostHandler(photoBlog);

    it('produces the image url for the image', function() {
      expect(tumblr.imageUrl()).toEqual("http:\/\/40.media.tumblr.com\/6279c314718c0a7a93574aef5af64b49\/tumblr_nkm2uyc2Lr1srd41xo1_1280.jpg")
    });

    it('returns an image caption', function() {
      expect(tumblr.graphicCaption()).toEqual("\u003Cp\u003E3400+ people getting ready to break the Guiness Book&#8217;s world record for largest simultaneous yodel.  In honor of \u003Ca class=\u0022tumblelog\u0022 href=\u0022http:\/\/tmblr.co\/mxiVom33SfB4Ki2-qtjCHnQ\u0022\u003Eyahoo\u003C\/a\u003E\u0027s 20th birthday!\u003C\/p\u003E")
    });

    it('does NOT return the body of the text', function() {
      expect(tumblr.textBody()).toEqual('');
    });

    it('does NOT return the title of the text', function() {
      expect(tumblr.textTitle()).toEqual("")
    });

  });

  describe('Handling a text blog item', function() {

    var textBlog;
    textBlog = {"blog_name":"marissamayr","id":103782866194,"post_url":"http:\/\/marissamayr.tumblr.com\/post\/103782866194\/happy-thanksgiving","slug":"happy-thanksgiving","type":"text","date":"2014-11-28 05:16:07 GMT","timestamp":1417151767,"state":"published","format":"html","reblog_key":"4PkwJzLN","tags":[],"short_url":"http:\/\/tmblr.co\/Z4v08s1WfyDqI","highlighted":[],"note_count":61,"title":"Happy Thanksgiving!","body":"\u003Cp\u003EHappy Thanksgiving with artistic interpretation:\u003C\/p\u003E\n\u003Cp\u003E\u003Ca href=\u0022http:\/\/www.hrothstein.com\/thanksgiving-special\/\u0022\u003Ehttp:\/\/www.hrothstein.com\/thanksgiving-special\/\u003C\/a\u003E\u003C\/p\u003E"};
    var tumblr = new TumblrPostHandler(textBlog);

    it('returns the body of the text', function() {
      expect(tumblr.textBody()).toEqual("\u003Cp\u003EHappy Thanksgiving with artistic interpretation:\u003C\/p\u003E\n\u003Cp\u003E\u003Ca href=\u0022http:\/\/www.hrothstein.com\/thanksgiving-special\/\u0022\u003Ehttp:\/\/www.hrothstein.com\/thanksgiving-special\/\u003C\/a\u003E\u003C\/p\u003E")
    });

    it('returns the title of the text', function() {
      expect(tumblr.textTitle()).toEqual("Happy Thanksgiving!")
    });

    it('does NOT return an image url', function() {
      expect(tumblr.imageUrl()).toEqual('')
    });

    it('does NOT return an image caption', function() {
      expect(tumblr.graphicCaption()).toEqual("")
    });

    it('does NOT return a description of the link', function() {
      expect(tumblr.linkDescription()).toEqual('');
    });

    it('does NOT return the link', function() {
      expect(tumblr.hyperLink()).toEqual("")
    });

  });

  describe('Handling a link blog', function() {

    var linkBlog;
    linkBlog = {"blog_name":"marissamayr","id":111403903029,"post_url":"http:\/\/marissamayr.tumblr.com\/post\/111403903029\/a-new-post","slug":"a-new-post","type":"link","date":"2015-02-18 21:20:35 GMT","timestamp":1424294435,"state":"published","format":"html","reblog_key":"O8EjWIiG","tags":[],"short_url":"http:\/\/tmblr.co\/Z4v08s1dmCAWr","highlighted":[],"note_count":60,"title":"A New Post","url":"http:\/\/serwerworld.tumblr.com\/post\/111372923435\/a-new-post","description":"\u003Cp\u003E\u003Ca href=\u0022http:\/\/serwerworld.tumblr.com\/post\/111372923435\/a-new-post\u0022 class=\u0022tumblr_blog\u0022\u003Eserwerworld\u003C\/a\u003E:\u003C\/p\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EI\u2019ve accepted an offer to join Yahoo as the Editor-in-Chief of Yahoo Finance. I am over-the-moon thrilled to be coming to Yahoo and moving full bore into the digital world. I\u2019m also humbled to be tapped for this role.\u003C\/p\u003E\n\u003Cfigure\u003E\u003Cimg src=\u0022https:\/\/31.media.tumblr.com\/c5e478e3a8f023698c5c99c71ac4ddeb\/tumblr_inline_njxqf3Hign1tnqr6a.png\u0022 alt=\u0022image\u0022\/\u003E\u003C\/figure\u003E\u003Cp\u003EYahoo Finance is of course an enormous platform with a massive audience in&#8230;\u003C\/p\u003E\n\u003C\/blockquote\u003E","reblog":{"tree_html":"\u003Cp\u003E\u003Ca href=\u0022http:\/\/serwerworld.tumblr.com\/post\/111372923435\/a-new-post\u0022 class=\u0022tumblr_blog\u0022\u003Eserwerworld\u003C\/a\u003E:\u003C\/p\u003E\u003Cblockquote\u003E\n\u003Cp\u003EI\u2019ve accepted an offer to join Yahoo as the Editor-in-Chief of Yahoo Finance. I am over-the-moon thrilled to be coming to Yahoo and moving full bore into the digital world. I\u2019m also humbled to be tapped for this role.\u003C\/p\u003E\n\u003Cfigure\u003E\u003Cimg src=\u0022https:\/\/31.media.tumblr.com\/c5e478e3a8f023698c5c99c71ac4ddeb\/tumblr_inline_njxqf3Hign1tnqr6a.png\u0022 alt=\u0022image\u0022\/\u003E\u003C\/figure\u003E\u003Cp\u003EYahoo Finance is of course an enormous platform with a massive audience in\u2026\u003C\/p\u003E\n\u003C\/blockquote\u003E","comment":"","trail":[{"blog":{"name":"serwerworld","theme":{"avatar_shape":"square","background_color":"#FAFAFA","body_font":"Helvetica Neue","header_bounds":"","header_image":"http:\/\/assets.tumblr.com\/images\/default_header\/optica_pattern_13.png?_v=2f4063be1dd2ee91e4eca54332e25191","header_image_focused":"http:\/\/assets.tumblr.com\/images\/default_header\/optica_pattern_13_focused_v3.png?_v=2f4063be1dd2ee91e4eca54332e25191","header_image_scaled":"http:\/\/assets.tumblr.com\/images\/default_header\/optica_pattern_13_focused_v3.png?_v=2f4063be1dd2ee91e4eca54332e25191","header_stretch":true,"link_color":"#529ECC","show_avatar":true,"show_description":true,"show_header_image":true,"show_title":true,"title_color":"#444444","title_font":"Gibson","title_font_weight":"bold"}},"post":{"id":"111372923435"},"comment":"\u003Cp\u003EI\u2019ve accepted an offer to join Yahoo as the Editor-in-Chief of Yahoo Finance. I am over-the-moon thrilled to be coming to Yahoo and moving full bore into the digital world. I\u2019m also humbled to be tapped for this role.\u003C\/p\u003E\n\u003Cfigure\u003E\u003Cimg src=\u0022https:\/\/31.media.tumblr.com\/c5e478e3a8f023698c5c99c71ac4ddeb\/tumblr_inline_njxqf3Hign1tnqr6a.png\u0022 alt=\u0022image\u0022\u003E\u003C\/figure\u003E\u003Cp\u003EYahoo Finance is of course an enormous platform with a massive audience in\u2026\u003C\/p\u003E"}]}};
    var tumblr = new TumblrPostHandler(linkBlog);

    it('returns a description of the link', function() {
      expect(tumblr.linkDescription()).toEqual("\u003Cp\u003E\u003Ca href=\u0022http:\/\/serwerworld.tumblr.com\/post\/111372923435\/a-new-post\u0022 class=\u0022tumblr_blog\u0022\u003Eserwerworld\u003C\/a\u003E:\u003C\/p\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EI\u2019ve accepted an offer to join Yahoo as the Editor-in-Chief of Yahoo Finance. I am over-the-moon thrilled to be coming to Yahoo and moving full bore into the digital world. I\u2019m also humbled to be tapped for this role.\u003C\/p\u003E\n\u003Cfigure\u003E\u003Cimg src=\u0022https:\/\/31.media.tumblr.com\/c5e478e3a8f023698c5c99c71ac4ddeb\/tumblr_inline_njxqf3Hign1tnqr6a.png\u0022 alt=\u0022image\u0022\/\u003E\u003C\/figure\u003E\u003Cp\u003EYahoo Finance is of course an enormous platform with a massive audience in&#8230;\u003C\/p\u003E\n\u003C\/blockquote\u003E")
    });

    it('returns the link', function() {
      expect(tumblr.hyperLink()).toEqual("http:\/\/serwerworld.tumblr.com\/post\/111372923435\/a-new-post");
    });

    it('does NOT return the video url', function(){
      expect(tumblr.videoUrl()).toEqual("");
    });

  });

  describe('Handling a video blog', function() {

    var videoBlog;
    videoBlog = {"blog_name":"marissamayr","id":112559839894,"post_url":"http:\/\/marissamayr.tumblr.com\/post\/112559839894\/what-3400-people-yodeling-sounds-like-we","slug":"what-3400-people-yodeling-sounds-like-we","type":"video","date":"2015-03-03 01:03:53 GMT","timestamp":1425344633,"state":"published","format":"html","reblog_key":"FAYRbRKU","tags":[],"short_url":"http:\/\/tmblr.co\/Z4v08s1er5jgM","highlighted":[],"note_count":105,"caption":"\u003Cp\u003EWhat 3400+ people yodeling sounds like.  We shattered the record by a factor of 2 (previously 1700 people), but they made us yodel for a minute straight!\u003C\/p\u003E","video_url":"https:\/\/vt.tumblr.com\/tumblr_nkm2xyJMLv1srd41x.mp4","html5_capable":true,"thumbnail_url":"https:\/\/31.media.tumblr.com\/tumblr_nkm2xyJMLv1srd41x_frame1.jpg","thumbnail_width":640,"thumbnail_height":360,"duration":8,"player":[{"width":250,"embed_code":"\n\u003Cvideo  id=\u0027embed-54ff29a2e8a62639884718\u0027 class=\u0027crt-video crt-skin-default\u0027 width=\u0027250\u0027 height=\u0027140\u0027 poster=\u0027https:\/\/31.media.tumblr.com\/tumblr_nkm2xyJMLv1srd41x_frame1.jpg\u0027 preload=\u0027none\u0027 data-crt-video data-crt-options=\u0027{\u0022duration\u0022:8,\u0022hdUrl\u0022:false,\u0022filmstrip\u0022:{\u0022url\u0022:\u0022https:\\\/\\\/33.media.tumblr.com\\\/previews\\\/tumblr_nkm2xyJMLv1srd41x_filmstrip.jpg\u0022,\u0022width\u0022:\u0022200\u0022,\u0022height\u0022:\u0022112\u0022}}\u0027 \u003E\n    \u003Csource src=\u0022https:\/\/api.tumblr.com\/video_file\/112559839894\/tumblr_nkm2xyJMLv1srd41x\u0022 type=\u0022video\/mp4\u0022\u003E\n\u003C\/video\u003E\n"},{"width":400,"embed_code":"\n\u003Cvideo  id=\u0027embed-54ff29a2e9910350035692\u0027 class=\u0027crt-video crt-skin-default\u0027 width=\u0027400\u0027 height=\u0027225\u0027 poster=\u0027https:\/\/31.media.tumblr.com\/tumblr_nkm2xyJMLv1srd41x_frame1.jpg\u0027 preload=\u0027none\u0027 data-crt-video data-crt-options=\u0027{\u0022duration\u0022:8,\u0022hdUrl\u0022:false,\u0022filmstrip\u0022:{\u0022url\u0022:\u0022https:\\\/\\\/33.media.tumblr.com\\\/previews\\\/tumblr_nkm2xyJMLv1srd41x_filmstrip.jpg\u0022,\u0022width\u0022:\u0022200\u0022,\u0022height\u0022:\u0022112\u0022}}\u0027 \u003E\n    \u003Csource src=\u0022https:\/\/api.tumblr.com\/video_file\/112559839894\/tumblr_nkm2xyJMLv1srd41x\u0022 type=\u0022video\/mp4\u0022\u003E\n\u003C\/video\u003E\n"},{"width":500,"embed_code":"\n\u003Cvideo  id=\u0027embed-54ff29a2ea411465473332\u0027 class=\u0027crt-video crt-skin-default\u0027 width=\u0027500\u0027 height=\u0027281\u0027 poster=\u0027https:\/\/31.media.tumblr.com\/tumblr_nkm2xyJMLv1srd41x_frame1.jpg\u0027 preload=\u0027none\u0027 data-crt-video data-crt-options=\u0027{\u0022duration\u0022:8,\u0022hdUrl\u0022:false,\u0022filmstrip\u0022:{\u0022url\u0022:\u0022https:\\\/\\\/33.media.tumblr.com\\\/previews\\\/tumblr_nkm2xyJMLv1srd41x_filmstrip.jpg\u0022,\u0022width\u0022:\u0022200\u0022,\u0022height\u0022:\u0022112\u0022}}\u0027 \u003E\n    \u003Csource src=\u0022https:\/\/api.tumblr.com\/video_file\/112559839894\/tumblr_nkm2xyJMLv1srd41x\u0022 type=\u0022video\/mp4\u0022\u003E\n\u003C\/video\u003E\n"}],"video_type":"tumblr"};
    var tumblr = new TumblrPostHandler(videoBlog);

    it('returns the video caption', function() {
      expect(tumblr.graphicCaption()).toEqual("\u003Cp\u003EWhat 3400+ people yodeling sounds like.  We shattered the record by a factor of 2 (previously 1700 people), but they made us yodel for a minute straight!\u003C\/p\u003E");
    });

    it('returns the video url', function(){
      expect(tumblr.videoUrl()).toEqual("https:\/\/vt.tumblr.com\/tumblr_nkm2xyJMLv1srd41x.mp4");
    });

  });

  describe('uniform output', function() {

[]


  });



});