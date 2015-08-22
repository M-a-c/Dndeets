<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>

<?php

	$filename = 'blankRecord.js';
	$searchFor = 'player';

	$handle = fopen($filename,"r+");
	$currentLine = "";

	$fWordPos;
	$pointerLocation;
	$stringLength;
	$stringToWrite;

	/* 
		Reading line by line
	*/ 


	while(!  feof($handle)){

		$currentLine = fgets($handle);
		$fWordPos = strpos($currentLine, "career_level:",0);
		// for ($x = 0; $x <= 10; $x++) {
		//     echo "The number is: $x <br>";
		// }

		if($fWordPos){
		
			$pointerLocation = ftell($handle);
			$stringlength = strlen($currentLine);
			$searchStringLength = strlen("career_level:");
			fseek($handle, $pointerLocation - $stringlength + $searchStringLength + 1);
			fwrite($handle, "25,");
		}

		echo $currentLine. "<br />";

	}

	fclose($handle);

?>



 </body>
</html>