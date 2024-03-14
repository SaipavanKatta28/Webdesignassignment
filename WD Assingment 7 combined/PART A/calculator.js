$(document).ready(function() {
    // Get the logged-in user name from localStorage and display it
    var loggedInUserName = localStorage.getItem('loggedInUserName');
    $('#loggedInUserName').text(loggedInUserName);
    

    // Arrow function for all operations
    const performOperation = (operator) => {
        const number1 = parseFloat($('#number1').val());
        const number2 = parseFloat($('#number2').val());
        let result;

        if (isNaN(number1) || isNaN(number2)) {
            $('#result').val('Invalid input');
            return;
        }

        switch (operator) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                if (number2 === 0) {
                    $('#result').val('Cannot divide by zero');
                    return;
                }
                result = number1 / number2;
                break;
            default:
                result = 'Invalid operation';
        }

        $('#result').val(result.toFixed(2)); // Display result with 2 decimal places
    };

    // Event listeners for operation buttons
    $('#addButton').click(() => performOperation('add'));
    $('#subtractButton').click(() => performOperation('subtract'));
    $('#multiplyButton').click(() => performOperation('multiply'));
    $('#divideButton').click(() => performOperation('divide'));
});
