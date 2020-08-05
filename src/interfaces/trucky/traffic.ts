export interface ITruckyTraffic {
    country: string,
    locations: ITruckyTrafficLocation[],
}

export interface ITruckyTrafficLocation {
    name: string,
    players: number,
    country: string,
    severity: string,
    color: string,
    averageSpeed: number,
    newSeverity: string,
    trafficJams: number,
    playersInvolvedInTrafficJams: number,
    layerID: string
}

export interface ITruckyTrafficServer {
    name: string,
    url: string,
    short: string,
    game: string
}

export interface ITruckyTrafficTop {
    name: string,
    players: number,
    country: string,
    color: string,
    severity: string,
    averagesSpeed: string,
    newSeverity: string,
    trafficJams: number,
    playersInvolvedInTrafficJams: number,
    layerID: string
}