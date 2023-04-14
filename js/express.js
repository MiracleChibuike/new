const metric = document.querySelector('#metric')

console.log(metric.value)
metric.addEventListener("change", changer)

function changer() {
    console.log("changer")
    let rems, rads, docs;
    rems = document.getElementById("widthunit");
    rads = document.getElementById("heightunit");

    console.log(rems + " " + " " + rads)

    if (metric.value == "Imperial") {
        // console.log('imperial')
        // console.log('rems before', rems.innerHTML)
        rems.innerHTML = "lbs";
        // console.log('rems after', rems.innerHTML)
        // console.log('imperial media')
        rads.innerHTML = "cm";
        // console.log('imperial last line')
    }else {
        rads.innerHTML = "meters";
        rems.innerHTML = "kg";
    }

}

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

