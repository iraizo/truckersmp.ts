interface ITruckySteamPlayer {
    steamID?: string,
    playerInfo: {
        steamid: string,
        communityvisibilitystate: string,
        profilestate: number,
        personaname: string,
        commentpermission: number,
        profileurl: string,
        avatar: string,
        avatarmedium: string,
        avatarfull: string,
        avatarhash: string,
        personastate: number,
        primaryclanid: string,
        timecreated: string,
        personastateflags: number
    },
    found: boolean
}
