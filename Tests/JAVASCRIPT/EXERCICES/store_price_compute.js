var elements = [
    {nom:"chaise",prix:25,qqt:0,elt:null},
    {nom:"Table",prix:150,qqt:0,elt:null},
    {nom:"Meuble",prix:250,qqt:0,elt:null}
]


var panier = new Set();

var panierTotal = $("total");


function $(elt)
{
    return document.getElementById(elt)
}

var panierTable = $("panier");
//ajouter
//click
function add(num) {
    //console.log("added"+num)
    addLine(num)
}
//addNode
function addLine(num) {
    var element = elements[num];

    if(! panier.has(element)) {
        var row = panierTable.insertRow(); //new tr
        var tdType = row.insertCell(); //first cell
        var tdPrix = row.insertCell(); //first cell
        var tdQtte = row.insertCell(); //first cell

        var element = elements[num];
        element.qqt = 1;

        tdType.innerHTML = element.nom;
        tdPrix.innerHTML = element.prix;
        tdQtte.innerHTML = element.qqt;

        panier.add(element);
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

