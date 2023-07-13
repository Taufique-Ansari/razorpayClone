var sideBar = document.querySelector('.side-bar');
var humbuger = document.querySelector('.humburger');
var cross = document.querySelector('.cross');

humbuger.addEventListener('click', ()=> {
    console.log("hello");
    sideBar.classList.toggle('hide-sidebar');
})

cross.addEventListener('click', ()=>{
    console.log("2hello");
    sideBar.classList.add('hide-sidebar');
})