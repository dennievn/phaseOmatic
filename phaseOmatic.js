function phaseOmatic(){ // initializing function for later calling
	var words1=["24/7", "MULTI-TIER", "30,000 FEET", "B2B", "WIN-WIN"];
	var moreWords=["EMPOWERED", "VALUE-ADDED", "ORIENTED", "FOCUSED", "ASYMMETRICAL"];
	var lastWord=["PROCESS", "SOLUTION", "TIPPING-POINT", "STRATEGY", "VISION"];
	//generating random numbers between 0 and the last index array.
	var random1 = Math.floor(Math.random()*words1.length);
	var random2 = Math.floor(Math.random()*moreWords.length);
	var random3 = Math.floor(Math.random()*lastWord.length);
	
	//concatenating all generated random phases into marketing slogan
	var phrase = words1[random1]+" "+moreWords[random2]+" "+lastWord[random3];
	//displaying output
	alert(phrase);
}
phaseOmatic(); //calling