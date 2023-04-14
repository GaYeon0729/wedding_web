(function($){
    // 불변변수 선언 (const), 웨딩(wedding)객체 생성 <= 리터럴 객체
    const wedding = {
        init: function(){
            console.log(this.a);
            console.log(this.name);
            console.log(this.kor);
            console.log(this.eng);
            console.log(this.mat);
            this.tot();
            this.avg();
        },
        a: '대한민국',
        name: "이순신",
        kor: 100,
        eng: 59,
        mat: 80, // 속성(Propertis or Property) : 속성값(Value)
        tot: function(){ // Property에 function 키워드가 추가되면 메소드(Method), 함수라고도 함. 어떤 액션을 취할 때는 메소드를 사용함.
            let x = this.kor+ this.eng+ this.mat;
            console.log('여기는 총점=' + x);
        },
        avg: function(){
            let x =(this.kor+ this.eng+ this.mat)/3;
            console.log('여기는 평균=' + x);
        }
    };
    // 내부에서 속성을 사용할 때는 this.속성 , 외부에서 사용할때는 객체이름.속성
    wedding.init();
})(jQuery);