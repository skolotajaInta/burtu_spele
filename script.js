var temas = ["", "Latvijas pilsētas", "Latvijas novadi un valstspilsētas", "Dzīvnieki", "Priekšmeti"];
var izveleta_tema=0;
var n;
var sk=1;
var atlikusaisLaiks="3:00";
var jauktiDati = [];
var sajauktiDati = [];

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
    n = dati.length;
    let q, x, y;
    let qn = n;
    for(let i=0; i<n; i++){
        q = Math.floor(Math.random() * qn);
        qn--;
        //jauktiDati[i] = dati[q];
        jauktiDati.push(dati[q]);
        dati[q] = dati[qn];
    }
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

function PARBAUDE(){
	var v=document.getElementById("atbilde").value; //nolasa, ko ievadījis lietotājs
    if(v.toUpperCase() == jauktiDati[n].toUpperCase()){    //bauda vai lietotāja ievadītais vārds sakrīt ar masīvā esošo
		atbilde.innerHTML="Pareizi!";    //parāda atbildi
		sk=sk+1;			//gatavojoties nākošā vārda minēšanai minamā vārda kārtas numuru palielina par 1
		vertejums.innerHTML="Pareizi! Tā turpināt!"; //parāda atbildi
        document.getElementById("turpinat").style.visibility = "visible"; //pogu TURPINĀT parāda
		document.getElementById("parbaudit").style.visibility = "hidden"; //pogu PĀRABUDĪT paslēpj
		document.getElementById("dzest").style.visibility = "hidden"; //pogu DZĒST paslēpj
	}else{
		vertejums.innerHTML="Nepareizi! Mēģini vēl!"; //parāda atbildi
	}
}

function TURPINAT(){
	if(sk>5){ //ja 5 vārdi atminēti
	    vertejums.innerHTML = "Lieliski, Tu atminēji visus vārdus!";  //parāda gala atbildi
		//paslēpj visus atlikušos formas elementus
		document.getElementById("nr").style.visibility = "hidden";
		document.getElementById("vards").style.visibility = "hidden";
		document.getElementById("atbilde").style.visibility = "hidden";	 
		document.getElementById("turpinat").style.visibility = "hidden"; 
		
	}else{ //ja 5 vārdi vēl nav atminēti
		nr.innerHTML = sk+" no 5";         //maina vārdu skaitītāja ierakstu
		n++;                               //maina vārdu numuru masīvā
		vards.innerHTML = sajauktiDati[n];			 //parāda nejauši izvēlētu vārdu
		document.getElementById("turpinat").style.visibility = "hidden"; //pogu TURPINĀT paslēpj
		document.getElementById("parbaudit").style.visibility = "visible"; //pogu PĀRABUDĪT parāda
		document.getElementById("dzest").style.visibility = "visible"; //pogu DZĒST parāda
		document.getElementById("atbilde").value = "";  //dzēš iepriekš ievadīto vārdu
		vertejums.innerHTML = "";						//dzēš atbildes lauka vērtību
	}
}

function DZEST(){
    document.getElementById("atbilde").value = "";  //dzēš ievadīto vārdu (teksta lauks)
	vertejums.innerHTML = "";   //dzēš atbildes novērtējumu (iezīme - label)
}