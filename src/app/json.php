<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // The request is using the POST method
    header("HTTP/1.1 200 OK");
    return;

}
  //  $json = $_POST['json'];

  //  /* sanity check */
  //  if (json_decode($json) != null)
  //  {
  //    $file = fopen('new_map_data.json','w+');
  //    fwrite($file, $json);
  //    fclose($file);
  //  }
  //  else
  //  {
  //    // user has posted invalid JSON, handle the error
  //  }
?>
