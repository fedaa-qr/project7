// var icon =document.getElementById('icon');
// var graph2 = document.getElementById('graph2');
// icon.onclick = function(){
//     //<i class="fa-solid fa-minus"></i>
//    icon.classList.toggle ('fa-minus')
//    graph2.classList.toggle ('active')
// }



var trying = document.querySelectorAll("#icon")
trying.forEach(item =>{
    item.addEventListener("click",(eo) =>{
        var content = eo.target.parentElement.parentNode.children[1]
        content.classList.toggle('active');
       
        if (content.classList.contains('active')){
            content.style.height = `${content.scrollHeight}px`
        }else{
            content.style.height = "0px"
        }

        
        if(item.classList.contains('fa-plus')){
            item.classList.remove ('fa-plus')
            item.classList.add ('fa-minus')
        }else{
            item.classList.add ('fa-plus')
        }
    })
})
