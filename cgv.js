
// cinema hover시 그림 변경
function tmp(i) {
    document.getElementById('cinema_bg').style.backgroundImage = `url(./cgv_img/${i}.png)`
};
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//영화리스트 삽입
let pUl = document.getElementsByClassName(`pno1_ul`);

for (let i = 0; i < MOVIE_LIST.length; i++) {
    // 영화관 태그별 이미지삽입
    let tagHTML = '';
    if (MOVIE_LIST[i].cinematag && MOVIE_LIST[i].cinematag.length > 0) {
        for (let j = 0; j < MOVIE_LIST[i].cinematag.length; j++) {
            let tag = MOVIE_LIST[i].cinematag[j]; // 현재 태그 가져오기
            if (tag === 'screenX') { tagHTML += '<img src="./cgv_img/screenx_white.png" alt="screenX">'; }
            else if (tag === 'IMAX') { tagHTML += '<img src="./cgv_img/imax_white.png" alt="IMAX">'; }
            else if (tag === '4DX') { tagHTML += '<img src="./cgv_img/forDX_white.png" alt="4DX">'; }
        }
    }
    ///////////////////
    pUl[0].innerHTML += `
                        <li class="pno1_li">
                    <div class="charcard charcard1" style="background-image: url(./cgv_img/movie/${MOVIE_LIST[i].src});">
                        <div class="charcard_hover">
                            <ul class="charcard_hover_ul">
                                <li class="charcard_hover_li"><a href="./cgv_movie_info.html?movie_no=${MOVIE_LIST[i].movie_no}" target='_blank'>상세보기</a></li>
                                <li class="charcard_hover_li"><a href="#">예매하기</a></li>
                            </ul>
                        </div>
                        <div class="mak2"></div>
                            <div class="age">
                                <img src="${MOVIE_LIST[i].age === '전체관람가' ? './cgv_img/all.svg'
                                            : MOVIE_LIST[i].age === '12세이상관람가' ? './cgv_img/12.svg'
                                                : MOVIE_LIST[i].age === '15세이상관람가' ? './cgv_img/15.svg'
                                                    : './cgv_img/19.svg'}" alt="age">
                            </div>
                        <div class="u_bar">
                            <div class="bar_txt">${MOVIE_LIST[i].movie_no + 1}</div>
                            <div class="mtag">
                                ${tagHTML}
                            </div>
                        </div>
                    </div>
                    <div class="chartxt">
                        <div class="moviename">${MOVIE_LIST[i].title}</div>
                        <div class="movieinfo">
                            <div class="like">
                                <img src="${MOVIE_LIST[i].grade >= 90 ? './cgv_img/eggGoldenegggreat.png'
                                            : MOVIE_LIST[i].grade >= 80 ? './cgv_img/eggGoldenegggood.png'
                                                : './cgv_img/eggGoldenegg.png'}" alt="egg">  
                                <p>${MOVIE_LIST[i].grade}%</p>
                            </div>
                            <div class="rese">예매율 ${MOVIE_LIST[i].res_per}%</div>
                        </div>
                    </div>
                </li> 
`;
// D-day 계산기
let dt = new Date(2025, 1, 28); // 2월 28일 기준 개봉일 계산
let year = dt.getFullYear();
let month = dt.getMonth() + 1; 
let date = dt.getDate();
let today = `${year}.${month >= 10 ? month : '0' + month}.${date >= 10 ? date : '0' + date}`;
let opendate = MOVIE_LIST[i].open;
let todayDate = new Date(today.replace(/\./g, "-"));
let openDateObj = new Date(opendate.replace(/\./g, "-"));
let diffTime = openDateObj - todayDate;
let diffDays = diffTime / (1000 * 60 * 60 * 24);
    pUl[1].innerHTML += `
                <li class="pno1_li">
                    <div class="charcard charcard1" style="background-image: url(./cgv_img/movie/${MOVIE_LIST[i].src});">
                        <div class="charcard_hover">
                            <ul class="charcard_hover_ul">
                                <li class="charcard_hover_li"><a href="./cgv_movie_info.html?movie_no=${MOVIE_LIST[i].movie_no}" target='_blank'>상세보기</a></li>
                                <li class="charcard_hover_li"><a href="#">예매하기</a></li>
                            </ul>
                        </div>
                        <div class="mak2"></div>
                        <div class="age">
                            <img src="${MOVIE_LIST[i].age === '전체관람가' ? './cgv_img/all.svg'
                                        : MOVIE_LIST[i].age === '12세이상관람가' ? './cgv_img/12.svg'
                                            : MOVIE_LIST[i].age === '15세이상관람가' ? './cgv_img/15.svg'
                                                : './cgv_img/19.svg'}" alt="age">
                        </div>
                        <div class="dday">${diffDays < 0 ? '오픈'
                                            : `D-${diffDays}`}</div>
                        <div class="u_bar">
                            <div class="bar_txt">${MOVIE_LIST[i].movie_no + 1}</div>
                            <div class="mtag">
                                ${tagHTML}
                            </div>
                        </div>
                    </div>
                    <div class="chartxt">
                        <div class="moviename">${MOVIE_LIST[i].title}</div>
                        <div class="movieinfo">
                            <div class="like">
                                <img src="${MOVIE_LIST[i].grade >= 90 ? './cgv_img/eggGoldenegggreat.png'
                                            : MOVIE_LIST[i].grade >= 80 ? './cgv_img/eggGoldenegggood.png'
                                                : './cgv_img/eggGoldenegg.png'}" alt="egg">  
                                <p>${MOVIE_LIST[i].grade}%</p>
                            </div>
                            <div class="rese">예매 예정</div>
                        </div>
                    </div>
                </li> 
`;
}
/////////////////////////////////////////////////////////
// 영화리스트 좌우 이동
let interval = "";
let count = [0, 0];
let page = [0, 0];
// let pUl = document.getElementsByClassName(`pno1_ul`);
let btnL = document.getElementsByClassName(`btn_left`);
let btnR = document.getElementsByClassName(`btn_right`);
function turn(dir, index) {
    clearInterval(interval);
    interval = setInterval(function () {
        pUl[index].style.transform = `translateX(${count[index]}%)`;
        if (dir == 0) {
            count[index]--;
            if (count[index] < 0) {
                btnL[index].style.display = "block";

            }
            if (count[index] < -(Math.floor(MOVIE_LIST.length / 5) * 100)) {
                btnR[index].style.display = "none";
            }
            if (count[index] < (-100 + (page[index] * 100))) {
                clearInterval(interval);
                page[index] -= 1;
            }
        }
        else if (dir == 1) {
            count[index]++;
            if (count[index] >= 0) {
                btnL[index].style.display = "none";
            }
            if (count[index] >= -200) {
                btnR[index].style.display = "block";

            }
            if (count[index] > (0 + ((page[index] + 1) * 100))) {
                clearInterval(interval);
                page[index] += 1;
            }
        }
    }, 3);
}
/////////////////////////////////////////////////////////
// 영화 리스트 탭 옮길때 포지션 리셋
function clearP(i) {
    if (i === 0) {
        page[1] = 0;
        count[1] = 0;
    } else if (i === 1) {
        page[0] = 0;
        count[0] = 0;
    }
    pUl[i].style.transform = `translateX(0%)`;
    btnL[i].style.display = "none";
    btnR[i].style.display = "block";
}
/////////////////////////////////////////////////////////
// 창 줄어들때 리스트 포지션 리셋
let mediaQuery = window.matchMedia("(max-width: 980px)");
function handleMediaQueryChange(event) {
    if (event.matches) {
        pUl[0].style.transform = `translateX(0%)`;
        btnL[0].style.display = "none";
        btnR[0].style.display = "block";
        pUl[1].style.transform = `translateX(0%)`;
        btnL[1].style.display = "none";
        btnR[1].style.display = "block";
    }
}
mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
/////////////////////////////////////////////////////////
// 비디오 요소 선택
const video = document.getElementById("video");
const playButton = document.getElementsByClassName("mak_play")[0];
const muteButton = document.getElementsByClassName("mak_mute")[0];

// 플레이 버튼 클릭 시 비디오 재생/일시정지
playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play(); // 비디오 재생
        playButton.innerHTML = `<img src="./cgv_img/pause.png" alt="pause">`; 
    } else {
        video.pause(); // 비디오 일시 정지
        playButton.innerHTML = `<img src="./cgv_img/play.png" alt="play">`; 
    }
});
/////////////////////////////////////////////////////////
// 음소거 버튼 클릭 시 음소거/음소거 해제
muteButton.addEventListener("click", function () {
    video.muted = !video.muted; // 음소거 토글
    muteButton.innerHTML = video.muted ? `<img src="./cgv_img/soundOff.png" alt="mute">` : `<img src="./cgv_img/volume.png" alt="volume">`; // 버튼 텍스트 변경
});
