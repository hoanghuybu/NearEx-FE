import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function Test() {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [idToken, setIdToken] = useState(null);
    const urlParams = queryString.parse(window.location.search);
    const code = urlParams.code;
    console.log(code);
    var link =
        'https://accounts.google.com/o/oauth2/auth?scope=email%20profile&redirect_uri=http://localhost:3000/test&response_type=code&client_id=212417987282-qc0dgl2pbsq4j2kp58rtf7h3fi1roano.apps.googleusercontent.com&approval_prompt=force';

    async function getToken(code) {
        try {
            const response = await axios.post('https://oauth2.googleapis.com/token', {
                code: code,
                client_id: '212417987282-qc0dgl2pbsq4j2kp58rtf7h3fi1roano.apps.googleusercontent.com',
                client_secret: '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',
                redirect_uri: 'http://localhost:3000/test',
                grant_type: 'authorization_code',
            });

            const accessToken = response.data.access_token;
            return accessToken;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting access token from Google');
        }
    }

    async function getUserInfo(token) {
        if (token) {
            var link = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + token;
        }
        try {
            const response = await axios.get(link);
            setUserInfo(response.data);
            // setIdToken(gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token);
        } catch (error) {
            console.error(error);
            throw new Error('Error getting access user from Google');
        }
    }

    useEffect(() => {
        // Lấy mã truy cập từ URL sau khi đăng nhập thành công
        const urlParams = queryString.parse(window.location.search);
        const code = urlParams.code;

        // Gửi yêu cầu để lấy access token từ Google
        const getAccessToken = async () => {
            try {
                const accessToken = await getToken(code);
                setAccessToken(accessToken);
                getUserInfo(accessToken);
            } catch (error) {
                console.error(error);
            }
        };

        // Gọi hàm để lấy access token
        if (code) {
            getAccessToken();
        }
    }, []);

    function handleCallBackRespone(response) {
        setIdToken(response.credential);
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '212417987282-qc0dgl2pbsq4j2kp58rtf7h3fi1roano.apps.googleusercontent.com',
            callback: handleCallBackRespone,
        });

        google.accounts.id.renderButton(document.getElementById('signInDiv'), { theme: 'outline', size: 'large' });
    }, []);

    return (
        <div>
            <h1>TEST Page</h1>
            <a href={link}>Login google</a>
            <h2>{code}</h2>
            <h3>Access token is: {accessToken}</h3>
            <h2>User Info:</h2>
            <pre>{JSON.stringify(userInfo, null, 2)}</pre>
            <div id="signInDiv"></div>
            <h3>token_id is: {idToken}</h3>
        </div>
    );
}

export default Test;
