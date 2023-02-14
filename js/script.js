var unique = document.getElementById('unique');
var test = document.getElementById('test');
// دالة تستخدم للتاشير برضو onmouseout
unique.onmouseover= function(){
    test.classList.toggle ('active');
}



// 1  تغيير لون header
var myheader= document.getElementsByClassName('myheader')[0];
var nav =document.querySelector('nav')
myheader.onclick= function(){
   var random = Math.round(Math.random()*100);
   nav.style.backgroundColor= `hsl(${random}, 100%, 50%)`
}
// 1  تغيير لون خلفيةh1
    var mytitle= document.getElementById('mytitle');
    mytitle.onclick= function(){
        var random = Math.round(Math.random()*100);
    var h1 = document.querySelectorAll('h1:not(body > nav > h1)');
    // foreach 1
//     h1.forEach(item =>{
//     item.style.backgroundColor=`hsl(${random}, 100%, 50%)`;
//    })

// forloop  2
  for(var i=0; i<h1.length;i++){
    var item = h1[i];
    item.style.backgroundColor=`hsl(${random}, 100%, 50%)`;
  }
     }

/*
بطريقة addeventlistener
    mytitle.addEventListener("click",(eo) =>{
    var h1 = document.querySelectorAll('h1:not(body > nav > h1)');
   h1.forEach(item =>{
    item.style.backgroundColor=`hsl(${random}, 100%, 50%)`
   })
})
*/

// 2 استخدام الفانكشن لتغيير لون الخلفية
/*
var changebgcolor =() =>{
    return Math.round(Math.random()*100)
}
var mytitle =document.getElementById('mytitle');
var h1 = document.querySelectorAll('h1:not(body > nav > h1)');
mytitle.onclick = function(){
    h1.forEach(item =>{
        item.style.backgroundColor =`hsl(${changecolor()}, 100%, 50%)`;
    })
}
*/


// 1  تغيير لون  h1
// هاد الطريقة افضل عشان اللون العشوائي بكون موحد لكل العناصر المحددة
// var mycolor =document.getElementById('mycolor');
// mycolor.onclick =function(){
//     var random= Math.round(Math.random()*100);
//     var h1 = document.querySelectorAll('h1:not(body > nav > h1)');
//     h1.forEach(item =>{
//         item.style.color=`hsl(${random}, 100%, 50%)`;
//     })
// }


//2 استخدام الفانكشن لتغيير اللون
var changecolor =() =>{
    return Math.round(Math.random()*100)
}
var mycolor =document.getElementById('mycolor');
var h1 = document.querySelectorAll('h1:not(body > nav > h1)');
mycolor.onclick = function(){
    // هذا المتغير بضمن الك اللون يكون موحد في العناصر المحددة
    var color = changecolor()
    h1.forEach(item =>{
        item.style.color =`hsl(${color}, 100%, 50%)`;
    })
}



//1 تغيير لون section كما هو مرتب في المصفوفة
/*
var arrcolor =["pink","yellow","white"];
let i =0;
var mysection =document.getElementById('mysection');
mysection.onclick =function(){
    var manysec =document.querySelectorAll('section');
    manysec.forEach(item =>{
        item.style.backgroundColor =arrcolor[i];
    })
    //   i<3
    if(i < arrcolor.length-1){
        i++;
    }else{
        i=0;
    }
}
*/


// تغيير لون السكشن عشوائي لالوان معينة
// var arrcolor =["pink","yellow","white"];
// var mysection =document.getElementById('mysection');
// mysection.onclick =function(){
//         var manysec =document.querySelectorAll('section');
        // حطيت هنا المتغير عشان الرقم العشوائي الي حيوخده يتنفذ على كل السكاشن يعني ما يكون كل سكشن شكل
    //      var random =Math.floor(Math.random()*arrcolor.length);
    //     manysec.forEach(item =>{
    //         item.style.backgroundColor =arrcolor[random];
    //     })
    // }

    
// تغيير لون السكشن عشوائية
/*var mysection =document.getElementById('mysection');
mysection.onclick =function(){
        var manysec =document.querySelectorAll('section');
         var rgb1 =Math.round(Math.random()*255);
         var rgb2 =Math.round(Math.random()*255);
         var rgb3 =Math.round(Math.random()*255);
         manysec.forEach(item =>{
            item.style.backgroundColor =`rgb(${rgb1}, ${rgb2}, ${rgb3})`
        })
    }
*/
    //تغيير لون سكشن عشوائي باستخدام الفانكشن
    var section =() =>{
        return Math.round(Math.random()*255);
    }
    var mysection =document.getElementById('mysection');
     mysection.onclick =function(){
        var manysec =document.querySelectorAll('section');
         var rgb1 =section()
         var rgb2 =section()
         var rgb3 =section()
         manysec.forEach(item =>{
            item.style.backgroundColor =`rgb(${rgb1}, ${rgb2}, ${rgb3})`
        })
    }

    ////////////////////
    var body = document.getElementById('body')
    var changemode =document.getElementById('changemode')
    changemode.onclick = function(){
        body.classList.toggle('color')
    }