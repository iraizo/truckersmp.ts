
export interface IVTCIndex {
    id: number,
    name: string,
    owner_id: number,
    owner_username: string,
    slogan: string,
    tag: string,
    website?: string,
    socials : {
        twitter?: string,
        facebook?: string,
        twitch?: string,
        discord?: string,
        youtube?: string
    },
    games: {
        ats:    boolean
        ets:    boolean
    }
    members_count: number,
    recruitment: string,
    language: string,
    verified: boolean,
    validated: boolean,
    created: Date
}

