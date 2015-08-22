<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>

<?php
	function replaceAttributeValue($searchFor, $newValue){
		// File to load, aka character sheet
		$filename = 'blankRecord.js';

		// Open file to read and write, r+
		$handle = fopen($filename,"r+");

		// Current line being read
		$currentLine = "";

		$foundWord;
		$pointerLocation;
		$stringLength;
		$stringToWrite = "";
		$blankString = "";

		while(!  feof($handle)){

		$currentLine = fgets($handle);
		$fWordPos = strpos($currentLine, $searchFor,0);


		if($fWordPos){
		
			$pointerLocation = ftell($handle);
			$stringlength = strlen($currentLine);
			$searchStringLength = strlen($searchFor);
			fseek($handle, $pointerLocation - $stringlength + 1);

 			$blankString = str_pad($blankString, $stringlength); 
 			
			fwrite($handle, $blankString);

			fseek($handle, $pointerLocation - $stringlength + 1);

			$stringToWrite .= $searchFor;
			$stringToWrite .= ": ";
			$stringToWrite .= $newValue;
			$stringToWrite .= ",";
			$stringToWrite .= "\n";

			fwrite($handle, $stringToWrite);
			}

			echo $currentLine. "<br />";

		}

		fclose($handle);

	}



	replaceAttributeValue("deity", "\"something\"");


?>



 </body>
</html>