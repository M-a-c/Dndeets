<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>

<?php

	$filename = 'blankRecord.js';
	$searchFor = 'player';

	$handle = fopen($filename,"r");
	$currentLine = "";

	$fWordPos;

	/* 
		Reading line by line
	*/ 

	while(!  feof($handle)){

		// echo ftell($handle);
		$currentLine = fgets($handle);
		// echo " : ";
		$fWordPos = strpos($currentLine, "career_level");
			
		if($fWordPos){
			echo $currentLine."<br />";
			echo strlen($currentLine);


			fwrite ($handle, "yup");
		}

		// echo ftell($handle);	
		// echo  "<br />";

		// echo $currentLine. "<br />";

	}

	fclose($handle);

?>



 </body>
</html>