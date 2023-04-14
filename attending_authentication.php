<?
    // 데이터베이스(Data Base) 인증(인가 Authenticaion) 절차
    // 1. 데이터베이스서버
    // 2. 데이터베이스 사용자 이름
    // 3. 데이터베이스 사용자 비밀번호
    // 4. 데이터베이스 이름
    $db_server = 'localhost';
    $db_user_name = 'vkftjqdl8';
    $db_user_pw = 'slzh56^^';
    $db_name = 'vkftjqdl8';

    // 데이터베이스 접속(Connection)
    $conn = mysqli_connect($db_server, $db_user_name, $db_user_pw, $db_name);
    mysqli_set_charset($conn, 'utf8');

    if($conn==true){
        echo "데이터베이스 접속 성공. 인가된 사용자 입니다.";
    }
    else{
        echo "데이터베이스 접속 실패. 다시 확인하고 접속하세요.";
    }
?>