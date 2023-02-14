
var moving=document.getElementById('moving');
var youtybe=document.getElementById('youtybe');
let i=0;
moving.onclick= function(){
    var videoarr= [`<iframe  id="video" width="560" height="315" src="https://www.youtube.com/embed/JVct52Ly-mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/xIAQFHnGeCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/XNx1pNWyD8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]

    // youtybe.innerHTML= videoarr[Math.floor(Math.random()*videoarr.length)]
   // youtybe.innerHTML= videoarr[Math.round(Math.random()*videoarr.length-1)]
   if(i < videoarr.length){
    youtybe.innerHTML= videoarr[i];
    i++;
   }else{
       i=0;
   }
   
     
}


