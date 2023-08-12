const element = document.getElementById("change");
element.addEventListener("click" , randomcolor);

function randomcolor(){
    const v = 0xffffff;
    const random = `#${Math.floor(Math.random()*v).toString(16).padStart(6,'0')}`; 
    // console.log(random);
    const v2 = 0xffffff;
    const random2 = `#${Math.floor(Math.random()*v2).toString(16).padStart(6,'0')}`; 
    // console.log(random2);
    const value = Math.floor(Math.random()*50);
    // console.log(value);
    document.getElementById('color').style.background = `linear-gradient(${value}deg, ${random}, ${random2})`;
    document.getElementById('what').innerHTML = `${random} => ${random2}`;
   

}

