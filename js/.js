let xsettings= new Object();

xsettings["form"]=new Object();
let names = ['phone', 'email', 'name', 'family', 'city', 'location', 'typeArrival', 'date', 'dateArrival', 'consentinfo', 'familiarized', 'model'];
names.forEach(element => xsettings['form'][element] = new Object());

xsettings["form"]["phone"]['p']="pattern, ^\\d{11}$";
xsettings["form"]["email"]['p']="pattern, ^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[a-z]{2,6}$";
xsettings["form"]["name"]['p']="length, 2";
xsettings["form"]["family"]['p']="length, 2";
xsettings["form"]["city"]['p']="length, 2";
xsettings["form"]["location"]['p']="select";
xsettings["form"]["typeArrival"]['p']="select";
xsettings["form"]["date"]['p']="date, 01.01.1999";
xsettings["form"]["dateArrival"]['p']="date";
xsettings["form"]["consentinfo"]['p']='no';
xsettings["form"]["familiarized"]['p']='no';
xsettings["form"]["model"]['p']='no';


xsubmit('form')

xsettings["f"]=new Object();
names = ['buy', 'phonePu', 'emailPu', 'namePu', 'lastname', 'cityPu', 'modelPu', 'num', 'dateBuy', 'year', 'brand', 'modelBike', 'agree'];	
names.forEach(element => xsettings['f'][element] = new Object());

xsettings["f"]["buy"]['p']='no';
xsettings["f"]["phonePu"]['p']="pattern, ^\\d{11}$";
xsettings["f"]["emailPu"]['p']="pattern, ^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[a-z]{2,6}$";
xsettings["f"]["namePu"]['p']="length, 2";
xsettings["f"]["lastname"]['p']="length, 2";
xsettings["f"]["cityPu"]['p']="length, 2";
xsettings["f"]["modelPu"]['p']="length, 2"; //будет заменено на select
xsettings["f"]["num"]['p']="length, 11";
xsettings["f"]["dateBuy"]['p']="date";
xsettings["f"]["year"]['p']="select";
xsettings["f"]["brand"]['p']="select";
xsettings["f"]["modelBike"]['p']="select";
xsettings['f']['agree']['p'] = 'no';

xsubmit('f');

formValid();
fValid();


xsettings["ordere"] = new Object();
names = ['yearPu2', 'brandPu2', 'modelbikePu2', 'namePu2', 'lastnamePu2', 'cityPu2', 'phonePu2', 'emailPu2', 'agree'];
names.forEach(element => xsettings['ordere'][element] = new Object());

//xsettings['ordere']['modelPu2']['p'] = "length, 2";
xsettings['ordere']['yearPu2']['p'] = "select";
xsettings['ordere']['brandPu2']['p'] = "select";
xsettings['ordere']['modelbikePu2']['p'] = "select";
xsettings['ordere']['namePu2']['p'] = "length, 2";
xsettings['ordere']['lastnamePu2']['p'] = "length, 2";
xsettings['ordere']['cityPu2']['p'] = "length, 2";
xsettings['ordere']['phonePu2']['p'] = "pattern, ^\\d{11}$";
xsettings['ordere']['emailPu2']['p'] = "pattern, ^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[a-z]{2,6}$";
xsettings['ordere']['agree']['p'] = 'no';

orderValid();
xsubmit('ordere');

xsettings['becomeD'] = new Object();
names = ['cityPu3', 'magazin', 'site', 'yearPu3', 'face', 'position', 'phonePu3', 'emailPu3', 'inn', 'dues', 'agree'];
names.forEach(element => xsettings['becomeD'][element] = new Object());

xsettings['becomeD']['cityPu3']['p'] = "length, 2";
xsettings['becomeD']['magazin']['p'] = "length, 2";
xsettings['becomeD']['site']['p'] = "length, 2";
xsettings['becomeD']['yearPu3']['p'] = "select";
xsettings['becomeD']['face']['p'] = "length, 2";
xsettings['becomeD']['position']['p'] = "length, 2";
xsettings['becomeD']['phonePu3']['p'] = "pattern, ^\\d{11}$";
xsettings['becomeD']['emailPu3']['p'] = "pattern, ^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[a-z]{2,6}$";
xsettings['becomeD']['inn']['p'] = "pattern, ^\\d{10}$";
xsettings['becomeD']['dues']['p'] = "select";
xsettings['becomeD']['agree']['p'] = 'no';

dValid();
xsubmit('becomeD');

