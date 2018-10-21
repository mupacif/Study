"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = require("./Tokens");
class TokenIterator {
    constructor(line) {
        this.line = line;
        this.cursor = -1;
        this.list = [];
        this.tokenize();
    }
    tokenize() {
        // console.log("tokenizing");
        let reg = Tokens_1.default.map(e => `${e[0]}|${e[1]}`).join('|');
        var regexp = new RegExp(reg, 'gi');
        let match;
        while ((match = regexp.exec(this.line.toString())) !== null) {
            // console.log(`tokenizing++:${match[0]}`);
            let foundToken = match[0];
            let position = regexp.lastIndex;
            // let position = match.index;
            this.list.push([foundToken, position]);
        }
    }
    nextToken() {
        if (this.cursor > this.list.length - 1)
            return null;
        return this.list[++this.cursor];
    }
    hasNext() {
        return this.cursor + 1 < this.list.length;
    }
    hasTokens() {
        return this.list.length > 0;
    }
}
exports.default = TokenIterator;
//# sourceMappingURL=TokenIterator.js.map