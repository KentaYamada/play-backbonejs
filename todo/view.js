"use strict";


var TodoView = Backbone.Marionette.ItemView.extend({
    temlate: '#todo-item-tmpl',
    tagName: 'tr',
    // className: 'todo-item'
});


var TodosView = Backbone.Marionette.CompositeView.extend({
    template: '#todos-tmpl',
    tagName: 'table',
    id: 'todos',
    // className: 'table-striped table-bordered',
    itemView: TodoView,

    initialize: function() {
        this.listenTo(this.collection, 'sort', this.renderCollection);
    },

    appendHtml: function(collectionView, itemView) {
        collectionView.$('tbody').append(itemView.el);
    }
});
