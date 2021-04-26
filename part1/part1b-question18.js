var setInt = setInterval(function(){ q18() }, 1000);

function q18() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
    

function stopFunction() {
    clearInterval(setInt);
}