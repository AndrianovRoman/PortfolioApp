

$(document).ready(function(){

    let burger = $('.burger');
    let menu = $('.menu');

    burger.click(() => {
        menu.addClass('open');
    });

    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            menu.removeClass('open');
        }
    })

    $('.project-items').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
    });

    $('.project-item-image').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: false
        }
        // other options
    });

    $('.quiz').magnificPopup({
        // delegate: 'a',
        items: [
            {
                src: '../images/Quiz/Главная.PNG'
            },
            {
                src: '../images/Quiz/Выбор темы.PNG'
            },
            {
                src: '../images/Quiz/Начало теста.PNG'
            },
            {
                src: '../images/Quiz/результат.PNG'
            },
            {
                src: '../images/Quiz/Выбор темы с результатом.PNG'
            }
        ],
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });

    $('.incomeAndExpenses').magnificPopup({
        // delegate: 'a',
        items: [
            {
                src: '../images/IncomeAndExpenses/Главная.PNG'
            },
            {
                src: '../images/IncomeAndExpenses/Доходы и расходы.PNG'
            },
            {
                src: '../images/IncomeAndExpenses/Список категрий.PNG'
            }
        ],
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });

    $('.ITStorm').magnificPopup({
        // delegate: 'a',
        items: [
            {
                src: '../images/АйтиШторм/Главная.png'
            },
            {
                src: '../images/АйтиШторм/Статьи.png'
            },
            {
                src: '../images/АйтиШторм/Отдельная статья.png'
            }
        ],
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });

    $('.education-content-image').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: false
        }
        // other options
    });

    // Изменение цветовой темы сайта!!!
    let light = $('.light');
    let root = $(':root');
    let flagLight = 1;

    light.click(() => {
        console.log(light.text());
        if(flagLight){
            colorTheme('light');
        } else {
            colorTheme('dark');
        }
    });

    function colorTheme(theme) {
        if (window.hasOwnProperty('localStorage'))
            window.localStorage.setItem('theme', theme);
        if (theme === 'light') {
            root.css('--main-bg-color', '#45d8e5').css('--text-color', '#1f242d').css('--white', '#000');
            flagLight = 0;
            light.text('Dark');
        } else {
            root.css('--main-bg-color', '#1f242d').css('--text-color', '#0ef').css('--white', '#FFF');
            flagLight = 1;
            light.text('Light');
        }
    }

    let theme = (window.localStorage.getItem('theme') || 'dark');
    colorTheme(theme);


    // Изменение языковой темы сайта!!!
    const langArr = {
            en: {
                logo: 'Andrianov Roman',
                footerLogo: 'Andrianov Roman',
                home: 'Home',
                about: 'About',
                education: 'Education',
                skills: 'Skills',
                project: 'Projects',
                contact: 'Contact',
                mainTitle: 'Hello, My name is<br><span>Andrianov Roman</span><br>And I`m a <span class="multiple-text"></span>',
                mainText: 'This is my first project as a portfolio website',
                mainBtn: 'Dowload CV',
                aboutInfo: 'About <span>Me</span>',
                aboutTitle: 'Frontend Developer',
                aboutText: 'I\'m twenty-two! I\'m a beginner frontend developer! I\'m just learning! Also i\'m a sportsman, i go to judo! I study in VlSU! And my dream is to work in a big company as a frontend developer',
                educationTitle: 'My <span>Journey</span>',
                educationColumnTitle1: 'Education',
                educationContentTitle1: 'Secondary vocational education',
                educationContentText1: 'Programming in computer systems',
                educationContentTitle2: 'Higher education - University',
                educationContentText2: 'Fundamental computer science and informational technologies',
                educationColumnTitle2: 'Courses',
                skillsTitle: 'My <span>Skills</span>',
                skillsColumnTitle1: 'Coding Skills',
                skillsColumnTitle2: 'Frameworks',
                projectsTitle: 'My <span>Projects</span>',
                // projectsItemText1: 'One page site',
                // projectsItemText2: 'One page site',
                // projectsItemText3: 'One page site',
                contactTitle: 'Contact <span>Me</span>',
                contactBtn: 'Submit',
                inputName: 'Name required',
                inputSurname: 'Last name required',
                inputEmail: 'Email required',
                inputOrder: 'Order required',

            },

            ru: {
                logo: 'Андрианов Роман',
                footerLogo: 'Андрианов Роман',
                home: 'Домой',
                about: 'Обо мне',
                education: 'Образование',
                skills: 'Навыки',
                project: 'Проекты',
                contact: 'Контакт',
                mainTitle: 'Привет, Меня зовут<br><span>Андрианов Роман</span><br>И я <span class="multiple-text"></span>',
                mainText: 'Это мой первый проект в виде сайта портфолио',
                mainBtn: 'Скачать CV',
                aboutInfo: 'Обо <span>Мне</span>',
                aboutTitle: 'Frontend Разработчик',
                aboutText: 'Мне двадцать два года! Я начинающий frontend разработчик! Я только учусь! Также я занимаюсь спортом, я хожу на дзюдо! Я учусь в ВлГУ! И моя мечта работать в большой компании frontend разработчиком!',
                educationTitle: 'Мой <span>Путь</span>',
                educationColumnTitle1: 'Образование',
                educationContentTitle1: 'Среднее профессиональное образование',
                educationContentText1: 'Программирование в компьютерных системах',
                educationContentTitle2: 'Высшее образование - Университет',
                educationContentText2: 'Фундаментальная информатика и информационные технологии',
                educationColumnTitle2: 'Курсы',
                skillsTitle: 'Мои <span>Навыки</span>',
                skillsColumnTitle1: 'Навыки кодирования',
                skillsColumnTitle2: 'Фреймворки',
                projectsTitle: 'Мои <span>Проекты</span>',
                // projectsItemText1: 'Одностраничный сайт',
                // projectsItemText2: 'Одностраничный сайт',
                // projectsItemText3: 'Одностраничный сайт',
                contactTitle: 'Свяжитесь со <span>Мной</span>',
                contactBtn: 'Отправить',
                inputName: 'Необходимо ввести имя',
                inputSurname: 'Необходимо ввести фамилию',
                inputEmail: 'Необходимо ввести email',
                inputOrder: 'Необходимо ввести заказ',
            },
    };

    let language = $('.language');
    // let flagLanguage = 1;

    if(window.localStorage.getItem('lang') === 'ru') {
        language.text('ENG');
    } else {
        language.text('RUS');
    }

    language.click(() => {

        if (language.text() === 'RUS'){
            language.text('ENG');
            lang = 'ru';
            setLang('ru');
            // console.log(window.localStorage);
            runLine(lang);
        } else {
            language.text('RUS');
            lang = 'en';
            setLang('en');
            // console.log(window.localStorage);
            runLine(lang);
        }
    });

    function setLang(lang) {

            // console.log(window.localStorage.getItem('lang'));

            if (!langArr.hasOwnProperty(lang)) return;
            if (window.hasOwnProperty('localStorage'))
                window.localStorage.setItem('lang', lang);
            for (let key in langArr[lang]) {
                let elem = document.querySelector('.lng-' + key);
                if (elem) {
                    elem.innerHTML = langArr[lang][key];
                }
            }
        }

        let lang = (window.localStorage.getItem('lang') || 'en');
        setLang(lang);

    function runLine(lang){

        let typed = new Typed('.multiple-text', {
            strings: ['Frontend Developer', 'Judo Fighter', 'VlSU student'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
        if(lang === 'ru'){
            typed.strings = ['Frontend Разработчик', 'Дзюдоист', 'Студент ВлГУ'];
        }
    }
    runLine(lang);


    let header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    let footerBtn = document.querySelector('.footerBtn');

    footerBtn.addEventListener('click', () => {
        window.scrollTo(0,0);
    });


    // Валидация формы

    let formBtn = $('.formBtn');
    let loader = $('.loader');


    formBtn.click( (e) => {
        e.preventDefault();
        let name = $('#name');
        let surname = $('#surname');
        let email = $('#email');
        let order = $('#order');
        let hasError = false;

        $('input').css('border-color', 'rgb(130, 19, 40)');

        $('.error-input').hide();

        if (!name.val()) {
            name.css('border-color', 'red');
            name.next().show();
            hasError = true;
        }
        if (!surname.val()) {
            surname.css('border-color', 'red');
            surname.next().show();
            hasError = true;
        }
        if (!email.val()) {
            email.css('border-color', 'red');
            email.next().show();
            hasError = true;
        }
        if (!order.val()) {
            order.css('border-color', 'red');
            order.next().show();
            hasError = true;
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "mail.php",
                data: {name: name.val(), surname: surname.val(), email: email.val(), order: order.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    console.log(msg);
                    if (msg.success) {
                        alert('Сообщение отправлено!')
                    } else {
                        alert('Возникла ошибка при отправке сообщения!');
                    }
                });
        }
    });


});


