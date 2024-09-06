const daniweb = "http://192.168.216.95"

function getlampu1(){
    fetch(daniweb + "/lampu1", {
        method: "GET"
    }
    ).then(response => response.text()).then(result =>{
        if (result == "on"){
            btn1.style.backgroundColor = "red"
            image1.src = "aset/led-on.png"
        }
        else{
            btn1.style.backgroundColor = "rgb(59, 59, 231)"
            image1.src = "aset/led-off.png"
        }
    })
}
function getlampu2(){
    fetch(daniweb + "/lampu2", {
        method: "GET"
    }
    ).then(response => response.text()).then(result =>{
        if (result == "on"){
            btn2.style.backgroundColor = "red"
            image2.src = "aset/led-on.png"
        }
        else{
            btn2.style.backgroundColor = "rgb(59, 59, 231)"
            image2.src = "aset/led-off.png"
        }
    })
}
function getlampu3(){
    fetch(daniweb + "/lampu3", {
        method: "GET"
    }
    ).then(response => response.text()).then(result =>{
        if (result == "on"){
            btn3.style.backgroundColor = "red"
            image3.src = "aset/led-on.png"
        }
        else{
            btn3.style.backgroundColor = "rgb(59, 59, 231)"
            image3.src = "aset/led-off.png"
        }
    })
}

// set
function buton1(){
    fetch(daniweb + "/lampu1", {
        method: "POST"
    }
    ).then(response => response.text())
    .then(() => location.reload())
    // btn1.style.backgroundColor = "red"
    // image1.src = "aset/led-on.png"
}
function buton2(){
    fetch(daniweb + "/lampu2", {
        method: "POST"
    }
    ).then(response => response.text()) .then(() => location.reload())
    
}
function buton3(){
    fetch(daniweb + "/lampu3", {
        method: "POST"
    }
    ).then(response => response.text()) .then(() => location.reload())
   
}

getlampu1();
getlampu2();
getlampu3();