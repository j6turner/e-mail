Email.MessageController = Ember.ObjectController.extend({
  isShowing: false,
  actions: {
    delete: function() {
      if (confirm('DELETE this message?')) {
        this.get('model').destroyRecord();
      }
    },
    details: function() {
      this.set('isShowing', !this.isShowing);
    }
  }
});
