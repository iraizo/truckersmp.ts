interface ITruckyEvents {
    expired: boolean,
    participants_names: {},
    routes: {
        start_location: string,
        destination_location: string,
        progressive: number,
        route_image_url: string
    },
    author: string,
    banner_url?: string,
    created: Date,
    description?: string,
    endDate: Date,
    eventDate: Date
    eventID: string,
    eventType: string,
    featured: boolean
    fullUrl: string,
    game: string,
    language: string,
    location: string,
    logo_url?: string,
    participants: string,
    partnered: boolean,
    server: string,
    source: string,
    time: string,
    timeZone: string,
    title: string,
    truckFest: {
        enable_slot_booking: boolean,
        slot_map_urls: string[],
        slot_number: number
    },
    updatedAt: Date,
    url: string

}
