function validateForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var emailId = document.getElementById('emailId').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var zipcode = document.getElementById('zipcode').value.trim();
    var comments = document.getElementById('comments').value.trim();

    // Validation for not null
    if (firstName === '' || lastName === '' || emailId === '' || phoneNumber === '' || zipcode === '' || comments === '') {
        alert('All fields are mandatory');
        return false;
    }

    // Validation for minimum length
    if (firstName.length < 2 || lastName.length < 2 || phoneNumber.length !== 10 || zipcode.length !== 6 || comments.length < 10) {
        alert('Minimum length not satisfied for some fields');
        return false;
    }

    // Validation for maximum length
    if (firstName.length > 50 || lastName.length > 50 || emailId.length > 100 || phoneNumber.length > 12 || zipcode.length > 6 || comments.length > 200) {
        alert('Maximum length exceeded for some fields');
        return false;
    }

    // Validation for alphanumeric fields
    var alphanumericRegex = /^[a-zA-Z0-9\s]*$/;
    if (!alphanumericRegex.test(firstName) || !alphanumericRegex.test(lastName) || !alphanumericRegex.test(phoneNumber) || !alphanumericRegex.test(zipcode)) {
        alert('Fields with alphanumeric should not accept special characters');
        return false;
    }

    return true;
}

// Function to enable or disable the submit button based on validation
function toggleSubmitButton() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var emailId = document.getElementById('emailId').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var zipcode = document.getElementById('zipcode').value.trim();
    var comments = document.getElementById('comments').value.trim();

    var isValid = true;

    // Validation for not null
    if (firstName === '' || lastName === '' || emailId === '' || phoneNumber === '' || zipcode === '' || comments === '') {
        isValid = false;
    }

    // Validation for minimum length
    if (firstName.length < 2 || lastName.length < 2 || phoneNumber.length !== 10 || zipcode.length !== 6 || comments.length < 10) {
        isValid = false;
    }

    // Validation for maximum length
    if (firstName.length > 50 || lastName.length > 50 || emailId.length > 100 || phoneNumber.length > 12 || zipcode.length > 6 || comments.length > 200) {
        isValid = false;
    }

    // Validation for alphanumeric fields
    var alphanumericRegex = /^[a-zA-Z0-9\s]*$/;
    if (!alphanumericRegex.test(firstName) || !alphanumericRegex.test(lastName) || !alphanumericRegex.test(phoneNumber) || !alphanumericRegex.test(zipcode)) {
        isValid = false;
    }

    // Enable or disable the submit button based on validation
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !isValid;
}

// Add event listeners to input fields to trigger validation on change
document.getElementById('firstName').addEventListener('input', toggleSubmitButton);
document.getElementById('lastName').addEventListener('input', toggleSubmitButton);
document.getElementById('emailId').addEventListener('input', toggleSubmitButton);
document.getElementById('phoneNumber').addEventListener('input', toggleSubmitButton);
document.getElementById('zipcode').addEventListener('input', toggleSubmitButton);
document.getElementById('comments').addEventListener('input', toggleSubmitButton);


// Function to show error message for a specific field
function showError(fieldId, message) {
    var errorSpan = document.getElementById(fieldId + 'Error');
    errorSpan.textContent = message;
}

// Function to hide error message for a specific field
function hideError(fieldId) {
    var errorSpan = document.getElementById(fieldId + 'Error');
    errorSpan.textContent = '';
}

// Function to validate and show error messages
function validateAndShowErrors() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var emailId = document.getElementById('emailId').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var streetAddress1 = document.getElementById('streetAddress1').value.trim();
    var zipcode = document.getElementById('zipcode').value.trim();
    var comments = document.getElementById('comments').value.trim();

    var isValid = true;

    // Validation for not null
    if (firstName === '') {
        showError('firstName', 'First Name is required');
        isValid = false;
    } else {
        hideError('firstName');
    }

    if (lastName === '') {
        showError('lastName', 'Last Name is required');
        isValid = false;
    } else {
        hideError('lastName');
    }

    if (emailId === '') {
        showError('emailId', 'Email Id is required');
        isValid = false;
    } 
    else if (!isValidEmail(emailId)) {
        showError('emailId', 'Please enter a valid @northeastern.edu email address');
        isValid = false;
    }
    else {
        hideError('emailId');
    }

    if (phoneNumber === '') {
        showError('phoneNumber', 'Phone Number is required');
        isValid = false;
    } else {
        hideError('phoneNumber');
    }

    if (streetAddress1 === '') {
        showError('streetAddress1', 'Street Address is required');
        isValid = false;
    } else {
        hideError('streetAddress1');
    }

    if (zipcode === '') {
        showError('zipcode', 'ZipCode is required');
        isValid = false;
    } else {
        hideError('zipcode');
    }

    if (comments === '') {
        showError('comments', 'Comments are required');
        isValid = false;
    } else {
        hideError('comments');
    }

    // Enable or disable the submit button based on validation
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !isValid;
}

