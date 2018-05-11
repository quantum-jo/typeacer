var a = document.getElementById("text").innerHTML;
 var count = 0;

 function activate(key){
 	
    if((key >= 65 && key <= 90) || key == " " || key == 8 || (key >= 97 && key <= 122) ){

    if(key == " "){
        document.getElementById("id01").value = "";
 		
    } 	

    else{ 

    	var textEnter = document.getElementById("id01").value;
 	    var l = textEnter.length;
 	    var lastChar = textEnter[l - 1];
 	
        if( a[count] == lastChar){ 
           document.getElementById("id01").setAttribute("style", "color: #008000");
           //console.log(a[13]);
           console.log('bye');
        }


        if(a[count] != lastChar){
           document.getElementById("id01").setAttribute("style", "color: #FF0000");
           console.log("hi");
    	 }


    }

        if(key != 8){
        	count = count + 1;
        }
    }
    }



  
