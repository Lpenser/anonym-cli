"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnonymConfig {
    static getInstance() {
        if (!AnonymConfig.instance) {
            AnonymConfig.instance = new AnonymConfig();
        }
        return AnonymConfig.instance;
    }
}
exports.default = AnonymConfig;
