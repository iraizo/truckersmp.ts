export interface ITruckyMapInfo {
    _id: string,
    realName: string,
    x: number,
    z: number,
    game: string,
    type: string,
    country: string,
    dlc: string,
    mod: string
}

export interface ITruckyMapDLC {
    _id: string,
    name: string,
    game: string,
    order: number
}

export interface ITruckyMapResolution {
    distance: number,
    resolved: boolean,
    area: boolean,
    poi: {
        _id: string,
        realName: string,
        x: number,
        z: number,
        game: string,
        type: string,
        country: string,
        dlc: string,
        mod: string
    }
}

export interface ITruckyMapServer {
     _id:  string,
     id: number,
     name:  string,
     game:  string,
     shortname:  string,
     apiserverid: number,
     trucks: number,
     code:  string,
     order: number,
     active: boolean,
     mod: string,
     event: boolean
}

export interface ITruckyMapPlayer {
    name: string,
    online: boolean,
    x: number,
    y: number,
    mp_id: number,
    p_id: number,
    time: bigint,
    server: number,
    heading: number,
    serverDetails: {
        _id: string,
        id: number,
        name: string,
        game: string,
        shortname: string,
        apiserverid: string,
        trucks: number,
        code: string,
        order: number,
        active: boolean,
        mod: string,
        event: boolean
    }
}