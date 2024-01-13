var person=document.querySelector('#person')
var btn=document.querySelector('#btn')
var click=0
btn.addEventListener('click',function(){
    if(click==0){
        btn.innerHTML="Remove Friend"
        person.innerHTML="Friends"
        person.style.color="green"
        click=1
    }
    else {
        btn.innerHTML="Add Friend"
        person.innerHTML="Strangers"
        person.style.color="red"
        click=0
    }
})