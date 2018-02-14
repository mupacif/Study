	var today = new Date();
	var ajdText = today.getDay();
	var text = "";
	switch(ajdText)
	{
		case 0:  text = `nous sommes dimanche`; break;
		case 1:  text = `nous sommes lundi`; break;
		case 2:  text = `nous sommes mardi`; break;
		case 3:  text = `nous sommes mercredi`; break;
		case 4:  text = `nous sommes jeudi`; break;
		case 5:  text = `nous sommes vendredi`; break;
		case 6:  text = `nous sommes samedi`; break;
	
	}
	if(today.getDate() == 14 && today.getMonth()+1 == 2)
		text += " et nous somme la saint-valentin";

	alert(text);