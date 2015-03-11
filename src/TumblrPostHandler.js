var TumblrPostHandler = function(blogPost){
  this.post = [blogPost]
};

TumblrPostHandler.prototype.imageUrl = function() {
  if (this.post[0].type === "photo") {
    var url;
    url = this.post[0].photos[0].original_size.url;
    return url;}
  else {
    return '';
  }
};

TumblrPostHandler.prototype.blogDate = function() {
  var date;
  date = this.post[0].date;
  return date;
};

TumblrPostHandler.prototype.graphicCaption = function() {
  if (this.post[0].type === "photo" || this.post[0].type === "video") {
    var graphicCaption;
    graphicCaption = this.post[0].caption;
    return graphicCaption;}
  else {
    return '';
  }
};

TumblrPostHandler.prototype.textBody = function() {
  if (this.post[0].type === "text") {
    var textbody;
    textbody = this.post[0].body;
    return textbody;}
  else {
    return '';
  }
};

TumblrPostHandler.prototype.textTitle = function() {
  if (this.post[0].type === "text") {
    var textTitle;
    textTitle = this.post[0].title;
    return textTitle;}
  else {
    return '';
  }
};

TumblrPostHandler.prototype.blogLink = function() {
  var blogLink;
  blogLink = this.post[0].post_url;
  return blogLink;
};

TumblrPostHandler.prototype.hyperLink = function() {
  if (this.post[0].type === 'link'){
    var hyperLink;
    hyperLink = this.post[0].url;
    return hyperLink;}
  else {
    return '';
  }
};

TumblrPostHandler.prototype.linkDescription = function() {
  if (this.post[0].type === 'link'){
    var linkDescription;
    linkDescription = this.post[0].description;
    return linkDescription;}
  else {
    return '';
  }
};

TumblrPostHandler.prototype.videoUrl = function() {
  if (this.post[0].type === "video"){
    var videoUrl;
    videoUrl = this.post[0].video_url;
    return videoUrl;}
  else {
    return '';
  }
};





