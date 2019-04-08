// var a = document.getElementById("text").innerHTML;
var a = "ThemanwhopassesthesentenceshouldswingtheswordIfyouwouldtakethelifeofamanyouoweittohimtolookintohiseyesandhearhisfinalwordsandifyoucannotbeartodothatthenperhapsthemandoesnotdeservetodie";
 var count = 0;


var startTime = new Date();



 document.addEventListener("keyup", activate);

 function activate(event){



    if( (event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 32 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 48 || event.keyCode == 250){

    if(event.keyCode == 32){
        document.getElementById("id01").value = "";

    }

    else{

    	var textEnter = document.getElementById("id01").value;
 	    var l = textEnter.length;
 	    var lastChar = textEnter[l - 1];


      if(event.keyCode == 8){
        count = count - 1;
      }

      console.log(a[count] + ' ' + lastChar);


        if( a[count] == lastChar){
           document.getElementById("id01").setAttribute("style", "color: #008000");
        }


        if(a[count] != lastChar){
           document.getElementById("id01").setAttribute("style", "color: #FF0000");
    	 }

       if(event.keyCode != 8) {
         count++;
       }

    }


    }



if(count == a.length)
{// later record end time
var endTime = new Date();

// time difference in ms
var timeDiff = endTime - startTime;

// strip the ms
timeDiff /= 1000;

// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
var seconds = Math.round(timeDiff % 60);


var speed = a.length/seconds;
alert("speed is:" + Math.round(speed) + "wpm");
}

}
