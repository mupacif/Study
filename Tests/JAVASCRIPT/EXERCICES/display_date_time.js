

function getFrenchDate(date)
{
    var jours = ["dimanche","lundi", "mardi", "mercredi","jeudi","vendridi","samedi"];
    var mois = ["janvier","février", "mars", "avril" ,"mai","juin","juillet","aout","septembre","novembre","decembre"];

    var today = date;

    var jour = today.getDay();
    var moi = today.getMonth();


    var txt =  `${jours[jour]} ${today.getDate()} ${mois[moi]} <br>`;
    txt += `<span style="color:blue">${today.getHours()} </span>:\
      <span style="color:red">${format(today.getMinutes())}</span> :\
      <span style="color:#fffe0b"> ${format(today.getSeconds())}</span>`

    return txt;
}


function format(litteral)
{
    return parseInt(litteral/10) > 0? litteral : "0"+litteral;
}



setInterval(function () {
    document.getElementById("display").innerHTML = getFrenchDate(new Date());
},1000);