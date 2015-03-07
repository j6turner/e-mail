Email.Message = DS.Model.extend({
  receiver: DS.attr(),
  subject: DS.attr(),
  text: DS.attr(),
  user: DS.belongsTo('user', {async: true})
})
