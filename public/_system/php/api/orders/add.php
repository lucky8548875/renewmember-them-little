<?php

# Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkToken.php';


# Retrieve POST parameters
$order_list = $_POST['order_list'];
$booking_id = $_POST['booking_id'];
$account_id = $_POST['account_id'];
$order_total_price = $_POST['order_total_price'];
// $token = $_POST['token'];


# Check parameters if null
if (isset($order_list) && isset($booking_id) && isset($account_id) && true) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


        # Perform SQL Query
        $sql = "INSERT INTO orders (order_list, order_total_price, booking_id, account_id) VALUES ('$order_list','$order_total_price','$booking_id','$account_id')";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        # Perform SQL Query
        $sql = "UPDATE bookings SET booking_addons_isordered='1' WHERE booking_id='$booking_id'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        # Print success
        echo json_encode((object)[
            'success' => true,
            'sql' => "INSERT INTO orders (order_list, booking_id, account_id) VALUES ('$order_list','$booking_id','$account_id')"
        ]);

    } catch (PDOException $e) {

        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);

    }
}
else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set or not authenticated"
    ]);
}

