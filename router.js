Email.Router.map(function() {
  this.resource('application');
  this.resource('home', { path: '/' });
  this.resource('users');
});
