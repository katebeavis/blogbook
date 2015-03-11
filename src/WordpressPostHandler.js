var WordpressPostHandler = function(blogpost) {
  this.post = [blogpost];
};

WordpressPostHandler.prototype.blogDate = function() {
 var blogDate;
 blogDate = this.post[0].date;
 return blogDate;
};