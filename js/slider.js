 var arrimage = [
    `<img src="image/12.jpg"class="img-slider"style="">`,
   ` <img src="image/IMG_20200907_210336_867.jpg"class="img-slider">`,
   ` <img src="image/12.jpg"class="img-slider">`,
   ` <img src="image/IMG_20200907_210336_867.jpg"class="img-slider">`,
    `<img src="image/12.jpg"class="img-slider">`
 ]
 // خاص بالصورة الاولى 
let i =0;
var pre = document.getElementById('pre')
 var photo = document.querySelector('.photo')
 photo.innerHTML += arrimage[i];
 photo.innerHTML +=`<span id="poster">slide#${i+1} of ${arrimage.length}</span>`
//  pre.classList.add("trace")
 if( arrimage[i]){
   pre.classList.add("trace")
 }else{
   pre.classList.remove("trace")
 }




 var next = document.getElementById('next')
 next.onclick = function(){
    i++;
    pre.classList.remove("trace")
    photo.innerHTML += arrimage[i];
    photo.innerHTML +=`<span id="poster">slide#${i+1} of ${arrimage.length}</span>`

    if(i+1 ==arrimage.length){
        next.classList.add("trace")
        i = -1
      //   هسا هي -1 طيب هسا لو نقرت على التالي حزود واحد وحيصير 0 ,بالتالي حيجيب الصورة الاولى والسلايدة حتزيد واحد وحتصير 1, وترجع العملية للوضع الطبيعي
    }else{
      next.classList.remove("trace")
    }
    btn.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
    btn.getElementsByTagName("span")[i].classList.add("active-btn")
   }
  

///////////////
pre.onclick = function(){
    i--;
    photo.innerHTML += arrimage[i];
    photo.innerHTML +=`<span id="poster">slide#${i+1} of ${arrimage.length}</span>`
    
   //  if(i+1 == 1){
   //    // i = 2
   // }
   btn.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
   btn.getElementsByTagName("span")[i].classList.add("active-btn")
  }

  //////////////
  var btn = document.getElementsByClassName('btn')[0];
  var graph = document.querySelectorAll('.graph');
  graph.forEach((item ,index) => {
         item.onclick = function(){
            photo.innerHTML += arrimage[index];
            photo.innerHTML +=`<span id="poster">slide#${index+1} of ${arrimage.length}</span>`
            // العنصر الي ماخد صفة لون الخلفية شيله واعطي خاصية اللون (الكلاس) للعنصر الي حتنقري عليه
            btn.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
            item.classList.add("active-btn")
            i = index;
// الصورة الاخيرة
            if(index==arrimage.length-1){
               next.classList.add("trace")
               pre.classList.remove("trace")
               // الصورة الاولى
          }else if(index==0){
            pre.classList.add("trace")
            next.classList.remove("trace")
          }else{
            // الصور الي بالنص
            pre.classList.remove("trace")
            next.classList.remove("trace")
          }
         }

      
  })