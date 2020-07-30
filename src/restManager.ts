import "isomorphic-fetch";

export class CRestManager {

    public request(url: string, method: string, body?: string, headers?: {}): Promise<Response> {
        return new Promise(async (resolve, reject) => {
            const req = fetch(url, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            }).then(async res => {
                resolve(res);
            }, e => {
                reject(e);
            })
        })
    }
}