function xsubmit(fname)
{

	if(typeof xsettings[fname]==undefined) return;
	let els=document.getElementById(fname).elements;
	for(i=0;i<els.length;i++)
	{

		els[i].oninput = function()
		{

			let tmpres=xcheck(fname,this.id,this.value);
			if(tmpres==1)
			{
				
				this.parentElement.classList.remove('errorInput');
				this.parentElement.querySelector('div').classList.add('hidden');
				this.parentElement.querySelector('span').classList.add('hiddenSpan');
				if (typeof xsettings['form'][this.id] !== 'undefined')
				{
					xsettings['form'][this.id]['valid'] = true;
					checkButton('form');
				}
				else if (typeof xsettings['ordere'][this.id] !== 'undefined')
				{
					xsettings['ordere'][this.id]['valid'] = true;
					checkButton('ordere');
				}
				else if (typeof xsettings['becomeD'][this.id] !== 'undefined')
				{
					xsettings['becomeD'][this.id]['valid'] = true;
					checkButton('becomeD');
				}
				else 
				{
					xsettings['f'][this.id]['valid'] = true;
					checkButton('f');
				}

			}
			else if(tmpres==0)
			{
				
				this.parentElement.classList.add('errorInput');
				this.parentElement.querySelector('div').classList.remove('hidden');
				this.parentElement.querySelector('span').classList.remove('hiddenSpan');
				if (typeof xsettings['form'][this.id] !== 'undefined')
				{
					xsettings['form'][this.id]['valid'] = false;
					checkButton('form');
				}
				else if (typeof xsettings['ordere'][this.id] !== 'undefined')
				{
					xsettings['ordere'][this.id]['valid'] = false;
					checkButton('ordere');
				}
				else if (typeof xsettings['becomeD'][this.id] !== 'undefined')
				{
					xsettings['becomeD'][this.id]['valid'] = false;
					checkButton('becomeD');
				}
				else
				{
					xsettings['f'][this.id]['valid'] = false;
					checkButton('f');
				}

			}
			console.log(xsettings);
		}


	} 
} 

function xcheck(xform,xinput,xval)
{

	if (typeof xsettings[xform][xinput]['p'] == 'undefined' || xsettings[xform][xinput]<"") return -1;

	let tmpdata = xsettings[xform][xinput]['p'].split(', ');
	if(tmpdata[0]=='length')
	{
		if(xval.length<tmpdata[1]) return 0;
		return 1;
	}
	else if(tmpdata[0]=='pattern')
	{
		let tmpreg = new RegExp(tmpdata[1]);
		if(xval.match(tmpreg)==null) return 0;
		return 1;
	}
	else if(tmpdata[0]=='select')
	{
		if((xval !== 0) || (xval != ''))
		{
			return 1;
		}
		else
		{
			return 0;
		}
	}
	else if(tmpdata[0]=='date')
	{
		let y = new Date(xval.split(".").reverse().join(".")).getTime();
		if (typeof tmpdata[1] !== 'undefined')
		{
			let min = new Date(tmpdata[1].split(".").reverse().join(".")).getTime();
			
			if (!isNaN(y))
			{
				if (min < y)
				{
					return 0;
				}
				else
				{
					return 1;
				}
			}
			else
			{
				return 0;
			}	
		}	
		else
		{
			if(!isNaN(y))
			{
				return 1;
			}
			else
			{
				return 0;
			}
		}
	}
	else
	{
		return -1;
	}

//return 0; //not ok
//return 1; //ok
}

/*-----ВАЛИДАЦИЯ КНОПОК СОГЛАСИЯ И РЕГЛАМЕНТА-----*/
function xswitch(id)
{
	let tmpel=document.getElementById(id);
	tmpel.value==0?tmpel.value=1:tmpel.value=0;
}

function xset(id,val, thisid)
{
	document.getElementById(id).value=val;
	if (xsettings['form'][thisid]['valid'] == true)
	{
		xsettings['form'][thisid]['valid'] = false;
	}
	else
	{
		xsettings['form'][thisid]['valid'] = true;
	}
	checkButton('form');
}


function xsetT(f)
{
	if (xsettings[f]['agree']['valid'] == true)
	{
		xsettings[f]['agree']['valid'] = false;
	}
	else
	{
		xsettings[f]['agree']['valid'] = true;
	}
	checkButton(f);
}


/*----------------------------------------------*/


/*------АКТИВАЦИЯ РАДИО КНОПОК------*/
let rS = document.getElementById('ss');
let rF = document.getElementById('fr');
let rM = document.getElementById('mt');

