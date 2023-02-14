var quotes = document.getElementById('quotes');
var moving2=document.getElementById('moving2');
let index =0;
moving2.onclick= function(){
    var quotesarr =[`<p id="graph">&#128519بسم الله الرحمن الرحيم</p>`,
                   `<p id="graph">  لا تقنطوا من رحمة الله</p>`,
                  `<p id="graph">  لا تخف ولا تحزن انا منجوك</p>`]


    if(index < quotesarr.length){
        quotes.innerHTML =quotesarr[index] ;
        index++;
    }else{
        index=0;
    }
}