export interface ITruckyTruckersmpUpdateInfo {
    Packages: ITruckyTruckersmpUpdate[]
}

export interface ITruckyTruckersmpUpdate {
    ReqAts: boolean,
    ReqEts: boolean,
    Type: string,
    Optional: boolean,
    Name: string
}