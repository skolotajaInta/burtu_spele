var temas = ["", "Latvijas pilsētas", "Latvijas novadi un valstspilsētas", "Dzīvnieki", "Priekšmeti"];
var izveleta_tema=0;

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
    //vajag iegūt iepriekš izvēlētās tēmas numuru
    alert(izveleta_tema);
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
    let q;
    let qn = n;
    for(let i=0; i<n; i++){
        q = Math.floor(Math.random() * qn);
        qn--;
        jauktiDati[i] = dati[q];
        dati[q] = dati[qn];
    }
    var sajauktiDati = jauktiDati;
    //for(let i=)
    console.log(sajauktiDati);


    
}