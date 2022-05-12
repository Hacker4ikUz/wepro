let links = [
    {
        id:1,
        name:'Все курсы',
        link: '#'
    },
    {
        id:2,
        name:'Успейте записаться',
        link: '#'
    },
    {
        id:3,
        name:'Преподаватели',
        link: '#'
    },
    {
        id:4,
        name:'Фотографии',
        link: '#'
    },
    {
        id:5,
        name:'Бесплатный урок',
        link: '#'
    },
    {
        id:6,
        name:'Контакты',
        link: '#'
    },
    {
        id:7,
        name:'UZ',
        link: '#'
    }
]

function createElemHeader(links) {
    let header = document.querySelector('header')
    let left = document.createElement('div')
    let left_img = document.createElement('img')
    let a = document.createElement('a')
    let right = document.createElement('div')
    let right_img = document.createElement('img')
    let btn = document.createElement('button')
    
    left.classList.add('left')
    left_img.src = './img/logo.svg'
    right.classList.add('right')
    btn.innerHTML = 'Консультация'
    btn.classList.add('button')
    right_img.src = './img/menu.svg'
    right_img.style.cursor = 'pointer'
    
    for(let item of links){
        a.innerHTML = item.name
        a.href = item.link
    }
    
    left.append(left_img,a)
    right.append(btn,right_img)
    header.append(left,right)
    

    // left nav-menu )))
    let navv = document.querySelector('.navv')
    let modleft = document.createElement('div')
    let leftw = document.createElement('div')
    let overlay = document.createElement('div')
    let blackimg = document.createElement('img')
    let aa = document.createElement('a')

    blackimg.src = 'https://wepro.uz/_nuxt/img/logo-dark.13ae731.svg'
    blackimg.classList.add('blackimg')
    aa.innerHTML = 'Все курсы'
    aa.href = '#'
    aa.style.color = '#000'
    aa.style.textDecoration = 'none'

    modleft.classList.add('modleft')
    leftw.classList.add('leftw')
    overlay.classList.add('overlay')

    navv.append(modleft)
    leftw.append(blackimg,aa)
    modleft.append(leftw,overlay)

    right_img.onclick = () => {
        modleft.style.display = 'block'
    }
    overlay.onclick = () => {
        modleft.style.display = 'none'
    }
}

createElemHeader(links)

let arr = [
        {
        id:1,
        kurs:'Графический дизайн',
        revenge: '8',
        days: 'Вторник-четверг-суббота',
        time: '16:30-18:00',
        duration: '3',
        price: '515 000 сум/месяц',
        teacher: 'Татьяна Аракелова',
        line: '20%'
        },
        {
        id:2,
        kurs:'Экстремальный Английский',
        revenge: '4',
        days: 'Понедельник-среда-пятница',
        time: '13:30-15:00',
        duration: '3',
        price: '420 000 сум/месяц',
        teacher: 'Джейбс',
        line: '55%'
        },
        {
        id:3,
        kurs:'Экстремальный Английский',
        revenge: '6',
        days: 'Понедельник-среда-пятница',
        time: '13:30-15:00',
        duration: '3',
        price: '420 000 сум/месяц',
        teacher: 'Джейбс',
        line: '30%'
        },
        {
        id:4,
        kurs:'Экстремальный Английский',
        revenge: '6',
        days: 'Понедельник-среда-пятница',
        time: '13:30-15:00',
        duration: '3',
        price: '420 000 сум/месяц',
        teacher: 'Джейбс',
        line: '30%'
        },
        {
        id:5,
        kurs:'Экстремальный Английский',
        revenge: '6',
        days: 'Понедельник-среда-пятница',
        time: '13:30-15:00',
        duration: '3',
        price: '420 000 сум/месяц',
        teacher: 'Джейбс',
        line: '30%'
        },
        {
        id:6,
        kurs:'Экстремальный Английский',
        revenge: '6',
        days: 'Понедельник-среда-пятница',
        time: '13:30-15:00',
        duration: '3',
        price: '420 000 сум/месяц',
        teacher: 'Джейбс',
        line: '30%'
        },
        {
        id:7,
        kurs:'Экстремальный Английский',
        revenge: '6',
        days: 'Понедельник-среда-пятница',
        time: '13:30-15:00',
        duration: '3',
        price: '420 000 сум/месяц',
        teacher: 'Джейбс',
        line: '30%'
        },
        {
        id:8,
        kurs:'Экстремальный Английский',
        revenge: '2',
        days: 'Понедельник-среда-пятница',
        time: '13:30-15:00',
        duration: '3',
        price: '420 000 сум/месяц',
        teacher: 'Джейбс',
        line: '80%'
        }
]

for(let el of arr){
    // groups i td
    let main = document.querySelector('main')
    let groups = document.createElement('div')
    let itemm = document.createElement('div')
    let title = document.createElement('b')
    let br = document.createElement('br')
    let sp = document.createElement('span')
    let range = document.createElement('div')
    let line = document.createElement('div')
    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')
    let li4 = document.createElement('li')
    let li5 = document.createElement('li')
    let grbtn = document.createElement('button')
    
    groups.classList.add('groups')
    itemm.classList.add('itemm')
    title.innerHTML = el.kurs
    sp.innerHTML = 'Осталось мест: ' + el.revenge
    range.classList.add('range')
    line.classList.add('line')
    line.style.width = el.line
    li1.innerHTML = 'Дни: ' + el.days
    li2.innerHTML = 'Время: ' + el.time
    li3.innerHTML = 'Длительность в месяцах: ' + el.duration
    li4.innerHTML = 'Цена: ' + el.price
    li5.innerHTML = 'Преподаватель: ' + el.teacher
    grbtn.innerHTML = 'Записаться'
    grbtn.classList.add('grbtn')
    
    range.append(line)
    ul.append(li1,li2,li3,li4,li5)
    itemm.append(title,br,sp,range,ul,grbtn)
    groups.append(itemm)
    main.append(groups)
}