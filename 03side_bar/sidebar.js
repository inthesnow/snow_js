var sidenav = document.querySelector(".sidenav");
var menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", onSidenav);

function onSidenav() {
    //console.log(sidenav.style.width);

    var btn = sidenav.style.width;
    console.log(btn);

    if(window.innerWidth <= 767) {//mobile
        if(btn==""||btn=="0px") {
            sidenav.style.width="200px";
        } else {
            sidenav.style.width="0px";
        }
    } else { //web
        if(btn==""||btn=="200px") {
            sidenav.style.width = "0px";
        } else {
            sidenav.style.width = "200px";
        }
    }
    
            
}