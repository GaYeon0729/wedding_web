(function($){
    const wedding = {
        init: function(){
            this.header();
            this.scrollEvent();
            this.section1();
            this.section5();
            this.section6();
        },
        header: function(){
            // 햄버거메뉴 버튼(선택자) 클릭하면
            // 모바일 슬라이드 메뉴(선택자 mobileSubMenu) 펼쳐진다(보인다.)
            // 또 한번 클릭하면 모바일 슬라이드 메뉴(선택자 mobileSubMenu) 접힌다.(사라진다.)
            $('#mobileSubMenu').slideUp(); // 숨기기
            $('.mobile-menu-btn').on({
                click: function(){
                    // $('#mobileSubMenu').slideDown(); // 보이기
                    $('#mobileSubMenu').slideToggle(300); // 업다운이 번갈아서 됨
                }
            });

            //  화면 너비가 커진 상태에서 모바일 서브메뉴가 보인다.(버그발생)
            // 그래서 화면 너비에 반응하는 반응형 스크립트(resize) 이벤트를 등록하고 적용한다.
            $(window).resize(function(){
                // 만약 창너비가 991px 초과이면 모바일 서브메뉴 slideUp() 숨겨라
                if($(window).innerWidth() > 991){
                    $('#mobileSubMenu').slideUp(0); // display: none
                }
            });


            // 스크롤이벤트
            // 1. 윈도우 스크롤이벤트 등록
            // 2. 스크롤 탑 값이 해당 섹션위치에 도달하면 서브메뉴('.mobile-sub-btn')에 빨간 색상으로 변경된다.

            // && (AND) 모두 만족할 때
            // || (OR) 둘 중 하나라도 만족 할 때
            // ! (NOT) 부정, ~가 아니다

            const sec2Top = $('#section2').offset().top;
            const sec3Top = $('#section3').offset().top;
            const sec4Top = $('#section4').offset().top;
            const sec5Top = $('#section5').offset().top;
            const sec6Top = $('#section6').offset().top;
            const sec7Top = $('#section7').offset().top;
            const sec8Top = $('#section8').offset().top;
            const sec9Top = $('#section9').offset().top;
            const sec10Top = $('#section10').offset().top;

            $(window).scroll(function(){
                if($(window).scrollTop() >= sec2Top && $(window).scrollTop() < sec3Top){
                    $('.mobile-sub-btn').eq(0).addClass('on');
                }
                else {
                    $('.mobile-sub-btn').eq(0).removeClass('on');
                }
                if($(window).scrollTop() >= sec4Top && $(window).scrollTop() < sec5Top){
                    $('.mobile-sub-btn').eq(1).addClass('on');
                }else{
                    $('.mobile-sub-btn').eq(1).removeClass('on');
                }
                if($(window).scrollTop() >= sec5Top && $(window).scrollTop() < sec6Top){
                    $('.mobile-sub-btn').eq(2).addClass('on');
                }else{
                    $('.mobile-sub-btn').eq(2).removeClass('on');
                }
                if($(window).scrollTop() >= sec6Top && $(window).scrollTop() < sec7Top){
                    $('.mobile-sub-btn').eq(3).addClass('on');
                }else{
                    $('.mobile-sub-btn').eq(3).removeClass('on');
                }
                if($(window).scrollTop() >= sec8Top && $(window).scrollTop() < sec9Top){
                    $('.mobile-sub-btn').eq(4).addClass('on');
                }else{
                    $('.mobile-sub-btn').eq(4).removeClass('on');
                }
                if($(window).scrollTop() >= sec10Top && $(window).scrollTop() <= (sec10Top + $('#section10').height())){
                    $('.mobile-sub-btn').eq(5).addClass('on');
                }else{
                    $('.mobile-sub-btn').eq(5).removeClass('on');
                }
                // console.log(`sec10Top ${sec10Top}`);
                // console.log(sec10Top + $('#section10').innerHeight());
                // console.log(`섹션10 높이` + $('#section10').innerHeight());
            });

        },
        scrollEvent: function(){
            let newScr = 0;
            let oldScr = 0;
            $(window).scroll(function(){
               newScr = $(window).scrollTop(); // 새로운 스크롤 값 저장
                if(newScr - oldScr > 0){ // 스크롤 아래로 down
                    $('#header').addClass('on');
                }
                if(newScr - oldScr < 0){ // 스크롤 위로 up
                    $('#header').removeClass('on');
                }
               oldScr = newScr; // 이전의 스크롤 값
               // 하단의 goTop 버튼
               // 상단에 100px 이상 스크롤하면 부드럽게 보이고(fadeIn(1000))
               // 상단에 100px 미만 스크롤하면 부드럽게 사라진다.(fadeOut(1000))
                if( $(window).scrollTop() >= 100 ){
                    $('.go-top').stop().fadeIn(600);
                }
                else{ //100px 미만이면
                    $('.go-top').stop().fadeOut(600);
                }
                // 섹션2 패럴럭스
                // 섹션1의 스크롤탑 값이 300px에 도달하면,
                // 섹션2의 가상클래스 on 클래스를 추가한다. 
                // 초기화: 맨위 스크롤 탑 값 === 0 도달시
                if($(window).scrollTop()===0){
                    $('#section2').removeClass('on');
                    $('#section3').removeClass('on');
                    $('#section4').removeClass('on');
                    $('#section5').removeClass('on');
                    $('#section6').removeClass('on');
                    $('#section7').removeClass('on');
                    $('#section8').removeClass('on');
                    $('#section9').removeClass('on');
                }
        
                if( $(window).scrollTop()>=300){
                    $('#section2').addClass('on');
                } 
        
                //  섹션3 패럴럭스
                // 섹션2의 오프셋(맨 위에서 섹션2의 탑값 까지의 간격) 탑 값 구하기
                const sec2Top = $('#section2').offset().top;
                // console.log(`sec2Top ${sec2Top}`);
                if( $(window).scrollTop()>=sec2Top){
                    $('#section3').addClass('on');
                } 
        
                // 섹션4 패럴럭스
                // 섹션3의 오프셋(맨 위에서 섹션3의 탑값 까지의 간격) 탑 값 구하기
                const sec3Top = $('#section3').offset().top-300;
                if( $(window).scrollTop()>=sec3Top){
                    $('#section4').addClass('on');
                } 
        
                // 섹션5 패럴럭스
                // 섹션4의 오프셋(맨 위에서 섹션4의 탑값 까지의 간격) 탑 값 구하기
                const sec4Top = $('#section4').offset().top-300;
                if( $(window).scrollTop()>=sec4Top){
                    $('#section5').addClass('on');
                } 
        
                // 섹션6 패럴럭스
                // 섹션5의 오프셋(맨 위에서 섹션4의 탑값 까지의 간격) 탑 값 구하기
                const sec5Top = $('#section5').offset().top-300;
                if( $(window).scrollTop()>=sec5Top){
                    $('#section6').addClass('on');
                } 
        
                // 섹션7 패럴럭스
                // 섹션6의 오프셋(맨 위에서 섹션4의 탑값 까지의 간격) 탑 값 구하기
                const sec6Top = $('#section6').offset().top-300;
                if( $(window).scrollTop()>=sec6Top){
                    $('#section7').addClass('on');
                } 
        
                // 섹션8 패럴럭스
                // 섹션7의 오프셋(맨 위에서 섹션4의 탑값 까지의 간격) 탑 값 구하기
                const sec7Top = $('#section7').offset().top-300;
                if( $(window).scrollTop()>=sec7Top){
                    $('#section8').addClass('on');
                } 
        
                // 섹션9 패럴럭스
                // 섹션8의 오프셋(맨 위에서 섹션4의 탑값 까지의 간격) 탑 값 구하기
                const sec8Top = $('#section8').offset().top-300;
                if( $(window).scrollTop()>=sec8Top){
                    $('#section9').addClass('on');
                } 
                
        
            }); // 스크롤 이벤트 끝.
        },
        section1: function(){
            let cnt = 0;
            let setId = 0;
    
            // 1. 메인슬라이드함수
            function mainSlide(){
                // console.log(cnt); <= 현재 슬라이드 번호
                $('.slide-wrap').stop().animate({left: `${-100 * cnt}%`},600, function(){
                    if(cnt > 2){cnt=0} // 끝이면 처음으로
                    if(cnt < 0){cnt=2} // 처음이면 끝으로
                    $('.slide-wrap').stop().animate({left: `${-100 * cnt}%`},0); // 리턴, 처음으로 가서 다음 애니메이션 준비
                });

                // 페이지버튼함수 호출
                pageBtnEvent();
            }
            // 2-1. 다음(next)카운트함수
            function nextCount(){
                cnt++; // 1 2 3 .....
                mainSlide();
            }
            // 2-2. 이전(preview)카운트함수
            function prevCount(){
                cnt--; // 3 2 1 .....
                mainSlide();
            }
            // 3. 페이지버튼 이벤트
            // 해당 페이지 표시 흰색 버튼이 핑크색 버튼으로 표시된다.
            // 메인 슬라이드 함수의 cnt 번호에 따라 변경된다. 누가? page-btn의 인덱스 번호(0 1 2)가!
            // pageBtnEvent 함수는 메인 슬라이드 함수 내에서 실행한다.
            function pageBtnEvent(){
                $('.page-btn').removeClass('on');
                $('.page-btn').eq(cnt===3 ? 0 : cnt ).addClass('on'); // $('.page-btn').eq(cnt>2 ? 0 : cnt ).addClass('on'); 도 가능.
            }
            // 4. 자동타이머 함수
            // 4초에 한번씩 자동으로 다음 카운트(next)함수를 호출하고 실행한다.
            // (setInterval) 셋인터발 함수 
            // setInterval(실행함수이름=> 소괄호 생략, 시간 1/1000 밀리초 단위로 씀);
            // 1초 => 1000 , 4초 => 4000 === 1000*4
            // setter 셋터함수 <= 설정해주는 것
            // 메모리에 할당 된 번호(랜덤한 인덱스번호)
            // 메모리에 할당 된 인덱스번호를 알면 타이머를 정지할 수 있다.
            // 클리어 인터발 clearInterval(인덱스번호) => clearInterval(setId)
            
            function autoTimer(){
                setId = setInterval(nextCount, 1000*4); // 새롭게 실행
                clearInterval(setId); // 이전에 호출 실행한 아이디 삭제
            }
            autoTimer(); // 홈페이지 처음 로딩시 실행


            // 페이지버튼 클릭하면 정지 하고 싶다.
            $('.page-btn').eq(0).on({ // 첫번째 슬라이드는 0
                click: function(){
                    clearInterval(setId); // 슬라이드 일시 정지
                    // 메인슬라이드에게 클릭한 페이지 번호를 전달하고 => cnt
                    // 메인슬라이드를 실행해서 애니메이션이 구현한다.
                    cnt=0;
                    mainSlide();
                    autoTimer();
                }
            });
            $('.page-btn').eq(1).on({
                click: function(){
                    clearInterval(setId); 
                    cnt=1;
                    mainSlide();
                    autoTimer();
                }
            });
            $('.page-btn').eq(2).on({ 
                click: function(){
                    clearInterval(setId); 
                    cnt=2;
                    mainSlide();
                    autoTimer();
                }
            });
        
            //////////////////////////////////////////////////////////////////////////////////
            // 4. 마우스 터치 스와이프 & 드래그 앤 드롭 이벤트
            // 마우스를 우측에서 좌측으로 터치(드래그앤드롭)하면 다음슬라이드 호출 실행
            // 마우스를 좌측에서 우측으로 터치(드래그앤드롭)하면 다음슬라이드 호출 실행
            // $('#section1').off();
            // 변수
            // 다음이냐 이전이냐 판단
            // 0보다 크면 다음, 0보다 작으면 이전이다.
            let touchStart = 0; // 터치 시작
            let touchEnd = 0; // 터치 끝
        
            let dragStart = 0; // 드래그 시작
            let dragEnd = 0; // 드래그 끝
        
            let winWidth = 0; // 창너비
            let mouseDown = false; // 마우스 다운상태 아님 false, 다운상태 true
            // 반응형 이벤트 : 마우스(데스크탑)와 핑거(모바일,태블릿) 이벤트
            $('#section1').on({
                // 마우스 터치
                mousedown: function(e){
                    mouseDown = true; // 마우스 다운상태임
                    clearInterval(setId); // 타이머 인덱스 번호를 저장하는 변수 => 전역변수
                    winWidth = $(window).innerWidth(); // 창너비 
                    touchStart = e.clientX; // 터치 시작(Touch Start)
                    dragStart = e.clientX-$('.slide-wrap').offset().left-winWidth; // 드래그 시작(Touch Start)
                    autoTimer();
                },
                mouseup: function(e){
                    touchEnd = e.clientX; // 터치 끝(Touch End)
                    if(touchStart-touchEnd > 0){ // 다음 슬라이드
                        nextCount();
                    }
                    if(touchStart-touchEnd < 0){ // 이전 슬라이드
                        prevCount();
                    }
                    mouseDown = false; // 마우스 다운 상태가 초기화
                },
                // 드래그 앤 드롭 (마우스)
                mousemove: function(e){ // 마우스가 이동할 때 슬라이드가 자석처럼 따라다닌다.
                    // 마우스 무브는 반드시 마우스 다운 이벤트가 있을 때만 무브 기능이 되어야한다.
                    if(mouseDown === false){return} // 마우스 다운 상태가 아니면 리턴(종료)
                    dragEnd = e.clientX;
                    // 메인 슬라이드 애니메이션 박스
                    $('.slide-wrap').css({left : dragEnd-dragStart});
                },
                // 핑거 터치
                touchstart: function(e){
                    mouseDown = true; // 핑거 다운상태임
                    winWidth = $(window).innerWidth(); // 창너비
                    touchStart = e.originalEvent.changedTouches[0].clientX; // 터치 시작(Touch Start)
                    dragStart = e.originalEvent.changedTouches[0].clientX-$('.slide-wrap').offset().left-winWidth;
                },
                touchend: function(e){
                    touchEnd = e.originalEvent.changedTouches[0].clientX; // 터치 끝(Touch End)
                    if(touchStart-touchEnd > 0){ // 다음 슬라이드
                        nextCount();
                    }
        
                    if(touchStart-touchEnd < 0){ // 이전 슬라이드
                        prevCount();
                    }
                    mouseDown = false; // 마우스 다운 상태가 초기화
                },
                // 드래그 앤 드롭 (핑거)
                touchmove: function(e){ // 핑거가 이동할 때 슬라이드가 자석처럼 따라다닌다.
                    // 핑거 무브는 반드시 마우스 다운 이벤트가 있을 때만 무브 기능이 되어야한다.
                    if(mouseDown === false){return} // 마우스 다운 상태가 아니면 리턴(종료)
                    dragEnd = e.originalEvent.changedTouches[0].clientX;
                    // 메인 슬라이드 애니메이션 박스
                    $('.slide-wrap').css({left : dragEnd-dragStart});
                }
                
            });
        },
        section5: function(){
            let imgNum = null; // 클릭한적 없는 상태
            let imgSrc = null;
            let cnt = 0; // 숫자가 증가(누적증가) 초기값
            // 이미지 클릭 이벤트
            // 그러면 모달창이 오픈된다
            $('#section5 .img-btn').on({
                click: function(){
                    $('#modal').fadeIn(300);
                    $('html').addClass('on');
                    // 현재 클릭한 이미지 src 소스를 모달창 이미지에게 전달, 변경한다.
                    // html 태그의 속성(Attribute 어트리뷰트 attr)을 가져오는 메서드 사용
                    // html 태그의 속성(Properties 프로퍼티이스 또는 Property 프로퍼티 prop)을 가져오는 메서드 사용
                    imgSrc = $(this).attr('src'); // 이미지의 src 속성 가져오기
                    // let imgSrc = $(this).prop('src'); // 이미지의 src 속성 가져오기
                    //모달창 이미지 속성 중 src를 변경하기
                    $('#modal .modal-image').attr('src',imgSrc); // 클릭된 이미지가 모달 이미지로 변경되어 보인다.
                    // 현재 이미지의 번호를 가져오기 그래야 다음이미지 번호를 호출 할 수 있다.
                    //  1. 이미지의 파일이름 중 번호를 가져오는 것. substr substring
                    // wedding-img08.jpg 점(닷.)의 위치(글자위치인덱스번호)를 찾아서 좌측으로 2를 빼면 2자리 숫자가 번호다.
                    // imgSrc = "./img/wedding-img13.jpg";
                    // let dotPos = imgSrc.search("jpg");
                    // let dotPos = imgSrc.indexOf("jpg");
                    // console.log('이미지 파일이름중 점의 위치' + dotPos );
                    // console.log(imgSrc.substr(점위치인덱스번호,뽑아낼 글자수))
                    imgNum = $(this).data('num'); //데이터 속성을 사용 제이쿼리 지원
                    // let src = $(this).attr('src');
                    // // 선택된 이미지 속성 src 이미지 파일이름을 보내준다.
                    // // $('#modal img').attr("src", src);
                    // $('#modal img').prop("src", src);
                    // // Attribute 어트리뷰트  attr() 속성  이미지 속성중
                    // // Properties 프로퍼티스 prop()
                    // // class
                    // // src 이미지 소스 파일이름
                    // // alt
                }
            });

            // 모달 창 닫기 함수
            function modalClose(){
                $('#modal').fadeOut(300);
                $('html').removeClass('on');
            };
            // 모달창 닫힘
            $('#modal').on({
                click(e){
                    e.preventDefault();
                    e.stopPropagation();
                    modalClose();
                }
                    // if(e.originalEvent.currentTarget === e.originalEvent.target){
                    //     // 부모창 닫기
                    //     $('#modal').fadeOut(300);
                    //     $('html').removeClass('on');
                    // }else{ // 이미지 다음이미지 .modal-image
                    //     // 현재 클릭한 이미지 번호 다음번호 카운트
                    //     // 이미지 속성을 가져온다.
                    //     // img/wedding-img11.jpg
                    //     // 15
                    //     let num = ($('.modal-image').attr('src').substr(15,2))+1;
                    //     // alert($('.modal-image').attr('src').substr(15,2));
                    //     $('.modal-image').attr('src', `img/wedding-img${num}.jpg`)
                    // }
            });
            // 모달창 이미지 버튼
            // 자식 이미지 버튼을 클릭하면 부모 박스 까지 이벤트가 
            // 전달된다. 부모까지(조상까지) 이벤트 전달을 막아야 한다.
            // 그래서 상위 위치의 박스까지 전달 되지 않도록 이벤트 함수를 사용한다.
            // 스탑프로파게이션 e.stopPropagation();
            
            // 다음 모달 이미지 함수
            function nextImage(){
                imgNum++;
                    if(imgNum>15){
                        imgNum = 8;
                    }
                    // 마지막 이미지 이면 다시 처음으로 
                    // 이미지 번호가 10미만 즉, 1자리이면 0을 추가해준다.
                    // 3항 연산자 조건식 <10 ? 08 : 8
                    $('#modal .modal-image').attr('src', `./img/wedding-img${imgNum<10?('0'+imgNum):imgNum}.jpg`).stop().fade
                    Out(0).fadeIn(300);
            };
            // 이전 모달 이미지 함수
            function prevImage(){
                imgNum--;
                    if(imgNum<8){
                        imgNum = 15;
                    }
                    // 마지막 이미지 이면 다시 처음으로 
                    // 이미지 번호가 10미만 즉, 1자리이면 0을 추가해준다.
                    // 3항 연산자 조건식 <10 ? 08 : 8
                    $('#modal .modal-image').attr('src', `./img/wedding-img${imgNum<10?('0'+imgNum):imgNum}.jpg`).stop().fade
                    Out(0).fadeIn(300);
            };

            // 모달창 이미지 클릭 이벤트 : 다음이미지
            $('#modal .modal-img-btn').on({
                click(e){
                    e.preventDefault();
                    e.stopPropagation();
                    nextImage();
                    
                }
            });

            
            // 다음 이미지
            $('.modal-next-btn').on({
                click(e){
                    e.preventDefault();
                    e.stopPropagation();
                    nextImage(); // 다음 이미지 함수 호출
                }
            });

            // 이전 이미지
            $('.modal-prev-btn').on({
                click(e){
                    e.preventDefault();
                    e.stopPropagation();
                    prevImage(); // 이전 이미지 함수 호출
                    
                }
            });

            // 모달 닫기 버튼 클릭 이벤트
            $('.modal-close-btn').on({
                click(e){
                    e.preventDefault();
                    e.stopPropagation();
                    modalClose();
                }
            });
        },
        section6: function(){
            // 비동기 전송 : AJAX => 제이쿼리
            // 폼 전송버튼 클릭하면 폼전송내용을 AJAX가 
            // PHP에게 데이터를 전송한다.
            // 화면전환이 없이 유효시간에 데이터가 비동기식으로 전송된다.
            $('.submit-btn').on({
                click(e){
                    // 전송기능을 제거하고, 새로고침이 발생하지 않는다.
                    e.preventDefault();
                    
                    // 에이젝스 : 고객이 서버에게 데이터를 요청 Request
                    $.ajax({
                        url:'./attending.php',
                        type:'POST',
                        data:{
                            irum: $('#userName').val(),
                            email: $('#userEmail').val(),
                            guest_number: $('#number').val(),
                            event: $('#events').val() 
                        },
                        success(result){ // 성공 : 서버 응답
                            console.log('AJAX 전송 성공! : ' + result );
                        },
                        error(error){
                            console.log('AJAX 전송 실패! : ' + error );
                        }
                    });//json 데이터 형식


                }
            });
        }
    }

    wedding.init();
})(jQuery);