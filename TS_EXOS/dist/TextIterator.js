"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***
 * class Iterateur de String
 */
class TextIterator {
    constructor(text) {
        this.text = new String(text);
        this.lines = text.split('\n');
        this.cursor = -1;
    }
    nextLine() {
        if (this.cursor > this.lines.length - 1)
            return null;
        return this.lines[++this.cursor];
    }
    hasNext() {
        return this.cursor + 1 < this.lines.length;
    }
}
exports.TextIterator = TextIterator;
//# sourceMappingURL=TextIterator.js.map