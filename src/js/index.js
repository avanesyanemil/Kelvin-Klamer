const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav__btn');
const navBtnImg = document.querySelector('#nav__btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    }
    else{
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
    //document.body.classList.toggle('no-scroll');
}

