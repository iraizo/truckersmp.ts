import {CRestManager} from "./restManager";

import {IPlayer} from "./interfaces/players";
import {IBans} from "./interfaces/bans";
import {IServer} from "./interfaces/servers";
import {ICompanyIndex} from "./interfaces/company";

const restManager = new CRestManager();


// TODO: error handling via the truckersmp error JSON key

export class CClient {

    public async getPlayer(id: number) {
        const response = await restManager.request("https://api.truckersmp.com/v2/player/" + id, "GET")
        if (response.status == 200) {
            const player: IPlayer = await response.json();
            return player;
        }
    }

    public async getBans(id: number) {
        let bans: IBans[] = [];
        const response = await restManager.request("https://api.truckersmp.com/v2/bans/" + id, "GET")
        if (response.status == 200) {
            const json = await response.json();
            for (let i = 0; i < json["response"].length; i++) {
                bans.push(json["response"][i]);
            }
            return bans;
        }
    }

    public async getServers() {
        let servers: IServer[] = [];
        const response = await restManager.request("https://api.truckersmp.com/v2/servers", "GET");
        if (response.status == 200) {
            for (let i = 0; i < response["response"].length; i++) {
                servers.push(response["response"][i]);
            }
            return servers;
        }
    }

    public async getGameTime() {
        const response = await restManager.request("https://api.truckersmp.com/v2/game_time", "GET");
        if (response.status == 200) {
            const json = await response.json()
            return json["game_time"];
        }
    }

    static CCompany = class {
        public async getIndex() {
            let companyIndex: ICompanyIndex = {response: {recent: [], featured_cover: [], featured: []}};
            const response = await restManager.request("https://api.truckersmp.com/v2/vtc", "GET");
            if (response.status == 200) {
                const json = await response.json();

                for (let key in Object.keys(json.response.recent)) {
                    companyIndex.response.recent.push(json.response.recent[key]);
                }
                for (let key in Object.keys(json.response.featured)) {
                    companyIndex.response.featured.push(json["response"]["featured"][key]);
                }
                for (let key in Object.keys(json.response.featured_cover)) {
                    companyIndex.response.featured_cover.push(json["response"]["featured_cover"][key]);
                }
            }
            return companyIndex;
        }
    }
}