function swr(active)
{

		switch (active)
		{
			case 1:
				if (rS.querySelector('.radioregion').classList.contains('rActive'))
				{
					rS.querySelector('.radioregion').classList.remove('rActive');
					xsettings['form']['model']['valid'] = false;
				}
				else
				{
					rS.querySelector('.radioregion').classList.add('rActive');
					xsettings['form']['model']['valid'] = true;
				}
				rF.querySelector('.radioregion').classList.remove('rActive');
				rM.querySelector('.radioregion').classList.remove('rActive');

				break;
			case 2:
				if (rF.querySelector('.radioregion').classList.contains('rActive'))
				{
					rF.querySelector('.radioregion').classList.remove('rActive');
					xsettings['form']['model']['valid'] = false;
				}
				else
				{
					rF.querySelector('.radioregion').classList.add('rActive');
					xsettings['form']['model']['valid'] = true;
				}

				rS.querySelector('.radioregion').classList.remove('rActive');
				rM.querySelector('.radioregion').classList.remove('rActive');

				break;
			case 3:
				if (rM.querySelector('.radioregion').classList.contains('rActive'))
				{
					rM.querySelector('.radioregion').classList.remove('rActive');
					xsettings['form']['model']['valid'] = false;
				}
				else
				{
					rM.querySelector('.radioregion').classList.add('rActive');
					xsettings['form']['model']['valid'] = true;
				}

				rF.querySelector('.radioregion').classList.remove('rActive');
				rS.querySelector('.radioregion').classList.remove('rActive');

				break;
		}		
		
		
	checkButton('form');
}
/*----------------------------------*/

function checkButton(type)
{ 
	
	let valid = true;

	for (let i in xsettings[type])
	{
		if ((typeof xsettings[type][i] != 'undefined') && (xsettings[type][i]['valid'] === false))
		{
			valid = false;
			break;
		}
	}

	let sendButton ='';
	if (type === 'form')
	{
		sendButton = document.getElementById('submit');
	}
	else if (type === 'ordere')
	{
		sendButton = document.getElementById('submitPu2');
	}
	else if (type === 'becomeD')
	{
		sendButton = document.getElementById('submitPu3');
	}
	else
	{
		sendButton = document.getElementById('submitPu');
	}

	if (valid)
	{
		sendButton.classList.remove('submitDisable');
	}
	else
	{
		if (!sendButton.classList.contains('submitDisable'))
		{
			sendButton.classList.add('submitDisable');
		}
	}

}


/*---------НАЧИНАЕТСЯ ОБРАБОТКА КЛИКОВ-------------*/




function tyk()
{
	let sendButton = document.getElementById('submit');
	if (!sendButton.classList.contains('submitDisable'))
	{
		checkInputData();
	}

}

function checkInputData()
{

/*
	let name = document.getElementById('name');
	let lastname = document.getElementById('family');
	
	let phone = document.getElementById('phone');
	let city = document.getElementById('city');
	let email = document.getElementById('email');
	let location = document.getElementById('location'); // 1-Самара, 2-Ульяновск 3-Москва ,4-Рязань
	let dateArrival = document.getElementById('dateArrival');
	let typeArrival = document.getElementById('typeArrival');
*/

	let SS = document.getElementById('ss').querySelector('.radioregion');
	let rSS = false;
	let freeride = document.getElementById('fr').querySelector('.radioregion');
	let rFreeride = false;
	let mountain = document.getElementById('mt').querySelector('.radioregion');
	let rMountain = false;
	
	if (SS.classList.contains('rActive'))
	{
		rSS = true;
	}
	else if (freeride.classList.contains('rActive'))
	{
		rFreeride = true;
	}
	else if (mountain.classList.contains('rActive'))
	{
		rMountain = true;
	}

	let birthday = document.getElementById('date');
	let birth = new Date(birthday.value.split(".").reverse().join(".")).getTime();

	let namesForm = ['phone', 'email', 'name', 'family', 'city', 'location', 'typeArrival', 'dateArrival'];
	let d = '';
	namesForm.forEach(element => d += element + '=' + document.getElementById(element).value + '&');

	d += 'birthday=' + birth + '&';
	d += 'rSS=' + rSS + '&';
	d += 'rFreeride=' + rFreeride + '&';
	d += 'rMountain=' + rMountain;
/*
	let data = 'name=' + name.value + '&';
	data += 'lastname=' + lastname.value + '&';
	
	data += 'phone=' + phone.value + '&'; 
	data += 'city=' + city.value + '&';
	data += 'email=' + email.value + '&';
	data += 'location=' + location.value + '&';
	data += 'dateArrival=' + dateArrival.value + '&';
	data += 'typeArrival=' + typeArrival.value + '&';
	data += 'rSS=' + rSS + '&';
	data += 'rFreeride=' + rFreeride + '&';
	data += 'rMountain=' + rMountain;
*/
 	fetch('request.php?'+d);

 	document.form.reset();
 	formValid();
 	rM.querySelector('.radioregion').classList.remove('rActive');
	rF.querySelector('.radioregion').classList.remove('rActive');
	rS.querySelector('.radioregion').classList.remove('rActive');
	checkButton('form');

}



