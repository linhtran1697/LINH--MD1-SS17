let display = document.getElementById("display");

function add(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calc(){
    try{
        if(display.value.includes("/0")){
            alert("Không chia được cho 0");
        }else{
            display.value = eval(display.value);
        }
    }catch{
        alert("Lỗi nhập liệu");
    }
}