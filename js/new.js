

let  radius = document.getElementById("radius");
console.log(radius)


function calculate(){

    let  ps, area;
    let rad = radius.value
    ps = document.getElementById("area")
    // area = Math.PI*radius **2;
    area = 3.142*rad * rad
    ps.value=area;
  
    

    

    //  console.log(area)
}
// calculate()