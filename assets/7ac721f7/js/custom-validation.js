$().ready(function () {
    var submiturl = '/submit.php';
    $.validator.addMethod("textonly", function (value, element)
    {
        return this.optional(element) || /^[a-z," "]+$/i.test(value);
    }, "Please enter only characters.");
   
    $('#contactus').validate({
        rules: {
            firstname: {
                required: true,
                textonly: true,
                maxlength: 25,
            },
            lastname: {
                required: true,
                textonly: true,
                maxlength: 25,
            },
            email: {
                required: true,
                email: true,
                maxlength: 100,
            },
            phone: {
                required: true,
                number: true,
                minlength: 8,
                maxlength: 14
            },
            subject: {
                required: true
            },
            message: {
                required: true,
            },
        },
        messages: {
            firstname: {
                required: "Please enter your first name.",
                maxlength: 'First Name length should not be more than 25.'
            },
            lastname: {
                required: "Please enter your last name.",
                maxlength: 'Last Name length should not be more than 25.'
            },
            email: {
                required: "Please enter email address."
            },
            phone: {
                required: "Please enter a phone number.",
                number: "Please enter a valid phone number.",
                minlength: "Phone number length should be between 8 to 14.",
                maxlength: "Phone number length should be between 8 to 14."
            },
            subject: {
                required: "Please enter subject."
            },
            message: {
                required: "Please enter your message."
            },
        },
        submitHandler: function (form) {
            jQuery(".submit-contact").attr("disabled", true);
            jQuery(".submit-contact").hide();
            jQuery(".loader_img").show(), 
            form.submit();
        },
    });
});