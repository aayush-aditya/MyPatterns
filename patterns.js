//   1.  Generates a square pattern

var squarelength = 5;
var str = "";
for (var i = 0; i < squarelength; i++){
  str = "";
  for (var j = 0; j < squarelength; j++){
  str = str + "*";
  }
console.log(str);
}



//   2.  Generates an incresing pattern of traingles

var traingleHeight = 5;
var str = "";
for (var i = 0; i < traingleHeight; i++){
  str = "";
  for (var j = 0; j < i; j++){
  str = str + "*";
  }
console.log(str);
}




//for better visibilty
console.log();
// 3. Generates an decresing pattern of traingles

var traingleHeight = 5;
var str = "";
 for (var i = traingleHeight; i > 0; i--){
  str = "";
  for (var j = 0; j < i; j++){
  str = str + "*";
  }
 console.log(str);
 }


//for better visibilty
console.log();
//  4.  Generates two adjacent triangles
var str = "";
var str1 = "";
var triangleHeight = 4;

 for (var i = triangleHeight; i > 0; i--) {
   str = "";
   for (var j = 0; j < i; j++) {
   str = str + "*";
   }
  str1 = str;
  for (var k = (triangleHeight-i); k<(2*(triangleHeight-i));k++){
  str1=str1+"  ";
  }
  str1=str1+str;
  console.log(str1);
  }
