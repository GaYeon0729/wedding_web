// 윈도우 스크롤이벤트
 /////////////바닐라 자바스크립트///////////////////////////////////////////////
    let newScr = 0;
    let oldScr = 0;

        window.addEventListener('scroll', function(){
            newScr = window.scrollY; // 새로운 스크롤 값() 저장
                if( newScr-oldScr > 0 ){ // 아래로 내릴 때
                    document.querySelector('#header').classList.add('on');
                }
                if( newScr-oldScr < 0){ // 위로 올릴 때
                    document.querySelector('#header').classList.remove('on');
                }
                oldScr = newScr; // 이전의 스크롤 값



                // scrollTop 값 100 이상
                // 하단의 goTop 버튼
            // 상단에 100px 이상 스크롤하면 부드럽게 보이고(fadeIn(1000))
            // 상단에 100px 미만 스크롤하면 부드럽게 사라진다.(fadeOut(1000))
                    
                if( window.scrollY >= 100 ){
                    document.querySelector('.go-top').classList.add('fade-in'); // 부드럽게 보이기
                    document.querySelector('.go-top').classList.remove('fade-out');
                }
                else{ //100px 미만이면
                    document.querySelector('.go-top').classList.add('fade-out'); // 부드럽게 사라지기
                    document.querySelector('.go-top').classList.remove('fade-in');
                }
         
        });


