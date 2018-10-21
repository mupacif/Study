import tokens from "./Tokens";
export default class TokenIterator{
    
    line : String;
    cursor: number;
    list: Array<[String,number]>;
    constructor(line:String)
    {
        this.line = line;
        this.cursor = -1;
        this.list = [];
        this.tokenize();
    }
    private tokenize(){
        // console.log("tokenizing");
        
        let reg = tokens.map(e => `${e[0]}|${e[1]}`).join('|'); 
        var regexp = new RegExp(reg, 'gi');
        let match;
        while ((match = regexp.exec(this.line.toString())) !== null){
            // console.log(`tokenizing++:${match[0]}`);
            let foundToken = match[0];
            let position = regexp.lastIndex;
            // let position = match.index;
            this.list.push([foundToken,position]);
        }
    }
    nextToken():[string,number]{
        if(this.cursor > this.list.length - 1 )
            return null;
    
        return this.list[++this.cursor] as [string,number];
    }
    hasNext():boolean
    {
    return this.cursor+1 < this.list.length;
    }
    hasTokens():boolean
    {
        return this.list.length>0;
    }


}