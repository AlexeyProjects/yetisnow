//$('.object-size').click(function(){
//  $('.object-size').toggleClass('size-icondrop');
//  $('.object-size').toggleClass('size-iconup');
//});
// $('.object-caterpillar').click(function(){
//   $('.object-caterpillar').toggleClass('caterpillar-icondrop');
//   $('.object-caterpillar').toggleClass('caterpillar-iconup');
// });
// $('.object-chassis').click(function(){
//   $('.chassis-icondrop').toggleClass('chassis-iconup');
// });
//$('.object-suspension').click(function(){
//  $('.suspension-icondrop').toggleClass('suspension-iconup');
//});
//$('.object-skiing').click(function(){
//  $('.skiing-icondrop').toggleClass('skiing-iconup');
//});
$('.object-size').click(function() {
  $('.objectHead-size').toggleClass('size-icondrop');
  $('.objectHead-size').toggleClass('size-iconup');
});
$('.object-caterpillar').click(function() {
  $('.objectHead-caterpillar').toggleClass('caterpillar-icondrop');
  $('.objectHead-caterpillar').toggleClass('caterpillar-iconup');
});
$('.object-chassis').click(function() {
  $('.objectHead-chassis').toggleClass('chassis-iconup');
  $('.objectHead-chassis').toggleClass('chassis-icondrop');
});
$('.object-suspension').click(function() {
  $('.objectHead-suspension').toggleClass('suspension-iconup');
  $('.objectHead-suspension').toggleClass('suspension-icondrop');
});
$('.object-skiing').click(function() {
  $('.objectHead-skiing').toggleClass('skiing-iconup');
  $('.objectHead-skiing').toggleClass('skiing-icondrop');
});
//$(".popupForm").on('click', 'select' ,function(){ 
//    $(this).toggleClass('iconselectdrop');
//});
//$(".recordTest").on('click', 'select' ,function(){ 
//    $(this).toggleClass('iconselectdrop');
//});
$(".checkbox").on('click', '.checkboxregion' ,function(){ 
    $(this).toggleClass('pushed');
});

$('.object-size').click(function(){
  $('.object-size-drop').slideToggle();
});
$('.object-caterpillar').click(function(){
  $('.object-caterpillar-drop').slideToggle();
});
$('.object-chassis').click(function(){
  $('.object-chassis-drop').slideToggle();
});
$('.object-suspension').click(function(){
  $('.object-suspension-drop').slideToggle();
});
$('.object-skiing').click(function(){
  $('.object-skiing-drop').slideToggle();
});
/*
*/
    $(document).ready(function(){ //Вызов функции по загрузке интерфейса
  var tempScrollTop, currentScrollTop = $(window).scrollTop(); //объявление переменных и присвоение им значений
  $(window).scroll(function(){ //Вызов функции при прокрутке страницы
    currentScrollTop = $(window).scrollTop(); //присвоение переменной нового значения
      if (currentScrollTop > $('.header').height()) { //Проверка условия 'переменная больше высоты шапки'
        $('body').addClass('fixed-header'); // создание класса 'fixed-header' в селекторе 'body'
        if ( tempScrollTop > currentScrollTop ) { //Проверка условия 'значение переменной до вызова функции больше значения после её вызова'
          $('.header').addClass('show'); //создание класса 'show' в селекторе 'header'
        } else { // выполнение, если второе условие не прошло проверку
          $('.header').removeClass('show'); //удаление класса 'show' в селекторе 'header'
        }
      } else { // выполнение, если первое условие не прошло проверку
        $('body').removeClass('fixed-header'); // удаление класса 'fixed-header' в селекторе 'body'
        $('.header').removeClass('show'); //удаление класса 'show' в селекторе 'header'
      }
        tempScrollTop = currentScrollTop; //присвоение одной переменной значение другой
  });
});
  $(document).ready(function(){
    $(".header");
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $(".header").addClass("header-opacity");
            } else {
                $('.header').removeClass("header-opacity");
            }
        });
    });
});

let cityDiller = document.querySelector('.cityDiller');
let callIcon = document.querySelectorAll('.call');
let adresIcon = document.querySelectorAll('.addresLoc');
let mailIcon = document.querySelectorAll('.mail.row');
let instagramIcon = document.querySelectorAll('.instagram.row');

