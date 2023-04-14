// 제이쿼리 사용
// 제이쿼리 선언문
// $();
// $(function(){});

// 제이쿼리는 달러사인 기로($)를 제이쿼리 프로그램으로 대입해서 사용한다.
// 그런데 $가 외부에 노출되어있어서 다른 제이쿼리를 사용하는 라이브러리, 플러그인 등과 $가 충돌 위험성이 있다.
// 
// $(function(){
   //  console.log($);
// });

// 충돌을 피하는 방법
// $을 내부 변수로 사용하면 완전히 막을 수 있다.

// ();

// ( function(){});
// 즉시실행함수 === 즉시표현함수식(IIFE) 이피함수
(function($){ // $변수[매개변수] 에게 전달하여 $이 제이쿼리 프로그램을 실행한다.

    // console.log($);
    // console.log(`내부변수 달러사인 ${$} `);

    // $(window).scroll()
    // $(window).scroll(function(){})

    // 윈도우 스크롤이벤트
    let newScr = 0;
    let oldScr = 0;
    $(window).scroll(function(){
        // 콘솔창에서 로그(log)로 기록 확인하기 : 스크롤 탑 값을 확인하기
        // console.log( $(window).scrollTop() );

        // scrollTop 값이 100px 이상 이동하면
        // header를 위로 부드럽게 숨긴다.
        // 100px 미만이면 header를 아래로 부드럽게 보이게 한다.

        /* if( $(window).scrollTop() >= 100 ){
            // header를 위로 부드럽게 숨긴다. style로 설정, 가상클래스
            $('#header').addClass('on'); // addClass는 추가클래스
        }
        else{
            // header를 아래로 부드럽게 보이게한다. style로 설정, 가상클래스
            $('#header').removeClass('on'); //removeClass는 삭제클래스
        } */

        // 스크롤 방향을 개발하기
        // 스크롤이 아래로 내려가면 header를 부드럽게 숨긴다.
        // 스크롤이 위로 올라가면 header를 부드럽게 내린다.
        
        // 1. 변수를 2개 만든다. newScr : 새로운 scrollTop값 저장, oldScr : newScr 변수에 저장된 값을 보관한다.
        /* newScr = $(window).scrollTop();
        newScr - oldScr ;
        oldScr = newScr;
        */
       newScr = $(window).scrollTop(); // 새로운 스크롤 값 저장

        // console.log( newScr - oldScr ); // 양수이면 아래로, 음수이면 위로

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

    // 메인 슬라이드 우측에서 좌측으로 부드럽게 1초간 이동, 3초 대기하는 애니메이션 제작
    // 1초 1000  2초 2000  3초 3000
    // 변수 카운트 : count => cnt++
    let cnt = 0;
    

    // 1. 메인슬라이드함수
    function mainSlide(){
        // console.log(cnt);
        $('.slide-wrap').animate({left: `${-100 * cnt}%`},600, function(){
            if(cnt > 2){cnt=0} // 끝이면 처음으로
            if(cnt < 0){cnt=2} // 처음이면 끝으로
            $('.slide-wrap').animate({left: `${-100 * cnt}%`},0); // 리턴, 처음으로 가서 다음 애니메이션 준비
        });

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
    // 3. 자동타이머(setInterval) 셋인터발
    // setInterval(nextCount, 3000); //3초 간격으로 무한 반복 호출 실행
    // setInterval(prevCount, 3000); //3초 간격으로 무한 반복 호출 실행

    // 4. 마우스 터치 스와이프
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
            winWidth = $(window).innerWidth(); // 창너비 
            touchStart = e.clientX; // 터치 시작(Touch Start)
            dragStart = e.clientX-$('.slide-wrap').offset().left-winWidth; // 드래그 시작(Touch Start)
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
    


})(jQuery); // 제이쿼리 프로그램을 [전달인자 라고 함]