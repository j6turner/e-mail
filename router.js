Email.Router.map(function() {
  this.resource('application');
  this.resource('home', { path: '/' });
  this.resource('new-user');
  this.resource('users');
  this.resource('advice');
  this.resource('send-message');
});
