import {CClient} from "./src/client";

const client = new CClient();

const ban_list = client.getBans(1).then(list => {
    console.log("bans: ", list)
})