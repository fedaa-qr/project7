

var clock = document.getElementById('clock');
 var test = () =>{
    var now = new Date();
    var hour = now.getHours();
    var min= now.getMinutes();
    var sec = now.getSeconds();
    var date = now.toDateString();
    var ampm = "am"



    if(hour >12 ){
        hour= hour -12;
    }
    if(sec <10){
        sec= `0${sec}`
    }
    if(min<10){
        min = `0${min}`
    }
    if(hour <10 ){
        hour=`0${hour}`
    }
    var timer = ` <div class="month">
                <p>${date}</p>
                </div>
           <div class="time">
           <p>${hour}:${min}:${sec} ${ampm}</p>
             </div>`

             clock.innerHTML= timer;
 }

 test();

setInterval(  test ,1000)