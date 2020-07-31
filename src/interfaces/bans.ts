

export interface IBans {
    error: boolean,
    response : [
        {
            expiration?: number,
            active?: boolean,
            reason?: string,
            adminName?: string,
            adminID?: number
        }
        ]
}
