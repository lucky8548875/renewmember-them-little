<?php
# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';
 $start_date = $_GET['start_date'];
$end_date = $_GET['end_date'];
if(true)
//if(isset($start_date) && isset($end_date))
{
    try
    {
        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        # Perform SQL Query
        $stmt = $conn->prepare(
            "SELECT 
                MONTHNAME(booking_created) as month, 
                COUNT(booking_id) as count 
            FROM bookings 
            GROUP BY month 
            ORDER BY booking_created ASC"
        );
        $stmt->execute();
    
        # Fetch Result
        $months = array();
        $counts = array();
        while($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            array_push($months, $row['month']);
            array_push($counts, $row['count']);
        }
        $result = array(
            'months' => $months,
            'counts' => $counts
        );
        
        # Print Result in JSON Format
        echo json_encode((object)[
        'success' => true,
        'data' => $result
        ],JSON_NUMERIC_CHECK);
    }
    catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);
    }
}
?> 