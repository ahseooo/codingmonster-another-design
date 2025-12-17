const hostname = window.location.hostname;
// 현제 웹사이트 주소
const isProduction = !(hostname.includes('127.0.0.1') || hostname.includes('localhost'));

// 배포된 사이트 주소
const PROD_HOST = 'https://codingmonster.vercel.app';

const config = {
    // 네이버
    NAVER_CLIENT_ID: isProduction ? 'zSEuWLjxt0dImZq5_lkc' : 'kV_paNOP_josmNm3ZWKv',
    // 카카오
    KAKAO_JAVASCRIPT_KEY: 'd21bce1ca5288deb9158e07e14fbcd3e',
    // 구글
    GOOGLE_CLIENT_ID: '215047914649-rj6ldpldoh7h0tq6oj99117kf192t5jc.apps.googleusercontent.com',
    // 네이버 콜백 url
    CALLBACK_URL_NAVER: isProduction ? `${PROD_HOST}/Social_login_callback?provider=naver` : window.location.origin + '/Social_login_callback?provider=naver',

    HOME_URL: isProduction ? PROD_HOST : window.location.origin
};