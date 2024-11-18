var buttonSubmit = document.getElementById('submit');
    buttonSubmit.onclick = function() {

        var confirmMessage = confirm("Would you like to send this message?");
        
        if (confirmMessage) {
            alert('Message sent successfully');
        } else {
            alert('Message cancelled. I await your contact!');
        }
    };
