"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = require("./Tokens");
class TokenIterator {
    constructor(line) {
        this.line = line;
        this.cursor = 0;
        this.list = [];
        this.tokenize();
    }
    tokenize() {
        let reg = Tokens_1.default.map(e => `${e[0]}|${e[1]}`).join('|');
        var regexp = new RegExp(reg, 'gi');
        let match;
        while ((match = regexp.exec(this.line.toString())) !== null) {
            let foundToken = match[0];
            let position = match.index;
            this.list.push([foundToken, position]);
        }
    }
    nextToken() {
        if (this.cursor > this.list.length - 1)
            return null;
        return this.list[this.cursor++];
    }
    hasNext() {
        return this.cursor + 1 < this.list.length;
    }
}
exports.default = TokenIterator;
//# sourceMappingURL=Tokeniser.js.map