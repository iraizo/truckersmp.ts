export interface IPlayer {
        id: number,
        name: string
        avatar: string,
        smallAvatar: string,
        joinDate: Date,
        steamID64: number,
        steamID: string,
        discordSnowflake?: string,
        groupName: string,
        groupColor: string,
        groupID: number,
        banned: boolean,
        bannedUntil?: Date,
        bansCount?: number
        displayBans: boolean,
        patreon: {
            isPatron: boolean,
            active: boolean,
            color?: string,
            tierId?: number,
            currentPledge?: number,
            lifetimePledge?: number,
            nextPledge?: number,
            hidden?: boolean,
        }
        permissions: {
            isStaff: boolean,
            isUpperStaff: boolean,
            isGameAdmin: boolean,
            showDetailedOnWebMaps: boolean,
            id: number,
            name: string,
            tag: string,
            inVTC: boolean,
            memberID: number,
        }
}
