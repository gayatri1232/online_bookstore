$(document).ready(function() {
    $('#contactFormModal form').on('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted!'); // Add this line for debugging
        $('#contactFormModal').modal('hide');
    });
});
<script src="js/script.js"></script>