const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
    
        xhr.responseType = 'json';

        if(data) {
        xhr.setRequestHeader('Constent-Type', 'application/json');
        };

        xhr.onload = () => {
            resolve(xhr.response);
        };
    
        xhr.onerror = () => {
            reject('Something went wrong!');
        }

        xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = () => {
    sendHttpRequest('GET', 'https://regres.in/api/users').then(responseData => {
        console.log(responseData);
    });
};

const sendData = () => {
    sendHttpRequest('POST', 'https://regres.in/api/users', {
        email: 'test@test.com',
        password: 'terterd'
    }).then(responseData => {
        console.log(responseData);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);