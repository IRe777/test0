// scroll높이에 따른 nav 변환
let ttt = document.getElementById('navwrap').offsetTop + 60;
let chkSwitch = true;
window.addEventListener('scroll', () => {
    let navLi = document.getElementsByClassName('nav_li')
    if (chkSwitch == true && window.scrollY >= ttt) {
        document.getElementById('navwrap').classList.add("navwrap_active");
        navLi[0].classList.remove("active_box")
        navLi[3].classList.remove("nav_li_focus")
        document.getElementsByClassName('remote')[0].style.display = "flex"
        document.getElementsByClassName('wrap')[0].style.paddingTop = "55px"
        chkSwitch = false;
    }
    else if (chkSwitch == false && window.scrollY < ttt) {
        document.getElementById('navwrap').classList.remove("navwrap_active");
        navLi[0].classList.add("active_box")
        navLi[3].classList.add("nav_li_focus")
        document.getElementsByClassName('remote')[0].style.display = "none"
        document.getElementsByClassName('wrap')[0].style.paddingTop = "0"
        chkSwitch = true;
    }
});
/////////////////////////////////////////////////////////
// nav 메뉴 펼치기 
let transUl = document.getElementsByClassName('trans_ul');
function nav_menu() {
    transUl[0].style.height = '360px';
}
function nav_close_menu() {
    transUl[0].style.height = '0px';
}