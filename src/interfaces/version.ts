export interface IVersion {
    name: string,
    numeric: string,
    stage: string,
    ets2mp_checksum: {
        dll: string,
        adb: string,
    }
    atsmp_checksum: {
        dll: string,
        adb: string,
    }
    time: Date,
    supported_game_version: number,
    supported_ats_game_version: number
}