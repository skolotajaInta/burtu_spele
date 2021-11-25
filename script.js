var temas = ["", "Latvijas pilsētas", "Latvijas novadi un valstspilsētas", "Dzīvnieki", "Priekšmeti"];
var izveleta_tema=0;
var sk=1;
var atlikusaisLaiks="3:00";

function IELADE_IZVELNI(){ 
    //tēmas vēlāk gribēšu no datu bāzes
    let pag = [];
    let izvelne = document.getElementById("temas");
    let vertiba = document.createElement("option");
    for(let i=0; i<temas.length; i++){
        vertiba.value = i;
        vertiba.text = temas[i];
        pag.push(vertiba.outerHTML);
    }
    izvelne.insertAdjacentHTML('beforeEnd', pag.join('\n'));
}

function SPELET(){
    let izvelne = document.getElementById("temas");
    izveleta_tema = izvelne.value;
    //window.open("dati/spele.html#"+izveleta_tema,"_self");
    window.location = "dati/spele.html#"+izveleta_tema;
}

function SPELES_IELADE(){
    //iegūst iepriekš izvēlētās tēmas numuru
    izveleta_tema = window.location.hash;
    izveleta_tema = izveleta_tema.replace(izveleta_tema[0], "");
    //alert(izveleta_tema);
    //gribu, lai atbilstoši izvēlētajai tēmai dati ielasās no datubāzes
    let dati = ["Daugavpils", "Jelgava", "Jūrmala", "Liepāja", "Rēzekne", "Rīga", "Ventspils",
                "Aizkraukles novads", "Alūksnes novads", "Augšdaugavas novads", "Ādažu novads",	
                "Balvu novads", "Bauskas novads", "Cēsu novads", "Dienvidkurzemes novads",
                "Dobeles novads", "Gulbenes novads", "Jelgavas novads", "Jēkabpils novads",
                "Krāslavas novads", "Kuldīgas novads",	"Ķekavas novads", "Limbažu novads",	
                "Līvānu novads", "Ludzas novads", "Madonas novads", "Mārupes novads", "Ogres novads",	
                "Olaines novads", "Preiļu novads", "Rēzeknes novads", "Ropažu novads",	"Salaspils novads",	
                "Saldus novads", "Saulkrastu novads", "Siguldas novads", "Smiltenes novads", "Talsu novads",	
                "Tukuma novads", "Valkas novads", "Valmieras novads", "Varakļānu novads", "Ventspils novads"];
    var jauktiDati = [];
    let n = dati.length;
    let q, x, y;
    let qn = n;
    for(let i=0; i<n; i++){
        q = Math.floor(Math.random() * qn);
        qn--;
        //jauktiDati[i] = dati[q];
        jauktiDati.push(dati[q]);
        dati[q] = dati[qn];
    }
    var sajauktiDati = [];
    let vertiba = "", pag="";
    for(let i=0; i<n; i++){
        vertiba = jauktiDati[i];
        q = vertiba.length;
        for(let k=0; k<q; k++){
            x = Math.floor(Math.random() * q);
            y = Math.floor(Math.random() * q);
            pag = vertiba;
            vertiba = vertiba.replace(vertiba[x], pag[y]);
            vertiba = vertiba.replace(vertiba[y], pag[x]);
        }
        sajauktiDati.push(vertiba);
    }
    //console.log(sajauktiDati);
    laiks.innerHTML = atlikusaisLaiks; 
    nr.innerHTML = sk+". vārds";   
	n = 0;
	vards.innerHTML=sajauktiDati[n];						
	vertejums.innerHTML="";									
	document.getElementById("turpinat").style.visibility = "hidden"; 

    
}