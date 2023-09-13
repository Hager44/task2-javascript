var triangleArea=(side1,side2,side3)=>{
    let halfPerimeter=(side1+side2+side3)/2;
    let area=Math.sqrt(halfPerimeter*(halfPerimeter-side1)*(halfPerimeter-side2)*(halfPerimeter-side3));
    let approximatedArea=area.toFixed(2);
    return approximatedArea;

}

var input = prompt("Enter the three sides of the triangle:");
var inputArray = input.split(" ");
if (inputArray.length ===3) {
  var num1 = parseFloat(inputArray[0]);
  var num2 = parseFloat(inputArray[1]);
  var num3 = parseFloat(inputArray[2]);
  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let areaTriangle=triangleArea(num1,num2,num3);
        console.log(areaTriangle +"m²");
  } else {
    console.log("Invalid input. Please enter three valid float numbers.");
  }
} else {
  console.log("Invalid input. Please enter exactly three float numbers separated by spaces.");
}
