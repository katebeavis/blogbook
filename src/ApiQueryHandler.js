var ApiQueryHandler = function(input_url) {
  this.url = input_url;
};

ApiQueryHandler.prototype.targetAPI = function() {
  if(this.url.indexOf('tumblr') > 0) {
    var output;
    output = "https://api.tumblr.com/v2/blog/"+this.url+"/posts?api_key=5P9JPiGHHbnItpkHuxR0z591UnVqoCmX1nSvFBJVtRqQBDS1gQ";
    return output;}
  else if (this.url.indexOf('wordpress') > 0) {
    var output;
    output = "https://public-api.wordpress.com/rest/v1.1/sites/"+this.url+"/posts/";
    return output;}
};


