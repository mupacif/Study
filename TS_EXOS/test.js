"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextIterator_1 = require("./TextIterator");
const TokenIterator_1 = require("./TokenIterator");
class Test {
    static main() {
        // var regexp = new RegExp('alors([\\s\\S]*)fsi', 'g');
        // let match;
        // let out: String;
        // out = str;
        // while ((match = regexp.exec(str)) !== null) {
        //   console.log(`Found! ${match[0]}. position at ${match.index} Next starts at ${regexp.lastIndex}.`);
        // }
        let str = `
    ff<-ff+1
    i<-i+1
    ftant
    si a > b alors pour tant-que hihi fsi
    sinon
    max()
    fsi
    pour faire
    fpour
    `;
        let ti = new TextIterator_1.TextIterator(str);
        let tmpStr;
        let tokenIterator;
        let i = 0;
        while (ti.hasNext()) {
            tmpStr = ti.nextLine();
            tokenIterator = new TokenIterator_1.default(tmpStr);
            while (tokenIterator.hasNext())
                console.log(tokenIterator.nextToken());
        }
        return 0;
    }
}
Test.main();
//# sourceMappingURL=test.js.map