export interface ITruckyRadio {
    aliases: string[],
    _id: string,
    id: string,
    name: string,
    thumbnail: string,
    streamURL: string,
    url: string
}

export interface ITruckyRadioStation {
    station: {
        aliases: string[],
        _id: string,
        id: string,
        name: string,
        thumbnail: string,
        streamURL: string,
        url: string
    },
    playing: {
        name: string,
        artist: string
    },
    dj: {
        name: string,
        avatar: string,
        about: string
    }
}