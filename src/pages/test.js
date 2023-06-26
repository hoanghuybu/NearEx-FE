import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Test() {
    const [userInfo, setUserInfo] = useState(null);
    const [idToken, setIdToken] = useState(null);
    const history = useHistory();
    function handleCallBackRespone(response) {
        localStorage.setItem('jwtToken', response.credential);
        var x = localStorage.getItem('jwtToken');
        if (x) {
            history.push('/test2');
        }

        setTimeout(() => {
            localStorage.removeItem('jwtToken');
            setIdToken('');
            setUserInfo({});
        }, 1 * 60 * 1000); // 30 phút x 60 giây x 1000 mili giây
        setIdToken(response.credential);
        var userObject = jwt_decode(response.credential);
        setUserInfo(userObject);
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '212417987282-qc0dgl2pbsq4j2kp58rtf7h3fi1roano.apps.googleusercontent.com',
            callback: handleCallBackRespone,
        });

        google.accounts.id.renderButton(document.getElementById('signInDiv'), { theme: 'outline', size: 'large' });
    }, []);

    console.log(idToken);
    return (
        <div>
            {/* <h1>TEST Page</h1>
            <a href={link}>Login google</a>
            <h2>{code}</h2>
    <h3>Access token is: {accessToken}</h3>*/}
            <h2>User Info:</h2>
            <pre>{JSON.stringify(userInfo, null, 2)}</pre>
            <div id="signInDiv"></div>
            <h3>token_id is: {idToken}</h3>
        </div>
    );
}

export default Test;
