Email.Router.map(function() {
  this.resource('application');
  this.resource('home', { path: '/' });
  this.resource('new-user');
  this.resource('user');
  this.resource('users');
  this.resource('advice');
  this.resource('new-message');
});
