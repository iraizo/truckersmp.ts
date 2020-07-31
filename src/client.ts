import {IPlayer} from "./interfaces/players";
import {IBans} from "./interfaces/bans";

import {CRestManager} from "./restManager";
import {IServer} from "./interfaces/servers";

const restManager = new CRestManager();


// TODO: error handling via the truckersmp error JSON key

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

    public getBans(id: number): Promise<IBans[]> {
        return new Promise(async (resolve, reject) => {
            let bans: IBans[] = [];
            await restManager.request("https://api.truckersmp.com/v2/bans/" + id, "GET").then(async response => {
                if(response.status == 200) {
                    const json =  await response.json();
                    for(let i = 0; i < json["response"].length; i++) {
                        bans.push(json["response"][i]);
                    }
                    resolve(bans);
                } else reject();
            }), e => reject(e);
        })
    }

    public getServers(): Promise<IServer[]> {
        return new Promise(async (resolve, reject) => {
            let servers: IServer[] = [];
            await restManager.request("https://api.truckersmp.com/v2/servers", "GET").then(async response => {
                if(response.status == 200) {
                    const json =  await response.json();
                    for(let i = 0; i < json["response"].length; i++) {
                        servers.push(json["response"][i]);
                    }
                    resolve(servers);
                } else reject();
            }), e => reject(e);
        })
    }

    public getGameTime(): Promise<number> {
        return new Promise(async (resolve, reject) => {
            await restManager.request("https://api.truckersmp.com/v2/game_time", "GET").then(async response => {
                if(response.status == 200) {
                    const json = await response.json();
                    resolve(json["game_time"]);
                }
            }), e => reject(e);
        })
    }

}