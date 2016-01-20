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
		passeggeriPerBrand = passeggeriPerBrand + brand["# passeggeri"]
		console.log(passeggeriPerBrand)
		
	};

	return passeggeriPerBrand
}

var pasOpel = officina.contaPasseggeri(officina.toyota);