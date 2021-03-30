let xsettings= new Object();

xsettings["form"]=new Object();
let names = ['phone', 'email', 'name', 'family', 'city', 'location', 'typeArrival', 'date', 'dateArrival', 'consentinfo', 'familiarized', 'model'];
names.forEach(element => xsettings['form'][element] = new Object());

xsettings["form"]["phone"]['p']="pattern, ^([\\+]*[7|8])(\\(*\\d{3}\\)*)(\\d{3}-*)(\\d{2}-*)(\\d{2})$";
xsettings["form"]["email"]['p']="pattern, ^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[a-z]{2,6}$";
xsettings["form"]["name"]['p']="length, 2";
xsettings["form"]["family"]['p']="length, 2";
xsettings["form"]["city"]['p']="length, 2";
xsettings["form"]["location"]['p']="select";
xsettings["form"]["typeArrival"]['p']="select2";
xsettings["form"]["date"]['p']="date, 01.01.1999";
xsettings["form"]["dateArrival"]['p']="select";
xsettings["form"]["consentinfo"]['p']='no';
xsettings["form"]["familiarized"]['p']='no';
xsettings["form"]["model"]['p']='no';


// xsubmit('form')

xsettings["f"]=new Object();
names = ['buy', 'phonePu', 'emailPu', 'namePu', 'lastname', 'cityPu', 'modelPu', 'num', 'dateBuy', 'year', 'brand', 'modelBike', 'agree'];
names.forEach(element => xsettings['f'][element] = new Object());

xsettings["f"]["buy"]['p']='no';
xsettings["f"]["phonePu"]['p']="pattern, ^([\\+]*[7|8])(\\(*\\d{3}\\)*)(\\d{3}-*)(\\d{2}-*)(\\d{2})$";
xsettings["f"]["emailPu"]['p']="pattern, ^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[a-z]{2,6}$";
xsettings["f"]["namePu"]['p']="length, 2";
xsettings["f"]["lastname"]['p']="length, 2";
xsettings["f"]["cityPu"]['p']="length, 2";
xsettings["f"]["modelPu"]['p']="select";
xsettings["f"]["num"]['p']="length, 11";
xsettings["f"]["dateBuy"]['p']="date";
xsettings["f"]["year"]['p']="select";
xsettings["f"]["brand"]['p']="select";
xsettings["f"]["modelBike"]['p']="length, 2";
xsettings['f']['agree']['p'] = 'no';

// xsubmit('f');

formValid();
fValid();


xsettings["ordere"] = new Object();
names = ['yearPu2', 'brandPu2', 'modelbikePu2', 'namePu2', 'lastnamePu2', 'cityPu2', 'phonePu2', 'emailPu2', 'agree'];
names.forEach(element => xsettings['ordere'][element] = new Object());

//xsettings['ordere']['modelPu2']['p'] = "length, 2";
xsettings['ordere']['yearPu2']['p'] = "select";
xsettings['ordere']['brandPu2']['p'] = "select";
xsettings['ordere']['modelbikePu2']['p'] = "length, 2";
xsettings['ordere']['namePu2']['p'] = "length, 2";
xsettings['ordere']['lastnamePu2']['p'] = "length, 2";
xsettings['ordere']['cityPu2']['p'] = "length, 2";
xsettings['ordere']['phonePu2']['p'] = "pattern, ^([\\+]*[7|8])(\\(*\\d{3}\\)*)(\\d{3}-*)(\\d{2}-*)(\\d{2})$";
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
xsettings['becomeD']['phonePu3']['p'] = "pattern, ^([\\+]*[7|8])(\\(*\\d{3}\\)*)(\\d{3}-*)(\\d{2}-*)(\\d{2})$";
xsettings['becomeD']['emailPu3']['p'] = "pattern, ^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[a-z]{2,6}$";
xsettings['becomeD']['inn']['p'] = "inn";
xsettings['becomeD']['dues']['p'] = "select";
xsettings['becomeD']['agree']['p'] = 'no';

dValid();
// xsubmit('becomeD');
// changeCalendar();


/**/



function checkError(nameForm)
{
	
	for (let i in xsettings[nameForm])
	{
		if (!xsettings[nameForm][i]['valid'])
		{
			if ((i != 'model') && (i != 'agree') && (i != 'consentinfo') && (i != 'familiarized'))
			{
				let element = document.getElementById(i);
				element.parentElement.classList.add('errorInput');
				element.parentElement.querySelector('div').classList.remove('hidden');
				element.parentElement.querySelector('span').classList.remove('hiddenSpan');
			}
		}
	}
	if (nameForm == "form")
	{
		if (!xsettings[nameForm]['consentinfo']['valid'] || !xsettings[nameForm]['familiarized']['valid'])
		{
			let element = document.getElementById(nameForm).querySelector('#agreeError').querySelector('.errorMessage');
			element.classList.remove('hidden');
		}
		if (!xsettings[nameForm]['model']['valid'])
		{
			document.getElementById('radioError').classList.remove('hidden');
		}
	}
	else
	{
		if (!xsettings[nameForm]['agree']['valid'])
		{
			let element = document.getElementById(nameForm).querySelector('.checkboxlist').parentElement.querySelector('.errorMessage');
			element.classList.remove('hidden');
		}
	}
	
}




