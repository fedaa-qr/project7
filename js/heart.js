var moving3=document.getElementById('moving3');



moving3.onclick= function(){

    var childheart = document.createElement('div') ;
    parentheart.append (childheart);
    
     var time=  setInterval(()=>{
        //staaaar
        // هاد الجملة نص ولا يمكن اعتبار الديف هنا انه تاغ لذلك تم انشاء تاغ
        // var hearts =` <div class="heart"> &#10084</div>`
        var diff= document.createElement('div');  // التاغ
        diff.classList.add('heart');   //   كلاس التاغ
        diff.innerHTML= "&#11088";  //  محتوى التاغ
          //  وتم انشاء قيمة عشوائي حتى يتحرك في كل اتجاهcss الخاص بالتاغ
        diff.style.left = `${Math.random()*100}%` 
        childheart.append(diff)

        /////////////////////////
        //suuun
        var diff2= document.createElement('div'); 
        diff2.classList.add('heart');   
        diff2.innerHTML= "&#127774";
        diff2.style.left = `${Math.random()*100}%` 
        childheart.append(diff2)
    },50)
    

   /* نغذ امر معين بعد 3ث وهو 
    وقف تنزيل الايموجي بعد 3ث
    */
setTimeout(() => {
    clearInterval(time)
},2000);

// عشان الموقع ما يكون بطيء حنحذف الديف الحامل  للقلوب بس يخلص 
//بعد 5ث شيلي  الديف الحامل للقلوب
setTimeout(() => {
    childheart.remove();
}, 5000);
}
