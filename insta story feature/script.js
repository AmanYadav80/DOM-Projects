let obj=[
    {
        dp:'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1611601164701-cc6acd64a984?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1625043811738-6da23ad2b469?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1632587901160-3469ca28eb89?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1613257052795-83032ebf92c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1613255832728-b976fe513c5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D',
        story:'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
    },
]
let clutter=""
obj.forEach(function(child,ind){
    clutter+=`<div class="story">
    <img id="${ind}" src="${child.dp}" alt="">
  </div>`
})
document.querySelector('.storiyan').innerHTML=clutter
var storiyan=document.querySelector('.storiyan')
var current=document.querySelector('#current-story')
storiyan.addEventListener('click',function(dets){
    current.style.display="block"
    current.style.backgroundImage=`url(${obj[dets.target.id].story})`
    setTimeout(function(){
        current.style.display="none"
    },2000)
    
})