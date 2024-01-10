var screenWidthInCm = window.innerWidth / document.getElementById('dpi').offsetWidth;



window.addEventListener('load', function () {
    fitt();
});

function fitt() {
    screenWidthInCm = window.innerWidth / document.getElementById('dpi').offsetWidth;


    // if (screenWidthInCm.offsetWidth < 13) {

    // } else {

    // 


    var viewMode = getCookie("view-mode");
    if (viewMode == "desktop") {
        console.log('User prefers desktop view.');
        document.body.style.backgroundColor = 'red';
    } else if (viewMode == "mobile") {
        console.log('User prefers mobile view.');
        document.body.style.backgroundColor = 'white';
    }

}

window.onload = function () {
    fitt();
};


window.addEventListener("resize", function () {
    fitt();
});