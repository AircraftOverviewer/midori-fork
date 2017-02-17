import config from "../config";
import keychain from "../keychain.json";
import { error, log } from "./Util";

export default class Command {
    constructor(client, data) {
        this.client = client;
        this.config = config;
        this.keychain = keychain;

        this.name = data.name;
        this.description = data.description;
        this.aliases = data.aliases || [];
        this.usage = data.usage || "";
        this.guildOnly = data.guildOnly || false;
        this.adminOnly = data.adminOnly || false;

        if (!this.name) throw new Error("Command Name is required");
        if (!this.description) throw new Error("Command Description is required");
    }

    run() {
        throw new Error("Missing Run Method");
    }

    log(message, style) {
        return log(this.name, message, style);
    }

    error(message, channel) {
        return error(this.name, message, channel);
    }

    hasAdmin(user) {
        return config.admin.includes(user.id);
    }
}
