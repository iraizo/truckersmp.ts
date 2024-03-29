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
import {ITruckyEvent} from "./interfaces/trucky/events";
import {ITruckyBlog} from "./interfaces/trucky/blog";
import {ISteam} from "./interfaces/trucky/steam";

const restManager = new CRestManager();


// TODO: error handling via the truckersmp error JSON key
export namespace truckersMP {
    export class Client {

        public static async getPlayer(id: string): Promise<IPlayer> {
            const response = await restManager.request("https://api.truckersmp.com/v2/player/" + id, "GET")
            if (response.status == 200) {
                const json = await response.json();
                return json["response"];
            }
        }

        public static async getBans(id: string): Promise<IBans[]> {
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

        public static async getServers(): Promise<IServer[]> {
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

        public static async getGameTime(): Promise<Number> {
            const response = await restManager.request("https://api.truckersmp.com/v2/game_time", "GET");
            if (response.status == 200) {
                const json = await response.json();
                return json["game_time"];
            }
        }

        public static async getVersion(): Promise<IVersion> {
            const response = await restManager.request("https://api.truckersmp.com/v2/version", "GET");
            if (response.status == 200) {
                return await response.json();
            }
        }

        public static async getRules(): Promise<IRules> {
            const response = await restManager.request("https://api.truckersmp.com/v2/rules", "GET");
            if (response.status == 200) {
                return await response.json();
            }
        }

    }

    export class Company {
        public static async getIndex(): Promise<ICompanyIndex> {
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

        public static async getInformation(id: string): Promise<ICompany> {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}`, "GET");
            if (response.status == 200) {
                const json = await response.json();
                return json["response"];
            }
        }

        public static async getNews(id: string): Promise<ICompanyNews[]> {
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

        public static async getNewsPost(id: string, news: string): Promise<ICompanyNewsPost> {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/news/${news}`, "GET");
            if (response.status == 200) {
                const json = await response.json();
                return json["response"];
            }
        }

        public static async getRoles(id: string): Promise<ICompanyRoleInformation[]> {
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

        public static async getRole(id: string, roleId: string): Promise<ICompanyRoleInformation> {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/role/${roleId}`, "GET");
            if (response.status == 200) {
                let role: ICompanyRoleInformation;
                const json = await response.json();

                return await json["response"];
            }
        }

        public static async getMembers(id: string): Promise<ICompanyMember[]> {
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

        public static async getMember(id: string, member: string): Promise<ICompanyMember> {
            const response = await restManager.request(`https://api.truckersmp.com/v2/vtc/${id}/member/${member}`, "GET");
            if (response.status == 200) {
                const json = await response.json();
                return json["response"];
            }
        }
    }

    export class truckyClient {
        public static async getEvents(): Promise<ITruckyEvent[]> {
            const response = await restManager.request("https://api.truckyapp.com/v2/events", "GET");
            if (response.status == 200) {
                const json = await response.json();
                let eventArray: ITruckyEvent[] = [];
                for (let key in Object.keys(json["response"])) {
                    eventArray.push(json["response"][key])
                }
                return eventArray;
            }
        }

        public static async getBlogs(): Promise<ITruckyBlog[]> {
            const response = await restManager.request("https://api.truckyapp.com/v3/rss/truckyblog", "GET");
            if (response.status == 200) {
                const json = await response.json();
                let blogArray: ITruckyBlog[] = [];
                for (let key in Object.keys(json["response"])) {
                    blogArray.push(json["response"][key]);
                }
                return blogArray;
            }
        }

        public static async getBlogsAts(): Promise<ITruckyBlog[]> {
            const response = await restManager.request("https://api.truckyapp.com/v3/rss/ats", "GET");
            if (response.status == 200) {
                const json = await response.json();
                let blogArray: ITruckyBlog[] = [];
                for (let key in Object.keys(json["response"])) {
                    blogArray.push(json["response"][key]);
                }
                return blogArray;
            }
        }

        public static async getBlogsEts(): Promise<ITruckyBlog[]> {
            const response = await restManager.request("https://api.truckyapp.com/v3/rss/ets2", "GET");
            if (response.status == 200) {
                const json = await response.json();
                let blogArray: ITruckyBlog[] = [];
                for (let key in Object.keys(json["response"])) {
                    blogArray.push(json["response"][key]);
                }
                return blogArray;
            }
        }

        public static async getBlogsTruckersMP(): Promise<ITruckyBlog[]> {
            const response = await restManager.request("https://api.truckyapp.com/v3/rss/truckersMP", "GET");
            if (response.status == 200) {
                const json = await response.json();
                let blogArray: ITruckyBlog[] = [];
                for (let key in Object.keys(json["response"])) {
                    blogArray.push(json["response"][key]);
                }
                return blogArray;
            }
        }

        public static async getBlogsTruckyAnnouncements(): Promise<ITruckyBlog[]> {
            const response = await restManager.request("https://api.truckyapp.com/v3/rss/truckyannouncements", "GET");
            if (response.status == 200) {
                const json = await response.json();
                let blogArray: ITruckyBlog[] = [];
                for (let key in Object.keys(json["response"])) {
                    blogArray.push(json["response"][key]);
                }
                return blogArray;
            }
        }

        public static async getFriendsData(steamid: string): Promise<ISteam[]> {
            const response = await restManager.request(`https://api.truckyapp.com/v2/steam/getFriendsData?steamid=${steamid}`, "GET");
            if(response.status == 200) {
                const json = await response.json();

                let steamArray: ISteam[] = [];

                for(let key in Object.keys(json["response"])) {
                    steamArray.push(json["response"][key])
                }

                return steamArray;
            }
        }

        public static async getPlayerSummaries(steamid: number): Promise<ISteam[]> {
            const response = await restManager.request(`https://api.truckyapp.com/v2/steam/getPlayerSummaries?steamid=${steamid}`, "GET");
            if(response.status == 200) {
                const json = await response.json();

                let steamArray: ISteam[] = [];

                for(let key in Object.keys(json["response"])) {
                    steamArray.push(json["response"][key]);
                }

                return steamArray;
            }
        }

        public static async resolveVanityUrl(username: string): Promise<ISteam[]> {
            const response = await restManager.request(`https://api.truckyapp.com/v2/steam/resolveVanityUrl?username=${username}`, "GET");
            if(response.status == 200) {
                const json = await response.json();

                let steamArray: ISteam[] = [];

                for(let key in Object.keys(json["response"])) {
                    steamArray.push(json["response"][key]);
                }

                return steamArray;
            }
        }
    }
}
