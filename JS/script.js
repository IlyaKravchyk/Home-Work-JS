// 2. В классе «User» реализуйте сл. свойства и методы:
// 1. Свойство data – для хранения данных о контакте в виде простого объекта со сл. полями: id,
// name, email, address, phone.
// 2. Метод edit(obj) – для редактирования данных контакта. В качестве параметра метод должен
// принимать объект с обновленными данными и обновлять свойство data.
// 3. Метод get() – для получения данных о контакте. Метод должен возвращать объект с данными
// из св-ва data.
// 4. При создании объекта на основе этого класса важно передать в конструктор данные о контакте
// в виде объекта для дальнейшего сохранения в св-во data.

// В классе «Contacts» реализуйте сл. св-ва и методы:
// 1. Свойство data – для хранения всех добавленных контактов в массиве. Каждый эл-т массива
// должен представлять собой объект созданный на основе класса «User».
// 2. Метод add() – для создания контакта (на основе класса «User») и добавления его в массив data.
// 3. Метод edit(id, obj) – для редактирования информации конкретного контакты из св-ва data,
// используя соответствующий метод из «User». В качестве параметра нужно передать
// идентификатор контакта для последующего поиска и объект с новыми данными для
// редактирования.
// 4. Метод remove(id) – для удаления контакта из общего массива данных по идентификатору. В
// качестве параметра нужно передать идентификатор контакта.
// 5. Метод get() – для получения всех контактов. Метод должен возвращать объект с данными из
// св-ва data.

class User {
   constructor({ id, name, email, address, phone }) {
      this.data = {
         id,
         name,
         email,
         address,
         phone,
      }
   }

   edit(data) {
      this.data = data
   }

   get() {
      return this.data
   }
}

class Contacts {

   constructor() {
      this.contactsData = []
   }

   add(userData) {
      const addedUser = new User(userData)
      this.contactsData.push(addedUser)
   }

   edit(idUser, newUserData) {
      this.contactsData = this.contactsData.map((userContact) => {
         const id = userContact.get().id
         const userData = userContact.get();
         if (id === idUser) {
            userContact.edit({
               ...userData,
               ...newUserData
            })
         }
         return userContact
      })
   }

   get() {
      this.contactsData
   }

   remove(idUser) {
      this.contactsData = this.contactsData.filter((userContact) => {
         const id = userContact.get().id
         return id !== idUser
      })
   }
}

const contacts = new Contacts()



//4. Создайте еще один класс «ContactsApp» для создания интерфейса и показа
//его в браузере. Класс должен наследоваться от «Contacts».
//5. В классе «ContactsApp» реализуйте сл. св-ва и методы:
//1. При создании объекта на основе этого класса в DOM должен добавляться главный контейнер
//приложения, например, «<div class=”contacts”></div>». Доступ к контейнеру должен быть
//через свойство «app» (должен хранить созданный элемент).
//2. Также, в конструкторе или через любой метод в классе полностью создайте интерфейс вашего
//приложения внутри главного контейнера. Предусмотрите форму с полями и кнопками для
//добавления и редактирования контактов. Дизайн может быть любым, но адаптивным к
//мобильным устройствам.
//3. Методы onAdd(), onEdit() и onRemove() – должны срабатывать по клику по соотв. кнопкам в
//интерфейсе для добавления/редактирования/удаления контакта. Важно использование
//методов от «Contacts» при соотв. действиях.
//4. Метод get() - для получения и обновления списка контактов в соотв. контейнере вашего
//приложения. Важно сохранить возможности родительского метода.

class ContactsApp extends Contacts {
   constructor() {
      super()
      this.init();
   }
   init() {
      let site = document.querySelector('.site');
      let siteDiv = document.createElement('div');
      siteDiv.classList.add('contacts');
      siteDiv.innerHTML = `
                           <div class="contacts">
                              <div class = "contacts__wrapper">
                                 <div class = "container">
                                    <div class = "contacts__items">
                                       <div class = "contacts__item">
                                          <h1 class = "contacts__title">
                                             Контактная книга
                                          </h1>
                                       </div>
                                       <div class = "contacts__item">
                                          <button class ="contacts__btn" type = "submit">Добавить</button>
                                       </div>
                                       <div class = "contacts__item">
                                          <ul class="contacts__list"></ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           `
      site.appendChild(siteDiv);
      this.addEventListenerBtnAdd();
   }
   addEventListenerBtnAdd() {
      let сontactsButtonAdd = document.querySelector('.contacts__btn')
      сontactsButtonAdd.addEventListener('click', () => { this.createModal() })
   }
   createModal() {
      let modalDiv = document.createElement('div');
      modalDiv.classList.add('modal');
      modalDiv.innerHTML = ` <div class = "modal__wrapper">
                                    <div class ="modal__title">
                                    Введите данные:
                                    </div>
                                    <div class = "modal__items">
                                       <div class = "modal__item">
                                          <div class ="modal__text">Имя:</div>
                                          <input type = "text" class = "modal__name" value = "" placeholder = "Введите имя" required>
                                       </div>
                                       <div class = "modal__item">
                                          <div class ="modal__text">Email:</div>
                                          <input type = "email" class = "modal__name" value = "" placeholder = "Введите email">
                                       </div>
                                       <div class = "modal__item">
                                          <div class ="modal__text">Адрес:</div>
                                          <input type = "text" class = "modal__name" value = "" placeholder = "Введите адрес">
                                       </div>
                                       <div class = "modal__item">
                                          <div class ="modal__text">Номер телефона:</div>
                                          <input type = "tel" class = "modal__name" value = "" placeholder = "Введите телефон" reuired>
                                       </div>
                                    </div>
                                    <div class = "modal__btn">
                                    <button class ="btn__add" type = "submit">Добавить</button>
                                    </div>
                                 </div>
                              `
      document.body.appendChild(modalDiv);
      let buttonAdd = document.querySelector('.btn__add')
      buttonAdd.addEventListener('click', () => {
         this.onAdd();
         modalDiv.remove();
      });

   }
   onAdd() {
      let input = document.querySelectorAll('.modal__name')
      let name = input[0].value
      let email = input[1].value
      let adress = input[2].value
      let phone = input[3].value
      console.log(name, email, adress, phone);
      this.add({ name, email, adress, phone })
      this.get()
   }
}

window.addEventListener('load', () => {
   const contactsList = new ContactsApp();
})
