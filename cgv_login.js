        // 탭 이동 js
        window.onload=function loginTrans(){
            document.getElementById('login_login').style.backgroundColor = "#fb4357";
            document.getElementsByClassName('login_login_article')[0].style.display = 'block';
        }
        function loginTrans(navT,articleT) {
            // 이게 이렇게 하는게 맞음?
            document.getElementById('login_login').style.backgroundColor = "#898987";
            document.getElementById('login_nonmember').style.backgroundColor = "#898987";
            document.getElementById('login_nonmember_chk').style.backgroundColor = "#898987";
            document.getElementsByClassName('login_login_article')[0].style.display = 'none';
            document.getElementsByClassName('login_nonmember_article')[0].style.display = 'none';
            document.getElementsByClassName('login_nonmember_chk_article')[0].style.display = 'none';


            document.getElementById(navT).style.backgroundColor = "#fb4357";
            document.getElementsByClassName(articleT)[0].style.display = 'block';
        }
/////////////////////////////////////////