/**/


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
				this.parentElement.classList.add('filled');
				xsettings[fname][this.id]['valid'] = true;
				checkButton(fname);

			}
			else if(tmpres==0)
			{
				
				this.parentElement.classList.add('errorInput');
				this.parentElement.querySelector('div').classList.remove('hidden');
				this.parentElement.querySelector('span').classList.remove('hiddenSpan');
				this.parentElement.classList.remove('filled');
				xsettings[fname][this.id]['valid'] = false;
				checkButton(fname);

			}
			else
			{
				this.parentElement.classList.add('filled');
			}
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
	else if(tmpdata[0] == 'inn')
	{
		return innValidate(xval);
	}
	else if(tmpdata[0]=='date')
	{	
		let y = new Date(xval.split(".").reverse().join("/")).getTime();
		console.log(y)
		if (typeof tmpdata[1] !== 'undefined')
		{	
			
			let min = new Date(tmpdata[1].split(".").reverse().join("/")).getTime();
			console.log(min)
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

function clearFilled(name)
{
	for (let i in xsettings[name])
	{
		let tmpdata = xsettings[name][i]['p'].split(', ');
		if ((tmpdata[0] === 'length') || (tmpdata[0] === 'pattern') || (tmpdata[0] === 'date') || (tmpdata[0] === 'inn') || (tmpdata[0] === 'select'))
		{
			let e = document.getElementById(i);
			e.parentElement.classList.remove('filled');
		}
	}
}


/*-----Ð â€™Ð Ñ’Ð â€ºÐ Â˜Ð â€Ð Ñ’Ð Â¦Ð Â˜Ð Ð‡ Ð Ñ™Ð ÑœÐ Ñ›Ð ÑŸÐ Ñ›Ð Ñ™ Ð ÐŽÐ Ñ›Ð â€œÐ â€ºÐ Ñ’Ð ÐŽÐ Â˜Ð Ð‡ Ð Â˜ Ð Â Ð â€¢Ð â€œÐ â€ºÐ Ñ’Ð ÑšÐ â€¢Ð ÑœÐ ÑžÐ Ñ’-----*/
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
		let element = document.getElementById('form').querySelector('#agreeError').querySelector('.errorMessage');
		element.classList.remove('hidden');
		
	}
	else
	{
		xsettings['form'][thisid]['valid'] = true;
		let element = document.getElementById('form').querySelector('#agreeError').querySelector('.errorMessage');
		if (xsettings['form']['consentinfo']['valid'] && xsettings['form']['familiarized']['valid'])
		{
			element.classList.add('hidden');
		}
	}
	checkButton('form');

}


function xsetT(f)
{	
	console.log(f);
	console.log(xsettings)
	if (xsettings[f]['agree']['valid'] == true)
	{
		xsettings[f]['agree']['valid'] = false;
		let element = document.getElementById(f).querySelector('.checkboxlist').parentElement.querySelector('.errorMessage');
		element.classList.remove('hidden');
	}
	else
	{
		xsettings[f]['agree']['valid'] = true;
		let element = document.getElementById(f).querySelector('.checkboxlist').parentElement.querySelector('.errorMessage');
		element.classList.add('hidden');
	}
	checkButton(f);
}


/*----------------------------------------------*/


