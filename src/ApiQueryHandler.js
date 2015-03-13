var ApiQueryHandler = function(input_url) {
  this.url = input_url;

};

ApiQueryHandler.prototype.targetAPI = function() {
  if(this.url.indexOf('tumblr') > 0) {
    var output;
    output = "https://api.tumblr.com/v2/blog/"+this.url+"/posts?api_key=5P9JPiGHHbnItpkHuxR0z591UnVqoCmX1nSvFBJVtRqQBDS1gQ";
    this.callAPI(output);
    return output;}
  else if (this.url.indexOf('wordpress') > 0) {
    var output;
    output = "https://public-api.wordpress.com/rest/v1.1/sites/"+this.url+"/posts/";
    this.callAPI(output)};
    return output;
};


ApiQueryHandler.prototype.callAPI = function(url) {
  var content;
  var _this = this;
  $.ajax({
    dataType: 'jsonp',
    url: url,
    success: function(info){

      _this.listCreator(info);

    }
  });
};


ApiQueryHandler.prototype.listCreator = function(info) {

var posts = info.response.posts;
console.log(posts[0]);

  for(i=0; i < 10; i++){
    handler = new TumblrPostHandler(posts[i]);

    output = "<time>"+handler.blogDate()+"</time>"+
    "<p>by "+handler.blogSource()+"</p>"+
    "<img src="+handler.blogMedia()+">"+
    "<p>"+handler.blogText()+"</p>"

    document.write(output);
  };
};