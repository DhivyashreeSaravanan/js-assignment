let marks = +prompt("enter your mark");
 function grading (y) {

   return ( y>= 90) ? "  A+": 
          ( y<90 && y>= 80) ? " A": 
          ( y<80 && y>=70) ? " B+" :
          ( y<70 && y>=50) ? " B" :
            " fail" ;
}
let resultant=grading(marks);
console.log(`Marks are ${marks}and grade is ${resultant}`);