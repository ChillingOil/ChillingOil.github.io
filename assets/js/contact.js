$(document).ready(function () {

    $('#contact-form').submit(function (e) {
        const form = document.querySelector('form[id="contact-form"]');
        const username = form.elements['user_name'].value;
        const userMail = form.elements['user_email'].value;
        const subject = form.elements['subject'].value;
        const message = form.elements['message'].value;
        const userPhone = form.elements['mobile'].value;
        e.preventDefault();
        var data = {
            service_id: 'service_xsfft1a',
            template_id: 'template_9maxhoh',
            user_id:
                'user_qK4yLKeIMcZ8XEO6BlsxT',
            template_params: {
                from_name: username,
                to_name: 'YuEn Zhang',
                subject: subject,
                email: userMail,
                phone: userPhone,
                message_html: message
            }
        };
        $("#btnFetch").prop("disabled", true);
        // add spinner to button
        $("#btnFetch").html(
            '<i class="fa fa-circle-o-notch fa-spin"></i> loading...'
        );
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Your message is sent! Our team will get back to you as soon as possible!');
            document.getElementById("contact-form").reset();
            $("#btnFetch").prop("disabled", false);
            $("#btnFetch").html(
                '<i class="spinner-button btn btn-primary mb-2"></i> loading...'
            );
        }).fail(function(error) {
            alert('Oops…' + JSON.stringify(error));
        })
    })
})