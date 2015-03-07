Email.NewMessageRoute = Ember.Route.extend({
  model: function(params) {
    var user = this.modelFor('user');
    var message = this.store.createRecord('message');
    user.get('messages').then(function(messages) {
      messages.pushObject(message);
    });
    return message;
  }
});
