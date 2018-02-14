
function format(litteral, ...substitutions)
{
    return parseInt(litteral/10) > 0? litteral : "0"+litteral;
}
var interval = setInterval(function () {
    var time = new Date();
;    document.title = `${time.getHours()} : ${format(time.getMinutes())} : ${format(time.getSeconds())}`;
},1000)



