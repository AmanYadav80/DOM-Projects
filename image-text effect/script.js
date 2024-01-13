var allChildren=document.querySelectorAll('#main > .elem')
allChildren.forEach(child => {
    child.addEventListener('mouseenter',function(){
        child.childNodes[3].style.opacity=1;
    })
    child.addEventListener('mousemove',function(dts){
        child.childNodes[3].style.left=dts.x+'px'
        // child.childNodes[3].style.top=dts.y+'px'
    })
    child.addEventListener('mouseleave',function(){
        child.childNodes[3].style.opacity=0;
    }) 
})