drinkSelect = "NA";
function dropDown() {
  var drinks = document.getElementById("drinks").value;
  if (drinks == "Hot Black Tea") {
    document.getElementById("dropdown1").style.display = "block";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "none";
    document.getElementById("dropdown4").style.display = "none";
    document.getElementById("dropdown5").style.display = "none";
    drinkSelect = drinks;
  } else if (drinks == "Cold Coffee") {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "block";
    document.getElementById("dropdown3").style.display = "none";
    document.getElementById("dropdown4").style.display = "none";
    document.getElementById("dropdown5").style.display = "none";
    drinkSelect = drinks;

  } else if (drinks == "Lemon Iced Tea") {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "block";
    document.getElementById("dropdown4").style.display = "none";
    document.getElementById("dropdown5").style.display = "none";
    drinkSelect = drinks;
  } else if (drinks == "Espresso") {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "none";
    document.getElementById("dropdown4").style.display = "block";
    document.getElementById("dropdown5").style.display = "none";
    drinkSelect = drinks;
  } else if (drinks == "Latte") {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "none";
    document.getElementById("dropdown4").style.display = "none";
    document.getElementById("dropdown5").style.display = "block";
    drinkSelect = drinks;
  }
}

function ondropDown(dropDownselect) {
  var textField = document.getElementById("additionalInfo");
  if (dropDownselect.checked) {
    textField.style.display = "block";
  } else {
    textField.style.display = "none";
  }
}

function getTitleValue() {
    var titleInputs = document.getElementsByName('title');
    for (var i = 0; i < titleInputs.length; i++) {
        if (titleInputs[i].checked) {
            return titleInputs[i].value;
        }
    }
    return ""; // Default value if no title is selected
}


// Function to validate email format and domain
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@northeastern\.edu$/;
    return emailRegex.test(email);
}

document.getElementById('adInfo').addEventListener('input', function() {
    var adInfoInput = this.value.trim();
    var errorDiv = document.getElementById('error_additionalInfo');
    if (adInfoInput === '') {
      errorDiv.style.display = 'block';
    } else {
      errorDiv.style.display = 'none';
    }
  });

  function gethowDidYouHear() {
    var sources = document.getElementsByName('source');
    var selectedSources = [];

    for (var i = 0; i < sources.length; i++) {
        if (sources[i].checked) {
            selectedSources.push(sources[i].value);
        }
    }

    return selectedSources;
}


  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Submit button clicked");
    alert("Details Filled successfully");

    let table = document.getElementById("tableData");
    let title = getTitleValue();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailId = document.getElementById("emailId").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let streetAddress1 = document.getElementById("streetAddress1").value;
    let streetAddress2 = document.getElementById("streetAddress2").value;
    let zipCode = document.getElementById("zipcode").value;
    let howdidyouhear = gethowDidYouHear();
    let comments = document.getElementById("comments").value;
    let drinks = document.getElementById("drinks").value;
    let customizations = document.getElementById("adInfo").value;

    let newArray = [title, firstName, lastName, emailId, phoneNumber, streetAddress1, streetAddress2, zipCode, howdidyouhear, drinks, customizations, comments];

    const tr = document.createElement("tr");
    newArray.forEach(item => {
        const td = document.createElement("td");
        td.textContent = item;
        tr.appendChild(td);
    });

    table.querySelector('tbody').appendChild(tr);
    document.getElementById("tableData").style.display = "table"; // Display the table
    document.getElementById("feedbackForm").reset(); // Reset the form
}


  
// Add event listener to the form to trigger validation on key events
document.getElementById('feedbackForm').addEventListener('input', validateAndShowErrors);



