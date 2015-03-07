Email.NewMessageController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var message = this.get('model');
      message.save();

      var controller = this;
      message.get('user').then(function(user) {
        user.save();
        controller.transitionToRoute('user', user);
      });
    }
  }
});
