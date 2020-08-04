interface ITruckyStream {
    _id: string,
    id: string,
    platform: string,
    game: string,
    language: string,
    startDate: Date,
    thumbnailUrl: string,
    title: string,
    url: string,
    user?: string,
    userDisplayName: string,
    userId: string,
    viewers: number,
    lastUpdate: Date
}

interface ITruckyStreams {
    source: string,
    game: string,
    total: number,
    streams: ITruckyStream[]
}