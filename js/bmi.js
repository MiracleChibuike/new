

function calculate() {

        let weight, height, result;
        
    
        weight = document.getElementById("weight").value;
        height = document.getElementById("height").value;
        bmi = document.getElementById("result")
        result = weight/((height/100)**2);
        bmi.value=result;
        // console.log(weight);
        // console.log(height);
        if (bmi.value <=15) {
            document.getElementById("display").value="not good" 
            document.getElementById('display').style.backgroundColor = 'red'
        }else if (bmi.value <=24) {
            document.getElementById("display").value="fair";
            document.getElementById('display').style.backgroundColor = 'green'
        }else if (bmi.value <=32) {
            document.getElementById("display").value="go see your doc"
        }

}

