
export interface ICompany {
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

export interface ICompanyIndex {
    response: {
        recent: ICompany [],
        featured: ICompany [],
        featured_cover: ICompany []
    }
}

export interface ICompanyNews {
    id: number,
    title: string,
    content_summary: string,
    author_id: number,
    author: string,
    pinned: boolean
}

export interface ICompanyNewsPost {
    id: number,
    title: string,
    content_summary: string,
    content: string,
    author_id: number,
    author: string,
    pinned: boolean
}

export interface ICompanyRoleInformation {
    id: number,
    name: string,
    order: number,
    owner: boolean,
    created_at: Date,
    updated_at: Date
}

export interface ICompanyMember {
    id: number,
    user_id: number,
    username: string,
    steam_id: number,
    role_id: number,
    role: string,
    joinDate: Date
}