# Todo Mini Project

## Intro

The following project will be a simple Todo list app.

Please start off by *forking* this repo, and then *clone* it to your local machine.

You can use whatever concepts you know until now to complete this project: Modules, Classes, jQuery, Handlebars, etc...

**Good Luck! :)**

***

## Logic Module/Class

Head over to the `logic.js` file and create a `Logic` module/class there. This should include:

-   An array of `todos` - use the dummy data below to get started (and to understand how each object should look)
-   A `getTodos` function/method that returns the `todos` array
-   An `addTodo` function/method that receives some text and adds a `todo` object to `todos`
    -   Each object should have three properties:`id`, `text`, and `completed`
    -   You should generate the next id correctly for each `todo`: `"t4", "t5", ...`
    -   You should default the `completed` property to `false`
-   A `removeTodo` function/method that recives a `todoId` and removes the relevant `todo` from `todos`
-   A `markComplete` function/method that recives a `todoId` and changes the `todo`'s `completed` property to `true`

Here is some dummy data to start you off:

```
[
    {
      text: 'Go to the mall',
      id: 1,
      completed: false
    },
    {
      text: 'Go to the gym',
      id: 2,
      completed: true
    },
    {
      text: 'Buy tomatoes',
      id: 3,
      completed: false
    }
  ]
```

***

## Renderer Module/Class

This module shouldn't care about anything else. It doesn't care if we add or remove todos whatever.

In other words, this module is the View in our MVC architecture.

To that end, go ahead and head over to the `renderer.js` file. Inside of it you should create a module/class called `Renderer`

The only function/method this should expose (return) is a `renderTodos` function/method. Here are some guidelines, though again you're mostly on your own:

-   The `renderTodos` function should receive one parameter: `todos`
    -   This parameter is the array of `todos` objects that comes from your `Logic` module
-   The function should first empty the `#todos` element
-   It should loop through each `todo` in the `todos` array and append some HTML to `#todos`
    -   Use jQuery to create and add the elements
-   Notice that each `todo` has its own text, and `completed` property
    -   Make sure you're adding each todo's ID in a data-id attribute
    - Note that if the `completed` property is `true` the `todo` should have a class of `.complete` (as well as `.todo` which it should always have)

-   Use the CSS in `style.css` file for styling - you should be able to figure out which elements receive which class

-   We highly encourage you to use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

***

## Controller

We'll use our `main.js` file as our controller file.

Specifically, we want to add a listener on the following elements:

1.  The `Add` button
2.  The `Delete` button
3.  The `Checkmark` button

Remember how we add listeners on dynamic elements? If not, refer back to the jQuery intro lesson - all of the listeners (except on `Add`) will be dynamic!

There's not much code to write since your other modules do most of the work, but one last time you're on your own with the following guidelines:

-   When the user clicks on the `Add` button, you should grab the value from the input and create a new `todo`

-   Notice that you already have an `addTodo` function in your `Logic` module - invoke it!

-   When the `Delete` button is clicked, grab the ID of the `todo` using what you learned about DOM Traversal and invoke the `removeTodo` function in your logic module

-   When the `Checkmark` button is pressed, again use DOM Traversal to get the ID of the `todo`, then grab the ID, and invoke your `markComplete` function.

***

## Extension

Allow a user to unmark a `todo` as complete. For this, you might need to change something small in your `markComplete` function in `Logic`.