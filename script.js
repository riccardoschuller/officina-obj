var officina = {
	
	opel: {
		agila : {
			"# passeggeri": 5,
			cilindrata: 996
		},
		astra : {
			"# passeggeri": 5,
			cilindrata: 1686
		},
		corsa : {
			"# passeggeri": 4,
			cilindrata: 1248
		}
	},

	toyota: {
		aygo: {
			"# passeggeri": 4,
			cilindrata: 998
		},
		yaris: {
			"# passeggeri": 4,
			cilindrata: 1797
		},
		"rav 4": {
			"# passeggeri": 7,
			cilindrata: 2230
		},
	},

	renault: {
		clio: {
			"# passeggeri": 4,
			cilindrata: 898
		},
		captur: {
			"# passeggeri": 5,
			cilindrata: 1197
		},
		twingo: {
			"# passeggeri": 4,
			cilindrata: 898
		},
	}


}



console.log(officina)

officina.contaPasseggeri = function(brand){
	var passeggeriPerBrand = 0;

	for (var i in brand) {
		
		passeggeriPerBrand = passeggeriPerBrand += brand[i]["# passeggeri"];
		
		
	};

	return passeggeriPerBrand
}

console.log("L'Opel ha: " + officina.contaPasseggeri(officina.opel) + " passeggeri in totale");
console.log("La Toyota ha: " + officina.contaPasseggeri(officina.toyota) + " passeggeri in totale");
console.log("La Renault ha: " + officina.contaPasseggeri(officina.renault) + " passeggeri in totale");



function chiediCilindrata(){
	var clientCilindrata = prompt("Inserisci un numero di cilindrata", 800);
	if (isNaN(clientCilindrata)) {
		chiediCilindrata();
	};

	return clientCilindrata;
}

clientCilindrata = chiediCilindrata();

officina.confrontaCilindrata = function(brand){
	var autoCilindrata = [];
	for (var i in brand) {
		if (brand[i].cilindrata > clientCilindrata) {
			autoCilindrata.push(brand[i]);
		};
	};
	return autoCilindrata
}

console.log("Le auto con la cilindrata superiore a " + clientCilindrata + " sono: " + officina.confrontaCilindrata(officina.opel));
console.log("Le auto con la cilindrata superiore a " + clientCilindrata + " sono: " + officina.confrontaCilindrata(officina.toyota));
console.log("Le auto con la cilindrata superiore a " + clientCilindrata + " sono: " + officina.confrontaCilindrata(officina.renault));


officina.contaAuto = function(brand){
	var autoTotali = 0;
	for (var i in brand) {
		autoTotali ++;
	};
	return autoTotali;
}

console.log("In officina si ha un totale di: " + (officina.contaAuto(officina.opel) + officina.contaAuto(officina.toyota) + officina.contaAuto(officina.renault)) + " auto.")






