export interface IServer {
    "id": number
    "game": string,
    "ip": string,
    "port": number,
    "name": string,
    "shortname": string,
    "idprefix"?: null,
    "online": boolean,
    "players": number,
    "queue": number,
    "maxplayers": number,
    "displayorder": number,
    "speedlimiter": number,
    "collisions": boolean,
    "carsforplayers": boolean,
    "policecarsforplayers": boolean,
    "afkenabled": boolean,
    "event": boolean,
    "specialEvent": boolean,
    "promods": boolean,
    "syncdelay": number
}