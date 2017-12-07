# TODO-list-using-jQuery-HTML-and-CSS
In this mini-project, I created a simple todo list where a user can enter a todo, scratch it off the list, or delete it from the list. This project includes features such as the use of the fadeToggle(), stopPropagation(), toggleClass(), and keypress() jQuery methods. It also demonstrates how to use the transition feature in CSS to slide a delete box next to a todo when the todo is hovered over by the mouse.

The keypress() method will be used to listen to events where the user clicks enter when they are finished typing in the input. From there, we can get the value of the input using the val() method and store this data in order to place this data into an li (todo).

If a todo is completed, we will use the toggleClass() method to let the user scratch off the todo (not delete).

stopPropagation() is an event method that allows us to stop event bubbling which is when parent tags also listen in on a sibling tag's callback functions. 


