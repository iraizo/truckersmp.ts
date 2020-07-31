
export interface CompanyIndex {
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
        ats: boolean
        ets: boolean
    }
    members_count: number,
    recruitment: string,
    language: string,
    verified: boolean,
    validated: boolean,
    created: Date
}

export interface CompanyNews {
    id: number,
    title: string,
    content_summary: string,
    author_id: number,
    author: string,
    pinned: boolean
}

export interface CompanyNewsPost {
    id: number,
    title: string,
    content_summary: string,
    content: string,
    author_id: number,
    author: string,
    pinned: boolean
}

export interface CompanyRoles {
    id: number,
    name: string,
    order: number,
    owner: boolean,
    created_at: Date,
    updated_at: Date
}
