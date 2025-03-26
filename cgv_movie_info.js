let idx = get_url_info("movie_no");
console.log("movie_no: ",idx)
let movie = MOVIE_LIST[idx];
let pUlMinfo = document.getElementsByClassName(`minfo_main`);
    // 영화관 태그별 이미지삽입
    // let tagHTML = '';
    // if (MOVIE_LIST[i].cinematag && MOVIE_LIST[i].cinematag.length > 0) {
    //     for (let j = 0; j < MOVIE_LIST[i].cinematag.length; j++) {
    //         let tag = MOVIE_LIST[i].cinematag[j]; // 현재 태그 가져오기
    //         if (tag === 'screenX') { tagHTML += '<img src="./cgv_img/screenx_white.png" alt="screenX">'; }
    //         else if (tag === 'IMAX') { tagHTML += '<img src="./cgv_img/imax_white.png" alt="IMAX">'; }
    //         else if (tag === '4DX') { tagHTML += '<img src="./cgv_img/forDX_white.png" alt="4DX">'; }
    //     }
    // }
    ///////////////////
    pUlMinfo[0].innerHTML += `
    <article class="minfo_article">
        <aside class="minfo_aside" style="background-image: url(./cgv_img/movie/${movie.src});">
            <div class="age">
                <img src="${movie.age == '전체관람가' ? './cgv_img/all.svg'
                                        : movie.age == '12세이상관람가' ? './cgv_img/12.svg'
                                            : movie.age == '15세이상관람가' ? './cgv_img/15.svg'
                                                : './cgv_img/19.svg'}" alt="age">
            </div>
            <a href="./cgv_img/movie/${movie.src}">
                <div class="btn_plus">+</div>
            </a>
        </aside>
        <aside class="minfo_moviescript">
            <div class="minfo_upper">
                <b>${movie.title}</b><span class="onboard">현재 상영중</span><br>
                <span>${movie.etitle}</span>
                <div>예매율 ${movie.res_per}% | <img src="./cgv_img/eggGoldenegg.png" alt="egg">${movie.grade}</div>
            </div>
            <div class="minfo_down">
                <div class="minfo_txt">
                    <span>감독 : ${movie.director}</span><span> / 배우 : ${movie.actor}</span><br>
                    <span>장르 : ${movie.genre}</span><span> / 기본 정보 : ${movie.age}, ${movie.info}</span><br>
                    <span>개봉 : ${movie.open}</span>
                </div>
                <ul>
                    <li class="minfo_freeegg"><img src="./cgv_img/eggGoldenegg.png" alt="egg">프리에그</li>
                    <li class="minfo_res">예매하기</li>
                </ul>
                <div class="minfo_cinema_tag">
                    <div></div>
                </div>
            </div>
        </aside>
    </article>
    <div class="minfo_data">
        <article class="minfo_data_article" id="minfo_id">
            <nav class="minfo_data_nav">
                <ul>
                    <li><img src="./cgv_img/ico_finger.png" alt="info">주요정보</li>
                    <li>감독/출연</li>
                    <li>트레일러</li>
                    <li>스틸컷</li>
                    <li>평점/리뷰</li>
                    <li>상영시간표</li>
                </ul>
            </nav>
            <div class="minfo_story">
                <b>“당신은 몇 번째 미키입니까?”</b><br>
                <span>친구 ‘티모’와 함께 차린 마카롱 가게가 쫄딱 망해 거액의 빚을 지고<br>
                    못 갚으면 죽이겠다는 사채업자를 피해 지구를 떠나야 하는 ‘미키’.<br>
                    기술이 없는 그는, 정치인 ‘마셜’의 얼음행성 개척단에서<br>
                    위험한 일을 도맡고, 죽으면 다시 프린트되는 익스펜더블로 지원한다.<br>
                    4년의 항해와 얼음행성 니플하임에 도착한 뒤에도 늘 ‘미키’를 지켜준 여자친구 ‘나샤’.<br>
                    그와 함께, ‘미키’는 반복되는 죽음과 출력의 사이클에도 익숙해진다.<br>
                    그러나 ‘미키 17’이 얼음행성의 생명체인 ‘크리퍼’와 만난 후 죽을 위기에서 돌아와 보니<br>
                    이미 ‘미키 18’이 프린트되어 있다.<br>
                    행성 당 1명만 허용된 익스펜더블이 둘이 된 ‘멀티플’ 상황<br>
                    둘 중 하나는 죽어야 하는 현실 속에 걷잡을 수 없는 사건이 기다리고 있었으니…<br>
                    <br>
                    “자알 죽고, 내일 만나”<br>
                </span>
            </div>
            <!-- 그래프 생략 -->
            <div class="middle_ad"><img src="./cgv_img/0318_800x90.jpg" alt="ad"></div>
            <div class="minfo_trailer"><b>트레일러</b><span>6건</span><a href="#">+</a></div>
            <ul class="minfo_trailer_ul">
                <li>
                    <div class="box_img">
                        <img src="./cgv_img/89058235308_1024.jpg" alt="thum">
                        <div class="btn_play"><img src="./cgv_img/play-regular-24.png" alt="playbtn"></div>
                    </div>
                    <div class="minfo_content">
                        <span class="icon">HD</span><b>GIFT</b><br>
                        <span>2025.03.12</span>
                    </div>
                </li>
                <li>
                    <div class="box_img">
                        <img src="./cgv_img/89058235257_1024.jpg" alt="thum">
                        <div class="btn_play"><img src="./cgv_img/play-regular-24.png" alt="playbtn"></div>
                    </div>
                    <div class="minfo_content">
                        <span class="icon">HD</span><b>Price Of One Review</b><br>
                        <span>2025.03.12</span>
                    </div>
                </li>
                <li>
                    <div class="box_img">
                        <img src="./cgv_img/89058235256_1024.jpg" alt="thum">
                        <div class="btn_play"><img src="./cgv_img/play-regular-24.png" alt=""></div>
                    </div>
                    <div class="minfo_content">
                        <span class="icon">HD</span><b>Dying</b><br>
                        <span>2025.03.12</span>
                    </div>
                </li>
            </ul>
            <div class="minfo_snap"><b>스틸컷</b><span>1/21건</span><a href="#">+</a></div>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/1.jpg" alt="snap1"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/2.jpg" alt="snap2"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/3.jpg" alt="snap3"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/4.jpg" alt="snap4"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/5.jpg" alt="snap5"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/6.jpg" alt="snap6"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/7.jpg" alt="snap7"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/8.jpg" alt="snap8"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/9.jpg" alt="snap9"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/10.jpg" alt="snap10"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/11.jpg" alt="snap11"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/12.jpg" alt="snap12"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/13.jpg" alt="snap13"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/14.jpg" alt="snap14"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/15.jpg" alt="snap15"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/16.jpg" alt="snap16"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/17.jpg" alt="snap17"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/18.jpg" alt="snap18"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/19.jpg" alt="snap19"></div>
                    <div class="swiper-slide"><img src="./cgv_img/0_snap/20.jpg" alt="snap20"></div>
                </div>
                <div class="swiper-button-next" id="swp_n"></div>
                <div class="swiper-button-prev" id="swp_p"></div>
                <div class="swiper-pagination"></div>
            </div>
        </article>
        <aside class="minfo_data_aside">
            <img src="./cgv_img/0318_160x300.jpg" alt="ad">
            <img src="./cgv_img/160x300.png" alt="ad">
        </aside>
    </div>
    `;
/////////////////////////////////////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});