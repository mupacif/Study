/***
 * fonctions
 */

//destructuring rest args
function f(...[a,b,c])
{
    return a+b+c;
}
//closure use this of global fuction
/*
function Person()
{
    this.age = 0;
    setInterval(()=>{this.age++}, 1000)
}

// inner function has their own this
function Person()
{
    var self = this;
    self.age = 0;
    setInterval(function f(){self.age++}, 1000)
}
*/
/*

eval(js) evaluate
uneval() create a string
isFinite() finite number?
isNaN()
parseFloat()
decodeURI / decodeURIComponent()
encodeURI()
 */

/***
 *  try and catch


try
{
    throw ''; // new Error()
}catch(e)
{
 //throw ''; //suspended until finally is completed
}finally
{
    //always execute
}
 */


//PROMISE
let mPromise = new Promise((resolve,reject)=>
    {
            setTimeout(()=>resolve(12),10000);
            //reject("error")
    }
    );

mPromise.then((val)=>console.log("Yeah"+val)).catch((reason)=>{})

