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
  fields[4].classList.add('invalid');
  fields[5].classList.add('invalid');
}

// Check if one of the required fields is empty
function checkempty() {
  for (i=0; i<fields.length-1; i++) {
    if (fields[i].value == '') {
      errors[i].textContent = '* This field is required';
      fields[i+1].classList.add('invalid');
    }
  }
}

// Reset the views for the webpage
function reset() {
  for (i=0; i<fields.length; i++) {
    if (fields[i].classList.contains('invalid')){
      fields[i].classList.remove('invalid');
    }
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