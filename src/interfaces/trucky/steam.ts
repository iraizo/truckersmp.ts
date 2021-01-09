import {IPlayer} from "../players";

export interface ISteamUser {
    championship: {
        applied: boolean,
        applyDate: any
    },
    friends: [],
    friendsLoaded: false, 
    total_points: number,
    level: number,
    _id: string,
    avatar: string,
    avatarfull: string,
    avatarmedium: string,
    communityvisibilitystate: null,
    createdAt: string,
    lastlogoff: any,
    loccityid: any,
    loccountrycode: any,
    locstatecode: any,
    personaname: string,
    personastate: number,
    personastateflags: number,
    primaryclanid: string,
    profilestate: number,
    profileurl: string,
    realname: any,
    steamid: string,
    timecreated: number,
    updatedAt: string,
    truckersMPUser: number,
    created: string,
}

export interface ISteam {
    steamUser: ISteamUser,
    truckersMPUser: IPlayer,
    onlineStatus: {
        online: boolean
    }
}