var TumblrPostHandler = function(blogPost){
  this.post = [blogPost]
};

TumblrPostHandler.prototype.blogDate = function() {
  var date;
  date = this.post[0].date;
  return date;
};

TumblrPostHandler.prototype.blogTitle = function() {
  if (this.post[0].type === "photo" || this.post[0].type === "video") {
    var graphicCaption;
    graphicCaption = this.post[0].caption;
    return graphicCaption;}
  else {
    var textTitle;
    textTitle = this.post[0].title;
    return textTitle;}
};

TumblrPostHandler.prototype.blogBackLink = function() {
  var blogLink;
  blogLink = this.post[0].post_url;
  return blogLink;
};

TumblrPostHandler.prototype.blogSource = function() {
  var blogSource;
  blogSource = this.post[0].blog_name;
  return blogSource;
};

TumblrPostHandler.prototype.blogMedia = function() {
  if (this.post[0].type === "photo") {
    var blogMedia;
    blogMedia = this.post[0].photos[0].original_size.url;
    return blogMedia;}
  else if(this.post[0].type === "link"){
    var hyperLink;
    hyperLink = this.post[0].url;
    return hyperLink;}
  else if (this.post[0].type === "video"){
    var videoUrl;
    videoUrl = this.post[0].video_url;
    return videoUrl;}
  else {
    return '';
  }
};

TumblrPostHandler.prototype.blogText = function() {
  if (this.post[0].type === "text") {
    var blogText;
    blogText = this.post[0].body;
    return blogText;}
  else {
    return '';
  }
};






