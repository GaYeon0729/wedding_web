<?
    // CTRL + SHIFT + R : 완전새로고침(캐시까지 삭제된다.)
    // 웹페이지에서 폼 전송을 보내온 내용을(name='네임속성') 받기
    $irum = $_POST['irum'];
    $email = $_POST['email'];
    $guest_number = $_POST['guest_number'];
    $event = $_POST['event'];

    // 서버(관리자)가 클라이언트(고객)에게 응답 Response
    echo $irum . "님! 폼메일을 잘 받았습니다. 빠른시간 내에 답변 드리겠습니다."

    // echo "이름 : " . $name . "<br>";
    // echo "이메일 : " . $email . "<br>";
    // echo "게스트 멤버 인원수 : " . $number . "<br>";
    // echo "이벤트 : " . $events . "<br>"; // .은 변수와 문자열을 연결해주는 역할, 줄바꿈을 하고 싶으면 html태그 중 <br>을 사용

?>