for (var i = 0; i < instagramIcon.length; i++){
    instagramIcon[i].onmouseover = function(){
      this.querySelector('.instagram').style.transform = "translate(0px,-2px)";
      this.querySelector('.instagram').style.backgroundImage = "url('img/instagramblue.svg')";

    }
    instagramIcon[i].onmouseout = function(){
      this.querySelector('.instagram').style.transform = "translate(0px,0px)";
      this.querySelector('.instagram').style.backgroundImage = "url('img/instagram.svg')";
    }
}

for (var i = 0; i < mailIcon.length; i++){
    mailIcon[i].onmouseover = function(){
      this.querySelector('.mail').style.transform = "translate(0px,-2px)";
      this.querySelector('.mail').style.backgroundImage = "url('img/mailblue.svg')";
    }
    mailIcon[i].onmouseout = function(){
      this.querySelector('.mail').style.transform = "translate(0px,0px)";
      this.querySelector('.mail').style.backgroundImage = "url('img/mail.svg')";
    }
}

for (var i = 0; i < adresIcon.length; i++){
    adresIcon[i].onmouseover = function(){
      this.querySelector('.geo').style.transform = "translate(0px,-2px)";
      this.querySelector('.geo').style.backgroundImage = "url('img/geoblue.svg')";
    }
    adresIcon[i].onmouseout = function(){
      this.querySelector('.geo').style.transform = "translate(0px,0px)";
      this.querySelector('.geo').style.backgroundImage = "url('img/geo.svg')";
    }
}

for (var i = 0; i < callIcon.length; i++){
    callIcon[i].onmouseover = function(){
      this.querySelector('.call').style.transform = "translate(0px,-2px)";
      this.querySelector('.call').style.backgroundImage = "url('img/callblue.svg')";
    }
    callIcon[i].onmouseout = function(){
      this.querySelector('.call').style.transform = "translate(0px,0px)";
      this.querySelector('.call').style.backgroundImage = "url('img/call.svg')";
    }
}
// console.log(adresIcon);

// adresIcon.onmouseover  = function (e){
//   console.log(12312321);
// }
// adresIcon.addEventListener('mouseover',(e) => {
//   console.log('ssss');
//   event.target.classList.add('hover');
//   // Todo...
// });

$(".rightmenu-btn").click(function() {
    $(".rightWrap").toggleClass("left"); 
  }); 
$(".close-block").click(function(){
    $(".rightWrap").toggleClass("left");
  });
$(".close-rightWrap").click(function(){
    $(".rightWrap").toggleClass("left");
  });

      $(function(){
  $ ('.popupHead').each(function(){
   var closeTrigger = $(this).find('.close-btn').length;
   if (closeTrigger < 1 ){
    $(this).append('<span class="close-btn"></span>');
   }else{
    return '';
   }
   $('.close-btn').on('click', function(){
    document.body.classList.remove('overflowHide');
    $(this).closest('.popup').fadeOut(100);
      
   });
  });
});
    $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide1();
        PopUpHide2();
        PopUpHide3();
        PopUpHide4();
        PopUpHide5();
        $(".dropup").removeClass("hidden");

    });

    //Функция отображения PopUp
    function PopUpShow1(){
        document.body.classList.add('overflowHide');
        $("#popup1").fadeIn(300);
    }
    //Функция скрытия PopUp
    function PopUpHide1(){
        $("#popup1").hide(0);
    }
    //Функция скрытия PopUp
    function PopUpShow2(n){
        $("#popup2").fadeIn(300);
        modelChoice(n);
        document.body.classList.add('overflowHide');
    }
    function PopUpHide2(){
        $("#popup2").hide();
    }
    function PopUpShow3(){
        console.log(123123131);
        $("#popup3").fadeIn(300);
        document.body.classList.add('overflowHide');
    }
    function PopUpHide3(){
        $("#popup3").hide();
    }
    function PopUpShow4(){
        $("#popup4").fadeIn(300);
        document.body.classList.add('overflowHide');
    }
    function PopUpHide4(){
        $("#popup4").hide();
    }
    function PopUpShow5(){
        $("#popup5").fadeIn(300);
        document.body.classList.add('overflowHide');
    }
    function PopUpHide5(){
        $("#popup5").hide();
    }
    $('.popup').click(function(e){
    if(e.target == this) $('.close-btn').trigger('click');
});
const setOptions = (el, options, placeholder) =>
  el.innerHTML =
    `<option value="" hidden selected disabled >Выберите</option>` +
    options.map(n => `<option>${n}</option>`).join('');


