import {IPlayer} from "./interfaces/players";
import {IBans} from "./interfaces/bans";

import {CRestManager} from "./restManager";

const restManager = new CRestManager();

export class CClient {

    public getPlayer(id: number): Promise<IPlayer> {
        return new Promise(async (resolve, reject) => {
            await restManager.request("https://api.truckersmp.com/v2/player/" + id, "GET").then(async response => {
                if(response.status == 200) {
                    resolve(await response.json());
                } else reject();
            }), e => reject(e);
        })
    }

    public getBans(id: number): Promise<IBans> {
        return new Promise(async (resolve, reject) => {
            await restManager.request("https://api.truckersmp.com/v2/bans/" + id, "GET").then(async response => {
                if(response.status == 200) {
                    resolve(await response.json());
                } else reject();
            }), e => reject(e);
        })
    }
}