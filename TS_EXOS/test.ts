import {TextIterator} from "./TextIterator";
import tokenIterator from "./TokenIterator";
import TokenIterator from "./TokenIterator";
import Tokens from "./Tokens";
class Test {
  public static main(): number {

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
    si a > b alors
    a<-10
    sinon
    max()
    fsi
    pour faire
    si a < b alors
    ecrire hohoho
    sinon
    si a > d alors
    ecrire hihi
    fsi
    fsi
    fpour
    `;
              
    //text itérar
    let ti = new TextIterator(str);
    let line : string;
    let tokenIterator : TokenIterator;
    let lvl = 0;
    let outText:String = "";
    let stack = []
    let offsetTok:number=0;
    //read every line 
    let tu = new TokenUtil(Tokens);
    while(ti.hasNext())
      {
        line = ti.nextLine();
        //take all token inside
        tokenIterator= new TokenIterator(line); 
        //it it has no token
        offsetTok = 0;
        while(tokenIterator.hasNext())
        { 
          let [tok,tokIdx] = tokenIterator.nextToken();
          
          if(tu.isOpening(tok))
           {  
              
              stack.push(tu.getClosing(tok));
              offsetTok = -1;
              lvl++;
              console.log(`level up ${tok} : ${lvl}`);  

           }else{
             if(stack.length>0 && stack[stack.length-1].indexOf(tok)!=-1)
             {
               let dclosingTok  = stack.pop();
              
    
             
               lvl--;
               if(tok=="sinon" && dclosingTok.indexOf("sinon")!=-1)
               {
                console.log(`same level ${tok}: ${lvl}`); 
                stack.push("fsi");
                lvl++;
                offsetTok = -1;
                }else{
                  console.log(`level down ${dclosingTok}: ${lvl}`); 
                }
             }
           }
           
        }
        outText+="  ".repeat(lvl+offsetTok).concat(line.trim()).concat("\n")
        
      }
      console.log(outText);
      
    
    

    
      

    return 0;
  }
}

class TokenUtil{
  toks : {[idx:string]:string}
  constructor(tokens:string[][]){
    this.toks = {}
    for(let tok of tokens)
       { 
         this.toks[tok[0]]=tok[1];

        }
  }
  isOpening(token:string):boolean 
  {
        return token in this.toks;
  }
  getClosing(opening:string):string|null
  {
      return this.toks[opening];
  }
}
Test.main();