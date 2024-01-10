var screenWidthInCm = window.innerWidth / document.getElementById('dpi').offsetWidth;



window.addEventListener('load', function () {
    fitt();
});

function fitt() {
    screenWidthInCm = window.innerWidth / document.getElementById('dpi').offsetWidth;


    // if (screenWidthInCm.offsetWidth < 13) {

    // } else {

    // }

    var desktopPreference = localStorage.getItem('desktopViewPreference');
    if (desktopPreference === 'true') {
        // User prefers desktop view
        // Code to load desktop version or handle accordingly
        console.log('User prefers desktop view.');
        document.body.style.backgroundColor = 'red';
    } else {
        // User prefers mobile view or default behavior
        // Code to load mobile version or handle accordingly
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