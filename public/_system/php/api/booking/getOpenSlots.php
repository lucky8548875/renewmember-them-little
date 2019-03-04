<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkToken.php';

#Retrieve POST parameters
$date = $_POST['booking_date'];
$duration = $_POST['package_minutes'];

if (isset($date) && isset($duration))
{

    # Convert to PHP recognized format
    $duration = "+$duration minutes";

    try
    {
        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        # Perform SQL Query
        //$sql = "SELECT b.booking_id, b.booking_date, b.booking_time, p.package_minutes FROM bookings b INNER JOIN packages p ON b.booking_date = '$date' AND b.package_id = p.package_id ORDER BY b.booking_time ASC";
        
        $sql = "SELECT config_value FROM config WHERE config_key = 'max_allowed_bookings'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $allowed_max_bookings = $stmt->fetchAll()[0][0];
        // echo $allowed_max_bookings."<br>";
        
        $sql = "SELECT booking_id, booking_date, booking_time, package FROM bookings WHERE booking_date = '$date'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        # Fetch Result
        $result = $stmt->fetchAll();
        # print_r($result);

        date_default_timezone_set("Asia/Singapore"); # Set timezone to Singapore. Time there matches Philippines time
        //echo date_default_timezone_get()."<br>";

        if(((8 < date('H')) && (date('H') < 20)))
        {
            $hour_now = strtotime(date('H').":00"); # Get current hour
            # echo date('H:i', $hour_now)."<br>";
            # If minutes == 00-29, start with XX:30 and if 31-59 start with next hour
            $start = (date('i') < 30) ? strtotime("+30 minutes", $hour_now) : strtotime("+1 hour", $hour_now);
        }
        else
        {
            $start = strtotime("8:00");
        }
        # echo date('H:i', $start)."<br>";

        $stop = strtotime("20:00"); #closing time
        $step = "+30 minutes"; #preferred interval
        # $reserved = $result;
        
        $availables = array(); //open slots to be pushed here
        
        // echo "Hour Now: ".date("H:i", $hour_now)."<br>";
        // echo "Start: ".date("H:i", $start)."<br>";
        // echo "Stop: ".date("H:i", $stop)."<br>";
        // echo "Step: ".$step."<br>";
        // " Weird booking: ".(json_decode($row[1]['package'])->package_minutes)."<br>";
        //echo json_last_error()." ".json_last_error_msg()."<br>";
        
        for($current = $start, $end_of_current = strtotime($duration, $current);
            $current < $stop && $end_of_current <= $stop;
            $current = strtotime($step, $current), $end_of_current = strtotime($duration, $current))
        {
            //echo "-------------".date("H:i", $current)."-------------<br>";
            $bookings_found = 0;
            # Unfortunately, this part is not optimal and makes this whole php function slow
            foreach($result as $row)
            {
                # print_r($row);
                $reserved_start = strtotime($row['booking_time']);
                $reserved_duration = "+".(json_decode(str_replace("\n", '', $row['package']))->package_minutes)." minutes";
                $end_of_reserved = strtotime($reserved_duration, $reserved_start);

                // echo $row['booking_id']."<br>";
                // echo date("H:i", $reserved_start)."<br>";
                // echo $reserved_duration."<br>";
                // echo date("H:i", $end_of_reserved)."<br>";

                if(($current <= $reserved_start && $reserved_start < $end_of_current) || ($reserved_start <= $current && $current < $end_of_reserved))
                {
                    $bookings_found++;
                    # echo "Found conflict<br>";
                }
            }
            //echo "Bookings found:".$bookings_found.'<br>';
            if($bookings_found < $allowed_max_bookings)
            {
                $availables[] = date("H:i", $current);
                # echo date("H:i", $current).' added to availables<br>';
            }
            //echo "-------------".date("H:i", $current)."-------------<br>";
        }
        
        echo json_encode((object)[
            'success' => true,
            'data' => $availables
        ]);

    }
    catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed".$e
        ]);
    }
}
else{
    echo json_encode((object)[
        'success' => false,
        'message' => "Error"
    ]);
}
?>