/*------Ð Ñ’Ð Ñ™Ð ÑžÐ Â˜Ð â€™Ð Ñ’Ð Â¦Ð Â˜Ð Ð‡ Ð Â Ð Ñ’Ð â€Ð Â˜Ð Ñ› Ð Ñ™Ð ÑœÐ Ñ›Ð ÑŸÐ Ñ›Ð Ñ™------*/
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
	if (xsettings['form']['model']['valid'])
	{
		document.getElementById('radioError').classList.add('hidden');
	}
	else
	{
		document.getElementById('radioError').classList.remove('hidden');
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


/*---------Ð ÑœÐ Ñ’Ð Â§Ð Â˜Ð ÑœÐ Ñ’Ð â€¢Ð ÑžÐ ÐŽÐ Ð‡ Ð Ñ›Ð â€˜Ð Â Ð Ñ’Ð â€˜Ð Ñ›Ð ÑžÐ Ñ™Ð Ñ’ Ð Ñ™Ð â€ºÐ Â˜Ð Ñ™Ð Ñ›Ð â€™-------------*/

function tyk()
{
	let sendButton = document.getElementById('submit');
	if (!sendButton.classList.contains('submitDisable'))
	{
		checkInputData();
	}
	else
	{
		checkError('form');
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
        let location = document.getElementById('location'); // 1-Ð ÐŽÐ Â°Ð Ñ˜Ð Â°Ð¡Ð‚Ð Â°, 2-Ð ÐˆÐ Â»Ð¡ÐŠÐ¡ÐÐ Ð…Ð Ñ•Ð Ð†Ð¡ÐƒÐ Ñ” 3-Ð ÑšÐ Ñ•Ð¡ÐƒÐ Ñ”Ð Ð†Ð Â° ,4-Ð Â Ð¡ÐÐ Â·Ð Â°Ð Ð…Ð¡ÐŠ
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
    console.log(d)
	fetch('request.php?'+d);
/*
	let logs = '';
	namesForm.forEach(element =>logs += document.getElementById(element).parentElement.querySelector('p').textContent +'=' + document.getElementById(element).value +'&');
	//const regex = new RegExp('_*', 'g');
	logs += 'end=end';
	fetch('adlogs.php?'+logs);*/

	let logs = 'Ôîðìà=Òåñò Äðàéâ&';
	namesForm.forEach(element =>
	{
		logs += document.getElementById(element).parentElement.querySelector('p').textContent +'=' + document.getElementById(element).value +'&';
		logs = logs.replace('_*', '');
	});
	logs += 'Äåíü Ðîæäåíèÿ=' + birthday.value + '&';
	if (rSS == true)
	{
		logs += 'Ìîäåëü=SuperSport';
	}
	else if (rFreeride)
	{
		logs += 'Ìîäåëü=Freeride';
	}
	else
	{
		logs += 'Ìîäåëü=Mountain';
	}
	fetch('adlogs.php?'+logs);
	document.form.reset();
	formValid();
	rM.querySelector('.radioregion').classList.remove('rActive');
	rF.querySelector('.radioregion').classList.remove('rActive');
	rS.querySelector('.radioregion').classList.remove('rActive');
	checkButton('form');
	fadeIn('form','.formSubmit');
	clearFilled('form');
	setTimeout(() => fadeOut('form', '.formSubmit'), 3000);
}

function tykPa()
{
	let sendButtonPa = document.getElementById('submitPu');
	if (!sendButtonPa.classList.contains('submitDisable'))
	{
		checkInputDataPa();
	}
	else
	{
		checkError('f');
	}
}

let modelB = '';

function modelChoice(mod)
{
	let inp = document.getElementById('ordere').querySelector('#popupModelName');
	inp.textContent = mod;
	modelB = mod;
}
console.log(modelB)
function checkInputDataPa()
{
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

	fetch('requestPa.php?'+d);

	let logs = 'Ôîðìà=Çàðåãèñòðèðîâàòü&';
	for (let element in xsettings['f'])
	{
		if (element !== 'agree')
		{
			if (element === last)
			{
				logs += document.getElementById(element).parentElement.querySelector('p').textContent +'=' + document.getElementById(element).value;
				logs = logs.replace('_*', '');
			}
			else
			{
				logs += document.getElementById(element).parentElement.querySelector('p').textContent +'=' + document.getElementById(element).value +'&';
				logs = logs.replace('_*', '');
			}
		}
	}

	fetch('adlogs.php?'+logs);

	document.f.reset();
	fValid();
	checkButton('f');
	let a = document.getElementById('f');
	a.classList.add('positionRelative');
	//a.style.position = 'relative';
	fadeIn('f', '.formSubmit');
	clearFilled('f');
	setTimeout(() => fadeOut('f' ,'.formSubmit'), 3000);
}

function tykPa2()
{	
	let sendButtonPa = document.getElementById('submitPu2');
	if (!sendButtonPa.classList.contains('submitDisable'))
	{
		checkInputDataPa2();
	}
	else
	{
		checkError('ordere');
	}
}

function checkInputDataPa2()
{	
	let last = Object.keys(xsettings['ordere'])[Object.keys(xsettings['ordere']).length-1];
	let d = 'modelPu2=' + modelB + '&';
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

	let logs = 'Ôîðìà=Çàêàçàòü&';
	for (let element in xsettings['ordere'])
	{
		if (element !== 'agree')
		{
			if (element === last)
			{
				logs += document.getElementById(element).parentElement.querySelector('p').textContent +'=' + document.getElementById(element).value;
				logs = logs.replace('_*', '');
			}
			else
			{
				logs += document.getElementById(element).parentElement.querySelector('p').textContent +'=' + document.getElementById(element).value +'&';
				logs = logs.replace('_*', '');
			}
		}
	}

	fetch('adlogs.php?'+logs);


	document.ordere.reset();
	orderValid();
	checkButton('ordere');
	let a = document.getElementById('ordere');
	a.classList.add('positionRelative');
	//a.style.position = 'relative';
	fadeIn('ordere', '.formSubmit');
	clearFilled('ordere');
	setTimeout(() => fadeOut('ordere', '.formSubmit'), 3000);
}



function tykPa3()
{
	let sendButtonPa = document.getElementById('submitPu3');
	if (!sendButtonPa.classList.contains('submitDisable'))
	{
		checkInputDataPa3();
	}
	else
	{
		checkError('becomeD');
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


	let logs = 'Ôîðìà=Ñòàòü Äèëåðîì&';
	for (let element in xsettings['becomeD'])
	{
		if (element !== 'agree')
		{
			if (element === last)
			{
				logs += document.getElementById(element).parentElement.querySelector('p').textContent +'=' + document.getElementById(element).value;
				logs = logs.replace('_*', '');
			}
			else
			{
				logs += document.getElementById(element).parentElement.querySelector('p').textContent +'=' + document.getElementById(element).value +'&';
				logs = logs.replace('_*', '');
			}
		}
	}

	fetch('adlogs.php?'+logs);

	document.becomeD.reset();
	dValid();
	checkButton('becomeD');
	let a = document.getElementById('becomeD');
	a.classList.add('positionRelative');
	//a.style.position = 'relative';
	fadeIn('becomeD','.formSubmit');
	clearFilled('becomeD');
	setTimeout(() => fadeOut('becomeD', '.formSubmit'), 3000);
}



/*-----Ð ÑŸÐ Â Ð Ñ›Ð ÐŽÐ ÑžÐ Ñ’Ð â€™Ð â€ºÐ â€¢Ð ÑœÐ Â˜Ð â€¢ Ð Â˜Ð â€”Ð ÑœÐ Ñ’Ð Â§Ð Ñ’Ð â€ºÐ Â¬Ð ÑœÐ Â«Ð Ò Ð ÑŸÐ Ñ’Ð Â Ð Ñ’Ð ÑšÐ â€¢Ð ÑžÐ Â Ð Ñ›Ð â€™ Ð â€™Ð Ñ’Ð â€ºÐ Â˜Ð â€Ð Ñ’Ð Â¦Ð Â˜Ð Â˜-----*/
function dValid()
{
	for (let i in xsettings['becomeD'])
	{

		xsettings['becomeD'][i]['valid'] = false;

	}
	xsettings['becomeD']['agree']['valid'] = true;
	/*
	xsettings['becomeD']['yearPu3']['valid'] = true;
	xsettings['becomeD']['dues']['valid'] = true;
	*/
}

function orderValid()
{
	for (let i in xsettings['ordere'])
	{

		xsettings['ordere'][i]['valid'] = false;

	}
	xsettings['ordere']['agree']['valid'] = true;
	/*
	xsettings['ordere']['yearPu2']['valid'] = true;
	xsettings['ordere']['brandPu2']['valid'] = true;
	xsettings['ordere']['modelbikePu2']['valid'] = true;
	*/
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
	//xsettings['form']['location']['valid'] = true;
	//xsettings["form"]["dateArrival"]['valid']= true;
}

function fValid()
{
	for (let i in xsettings['f'])
	{

		xsettings['f'][i]['valid'] = false;

	}
	xsettings['f']['buy']['valid'] = true;
	xsettings['f']['agree']['valid'] = true;
	document.getElementById('buy').parentElement.classList.remove('filled');
	//xsettings["f"]["year"]['valid']= true;
	//xsettings["f"]["brand"]['valid']= true;
	//xsettings["f"]["modelPu"]['valid']= true;

}


/*----Ð â€™Ð Ñ’Ð â€ºÐ Â˜Ð â€Ð Ñ’Ð Â¦Ð Â˜Ð Ð‡ Ð Â˜Ð ÑœÐ Ñœ--------*/
function innValidate(inn) {
	var result = 0;
	if (typeof inn === 'number') {
		inn = inn.toString();
	} else if (typeof inn !== 'string') {
		inn = '';
	}
	if (!inn.length) {
		return 0;
	} else if ([10, 12].indexOf(inn.length) === -1) {
		return 0;
	} else {
		var checkDigit = function (inn, coefficients) {
			var n = 0;
			for (var i in coefficients) {
				n += coefficients[i] * inn[i];
			}
			return parseInt(n % 11 % 10);
		};
		switch (inn.length) {
			case 10:
				var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
				if (n10 === parseInt(inn[9])) {
					result = 1;
				}
				break;
			case 12:
				var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
				var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
				if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
					result = 1;
				}
				break;
		}
		if (result == 0) {
			return 0;
		}
	}
	return result;
}
/*------------------------------------*/



// 


/*--------------Ð Ñ™Ð Ñ’Ð â€ºÐ â€¢Ð ÑœÐ â€Ð Ñ’Ð Â Ð Â¬-----------------*/


function initCalendar(el) {
	el = typeof el === 'string' ? document.querySelector(el) : el;
	if (el && el.id) {
		window[`${el.id}Calendar`] = new Calendar(el);
	}
}

// Ð Ñ™Ð Â»Ð Â°Ð¡ÐƒÐ¡Ðƒ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð

class Calendar {
	constructor(obj) {
		this.element = obj;
		this.popUp = obj.closest('.popupForm');
		this.element.addEventListener('focus', () => this.init());
	}

	// Ð Ð°Ð·Ð¼ÐµÑ‚ÐºÐ° ÐºÐ°Ð»ÐµÐ½Ð´Ð°Ñ€Ñ:
  markup =
  `<div class='input-area'>
    <div class='month-navigator'>
      <div class='month-previous'></div>
      <div class='nav-center'>
        <div class='month'>October 2019</div>
        <div class='years-nav'>
          <div class='prev-year'></div>
          <div class='next-year'></div>
        </div>
      </div>
      <div class='month-next'></div>
    </div>
    <table class='tbl-calendar'>
      <thead class='thead'>
        <tr class='row-days'>
          <th class='th-day'>Пн</th>
          <th class='th-day'>Вт</th>
          <th class='th-day'>Ср</th>
          <th class='th-day'>Чт</th>
          <th class='th-day'>Пт</th>
          <th class='th-day'>Сб</th>
          <th class='th-day'>Вс</th>
        </tr>
      </thead>
      <tbody class='tbody'></tbody>
    </table>
  </div>`;


	// Ð Â˜Ð Ð…Ð Ñ‘Ð¡â€ Ð Ñ‘Ð Â°Ð Â»Ð Ñ‘Ð Â·Ð Â°Ð¡â€ Ð Ñ‘Ð¡Ð Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð
	init() {
		if (this.cContainer) {
			return;
		}
		if (this.element.value == '') {
			this.savedDate = new Date('1990-01-01');
		} else {
			var strDt = this.element.value;
			var strDtArr = strDt.split(/\/|\.|-/);
			strDt = strDtArr[2] + '-' + strDtArr[1] + '-' + strDtArr[0];
			this.savedDate = new Date(strDt);
			if(isNaN(this.savedDate.getTime())) {
				this.savedDate = new Date();
			}
			if (this.savedDate.getFullYear() < '1900') {
				this.savedDate = new Date();
			}
		}

		this.selectedDate = this.savedDate;
		this.currentMonth = this.savedDate.getMonth();
		this.currentYear = this.savedDate.getFullYear();

		this.months = [
      		{ fullname: 'Январь', shortname: 'Янв' },
      		{ fullname: 'Февраль', shortname: 'Фев' },
      		{ fullname: 'Март', shortname: 'Мар' },
      		{ fullname: 'Апрель', shortname: 'Апр' },
     		{ fullname: 'Май', shortname: 'Май' },
      		{ fullname: 'Июнь', shortname: 'Июн' },
      		{ fullname: 'Июль', shortname: 'Июл' },
      		{ fullname: 'Август', shortname: 'Авг' },
      		{ fullname: 'Сентябрь', shortname: 'Сен' },
      		{ fullname: 'Октябрь', shortname: 'Окт' },
      		{ fullname: 'Ноябрь', shortname: 'Ноя' },
      		{ fullname: 'Декабрь', shortname: 'Дек' },
    ];

    this.days = [
      		{ fullname: 'Воскресенье', shortname: 'Вс' },
      		{ fullname: 'Понедельник', shortname: 'Пн' },
      		{ fullname: 'Вторник', shortname: 'Вт' },
      		{ fullname: 'Среда', shortname: 'Ср' },
      		{ fullname: 'Четверг', shortname: 'Чт' },
      		{ fullname: 'Пятница', shortname: 'Пт' },
      		{ fullname: 'Суббота', shortname: 'Сб' },
    ];

		this.create();
		this.addEventListeners();
		this.updateCalendar(this.currentMonth, this.currentYear);
	}

	// Ð ÐŽÐ Ñ•Ð Â·Ð Ò‘Ð Â°Ð Ð…Ð Ñ‘Ð Âµ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð:
	create() {
		// Ð ÐŽÐ Ñ•Ð Â·Ð Ò‘Ð Â°Ð Ð…Ð Ñ‘Ð Âµ Ð Ñ”Ð Ñ•Ð Ð…Ð¡â€šÐ ÂµÐ â„–Ð Ð…Ð ÂµÐ¡Ð‚Ð Â°:
		this.cContainer = document.createElement('div');
		this.cContainer.classList.add('calendar');
		this.setPosition();

		// Ð â€Ð Ñ•Ð Â±Ð Â°Ð Ð†Ð Â»Ð ÂµÐ Ð…Ð Ñ‘Ð Âµ Ð¡Ð‚Ð Â°Ð Â·Ð Ñ˜Ð ÂµÐ¡â€šÐ Ñ”Ð Ñ‘ Ð Ð† Ð Ñ”Ð Ñ•Ð Ð…Ð¡â€šÐ ÂµÐ â„–Ð Ð…Ð ÂµÐ¡Ð‚:
		this.cContainer.innerHTML = this.markup;

		// Ð â€Ð Ñ•Ð Â±Ð Â°Ð Ð†Ð Â»Ð ÂµÐ Ð…Ð Ñ‘Ð Âµ Ð Ñ”Ð Ñ•Ð Ð…Ð¡â€šÐ ÂµÐ â„–Ð Ð…Ð ÂµÐ¡Ð‚Ð Â° Ð Ð…Ð Â° Ð¡ÐƒÐ¡â€šÐ¡Ð‚Ð Â°Ð Ð…Ð Ñ‘Ð¡â€ Ð¡Ñ“:
		if (this.popUp) {
			this.cContainer.style.zIndex = '420';
			this.popUp.appendChild(this.cContainer);
		} else {
			this.cContainer.style.zIndex = '100';
			document.body.appendChild(this.cContainer);
		}

		// Ð ÑŸÐ Ñ•Ð Â»Ð¡Ñ“Ð¡â€¡Ð ÂµÐ Ð…Ð Ñ‘Ð Âµ Ð Ð…Ð ÂµÐ Ñ•Ð Â±Ð¡â€¦Ð Ñ•Ð Ò‘Ð Ñ‘Ð Ñ˜Ð¡â€¹Ð¡â€¦ Ð¡ÐŒÐ Â»Ð ÂµÐ Ñ˜Ð ÂµÐ Ð…Ð¡â€šÐ Ñ•Ð Ð† Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð:
		this.cInputArea = this.cContainer.getElementsByClassName('input-area')[0];
		this.cMonthNavigator = this.cInputArea.getElementsByClassName('month-navigator')[0];
		this.cMonthPrevious = this.cMonthNavigator.getElementsByClassName('month-previous')[0];
		this.cMonthNav = this.cMonthNavigator.getElementsByClassName('month')[0];
		this.cMonthNext = this.cMonthNavigator.getElementsByClassName('month-next')[0];
		this.cYearPrev = this.cMonthNavigator.getElementsByClassName('prev-year')[0];
		this.cYearNext = this.cMonthNavigator.getElementsByClassName('next-year')[0];
		this.cNavCenter = this.cInputArea.getElementsByClassName('nav-center')[0];
		this.cYearsNav = this.cInputArea.getElementsByClassName('years-nav')[0];
		this.tBody = this.cInputArea.getElementsByClassName('tbody')[0];
	}

	// Ð ÑŸÐ Ñ•Ð Â·Ð Ñ‘Ð¡â€ Ð Ñ‘Ð Ñ•Ð Ð…Ð Ñ‘Ð¡Ð‚Ð Ñ•Ð Ð†Ð Â°Ð Ð…Ð Ñ‘Ð Âµ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð:
	setPosition = () => {
		if (window.getComputedStyle(this.element).display === 'none') {
			this.hide();
			return;
		}
		var rect = this.element.getBoundingClientRect(),
			inputWidth = this.element.offsetWidth,
			scroll;
		if (this.popUp) {
			scroll = this.popUp.scrollTop;
		} else {
			scroll = window.pageYOffset || document.documentElement.scrollTop;
		}
		this.cContainer.style.left = rect.left + 'px';
		this.cContainer.style.top = scroll + rect.top + rect.height + 'px';
		this.cContainer.style.width = inputWidth + 'px';
	}

	// Ð ÑœÐ Â°Ð Ð†Ð ÂµÐ¡â‚¬Ð Ñ‘Ð Ð†Ð Â°Ð Ð…Ð Ñ‘Ð Âµ Ð Ñ•Ð Â±Ð¡Ð‚Ð Â°Ð Â±Ð Ñ•Ð¡â€šÐ¡â€¡Ð Ñ‘Ð Ñ”Ð Ñ•Ð Ð† Ð¡ÐƒÐ Ñ•Ð Â±Ð¡â€¹Ð¡â€šÐ Ñ‘Ð â„–:
	addEventListeners() {
		// Ð Ñ˜Ð ÂµÐ¡ÐƒÐ¡ÐÐ¡â€  Ð Ð…Ð Â°Ð Â·Ð Â°Ð Ò‘
		this.cMonthPrevious.addEventListener('click', () => this.previous());
		// Ð Ñ˜Ð ÂµÐ¡ÐƒÐ¡ÐÐ¡â€  Ð Ð†Ð Ñ—Ð ÂµÐ¡Ð‚Ð ÂµÐ Ò‘
		this.cMonthNext.addEventListener('click', () => this.next());
		// Ð Ñ–Ð Ñ•Ð Ò‘ Ð Ð…Ð Â°Ð Â·Ð Â°Ð Ò‘
		this.cYearPrev.addEventListener('click', () => this.previousYear());
		// Ð Ñ–Ð Ñ•Ð Ò‘ Ð Ð†Ð Ñ—Ð ÂµÐ¡Ð‚Ð ÂµÐ Ò‘
		this.cYearNext.addEventListener('click', () => this.nextYear());
		// Ð¡Ñ“Ð¡ÐƒÐ¡â€šÐ Â°Ð Ð…Ð Ñ•Ð Ð†Ð Ñ”Ð Â° Ð Ò‘Ð Â°Ð¡â€šÐ¡â€¹
		this.tBody.addEventListener('click', () => this.setDate());
		// Ð¡ÐƒÐ Ñ”Ð¡Ð‚Ð¡â€¹Ð¡â€šÐ Ñ‘Ð Âµ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð Ð Ñ—Ð¡Ð‚Ð Ñ‘ Ð Ñ”Ð Â»Ð Ñ‘Ð Ñ”Ð Âµ Ð Ð†Ð Ð…Ð Âµ Ð ÂµÐ Ñ–Ð Ñ• Ð¡ÐƒÐ Â°Ð Ñ˜Ð Ñ•Ð Ñ–Ð Ñ•
		window.addEventListener('click', this.hide);
		// Ð Ñ—Ð Ñ•Ð Â·Ð Ñ‘Ð¡â€ Ð Ñ‘Ð Ñ•Ð Ð…Ð Ñ‘Ð¡Ð‚Ð Ñ•Ð Ð†Ð Â°Ð Ð…Ð Ñ‘Ð Âµ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð
		window.addEventListener('scroll', this.setPosition);
		window.addEventListener('resize', this.setPosition);
	}

	// Ð ÐŽÐ Ñ•Ð Â·Ð Ò‘Ð Â°Ð Ð…Ð Ñ‘Ð Âµ Ð¡ÐƒÐ Ñ•Ð Ò‘Ð ÂµÐ¡Ð‚Ð Â¶Ð Ñ‘Ð Ñ˜Ð Ñ•Ð Ñ–Ð Ñ• Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð:
	updateCalendar(month, year) {
		// Ð Ñ”Ð Ñ•Ð Â»-Ð Ð†Ð Ñ• Ð Ò‘Ð Ð…Ð ÂµÐ â„– Ð Ð† Ð Ñ˜Ð ÂµÐ¡ÐƒÐ¡ÐÐ¡â€ Ð Âµ
		var daysInMonth = new Date(year, month + 1, 0).getDate();
		this.tBody.innerHTML = ''; // Ð Ñ•Ð¡â€¡Ð Ñ‘Ð¡â€°Ð Â°Ð ÂµÐ Ñ˜ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡ÐŠ
		// Ð Ð…Ð Â°Ð Â·Ð Ð†Ð Â°Ð Ð…Ð Ñ‘Ð Âµ Ð Ñ˜Ð ÂµÐ¡ÐƒÐ¡ÐÐ¡â€ Ð Â° Ð Ð† Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð Âµ
		this.cMonthNav.innerHTML = this.months[month].fullname + ' ' + year;
		var date = new Date(year, month, 1); // Ð ÑŸÐ ÂµÐ¡Ð‚Ð Ð†Ð¡â€¹Ð â„– Ð Ò‘Ð ÂµÐ Ð…Ð¡ÐŠ Ð Ð†Ð¡â€¹Ð Â±Ð¡Ð‚Ð Â°Ð Ð…Ð Ð…Ð Ñ•Ð Ñ–Ð Ñ• Ð Ñ˜Ð ÂµÐ¡ÐƒÐ¡ÐÐ¡â€ Ð Â°

		//  Ð¡ÐƒÐ Ñ•Ð Â·Ð Ò‘Ð Â°Ð Ð…Ð Ñ‘Ð Âµ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð Ð Ò‘Ð Ñ‘Ð Ð…Ð Â°Ð Ñ˜Ð Ñ‘Ð¡â€¡Ð ÂµÐ¡ÐƒÐ Ñ”Ð Ñ‘
		while (date.getDate() <= daysInMonth && month == date.getMonth()) {
			var row = document.createElement('tr');

			for (var j = 0; j < 7; j++) {
				//  Ð ÑŸÐ¡Ð‚Ð Ñ‘Ð Ð†Ð Ñ•Ð Ò‘Ð Ñ‘Ð Ñ˜ Ð Ñ•Ð¡â€šÐ Ñ•Ð Â±Ð¡Ð‚Ð Â°Ð Â¶Ð ÂµÐ Ð…Ð Ñ‘Ð Âµ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð Ð Ñ” Ð¡â€žÐ Ñ•Ð¡Ð‚Ð Ñ˜Ð Â°Ð¡â€šÐ¡Ñ“ Ð Ñ—Ð Ð…(0) - Ð Ð†Ð¡Ðƒ(6)
				var weekDay = date.getDay();
				if (weekDay === 0) {
					weekDay = 6;
				} else {
					weekDay = weekDay - 1;
				}

				if (j == weekDay && month == date.getMonth()) {
					var cell = document.createElement('td'),
						cellText = document.createTextNode(date.getDate());
					cell.classList.add('date-cell');

					if (
						date.getDate() === this.selectedDate.getDate() &&
						year === this.selectedDate.getFullYear() &&
						month === this.selectedDate.getMonth()
					) {
						cell.classList.add('dt-active');
					}

					date.setDate(date.getDate() + 1);
					cell.appendChild(cellText);
					row.appendChild(cell);
					cell.addEventListener('click', (e) => {
						this.selectedDate = new Date(year, month, e.target.innerHTML);
						if (document.getElementsByClassName('dt-active')[0]) {
							document.getElementsByClassName('dt-active')[0].classList.remove('dt-active');
						}
						e.target.classList.add('dt-active');
					});
				} else {
					var cell = document.createElement('td');
					var cellText = document.createTextNode('');
					cell.appendChild(cellText);
					row.appendChild(cell);
				}
			}
			this.tBody.appendChild(row);
		}
	}

	// Ð â€™Ð¡ÐƒÐ Ñ—Ð Ñ•Ð Ñ˜Ð Ñ•Ð Ñ–Ð Â°Ð¡â€šÐ ÂµÐ Â»Ð¡ÐŠÐ Ð…Ð¡â€¹Ð â„– Ð Ñ˜Ð ÂµÐ¡â€šÐ Ñ•Ð Ò‘ Ð Ò‘Ð Â»Ð¡Ð Ð¡â€žÐ Ñ•Ð¡Ð‚Ð Ñ˜Ð Â°Ð¡â€šÐ Ñ‘Ð¡Ð‚Ð Ñ•Ð Ð†Ð Â°Ð Ð…Ð Ñ‘Ð¡Ð Ð¡â€¡Ð Ñ‘Ð¡ÐƒÐ ÂµÐ Â» Ð Ñ˜Ð ÂµÐ Ð…Ð¡ÐŠÐ¡â‚¬Ð Âµ 10
	formateTwoDigitNumber(num) {
		return ('0' + num).slice(-2);
	}

	// Ð Â Ð Â°Ð Â±Ð Ñ•Ð¡â€šÐ Â° Ð Ñ”Ð Ð…Ð Ñ•Ð Ñ—Ð Ñ”Ð Ñ‘ Ð Ñ˜Ð ÂµÐ¡ÐƒÐ¡ÐÐ¡â€  Ð Ð…Ð Â°Ð Â·Ð Â°Ð Ò‘
	previous() {
		this.currentYear =
			this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
		this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
		this.updateCalendar(this.currentMonth, this.currentYear);
	}

	// Ð Â Ð Â°Ð Â±Ð Ñ•Ð¡â€šÐ Â° Ð Ñ”Ð Ð…Ð Ñ•Ð Ñ—Ð Ñ”Ð Ñ‘ Ð Ñ˜Ð ÂµÐ¡ÐƒÐ¡ÐÐ¡â€  Ð Ð†Ð Ñ—Ð ÂµÐ¡Ð‚Ð ÂµÐ Ò‘
	next() {
		this.currentYear =
			this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
		this.currentMonth = this.currentMonth === 11 ? 0 : this.currentMonth + 1;
		this.updateCalendar(this.currentMonth, this.currentYear);
	}

	// Ð Â Ð Â°Ð Â±Ð Ñ•Ð¡â€šÐ Â° Ð Ñ”Ð Ð…Ð Ñ•Ð Ñ—Ð Ñ”Ð Ñ‘ Ð Ñ–Ð Ñ•Ð Ò‘ Ð Ð…Ð Â°Ð Â·Ð Â°Ð Ò‘:
	previousYear() {
		this.currentYear--;
		this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth;
		this.updateCalendar(this.currentMonth, this.currentYear);
	}

	// Ð Â Ð Â°Ð Â±Ð Ñ•Ð¡â€šÐ Â° Ð Ñ”Ð Ð…Ð Ñ•Ð Ñ—Ð Ñ”Ð Ñ‘ Ð Ñ–Ð Ñ•Ð Ò‘ Ð Ð†Ð Ñ—Ð ÂµÐ¡Ð‚Ð ÂµÐ Ò‘:
	nextYear() {
		this.currentYear++;
		this.currentMonth = this.currentMonth === 11 ? 0 : this.currentMonth;
		this.updateCalendar(this.currentMonth, this.currentYear);
	}

	// Ð ÐˆÐ¡ÐƒÐ¡â€šÐ Â°Ð Ð…Ð Ñ•Ð Ð†Ð Ñ”Ð Â° Ð Ò‘Ð Â°Ð¡â€šÐ¡â€¹:
	setDate() {
	
		this.element.value =
			this.formateTwoDigitNumber(this.selectedDate.getDate()) +'.' +
			this.formateTwoDigitNumber(this.selectedDate.getMonth() + 1) +'.' +
			this.selectedDate.getFullYear();
		this.element.dispatchEvent(new Event('change', {'bubbles': true}));
		this.hide();
	}

	// Ð ÐŽÐ Ñ”Ð¡Ð‚Ð¡â€¹Ð¡â€šÐ Ñ‘Ð Âµ Ð Ñ”Ð Â°Ð Â»Ð ÂµÐ Ð…Ð Ò‘Ð Â°Ð¡Ð‚Ð¡Ð:
	hide = (event) => {
		if (this.cContainer) {
			if (event && (event.target === this.element || event.target.closest('.calendar'))) {
				return;
			}
			if (this.popUp) {
				this.popUp.removeChild(this.cContainer);
			} else {
				document.body.removeChild(this.cContainer);
			}
			this.cContainer = null;
			window.removeEventListener('click', this.hide);
			window.removeEventListener('scroll', this.setPosition);
			window.removeEventListener('resize', this.setPosition);
		}
	}
}



function fadeIn(fN,el) {

	var opacity = 0.01;
	let e = document.getElementById(fN);
	var timer = setInterval(function() {

		if(opacity >= 1) {

			clearInterval(timer);

		}

		e.querySelector(el).style.opacity = opacity;

		opacity += opacity * 0.1;
		e.querySelector(el).style.display = "block";
	}, 10);
	
}


function fadeOut(fN,el) {

	var opacity = 1;
	let e = document.getElementById(fN);
	var timer = setInterval(function() {

		if(opacity <= 0.1) {

			clearInterval(timer);
			e.querySelector(el).style.display = "none";

		}

		e.querySelector(el).style.opacity = opacity;

		opacity -= opacity * 0.1;

	}, 10);
	let a = document.getElementById(fN);
	a.classList.remove('positionRelative');
	//a.style.position = 'absolute';

}