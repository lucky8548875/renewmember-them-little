<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

# Get HTTP Parameters
$account_id = $_GET['account_id'];
$token = $_GET['token'];

# Get UA/IP Parameters
$http_user_agent = $_SERVER['HTTP_USER_AGENT'];

if (isset($account_id) && isset($token) && isset($http_user_agent)) {

    // Format http_user_agent
    $http_user_agent = str_replace("/","",str_replace("\\","",$http_user_agent));

try {

    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare("SELECT * FROM tokens WHERE account_id='$account_id' AND token='$token' AND http_user_agent='$http_user_agent' AND token_valid=true");
    $stmt->execute();

    # Fetch Result
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (sizeof($result) >= 1){

        # Print Result in JSON Format
        echo json_encode((object)[
            'success' => true,
            'status' => 'AUTHORIZED',
            'data' => $result,
        ],JSON_NUMERIC_CHECK);

    }
    else {
        echo json_encode((object)[
            'success' => false,
            'status' => 'UNAUTHORIZED',
            'data' => $result,
            'account_id' => $account_id,
            'token' => $token,
            'http_user_agent' => $http_user_agent
        ],JSON_NUMERIC_CHECK);
    }

    }
catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: "
        ]);
    }

}
else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set $account_id -- $token -- $http_user_agent"
    ]);
}
?>