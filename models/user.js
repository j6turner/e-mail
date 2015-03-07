Email.User = DS.Model.extend({
  user: DS.attr(),
  address: DS.attr(),
  messages: DS.hasMany('message', {async: true})
});
