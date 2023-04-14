
function calculate() {
    let weight, height, result;

    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    bmi = document.getElementById("result");
    result = weight/((height/100)**2);
    bmi.value=result.toFixed(2);
    console.log(height);

    if (bmi.value <=15) {
        document.getElementById("messagebox").value="good one dear";
        document.getElementById("messagebox").style.backgroundColor = 'red';
        document.getElementById("messagebox").style.fontWeight = 'bolder';
    }else if (bmi.value <=21) {
        document.getElementById("messagebox").value="very fair";
        document.getElementById("messagebox").style.backgroundColor = 'blue';
        document.getElementById("messagebox").style.fontWeight = 'bolder';
    }else if (bmi.value <=31) {
        document.getElementById("messagebox").value="run to your doc asap";
        document.getElementById("messagebox").style.backgroundColor = 'yellow';
        document.getElementById("messagebox").style.fontWeight = 'bolder';
    }else{
        document.getElementById("messagebox").value="invalid format";
        document.getElementById("messagebox").style.color = 'red'
        document.getElementById("messagebox").style.fontWeight = 'bolder';
        document.getElementById("messagebox").style.textDecoration = 'underline';
        // document.getElementById("messagebox").style.textAlign = 'center'
    }
}