var sideBar = document.querySelector('.side-bar');
var humbuger = document.querySelector('.humburger');
var cross = document.querySelector('.cross');
var dash = document.querySelector('.nav-dash');
var navEle = document.querySelector('.nav-ele1');
var navCtn = document.querySelector('.nav-ele1-ctn');

humbuger.addEventListener('click', ()=> {
    console.log("hello");
    sideBar.classList.toggle('hide-sidebar');
    if(!sideBar.classList.contains('hide-sidebar')){
        console.log("working");
        var x = document.getElementsByTagName("BODY")[0];
        
    }
})

cross.addEventListener('click', ()=>{
    console.log("2hello");
    sideBar.classList.add('hide-sidebar');
})
