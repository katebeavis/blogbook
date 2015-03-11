var WordpressPostHandler = function(blogpost) {
  this.post = [blogpost];
};

WordpressPostHandler.prototype.blogDate = function() {
 var blogDate;
 blogDate = this.post[0].date;
 return blogDate;
};


WordpressPostHandler.prototype.blogTitle = function() {
  var blogTitle;
  blogTitle = this.post[0].title;
  return blogTitle;
};

WordpressPostHandler.prototype.blogText = function() {
  var blogText;
  blogText = this.post[0].excerpt;
  return blogText;
};

WordpressPostHandler.prototype.blogBacklink = function() {
  var blogBacklink;
  blogBacklink = this.post[0].URL;
  return blogBacklink;
};

WordpressPostHandler.prototype.blogSource = function() {
  var blogSource;
  blogSource = this.post[0].author.nice_name;
  return blogSource;
};

WordpressPostHandler.prototype.blogMedia = function() {
  var blogMedia;
  blogMedia = this.post[0].featured_image;
  return blogMedia;
};


WordpressPostHandler.prototype.arrayConstructor = function() {
  var wpContent;
  wpContent = [];
  wpContent.push(this.blogDate(this.post[0]));
  wpContent.push(this.blogTitle(this.post[0]));
  wpContent.push(this.blogBacklink(this.post[0]));
  wpContent.push(this.blogSource(this.post[0]));
  wpContent.push(this.blogMedia(this.post[0]));
  wpContent.push(this.blogText(this.post[0]));
  return wpContent
};


