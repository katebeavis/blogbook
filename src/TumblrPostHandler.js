var TumblrPostHandler = function(blogPost){
  this.post = [blogPost]
};

TumblrPostHandler.prototype.imageUrl = function() {
  if (this.post[0].type === "photo") {
    var url;
    url = this.post[0].photos[0].original_size.url;
    return url;
  }
  else {
    return '';
  }
};

TumblrPostHandler.prototype.blogDate = function() {
  var date;
  date = this.post[0].date;
  return date;
};

TumblrPostHandler.prototype.imageCaption = function() {
  if (this.post[0].type === "photo") {
    var imgCaption;
    imgCaption = this.post[0].caption;
    return imgCaption;}
  else {
    return '';
  }
};

TumblrPostHandler.prototype.textBody = function() {
  var textbody;
  textbody = this.post[0].body;
  return textbody;
};

TumblrPostHandler.prototype.textTitle = function() {
  var textTitle;
  textTitle = this.post[0].title;
  return textTitle;
};