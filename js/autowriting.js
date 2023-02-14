

var writing= document.getElementById('writing');
let counter =1;

//طريقة 1
/*var autowriting =() =>{
    var str = "Courses4Arab";
    writing.innerText =str.slice(0,counter);
    counter++;

    if(str.length < counter){
        counter =1;
    }
}
 setInterval(autowriting,100);
*/

// طريقة2 وهي الاسهل
var test1 = setInterval(function(){
    var str = "hello everyone";
        writing.innerText =str.slice(0,counter);
        counter++;
    
        if(str.length < counter){
            // حيضل يعمل كتابة اوتوماتيك
            // counter =1;

            // حيكمل النص بعدها حيوقف
            clearInterval(test1);
        }
},100)
