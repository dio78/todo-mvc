// The DOM element for a todo item...
var TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName:  'li',

  // Cache the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click .toggle': 'toggleComplete',
    'click .destroy': 'delete',
  },

  toggleComplete: function () {
    this.model.toggle();
  },

  delete: function () {
    this.model.destroy();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    
    this.$el.toggleClass('completed', this.model.get('completed'));

    return this;
  }
});