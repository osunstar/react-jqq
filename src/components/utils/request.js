import 'whatwg-fetch';

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam94TURBeExDSjFjMlZ5Ym1GdFpTSTZJbmxoYm5wb2RYaHBJaXdpYm1samExOXVZVzFsSWpvaTVMaWw1TGk3NWJpdElpd2lkWE5sY2w5MGVYQmxJam9pWlcxd2JHOTVaV1VpTENKelkyOXdaU0k2SW5WelpYSWlMQ0poZFhSb2IzSnBkR2xsY3lJNlcxMHNJbVZ1WVdKc1pXUWlPblJ5ZFdVc0ltRmpZMjkxYm5SZmJtOXVYMlY0Y0dseVpXUWlPblJ5ZFdVc0ltRmpZMjkxYm5SZmJtOXVYMnh2WTJ0bFpDSTZkSEoxWlN3aVkzSmxaR1Z1ZEdsaGJITmZibTl1WDJWNGNHbHlaV1FpT25SeWRXVXNJbXRsZVNJNkluVnpaWEk2ZVdGdWVtaDFlR2tpTENKamIyUmxJam9pWkdJM01XVTVaamd0TWpjM1lTMDBPR0l5TFRnMU1EY3RZbVUxWVdGaVptRm1ZMkUySW4wc0ltTnNhV1Z1ZEVsa0lqb2lORGcyTnpJMU16Z3ROekl6WkMwME1qTmlMV0kwT0RJdE1HVTVaV1ZpTXprM00ySmtJaXdpWlhod2FYSmxJam9pTWpBeE9DMHdNeTB4TjFRd09Eb3pPVG8wT1M0Mk5ESmFJaXdpYVdGMElqb3hOVEl4TVRnNU5UZzVmUS5pWU5TNE5MTG5rQkgtbzlIelpPdEZsX1F0c21xd2NXRlM5SkRiakJPSVNBIiwiZXhwaXJlIjoiMjAxOC0wMy0xNlQxMTozOTo0OS42NDJaIiwiaWF0IjoxNTIxMTg5NTg5fQ.Qm1GuWrDtwQ-bRAevqWC_TxjBf7FaANT31hZ1xOEB9s'
export function request(url, method, body) {
    if (typeof method === 'undefined') {
        method = 'get';
    }
    var option = {
        method: method,
        mode: 'cors',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'x-token': token
        }
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

