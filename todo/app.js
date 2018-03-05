"use strict";

var myapp = new Backbone.Marionette.Application();


myapp.addRegions({
    mainRegion: '#content'
});

myapp.addInitializer(function(options) {
    let todosView = new TodosView({
        collection: options.todos
    });
    myapp.mainRegion.show(todosView);
});

$(document).ready(function() {
    let todos = new Todos([
        new Todo({ title: 'A'}),
        new Todo({ title: 'B'}),
        new Todo({ title: 'C'})
    ]);

    myapp.start({todos: todos});
});
