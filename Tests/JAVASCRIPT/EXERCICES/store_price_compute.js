
//liste des élements de bases
//qqt : quantités
//elt : est l'emement html qui sera crée dans le tableau
var elements = [
    {nom:"chaise",prix:25,qqt:0,elt:null},
    {nom:"Table",prix:150,qqt:0,elt:null},
    {nom:"Meuble",prix:250,qqt:0,elt:null}
]

// Tableau qui ne peut contenir qu'un seul element
var panier = new Set();
//html : l'element input qui doit afficher le resultat
var panierTotal = $("total");

/***
 * retourne le document
 * @param elt l'element dont il faut retourner le correspondant html
 * @returns {HTMLElement | null}
 */
function $(elt)
{
    return document.getElementById(elt)
}


//html : tableau pour afficher le panier
var panierTable = $("panier");


/***
 * ajouter ajouter l'élement au tableau
 * @param num la valeur de l'élement
 */
function add(num) {
    //console.log("added"+num)
    addLine(num)
}

/***
 * ajoute l'element au tableau
 * @param num le numbéro de l'élement
 */
function addLine(num) {
    //récupération de l'élement
    var element = elements[num];

    //si le panier ne contient pas déja l'element
    if(! panier.has(element)) {
       // on crée les élements html
        var row = panierTable.insertRow(); //new tr
        var tdType = row.insertCell(); //first cell
        var tdPrix = row.insertCell(); //first cell
        var tdQtte = row.insertCell(); //first cell

        //on récupère l'élement de la liste
        var element = elements[num];
        //on incrémente la quantié
        element.qqt = 1;

        // on met les valeurs correspondants
        tdType.innerHTML = element.nom;
        tdPrix.innerHTML = element.prix;
        tdQtte.innerHTML = element.qqt;

        //on ajoute l'élement au tableau
        panier.add(element);

        //on enregistre l'élement
        element.elt = row;
    }else
    {
        element.qqt = element.qqt+1;
        element.elt.cells[2].innerHTML = element.qqt;
    }
    setTotal();
}
//increment quantité

function setTotal() {
    if(panier.size > 0) {


        var allQtt = [...panier].map(e=> e.qqt*e.prix);

        var total = allQtt.reduce((a, b)=> a + b);

        panierTotal.value = total;

    }

}
//retirer
//decrement if <0 delete de la liste
function remove(num) {
    var element = elements[num];
    if(panier.has(element) && element!=null)
    {//si il y a plus de 1 element
        if(element.qqt > 1)
        {
            element.qqt = element.qqt -1;
            element.elt.cells[2].innerHTML = element.qqt;
        }
        else
        {//un seul element
            panierTable.deleteRow(element.elt.rowIndex);
            element.elt = null;
            panier.delete(element)
        }
        setTotal();
    }

}

