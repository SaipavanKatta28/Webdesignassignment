$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        // Perform login authentication here
        // For demonstration purposes, assume authentication is successful
        var loggedInUserName = $('#username').val(); // Get the username for display on the second page
        localStorage.setItem('loggedInUserName', loggedInUserName); // Store the username in localStorage
        window.location.href = 'calculator.html'; // Redirect to the second page
    });

    $('#email').on('input', function() {
        var email = $(this).val();
        if (!email.match(/\b[A-Za-z0-9._%+-]+@northeastern\.edu\b/)) {
            $('#emailError').text('Please enter a valid Northeastern email.');
        } else {
            $('#emailError').text('');
        }
    });

    $('#username, #password, #confirmPassword').on('input', function() {
        var field = $(this).attr('name');
        var value = $(this).val();
        if (!value) {
            $('#' + field + 'Error').text('Please enter ' + field);
        } else if (value.length < 6) {
            $('#' + field + 'Error').text(field.charAt(0).toUpperCase() + field.slice(1) + ' must be at least 6 characters long.');
        } else if (value.length > 20) {
            $('#' + field + 'Error').text(field.charAt(0).toUpperCase() + field.slice(1) + ' must be less than 20 characters long.');
        } else if (!value.match(/^[a-zA-Z0-9]+$/)) {
            $('#' + field + 'Error').text(field.charAt(0).toUpperCase() + field.slice(1) + ' can only contain letters and numbers.');
        } else {
            $('#' + field + 'Error').text('');
        }
    });

    $('#confirmPassword').on('input', function() {
        var password = $('#password').val();
        var confirmPassword = $(this).val();
        if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match.');
        } else {
            $('#confirmPasswordError').text('');
        }
    });

    $('#email, #username, #password, #confirmPassword').on('input', function() {
        var isValid = true;
        $('.error-message').each(function() {
            if ($(this).text() !== '') {
                isValid = false;
                return false;
            }
        });
        $('#loginButton').prop('disabled', !isValid);
    });
});
