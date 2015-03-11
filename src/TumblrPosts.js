var TumblrPosts = function(){

};

TumblrPosts.prototype.callApi = function() {
  $.ajax({
    dataType: 'jsonp',
    url: "https://api.tumblr.com/v2/blog/marissamayr.tumblr.com/posts?api_key=5P9JPiGHHbnItpkHuxR0z591UnVqoCmX1nSvFBJVtRqQBDS1gQ",
    success: function(info){
      myArray = new Array()
      myArray = info.responses.posts[0].blog_name;
      return "marissamayr";
    }
  });
};