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
import {IRules} from "./interfaces/rules";
import {IVersion} from "./interfaces/version";

const restManager = new CRestManager();


// TODO: error handling via the truckersmp error JSON key

export class Client {

    public Company: Company;

    constructor() {
        this.Company = new Company();
    }

    public async getPlayer(id: string): Promise<IPlayer> {
        const response = await restManager.request("https://api.truckersmp.com/v2/player/" + id, "GET")
        if (response.status == 200) {
            return await response.json()["response"];
        }
    }

    public async getBans(id: string): Promise<IBans[]> {
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

    public async getServers(): Promise<IServer[]> {
        let servers: IServer[] = [];
        const response = await restManager.request("https://api.truckersmp.com/v2/servers", "GET");
        if (response.status == 200) {
            const json = await response.json();
            for (let i = 0; i < json["response"].length; i++) {
                servers.push(json["response"][i]);
            }

            return servers;
        }
    }

    public async getGameTime(): Promise<Number> {
        const response = await restManager.request("https://api.truckersmp.com/v2/game_time", "GET");
        if (response.status == 200) {
            return await response.json()["game_time"];
        }
    }

    public async getVersion(): Promise<IVersion> {
        const response = await restManager.request("https://api.truckersmp.com/v2/version", "GET");
        if (response.status == 200) {
            return await response.json();
        }
    }

    public async getRules(): Promise<IRules> {
        const response = await restManager.request("https://api.truckersmp.com/v2/rules", "GET");
        if (response.status == 200) {
            return await response.json();
        }
    }

}


class Company {
    public async getIndex(): Promise<ICompanyIndex> {
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

    public async getInformation(id: string): Promise<ICompany> {
        const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}`, "GET");
        if (response.status == 200) {
            return await response.json()["response"]; // TODO: convert this into json.response (see getplayer() return)
        }
    }

    public async getNews(id: string): Promise<ICompanyNews[]> {
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

    public async getNewsPost(id: string, news: string): Promise<ICompanyNewsPost> {
        const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/news/${news}`, "GET");
        if (response.status == 200) {
            return await response.json()["response"];
        }
    }

    public async getRoles(id: string): Promise<ICompanyRoleInformation[]> {
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

    public async getRole(id: string, roleId: string): Promise<ICompanyRoleInformation> {
        const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/role/${roleId}`, "GET");
        if (response.status == 200) {
            let role: ICompanyRoleInformation;
            const json = await response.json();

            return await response.json()["response"];
        }
    }

    public async getMembers(id: string): Promise<ICompanyMember[]> {
        const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/members`, "GET");
        if (response.status == 200) {
            let members: ICompanyMember[] = [];
            const json = await response.json();

            for (let key in Object.keys(json["response"]["members"])) {
                members.push(json["response"]["members"][key]);
            }

            return members;
        }
    }

    public async getMember(id: string, member: string): Promise<ICompanyMember> {
        const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/member/${member}`, "GET");
        if (response.status == 200) {
            return await response.json()["response"];
        }
    }
}