const countries = [
{ name: 'Лаго-Наки', location: [ '26.03.2021','27.03.2021','28.03.2021','29.03.2021' ] },
  { name: 'Россия', location: [ 'Зима 2021' ] }
   
];


const nameLocation = document.querySelector('#location');
const dateArrival = document.querySelector('#dateArrival');


setOptions(nameLocation, countries.map(n => n.name));

nameLocation.addEventListener('change', function() {
  setOptions(dateArrival, countries.find(n => n.name === this.value).location);
});

nameLocation.dispatchEvent(new Event('change'));

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
$(document).ready(function() {
    var button = $('.dropup'); 
  $(window).scroll (function () {
    if ($(this).scrollTop () > 1000) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});  
button.on('click', function(){
$('body, html').animate({
scrollTop: 0
}, 1000);
return false;
});   

});
// var countries = ["Абаза","Абакан","Абдулино","Абинск","Автуры","Агидель","Агрыз","Азнакаево","Азов","Айхал","Акбулак","Аксай","Алагир","Алапаевск","Алатырь","Алдан","Алейск","Александров","Александровск","Александровское","Алексеевка","Алексин","Алушта","Альметьевск","Амурск","Анадырь","Анапа","Ангарск","Анжеро-Судженск","Анна","Апатиты","Апрелевка","Апшеронск","Арамиль","Аргун","Ардон","Арзамас","Арзгир","Аркадак","Армавир","Армянск","Арсеньев","Арск","Артем","Артемовский","Архангельск","Асбест","Асино","Астрахань","Аткарск","Афипский","Ахтубинск","Ахтырский","Ачинск","Ачхой-Мартан","Аша","Бавлы","Багаевская","Байкальск","Байконур","Баймак","Бакал","Баксан","Балабаново","Балаково","Балахна","Балашиха","Балашов","Балезино","Балей","Балтийск","Барабинск","Барнаул","Барыш","Батайск","Бахчисарай","Бачатский","Бачи-Юрт","Бежецк","Безенчук","Белая Глина","Белая Калитва","Белгород","Белебей","Белев","Белово","Белогорск","Белокуриха","Белоозерский","Белорецк","Белореченск","Белоярский","Белый Яр","Бердск","Березники","Березовка","Березовский (Кемеровская область)","Березовский (Свердловская область)","Беслан","Бийск","Бикин","Биробиджан","Бирск","Благовещенск (Амурская область)","Благовещенск (Республика Башкортостан)","Благодарный","Бобров","Богданович","Богородицк","Богородск","Боготол","Бодайбо","Бокситогорск","Бологое","Болотное","Большой Камень","Бор","Борзя","Борисовка","Борисоглебск","Боровичи","Боровский","Бородино","Братск","Бронницы","Брюховецкая","Брянск","Бугульма","Бугуруслан","Буденновск","Бузулук","Буинск","Буй","Буйнакск","Бутурлиновка","Валдай","Валуйки","Ванино","Варениковская","Васильево","Великие Луки","Великий Новгород","Великий Устюг","Вельск","Венев","Верещагино","Верхнеднепровский","Верхний Уфалей","Верхняя Пышма","Верхняя Салда","Видное","Вилючинск","Вихоревка","Вичуга","Владивосток","Владикавказ","Владимир","Внуково","Волгоград","Волгодонск","Волгореченск","Волжск","Волжский","Вологда","Волоколамск","Волхов","Вольск","Воргашор","Воркута","Воронеж","Воскресенск","Востряково","Воткинск","Врангель","Всеволожск","Вуктыл","Выборг","Выкса","Выселки","Вышний Волочек","Вяземский","Вязники","Вязьма","Вятские Поляны","Гаврилов-Ям","Гагарин","Гай","Галич","Гатчина","Гвардейск","Геленджик","Георгиевск","Гиагинская","Глазов","Голицыно","Горно-Алтайск","Горняк (Алтайский край)","Горняк (Челябинская область)","Городец","Городище","Гороховец","Горьковский","Горячеводский","Горячий ключ","Грамотеино","Грибановский","Грозный","Грязи","Грязовец","Губаха","Губкин","Губкинский","Гудермес","Гуково","Гулькевичи","Гурьевск","Гусев","Гусиноозерск","Гусь-Хрустальный","Давлеканово","Дагестанские Огни","Далматово","Дальнегорск","Дальнереченск","Данилов","Данков","Дегтярск","Дедовск","Дербент","Десногорск","Джалиль","Джанкой","Дзержинск","Дзержинский","Дивногорск","Дивное","Димитровград","Динская","Дмитров","Добрянка","Долгопрудный","Домодедово","Донецк","Донское","Донской","Дубна","Дубовка","Дугулубгей","Дудинка","Дюртюли","Дятьково","Евпатория","Егорлыкская","Егорьевск","Ейск","Екатеринбург","Елабуга","Елань","Елец","Елизаветинская","Елизово","Еманжелинск","Емва","Енисейск","Ершов","Ессентуки","Ессентукская","Ефремов","Железноводск","Железногорск (Красноярский край)","Железногорск (Курская область)","Железногорск-Илимский","Железнодорожный","Жердевка","Жигулевск","Жирновск","Жуковка","Жуковский","Завитинск","Заводоуковск","Заводской (Приморский край)","Заводской (Республика Северная Осетия - Алания)","Заволжье","Заинск","Заполярный","Зарайск","Заречный (Пензенская область)","Заречный (Свердловская область)","Заринск","Зверево","Зеленогорск","Зеленоград","Зеленодольск","Зеленокумск","Зеленчукская","Зерноград","Зея","Зима","Зимовники","Златоуст","Знаменск","Иваново","Ивантеевка","Ивдель","Игра","Ижевск","Избербаш","Излучинск","Изобильный","Иланский","Ильский","Инза","Иноземцево","Инта","Ипатово","Ирбит","Иркутск","Исилькуль","Искитим","Истра","Ишим","Ишимбай","Йошкар-Ола","Кавалерово","Казань","Кайеркан","Калач","Калач-на-Дону","Калачинск","Калининград","Калининец","Калинино","Калининск","Калтан","Калуга","Калязин","Каменка","Каменск-Уральский","Каменск-Шахтинский","Камень-на-Оби","Камешково","Камские Поляны","Камызяк","Камышин","Камышлов","Канаш","Кандалакша","Каневская","Канск","Кантышево","Карабаново","Карабаш","Карабулак","Карасук","Карачаевск","Карачев","Карпинск","Карталы","Касимов","Касли","Каспийск","Катав-Ивановск","Катайск","Качканар","Кашин","Кашира","Кедровка","Кемерово","Кемь","Керчь","Кизел","Кизилюрт","Кизляр","Кимовск","Кимры","Кингисепп","Кинель","Кинель-Черкассы","Кинешма","Киреевск","Киржач","Кириши","Киров (Калужская область)","Киров (Кировская область)","Кировград","Кирово-Чепецк","Кировск (Ленинградская область)","Кировск (Мурманская область)","Кирсанов","Киселевск","Кисловодск","Климово","Климовск","Клин","Клинцы","Ковдор","Ковров","Ковылкино","Когалым","Кодинск","Козельск","Козьмодемьянск","Коломна","Колпашево","Колпино","Кольцово","Кольчугино","Коммунар","Комсомольск-на-Амуре","Комсомольский","Конаково","Кондопога","Кондрово","Константиновск","Копейск","Кораблино","Кореновск","Коркино","Королев","Корсаков","Коряжма","Косая Гора","Костомукша","Кострома","Котельники","Котельниково","Котельнич","Котлас","Котово","Котовск","Кохма","Коченево","Кочубеевское","Красноармейск (Московская область)","Красноармейск (Саратовская область)","Красновишерск","Красногвардейское","Красногорск","Краснодар","Красное Село","Краснознаменск","Краснокаменск","Краснокамск","Краснообск","Красноперекопск","Краснослободск","Краснотурьинск","Красноуральск","Красноуфимск","Красноярск","Красный Кут","Красный Сулин","Кропоткин","Крыловская","Крымск","Крюково","Кстово","Кубинка","Кувандык","Кудымкар","Кузнецк","Куйбышев","Кукмор","Кулебаки","Кулешовка","Кулунда","Кумертау","Кунгур","Купино","Курагино","Курган","Курганинск","Куровское","Курск","Куртамыш","Курчалой","Курчатов","Куса","Кушва","Кущевская","Кызыл","Кыштым","Кяхта","Лабинск","Лабытнанги","Лагань","Ладожская","Лакинск","Лангепас","Лебедянь","Ленинградская","Лениногорск","Ленинск","Ленинск-Кузнецкий","Ленск","Лермонтов","Лесной","Лесозаводск","Лесосибирск","Ливны","Ликино-Дулево","Линево","Липецк","Лиски","Лобня","Лодейное Поле","Лопатинский","Лосино-Петровский","Луга","Луховицы","Лучегорск","Лысково","Лысьва","Лыткарино","Льгов","Люберцы","Людиново","Лянтор","Магадан","Магас","Магнитогорск","Майкоп","Майма","Майский","Малаховка","Малая Вишера","Малгобек","Малоярославец","Мантурово","Мариинск","Маркс","Матвеев Курган","Махачкала","Мегион","Медведево","Медведовская","Медвежьегорск","Медногорск","Межгорье","Междуреченск","Меленки","Мелеуз","Менделеевск","Мензелинск","Металлострой","Миасс","Миллерово","Минеральные Воды","Минусинск","Мирный (Архангельская область)","Мирный (Республика Саха (Якутия))","Михайловка","Михайловск","Мичуринск","Можайск","Можга","Моздок","Монино","Мончегорск","Морозовск","Моршанск","Москва","Московский","Мостовской","Муравленко","Мурманск","Мурмаши","Муром","Мценск","Мыски","Мытищи","Набережные Челны","Навашино","Навля","Надым","Назарово","Назрань","Нальчик","Наро-Фоминск","Нарткала","Нарьян-Мар","Нахабино","Находка","Невель","Невельск","Невинномысск","Невьянск","Незлобная","Нелидово","Нерехта","Нерчинск","Нерюнгри","Нестеровская","Нефтегорск","Нефтекамск","Нефтекумск","Нефтеюганск","Нижневартовск","Нижнекамск","Нижнеудинск","Нижний Ломов","Нижний Новгород","Нижний Тагил","Нижняя Салда","Нижняя Тура","Никель","Николаевск","Николаевск-на-Амуре","Никольск","Никольско-Архангельский","Никольское","Новая Ляля","Новая Усмань","Новоалександровск","Новоалтайск","Новоаннинский","Нововоронеж","Новодвинск","Новозыбков","Новокубанск","Новокузнецк","Новокуйбышевск","Новомичуринск","Новомосковск","Новопавловск","Новопокровская","Новороссийск","Новосибирск","Новосиликатный","Новосинеглазовский","Новотитаровская","Новотроицк","Новоузенск","Новоульяновск","Новоуральск","Новочебоксарск","Новочеркасск","Новошахтинск","Новый Городок","Новый Оскол","Новый Уренгой","Ногинск","Норильск","Ноябрьск","Нурлат","Нытва","Нягань","Няндома","Обнинск","Обоянь","Обь","Одинцово","Озерск","Озеры","Октябрьск","Октябрьский","Окуловка","Оленегорск","Омск","Омутнинск","Онега","Орджоникидзевская","Орел","Оренбург","Орехово-Зуево","Орловский","Орск","Оса","Осинники","Осташков","Остров","Острогожск","Отрадная","Отрадное","Отрадный","Оха","Очер","Павлово","Павловск (Алтайский край)","Павловск (Воронежская область)","Павловск (Ленинградская область)","Павловская","Павловский Посад","Палласовка","Партизанск","Пашковский","Пенза","Первомайск","Первоуральск","Пересвет","Переславль-Залесский","Пермь","Персиановский","Пестово","Петергоф","Петров Вал","Петровск","Петровск-Забайкальский","Петрозаводск","Петропавловск-Камчатский","Петушки","Печора","Пикалево","Плавск","Пласт","Поворино","Подольск","Подпорожье","Пойковский","Покачи","Покров","Полевской","Полтавская","Полысаево","Полярные Зори","Полярный","Поронайск","Похвистнево","Почеп","Приволжск","Приволжский","Придонской","Приморско-Ахтарск","Приозерск","Приютово","Прокопьевск","Пролетарск","Промышленная","Протвино","Прохладный","Псков","Пугачев","Пушкин","Пушкино","Пущино","Пыть-Ях","Пятигорск","Радужный (Владимирская область)","Радужный (Ханты-Мансийский автономный округ)","Раевский","Разумное","Райчихинск","Раменское","Рассказово","Ревда","Реж","Реутов","Рефтинский","Ржев","Родники","Роза","Рославль","Россошь","Ростов","Ростов-на-Дону","Рошаль","Ртищево","Рубцовск","Рузаевка","Рыбинск","Рыбное","Рыльск","Ряжск","Рязань","Саки","Салават","Салехард","Сальск","Самара","Санкт-Петербург","Саракташ","Саранск","Сарапул","Саратов","Саров","Сасово","Сатка","Сафоново","Саяногорск","Саянск","Светлоград","Светлый","Светогорск","Свирск","Свободный","Свободы","Севастополь","Северо-Задонск","Северобайкальск","Северодвинск","Североморск","Североуральск","Северск","Северская","Сегежа","Селенгинск","Сельцо","Семенов","Семикаракорск","Семилуки","Сергач","Сергиев Посад","Сердобск","Серов","Серпухов","Сертолово","Сестрорецк","Сибай","Сим","Симферополь","Скопин","Славгород","Славянка","Славянск-на-Кубани","Сланцы","Слободской","Слюдянка","Смоленск","Снежинск","Собинка","Советск (Калининградская область)","Советск (Кировская область)","Советская Гавань","Советский","Сокол","Соликамск","Солнечногорск","Солнечный","Соль-Илецк","Сорочинск","Сортавала","Сосновоборск","Сосновый Бор","Сосногорск","Софрино","Сочи","Спасск-Дальний","Среднеуральск","Ставрополь","Старая Купавна","Старая Русса","Стародуб","Староминская","Старощербиновская","Старый Оскол","Степное","Стерлитамак","Стрежевой","Строитель (Белгородская область)","Строитель (Тамбовская область)","Струнино","Ступино","Суворов","Суворовская","Судак","Сузун","Сургут","Суровикино","Сурхахи","Сухиничи","Суходол","Сухой Лог","Сходня","Сызрань","Сыктывкар","Сысерть","Тавда","Таганрог","Тайга","Тайшет","Талица","Талнах","Тальменка","Тамбов","Тара","Тарко-Сале","Татарск","Таштагол","Тбилисская","Тверь","Тейково","Темрюк","Терек","Тимашевск","Тихвин","Тихорецк","Тобольск","Товарково","Тогучин","Тольятти","Томилино","Томск","Топки","Торжок","Торопец","Тосно","Тоцкое Второе","Трехгорный","Троицк (Московская область)","Троицк (Челябинская область)","Троицкая","Трубчевск","Трудовое","Туапсе","Туймазы","Тула","Тулун","Туринск","Тутаев","Тучково","Тында","Тырныауз","Тюмень","Тяжинский","Ува","Уварово","Углич","Удачный","Удомля","Ужур","Узловая","Улан-Удэ","Ульяновск","Унеча","Урай","Урус-Мартан","Урюпинск","Усинск","Усмань","Усолье-Сибирское","Уссурийск","Усть-Абакан","Усть-Джегута","Усть-Илимск","Усть-Катав","Усть-Кут","Усть-Лабинск","Усть-Ордынский","Уфа","Ухта","Учалы","Учкекен","Федоровский","Феодосия","Фокино (Брянская область)","Фокино (Приморский край)","Фролово","Фрязино","Фурманов","Хабаровск","Хадыженск","Ханты-Мансийск","Харабали","Хасавюрт","Химки","Холмск","Холмская","Хотьково","Цимлянск","Цоцин-Юрт","Чайковский","Чалтырь","Чапаевск","Чебаркуль","Чебоксары","Чегдомын","Чегем","Челябинск","Черемхово","Черепаново","Череповец","Черкесск","Черниговка","Черноголовка","Черногорск","Чернушка","Чернянка","Черняховск","Чехов","Чистополь","Чита","Чишмы","Чудово","Чунский","Чусовой","Шадринск","Шали","Шарыпово","Шарья","Шатура","Шахты","Шахунья","Шебекино","Шексна","Шелехов","Шерловая Гора","Шилка","Шилово","Шимановск","Шумерля","Шумиха","Шушары","Шушенское","Шуя","Щекино","Щелково","Щербинка","Щигры","Экажево","Электрогорск","Электросталь","Электроугли","Элиста","Энгельс","Энем","Юбилейный","Югорск","Южа","Южно-Сахалинск","Южноуральск","Южный","Юрга","Юрьев-Польский","Юрюзань","Яблоновский","Якутск","Ялта","Ялуторовск","Янаул","Яранск","Яровое","Ярославль","Ярцево","Ясногорск","Ясный","Яшкино"];
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "" + arr[i].substr(0, val.length) + "";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
function getElementsById(ids) {
    var idList = ids.split(" ");
    var results = [], item;
    for (var i = 0; i < idList.length; i++) {
        item = document.getElementById(idList[i]);
        if (item) {
            results.push(item);
        }
    }
    return(results);
}


