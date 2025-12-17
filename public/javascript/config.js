// 현제 웹사이트 주소
const isProduction = window.location.hostname !== '127.0.0.1';

// 배포된 사이트 주소
const PROD_HOST = 'http://codingmonster-env.eba-wjpvedym.ap-northeast-2.elasticbeanstalk.com';

const config = {
    // 네이버
    NAVER_CLIENT_ID: isProduction ? 'zSEuWLjxt0dImZq5_lkc' : 'kV_paNOP_josmNm3ZWKv',
    // 카카오
    KAKAO_JAVASCRIPT_KEY: 'd21bce1ca5288deb9158e07e14fbcd3e',
    // 구글
    GOOGLE_CLIENT_ID: '215047914649-rj6ldpldoh7h0tq6oj99117kf192t5jc.apps.googleusercontent.com',
    // 네이버 콜백 url
    CALLBACK_URL_NAVER: isProduction ? `${PROD_HOST}/Social_login_callback?provider=naver` : window.location.origin + '/Social_login_callback?provider=naver',
    // CALLBACK_URL_KAKAO: isProduction ? `${PROD_HOST}/Social_login_callback.html?provider=kakao` : 'http://127.0.0.1:5500/Social_login_callback.html?provider=kakao',

    HOME_URL: isProduction ? PROD_HOST : 'http://127.0.0.1:5500'
};