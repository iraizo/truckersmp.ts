import {CRestManager} from "./restManager";

import {IPlayer} from "./interfaces/players";
import {IBans} from "./interfaces/bans";
import {IServer} from "./interfaces/servers";
import {
    ICompany,
    ICompanyIndex,
    ICompanyMember,
    ICompanyNews,
    ICompanyNewsPost,
    ICompanyRoleInformation
} from "./interfaces/company";

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

                return companyIndex;
            }
        }

        public async getInformation(id: number) {
            let company = {} as ICompany;
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}`, "GET");
            if (response.status == 200) {
                const json = await response.json();

                return company = json["response"]; // TODO: convert this into json.response (see getplayer() return)
            }
        }

        public async getNews(id: number) {
            let news: ICompanyNews[] = [];
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/news`, "GET");
            if (response.status == 200) {
                const json = await response.json();
                for (let key in Object.keys(json["response"]["news"])) {
                    news.push(json.response.news[key]);
                }

                return news;
            }
        }

        public async getNewsPost(id: number, news: number) {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/news/${news}`, "GET");
            if (response.status == 200) {
                let news = {} as ICompanyNewsPost;
                const json = await response.json();

                return news = json["response"];
            }
        }

        public async getRoles(id: number) {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/roles`, "GET");
            if (response.status == 200) {
                let roles: ICompanyRoleInformation[] = [];
                const json = await response.json();

                for (let key in Object.keys(json["response"]["roles"])) {
                    roles.push(json["response"]["roles"][key]);
                }

                return roles;
            }
        }

        public async getRole(id: number, roleId: number) {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/role/${roleId}`, "GET");
            if (response.status == 200) {
                let role: ICompanyRoleInformation;
                const json = await response.json();

                return role = json["response"];
            }
        }

        public async getMembers(id: number) {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/members`, "GET");
            if (response.status == 200) {
                let members: ICompanyMember[] = [];
                const json = await response.json();

                for(let key in Object.keys(json["response"]["members"])) {
                    members.push(json["response"]["members"][key]);
                }

                return members;
            }
        }

        public async getMember(id: number, member: number) {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/member/${member}`, "GET");
            if(response.status == 200) {
                let member_: ICompanyMember;
                const json = await response.json();

                return member_ = json["response"];
            }
        }


    }
}