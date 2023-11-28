<?php
    // enable CORS
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type');

    // connect
    $mysqli = mysqli_connect("localhost", "phpuser", "435pro0ject4", "MoviesDB");
    
    // check the connection
    if(mysqli_connect_error()) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to connect to MariaDB: ' . $mysqli->connect_error]);
        die("There was an error connecting to the database");
    }

    // handle HTTP methods
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'GET':
            // retrieve all items
            $query = "SELECT * FROM Movies";
            $result = mysqli_query($mysqli, $query);

            if (!$result) {
                http_response_code(500);
                echo json_encode(['error' => 'Error in SQL query: ' . mysqli_error($mysqli)]);
                die();
            }

            $items = [];
            while ($row = mysqli_fetch_assoc($result)) {
                $items[] = $row;
            }

            header('Content-Type: application/json');
            echo json_encode($items);
            break;

        case 'POST':
            // create a new item
            $data = json_decode(file_get_contents("php://input"), true);

            $title = $data['title'];
            $ageRating = $data['ageRating'];
            $summary = $data['summary'];
            $audienceRating = $data['audienceRating'];

            $insertQuery = "INSERT INTO Movies (Title, AgeRating, Summary, AudienceRating) VALUES ('$title', '$ageRating', '$summary', '$audienceRating')";
            $insertResult = mysqli_query($mysqli, $insertQuery);

            if (!$insertResult) {
                http_response_code(500);
                echo json_encode(['error' => 'Error in SQL query: ' . mysqli_error($mysqli)]);
                die();
            }

            http_response_code(201);
            echo json_encode(['message' => 'Item added successfully!']);
            break;

        case 'PUT':
            // update an item
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $data['id'];
            $title = $data['title'];
            $ageRating = $data['ageRating'];
            $summary = $data['summary'];
            $audienceRating = $data['audienceRating'];

            $updateQuery = "UPDATE Movies SET Title='$title', AgeRating='$ageRating', Summary='$summary', AudienceRating='$audienceRating' WHERE ID=$id";
            $updateResult = mysqli_query($mysqli, $updateQuery);

            if (!$updateResult) {
                http_response_code(500);
                echo json_encode(['error' => 'Error in SQL query: ' . mysqli_error($mysqli)]);
                die();
            }

            http_response_code(200);
            echo json_encode(['message' => 'Item updated successfully!']);
            break;

        case 'DELETE':
            // delete an item
            parse_str(file_get_contents("php://input"), $data);
            $id = $data['id'];

            $deleteQuery = "DELETE FROM Movies WHERE ID=$id";
            $deleteResult = mysqli_query($mysqli, $deleteQuery);

            if (!$deleteResult) {
                http_response_code(500);
                echo json_encode(['error' => 'Error in SQL query: ' . mysqli_error($mysqli)]);
                die();
            }

            http_response_code(200);
            echo json_encode(['message' => 'Item deleted successfully!']);
            break;

        default:
            http_response_code(405);
            echo json_encode(['error' => 'Invalid request method!']);
            break;
    }

    // close the connection
    mysqli_close($mysqli);
?>
