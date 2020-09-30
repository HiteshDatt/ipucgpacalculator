function defaulttable(){
        var subject_id = [
                "subject8",
                "subject9",
                "subject10",
                "subject11",
                "subject12"
        ];
        for(var i=0; i<5;i++)
        {
        document.getElementById(subject_id[i]).style.visibility = "collapse"; 
        }
}

function resizetable(){
     var len = subjectlen.value; 
     var subject_id = [
        "subject0",
        "subject1",
        "subject2",
        "subject3",
        "subject4",
        "subject5",
        "subject6",
        "subject7",
        "subject8",
        "subject9",
        "subject10",
        "subject11",
        "subject12"
        ];

      for(var i=0;i<13;i++)
       {
        if(i<len)
        {
        document.getElementById(subject_id[i]).style.visibility = "visible";
        }
        else{
        document.getElementById(subject_id[i]).style.visibility = "collapse";
        }
       } 
}


//calculation of cgpa
function calculate() 
{ 
   var marks = new Array(13);
   var credits = new Array(13);
   var gradep = new Array(13);
   var len = subjectlen.value;
   var totalcredits=0,sum = 0,i,answer;
   
   var marks_id = [
        "marks0",
        "marks1",
        "marks2",
        "marks3",
        "marks4",
        "marks5",
        "marks6",
        "marks7",
        "marks8",
        "marks9",
        "marks10",
        "marks11",
        "marks12"
        ];
   var credits_id = [
        "credits0",
        "credits1",
        "credits2",
        "credits3",
        "credits4",
        "credits5",
        "credits6",
        "credits7",
        "credits8",
        "credits9",
        "credits10",
        "credits11",
        "credits12"
        ];

     //assigning marks and credits from user input
     for(i = 0; i <len; i++)
         {
        marks[i] = parseInt(document.getElementById(marks_id[i]).value);
        credits[i] = parseInt(document.getElementById(credits_id[i]).value);
          }


    //assigning grade points according to marks
  for(i=0;i<len;i++) 
  { 
    if(marks[i]>=90)
           gradep[i] = 10;
   else if(marks[i]>=75 && marks[i]<=89)
           gradep[i] = 9;
   else if(marks[i]>=65 && marks[i]<=74)
           gradep[i] = 8;
   else if(marks[i]>=55 && marks[i]<=64)
           gradep[i] = 7;
   else if(marks[i]>=50 && marks[i]<=54)
           gradep[i] = 6;
   else if(marks[i]>=45 && marks[i]<=49)
           gradep[i] = 5;
   else if(marks[i]>=40 && marks[i]<=44)
           gradep[i] = 4;
   else if(marks[i]<=40)
           gradep[i] = 0;      
  }

 //cgpa calculation starts

 for(i=0;i<len;i++) //calculating total credits
   { totalcredits = totalcredits+credits[i] ;
    }
 for(i=0;i<len;i++) 
   { 
      sum = sum + (gradep[i]*credits[i]);
    }
 function roundoffto2(num) //cgpa needs to be rounded off to 2 decimal places
   {
    return Math.round(num * 100) / 100;
   }
  answer = roundoffto2(sum/totalcredits) ;
  document.getElementById("answer").innerHTML=answer;
}



function colour(){
        document.getElementById("gradepoint").style.backgroundColor= "yellow";
}
function defaultcolour(){
        document.getElementById("gradepoint").style.backgroundColor= "#f1f1f1";
}