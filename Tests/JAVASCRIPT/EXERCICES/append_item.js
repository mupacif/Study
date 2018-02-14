function $(elt)
{
    return document.getElementById(elt);
}

//catch click
var button = $("button");
var compte = 0;
button.addEventListener("click",clicked);
//create element

function clicked() {
    $("display").innerHTML ="";
 console.log("click")
    var listUl = $("list");

    var li = document.createElement("li")

    //récupération valeur input
    var text = $("txt").value ;

    //test si l'input est vide
    if(text == null || text.length == 0)
    {
        $("display").innerHTML ="entrez un texte";
        return;
    }

    // injection valeur
    li.innerHTML = text;
    $("txt").value = "";
    listUl.appendChild(li);
}


