Router.configure({
  // the default layout
  layoutTemplate: 'mainNav'
});
 
Router.route('/', function () {
  this.render('firstPage');
  this.layout('mainNav');
});
 
 
Router.route('/second', function () {
  this.render('secondPage');
  this.layout('mainNav');
});

Router.route('/contact', function () {
    this.render('contact');
    this.layout('mainNav');
});
