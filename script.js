var menubar = document.getElementById('mobile-nav');
var closeimg = document.getElementById('mobile-close-img');
function OpenFct(){
    menubar.classList.add('open');
    document.body.style.overflow = "hidden";
}
function CloseFct(){
    menubar.classList.remove('open');
    if (document.documentElement.clientWidth < 535){
        document.body.style.overflowY = "scroll";
    }else{
        document.body.style.overflow = "scroll";
    }
}
document.querySelectorAll("[data-scroll-nav]").forEach(navItem => {
    navItem.addEventListener("click", function() {
        let index = this.getAttribute("data-scroll-nav");
        let target = document.querySelector(`[data-scroll-index="${index}"]`);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});