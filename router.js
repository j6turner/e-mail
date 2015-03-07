Email.Router.map(function() {
  this.resource('application');
  this.resource('home', { path: '/' });
  this.resource('new-user');
  this.resource('user', {path: ':user_id'}, function() {
    this.resource('new-message');
  });
  this.resource('users');
  this.resource('advice');
});
