Email.NewUserController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newUser = this.store.createRecord('user', {
        name: this.get('name'),
        address: this.get('address')
      });
      newUser.save();
      this.transitionToRoute('users');
    }
  }
});
