describe('WordpressPostHandler ', function() {

  

  describe('handling a text only post', function() {
    var textBlog;
    textBlog = {"ID":78,"site_ID":83110039,"author":{"ID":79093746,"login":"appavaz","email":false,"name":"appavaz","nice_name":"appavaz","URL":"http:\/\/appavaz.wordpress.com","avatar_URL":"https:\/\/0.gravatar.com\/avatar\/cc5f1be9b2721bbe3385f3b5cda07f89?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/appavaz","site_ID":83110039},"date":"2015-03-11T09:03:12+00:00","modified":"2015-03-11T09:03:12+00:00","title":"Apps For Autism- A Boon For All","URL":"https:\/\/appavaz.wordpress.com\/2015\/03\/11\/apps-for-autism-a-boon-for-all-2\/","short_URL":"http:\/\/wp.me\/p5CIIv-1g","content":"<p style=\"text-align:justify;\">All know a child with autism, never-ever, easily handle and for parents it is the biggest challenge where they are alone. Now, you don\u2019t need to take so much worries, as you got a solution to install free\u00a0<a title=\"apps for autism.\" href=\"http:\/\/www.avazapp.com\/\"><strong>apps for autism.<\/strong><\/a><\/p>\n<p style=\"text-align:justify;\">Yes, you\u00a0heard\u00a0correctly, free apps for your child, which will help various parents in\u00a0providing various strategies and tips to handle your child, and on the same time, it will help your child in refining their skills, which they were unable to do so before. Apps with innovative pictures, games, sound, best graphics and everything, will take your a child to different zone, where alone he can able to judge, how to connect with the game to make it win.<\/p>\n<p style=\"text-align:justify;\">For more Information <a title=\"click here\" href=\"http:\/\/appavazblog.blogspot.com\/2015\/03\/autism-apps-not-less-than-magical-wand.html\"><strong>Click Here<\/strong><\/a><\/p>\n","excerpt":"<p>All know a child with autism, never-ever, easily handle and for parents it is the biggest challenge where they are alone. Now, you don\u2019t need to take so much worries, as you got a solution to install free\u00a0apps for autism. Yes, you\u00a0heard\u00a0correctly, free apps for your child, which will help various parents in\u00a0providing various strategies [&hellip;]<\/p>\n","slug":"apps-for-autism-a-boon-for-all-2","guid":"https:\/\/appavaz.wordpress.com\/?p=78","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":0},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"3e6531f68f9d3d8be3905bd594e9515f","featured_image":"https://illustrationage.files.wordpress.com/2015/03/the-wonderfully-surreal-illustrations-of-marta-monteiro.png","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"publicize_URLs":[],"tags":{"apps for Autism":{"ID":50298953,"name":"apps for Autism","slug":"apps-for-autism","description":"","post_count":6,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039\/tags\/slug:apps-for-autism","help":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039\/tags\/slug:apps-for-autism\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039"}}}},"categories":{"Technology":{"ID":6,"name":"Technology","slug":"technology","description":"","post_count":24,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039\/categories\/slug:technology","help":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039\/categories\/slug:technology\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039"}}}},"attachments":{},"attachment_count":0,"metadata":[{"id":"597","key":"_wpas_mess","value":"Apps For Autism- A Boon For All"},{"id":"591","key":"_wpas_skip_facebook","value":"1"},{"id":"592","key":"_wpas_skip_google_plus","value":"1"},{"id":"594","key":"_wpas_skip_linkedin","value":"1"},{"id":"596","key":"_wpas_skip_path","value":"1"},{"id":"595","key":"_wpas_skip_tumblr","value":"1"},{"id":"593","key":"_wpas_skip_twitter","value":"1"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039\/posts\/78","help":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039\/posts\/78\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039","replies":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039\/posts\/78\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/83110039\/posts\/78\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}};
    wpHandler = new WordpressPostHandler(textBlog);

    it('accepts a blog post', function() {
      expect(wpHandler.post).toEqual([textBlog]);
    });

    it('returns the blog date', function(){
      expect(wpHandler.blogDate()).toEqual("2015-03-11T09:03:12+00:00");
    });

    it("Title", function() {
      expect(wpHandler.blogTitle()).toEqual("Apps For Autism- A Boon For All");
    });

    it("backlink", function() {
      expect(wpHandler.blogBacklink()).toEqual("https://appavaz.wordpress.com/2015/03/11/apps-for-autism-a-boon-for-all-2/")
    });

    it("source", function() {
      expect(wpHandler.blogSource()).toEqual("appavaz")
    });

    it("can handle a featured image as media", function() {
      expect(wpHandler.blogMedia()).toEqual("https://illustrationage.files.wordpress.com/2015/03/the-wonderfully-surreal-illustrations-of-marta-monteiro.png")
    });

    it("Text is excerpt", function() {
      expect(wpHandler.blogText()).toEqual("<p>All know a child with autism, never-ever, easily handle and for parents it is the biggest challenge where they are alone. Now, you don\u2019t need to take so much worries, as you got a solution to install free\u00a0apps for autism. Yes, you\u00a0heard\u00a0correctly, free apps for your child, which will help various parents in\u00a0providing various strategies [&hellip;]<\/p>\n")
    });


    it("can create an array conatining all content of the post", function() {
      expect(wpHandler.arrayConstructor()).toEqual(["2015-03-11T09:03:12+00:00", "Apps For Autism- A Boon For All", "https://appavaz.wordpress.com/2015/03/11/apps-for-autism-a-boon-for-all-2/", "appavaz", "https://illustrationage.files.wordpress.com/2015/03/the-wonderfully-surreal-illustrations-of-marta-monteiro.png", "<p>All know a child with autism, never-ever, easily handle and for parents it is the biggest challenge where they are alone. Now, you don\u2019t need to take so much worries, as you got a solution to install free\u00a0apps for autism. Yes, you\u00a0heard\u00a0correctly, free apps for your child, which will help various parents in\u00a0providing various strategies [&hellip;]<\/p>\n"])
    });


  });
});

