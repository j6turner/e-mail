Email.UserController = Ember.ObjectController.extend({
  beingModified: false,
  actions: {
    modify: function() {
      this.set('beingModified', true);
    },
    save: function() {
      this.set('beingModified', false);
    }
  }
});
