import 'whatwg-fetch';
export function request(url, method, body) {
    if (typeof method === 'undefined') {
        method = 'get';
    }
    var option = {
        method: method,
    }
    if (typeof body !== 'undefined') {
        option.body = JSON.stringify(body);
    }
    return fetch(url, option);
}
export function requestAll(url, method, body) {
    const methods = ['get', 'post', 'put', 'delete'];
    method = method ? 'get' : method;
    if (methods.indexOf(method) < 0) {
        throw new Error(`not support ${method} method`);
    }

    const toJSON = text => {
        let result;
        try {
            result = JSON.parse(text);
        } catch (err) {
            result = {};
        }
        return result;
    };

    return (async () => {
        const res = await request(url, method, body);
        const data = res.text();
        return new Promise((resolve, reject) => {
            if (res.status < 300) {
                resolve(data.then(text => toJSON(text)));
            } else {
                reject(data.then(text => toJSON(text)));
            }
        });
    })();
};

