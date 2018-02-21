"use strict";

var myapp = new Backbone.Marionette.Application();


myapp.addRegions({
    mainRegion: '#content'
});

myapp.addInitializer((options) => {
    let todosView = new TodosView({
        collection: options.todos
    });
    myapp.mainRegion.show(todosView);
});

$(document).ready(() => {
    let todos = new Todos([
        new Todo({ title: 'A'}),
        new Todo({ title: 'B'}),
        new Todo({ title: 'C'})
    ]);

    myapp.start({todos: todos});
});
