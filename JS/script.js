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
      return this.contactsData
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
      this.show()
   }
   init() {
      let site = document.querySelector('.site');
      let siteDiv = document.createElement('div');
      siteDiv.classList.add('contacts');
      siteDiv.innerHTML = `
                                 <div class = "container">
                                    <div class = "contacts__items">
                                       <div class = "contacts__item">
                                          <h1 class = "contacts__title">
                                             Контактная книга
                                          </h1>
                                       </div>
                                       <div class = "contacts__item">
                                          <button class ="contacts__btn btn" type = "submit">Добавить</button>
                                       </div>
                                       <div class = "contacts__item">
                                          <ul class="contacts__list"></ul>
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
                                          <input type = "text" class = "input__modal__name modal__input" placeholder = "Введите имя" required>
                                       </div>
                                       <div class = "modal__item">
                                          <div class ="modal__text">Email:</div>
                                          <input type = "email" class = "input__modal__email modal__input" placeholder = "Введите email">
                                       </div>
                                       <div class = "modal__item">
                                          <div class ="modal__text">Адрес:</div>
                                          <input type = "text" class = "input__modal__address modal__input" placeholder = "Введите адрес">
                                       </div>
                                       <div class = "modal__item">
                                          <div class ="modal__text">Номер телефона:</div>
                                          <input type = "tel" class = "input__modal__phone modal__input" placeholder = "Введите телефон" reuired>
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
      let name = document.querySelector('.input__modal__name').value
      let email = document.querySelector('.input__modal__email').value
      let address = document.querySelector('.input__modal__address').value
      let phone = document.querySelector('.input__modal__phone').value
      let id = `${Math.round(Math.random() * 100)}`
      this.add({ id, name, email, address, phone });
      this.storage = this.contactsData;
      this.show();
   }

   show() {
      const ul = document.querySelector('.contacts__list');
      let li = '';
      const data = this.storage;
      data.forEach(({ data: { id, name, email, address, phone } }) => {
         li += `
                  <li class = "contacts__field">
                     <span class = "contacts__name contacts__text">
                        Name:
                     </span>
                     <span class = "contacts__user__name contacts__value">
                        ${name}
                     </span>
                  </li>

                           <li class = "contacts__field">
                     <span class = "contacts__email contacts__text">
                        Email:
                     </span>
                     <span class = "contacts__user__email contacts__value">
                        ${email}
                     </span>
                  </li>

                           <li class = "contacts__field">
                     <span class = "contacts__address contacts__text">
                     Address:
                     </span>
                     <span class = "contacts__user__address contacts__value">
                        ${address}
                     </span>
                  </li>

                           <li class = "contacts__field">
                     <span class = "contacts__phone contacts__text">
                        Phone:
                     </span>
                     <span class = "contacts__user__phone contacts__value">
                        ${phone}
                     </span>
                  </li>
                  <div class = "contacts__button">
                     <button type = "submit" data-edit = "${id}" class = "btn__edit btn">Изменить</button>
                     <button type = "submit" data-delete = "${id}" class = "btn__delete btn">Удалить</button>
                  </div>
               `
      })
      ul.innerHTML = li;
      this.addEventListenerBtnDelete()
      this.addEventListenerBtnEdit()
   }


   addEventListenerBtnDelete() {
      let btnDelete = document.querySelectorAll('.btn__delete');
      btnDelete.forEach((btn) => {
         btn.addEventListener('click', (e) => {
            this.onRemove(e.target.dataset.delete);
         })
      })
   }

   onRemove(deleteId) {
      this.remove(deleteId);
      this.storage = this.contactsData;
      this.show();
   }



   addEventListenerBtnEdit() {
      let btnEdit = document.querySelectorAll('.btn__edit')
      btnEdit.forEach((btn) => {
         btn.addEventListener('click', (e) => {
            const editUserId = e.target.dataset.edit;
            this.editModal(editUserId);
         })
      })
   }

   editModal(editUserId) {

      const data = this.get();
      console.log(data);
      data.forEach(({ data: { id, name, email, address, phone } }) => {
         if (id === editUserId) {
            let editModalDiv = document.createElement('div');
            editModalDiv.classList.add('edit__modal');
            editModalDiv.innerHTML = ` <div class = "modal__wrapper">
                                          <div class ="modal__title">
                                          Введите данные:
                                          </div>
                                          <div class = "modal__items">
                                             <div class = "modal__item">
                                                <div class ="modal__text">Имя:</div>
                                                <input type = "text" class = "input__modal__name modal__input" placeholder = "Введите имя" value = "${name}" required>
                                             </div>
                                             <div class = "modal__item">
                                                <div class ="modal__text">Email:</div>
                                                <input type = "email" class = "input__modal__email modal__input" placeholder = "Введите email" value = "${email}">
                                             </div>
                                             <div class = "modal__item">
                                                <div class ="modal__text">Адрес:</div>
                                                <input type = "text" class = "input__modal__address modal__input" placeholder = "Введите адрес" value = "${address}" >
                                             </div>
                                             <div class = "modal__item">
                                                <div class ="modal__text">Номер телефона:</div>
                                                <input type = "tel" class = "input__modal__phone modal__input" placeholder = "Введите телефон"value = " ${phone}" reuired>
                                             </div>
                                          </div>
                                          <div class = "modal__btn">
                                             <button class ="btn__edit-modal btn" type = "submit">Изменить</button>
                                          </div>
                                       </div>
                                    `
            document.body.appendChild(editModalDiv);
            let buttonEdit = document.querySelector('.btn__edit-modal');
            buttonEdit.addEventListener('click', () => {

               let name = document.querySelector('.input__modal__name').value
               let email = document.querySelector('.input__modal__email').value
               let address = document.querySelector('.input__modal__address').value
               let phone = document.querySelector('.input__modal__phone').value

               this.edit(editUserId, { name, email, address, phone });
               this.storage = this.contactsData;
               editModalDiv.remove();
               this.show();
            })
         }
      })
   }
   set storage(newData) {
      localStorage.setItem('localStorageData', JSON.stringify(newData));
   }
   get storage() {
      let storageData = localStorage.getItem('localStorageData');
      let localStorageArray = [];
      if (storageData.length > 0) {
         localStorageArray = JSON.parse(storageData);
         console.log(localStorageArray);
         return localStorageArray;
      }
   }

}

window.addEventListener('load', () => {
   const contactsList = new ContactsApp();
})
