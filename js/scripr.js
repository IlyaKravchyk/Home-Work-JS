document.head.setAttribute('lang', 'ru');
let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta);

let title = document.createElement('title');
title.innerHTML = 'Home Work8';
document.head.appendChild(title);

let divSite = document.createElement('div');
divSite.setAttribute('class', 'site');
document.body.appendChild(divSite);

let container = document.createElement('div');
container.classList.add('container');
divSite.appendChild(container);
console.log(document.querySelector('html'));

let chooseDiv = document.createElement('div');
chooseDiv.setAttribute('class', 'choose__wrapper');
container.appendChild(chooseDiv);

let chooseTitle = document.createElement('div');
chooseTitle.classList.add('choose__title');
chooseDiv.appendChild(chooseTitle);

let h1 = document.createElement('h1');
h1.setAttribute('class', 'title');
h1.innerHTML = 'Choose Your Option';
chooseTitle.appendChild(h1);

let chooseSubtitle = document.createElement('p');
chooseSubtitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
chooseTitle.appendChild(chooseSubtitle);

let chooseItems = document.createElement('div');
chooseItems.classList.add('choose__items');
chooseDiv.appendChild(chooseItems);

let itemsItem = document.createElement('div');
itemsItem.classList.add('items__item');
chooseItems.appendChild(itemsItem);

let itemsTitle = document.createElement('div');
itemsTitle.classList.add('items__title');
itemsTitle.innerHTML = 'freelancer';
itemsItem.appendChild(itemsTitle);

let itemsSubTitle = document.createElement('h2');
itemsSubTitle.classList.add('items__subtitle');
itemsSubTitle.innerHTML = 'Initially designed to ';
itemsItem.appendChild(itemsSubTitle);

let itemsDescription = document.createElement('div');
itemsDescription.setAttribute('class', 'items__description');
itemsDescription.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
itemsItem.appendChild(itemsDescription);

let itemsButton = document.createElement('a');
itemsButton.setAttribute('href', '#');
itemsButton.setAttribute('class', 'items__link');
itemsButton.innerHTML = 'start here';
itemsItem.appendChild(itemsButton);

let itemClone = itemsItem.cloneNode(true);
chooseItems.appendChild(itemClone);
itemClone.querySelector('.items__title').innerHTML = 'Studio';

let style = document.createElement('style');
style.innerHTML = `*{
   margin: 0;
   padding: 0;
}
a{
   color:black;
   text-transform: uppercase;
   text-decoration: none;
}
.container {
   max-width: 800px;
   width: 80%;
   margin: 0 auto;
}
.choose__title {
   font-family: 'Arvo', serif;
   font-size: 36px;
   margin-top: 80px;
   margin-bottom: 10px;
   text-align:center;
}

p {
   font-size: 14px;
   color: #9FA3A7;
   margin-bottom: 55px;
}
.choose__items {
   display: flex;
   align-items: center;
   justify-content: center;
   text-align:center;
   border: 1px solid #E8E9ED;
}
.items__item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 95px;
}
.items__item:hover{
   background-color: #8F75BE;
   color: #fff;
}
.items__title {
   font-family: 'Montserrat';
   color: #9FA3A7;
   font-weight: 700;
   font-size: 12px;
   line-height: 15px;
   text-transform: uppercase;
 
}

.items__subtitle {
   font-family: 'Arvo';
   font-size: 36px;
   line-height: 46px;
   margin-bottom: 25px;
}

.items__description {
   font-family: 'OpenSans';
   color: #9FA3A7;
   font-size: 12px;
   line-height: 22px;
   margin-bottom: 50px;

}

.items__link {
   color: #212121;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 15px 22px;
   border: 3px solid #FFC80A;
   border-radius: 25px;
}

.items__item:hover{
   color:#fff;
}
.items__item:hover .items__title{
   color:#FFC80A;
}
.items__item:hover .items__description {
   color:#fff;
}

.items__item:hover .items__link{
   color:#fff;
}
`;
document.body.appendChild(style);