function tykPa()
{
	let sendButtonPa = document.getElementById('submitPu');
	if (!sendButtonPa.classList.contains('submitDisable'))
	{
		checkInputDataPa();
	}
}

let modelB = '';

function modelChoice(mod)
{
	let inp = document.getElementById('ordere').querySelector('#popupModelName');
	inp.textContent = mod;
	modelB = mod;
}

function checkInputDataPa()
{
/* попытка упростить решение*/
	let last = Object.keys(xsettings['f'])[Object.keys(xsettings['f']).length-1];
	let d = '';
	for (let i in xsettings['f'])
	{
		if (i !== 'agree')
		{
			if (i === last)
			{
				d += i + '=' + document.getElementById(i).value;
			}
			else
			{
				d += i + '=' + document.getElementById(i).value + '&';
			}
		}
	}
/*------------------------*/
	

 	fetch('requestPa.php?'+d);
	
	document.f.reset();
 	fValid();
 	checkButton('f');
}

function tykPa2()
{
	let sendButtonPa = document.getElementById('submitPu2');
	if (!sendButtonPa.classList.contains('submitDisable'))
	{
		checkInputDataPa2();
	}
}

function checkInputDataPa2()
{
	let last = Object.keys(xsettings['ordere'])[Object.keys(xsettings['ordere']).length-1];
	let d = 'modelPu2=' + modelB + '&';
	console.log('model = ' + modelB);
	for (let i in xsettings['ordere'])
	{
		if (i !== 'agree')
		{
			if (i === last)
			{
				d += i + '=' + document.getElementById(i).value;
			}
			else
			{
				d += i + '=' + document.getElementById(i).value + '&';
			}
		}
	}

	fetch('requestPa2.php?'+d);

	document.ordere.reset();
 	orderValid();
 	checkButton('ordere');
}



function tykPa3()
{
	let sendButtonPa = document.getElementById('submitPu3');
	if (!sendButtonPa.classList.contains('submitDisable'))
	{
		checkInputDataPa3();
	}
}

function checkInputDataPa3()
{
	let last = Object.keys(xsettings['becomeD'])[Object.keys(xsettings['becomeD']).length-1];
	let d = '';
	for (let i in xsettings['becomeD'])
	{
		if (i !== 'agree')
		{
			if (i === last)
			{
				d += i + '=' + document.getElementById(i).value;
			}
			else
			{
				d += i + '=' + document.getElementById(i).value + '&';
			}
		}
	}

	fetch('requestPa3.php?'+d);

	document.becomeD.reset();
 	dValid();
 	checkButton('becomeD');
}



/*-----ПРОСТАВЛЕНИЕ ИЗНАЧАЛЬНЫХ ПАРАМЕТРОВ ВАЛИДАЦИИ-----*/
function dValid()
{
	for (let i in xsettings['becomeD'])
	{

		xsettings['becomeD'][i]['valid'] = false;
		
	}
	xsettings['becomeD']['agree']['valid'] = true;
}

function orderValid()
{
	for (let i in xsettings['ordere'])
	{

		xsettings['ordere'][i]['valid'] = false;
		
	}
	xsettings['ordere']['agree']['valid'] = true;
}

function formValid()
{
	for (let i in xsettings['form'])
	{
		if ((i === 'consentinfo') || (i === 'familiarized'))
		{
			xsettings['form'][i]['valid'] = true;
		}
		else
		{
			xsettings['form'][i]['valid'] = false;
		}	
	}
	xsettings['form']['typeArrival']['valid'] = true;
	xsettings['form']['location']['valid'] = true;
}

function fValid()
{
	for (let i in xsettings['f'])
	{

		xsettings['f'][i]['valid'] = false;
		
	}
	xsettings['f']['buy']['valid'] = true;
	xsettings['f']['agree']['valid'] = true;
}