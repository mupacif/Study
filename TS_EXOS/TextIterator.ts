/***
 * class Iterateur de String
 */
export class TextIterator {
    text: String;
    lines : string[];
    cursor:number;
    constructor(text: string) {
      this.text = new String(text);
      this.lines = text.split('\n');
      this.cursor = -1;
    }
    nextLine():string{
      if(this.cursor > this.lines.length - 1 )
          return null;
  
      return this.lines[++this.cursor];
    }
    hasNext():boolean
    {
      return this.cursor+1 < this.lines.length;
    }
  
  }