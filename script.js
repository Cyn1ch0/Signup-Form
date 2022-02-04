// Declare needed HTML elements as variables
const submit = document.getElementById("submit_form"); 
const form = document.getElementById("the_form");
const fields = form.getElementsByTagName('input');
const errors = document.getElementsByClassName('error');

// Check if passwords are matching
function checkpword() {
  if (document.getElementById('pword').value != document.getElementById('cnfrm').value) {
    document.getElementsByClassName('error')[5].textContent = '* Your passwords do not match'
  }
  fields[5].style.border="2px solid red";
}

// Check if one of the required fields is empty
function checkempty() {
  for (i=0; i<fields.length-1; i++) {
    if (fields[i].value == '') {
      errors[i].textContent = '* This field is required';
      fields[i].style.border="2px solid red";
    }
  }
}

// Reset the views for the webpage
function reset() {
  for (i=0; i<fields.length; i++) {
    fields[i].style.border="2px solid rgb(194, 194, 194)";
  }
  for (i=0; i<errors.length; i++) {
    errors[i].textContent = '';
  }
}

/*
  Check form for errors
*/
document.getElementById('submit_form').addEventListener("click", function() {
  reset()
  checkpword()
  checkempty()
});
