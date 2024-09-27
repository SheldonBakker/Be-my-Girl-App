<?php
// Ensure the script is receiving the correct POST data
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['response'])) {
    $to = $_POST['email'];
    $name = $_POST['name'];
    $response = $_POST['response'];

    // Define subject and message
    $subject = "Your Response: $response";
    $message = "
    <html>
    <head>
    <title>Response Notification</title>
    </head>
    <body>
    <h1>💖 A Sweet Response Just For You! 💖</h1>
    <p>Hi there, <strong>$name</strong>! 🌟</p>
    <p>We are so excited to share that you received a new response:</p>
    <p><strong>Response:</strong> $response</p>
    <p>Thank you for spreading love and positivity with our app! 💌</p>
    <div class='footer'>
        <p>With love,<br>Your Adorable App Team 💕</p>
    </div>
    </body>
    </html>
    ";

    // To send HTML mail, the Content-type header must be set
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: noreply@shikkidesign.co.za' . "\r\n"; // Your email

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Failed to send email.';
    }
} else {
    echo 'Invalid input.';
}
?>
