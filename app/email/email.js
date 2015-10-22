var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'algorun.platform@gmail.com',
            pass: ''
        }
    });

exports.sendContactConfirmation = function(name, email, message, callback){
    var tokens = name.split(" ");
    var html_content = "<h1 style='color: #25aae1;'>Thank You " + tokens[0] + "</h1>";
    html_content += "<p>We are glad to hear from you. This is a confirmation email that we received your message.<p>";
    html_content += "<p>We will get in touch very soon.</p>";
    html_content += "<p style='color: #25aae1'>AlgoRun Team</p>";
    var mailOptions = {
        from: 'AlgoRun <algorun.platform@gmail.com>',
        to: email,
        subject: 'AlgoRun | Thank You for Contacting Us',
        html: html_content
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            callback("error");
        } else {
            sendAdminContact(name, email, message, callback);
        };
    });
}
function sendAdminContact(name, email, message, callback){
    var tokens = name.split(" ");
    var text_content = name + "\n";
    text_content += message + "\n";
    text_content += email;
    var mailOptions = {
        from: email,
        to: 'aibrahim@uchc.edu',
        subject: 'AlgoRun | User Contact',
        text: text_content
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            callback("error");
        } else {
            callback("success");
        };
    });
}
exports.sendPublishConfirmation = function(name, email, docker, experience, callback){
    var tokens = name.split(" ");
    var html_content = "<h1 style='color: #25aae1;'>Thank You " + tokens[0] + "</h1>";
    html_content += "<p>We are glad that you use AlgoRun to publish your algorithms. <br>This is a confirmation email that we received your docker image.<p>";
    html_content += "<p>We are reviewing your image and will notify you as soon as it is uploaded ..</p><br>"
    html_content += "<p style='color: #A8A8A8'>We are automating this process now. You won't wait in line in a while.</p><br>";
    html_content += "<p style='color: #25aae1'>AlgoRun Team</p>";
    var mailOptions = {
        from: 'AlgoRun <algorun.platform@gmail.com>',
        to: email,
        subject: 'AlgoRun | Thank You for Publishing Your Algorithm',
        html: html_content
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            callback("error");
        } else {
            sendAdminPublish(name, email, docker, experience, callback);
        };
    });
}
function sendAdminPublish(name, email, docker, experience, callback){
    var tokens = name.split(" ");
    var text_content = name + "\n";
    text_content += email + "\n";
    text_content += docker + "\n";
    text_content += experience;
    var mailOptions = {
        from: email,
        to: 'aibrahim@uchc.edu',
        subject: 'AlgoRun | Publish Request',
        text: text_content
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            callback("error");
        } else {
            callback("success");
        };
    });
}