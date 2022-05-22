$(document).ready(function () { // launch when DOM is fully loaded

    $('form[name="contact"]').submit(function (event) { // fire when you hit submit

        event.preventDefault(); // prevent default form submission since you want to send data via ajax

        $('#result').html('');
        $('.alert').remove();

        var values = $(this).serialize();

        // Post form data to your contact.php script and work with response
        $.ajax({
            url: "src/mail.php",
            // url: "../mail.php",
            type: "POST",
            data: values,
            success: function (response) {
                if (response.success) {
                    $('#result').html('<div class="alert_success">' + response.success + '</div>');
                }
                if (response.error_form) {
                    $.each(response.error_form, function (key, value) {
                        $('input[name="' + key + '"]').parent().append('<p class="help-block text-danger">' + value + '</p>');
                    });
                }
                if (response.error_mail) {
                    $('#result').html('<div class="alert alert-danger">' + response.error_mail + '</div>');
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
        document.getElementById("myForm").reset();
    });
});