function popMessage() {
    alertify.alert('Your message has been sent!');
}

function imHungry() {
    alertify.alert("Why don't you buy something to eat?");
}

function showMore() {
    alertify.alert("Please check the bottom of the page, what else you want to see?");
}
function popMessageModal() {
    alertify.alert("Thank you for your interest. We will reply you in 48 hours.");

}
// MODAL BUTON

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// MODAL BUTTON