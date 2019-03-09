<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkToken.php';

# Retrieve POST parameters
$booking_id = $_POST['booking_id'];
$deposit_slip = $_POST['deposit_slip'];


# Check parameters if null
if (isset($booking_id) && isset($deposit_slip)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        # Perform SQL Query
        $sql = "UPDATE bookings SET booking_deposit_slip='$deposit_slip',booking_status='AWAITING_CONFIRMATION' WHERE booking_id='$booking_id'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        # Print success
        echo json_encode((object)[
            'success' => true
        ]);

    } catch (PDOException $e) {

        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage() . "UPDATE accounts SET account_name='$account_name', account_contact='$account_contact', account_email='$account_email' WHERE account_id='$account_id'"
        ]);

    }
} else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set, account_id=$account_id&token=$token"
    ]);
}

