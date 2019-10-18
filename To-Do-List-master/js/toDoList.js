var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul"); //Gets first ancestor of element type

function addItem() {
    //Create a new li element
    var li = document.createElement("li");

    //Add text to it
    li.innerHTML = input.value;

    //add it to our ul
    ul.appendChild(li);

    //Clear out the text input after we create our new list item
    input.value = "";

    //Function to handle showing a list item as complete
    function markDone() {
        // If the li item does not have a "done" class applied to it, this will apply the class to the item, removes if item already has "done" class
        li.classList.toggle("done");
    }

        li.addEventListener("click", markDone);

        // create the delete button that will be added to the list item
        var deleteButton = document.createElement("button");

        // Give the button the text of "X"
        deleteButton.innerText = "X";

        // Add the button as a child of the list item
        li.appendChild(deleteButton);

       // Function will be called whenever the delete button is clicked
       function deleteItem() {
           // Add the delete class to list item
           li.classList.add("delete");
       }
       deleteButton.addEventListener("click", deleteItem);
    }



function createListItemSubmitButton() {
    if (input.value.length > 0) {
        addItem();
    }
}

function createListItemEnterKey(event) {
    console.log(event.keyCode);
    if (input.value.length > 0 && event.keyCode === 13) {
        addItem();
    }
}



submit.addEventListener("click", createListItemSubmitButton);

input.addEventListener("keypress", createListItemEnterKey);