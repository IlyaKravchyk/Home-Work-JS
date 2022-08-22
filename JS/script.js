
// 2. В классе «User» реализуйте сл. свойства и методы:
// 1. Свойство data – для хранения данных о контакте в виде простого объекта со сл. полями: id,
// name, email, address, phone.
// 2. Метод edit(obj) – для редактирования данных контакта. В качестве параметра метод должен
// принимать объект с обновленными данными и обновлять свойство data.
// 3. Метод get() – для получения данных о контакте. Метод должен возвращать объект с данными
// из св-ва data.
// 4. При создании объекта на основе этого класса важно передать в конструктор данные о контакте
// в виде объекта для дальнейшего сохранения в св-во data.

const testObject = {
   id: Math.round((Math.random()) * 100),
   name: 'Ilya',
   email: 'test@gamail.com',
   address: 'Minsk',
   phone: '+375(29)123-45-67'
}

class User {
   constructor({ id, name, email, address, phone }) {
      ;
      this.data = {
         id,
         name,
         email,
         address,
         phone
      }
   }
   // get get() {
   //    return this.data
   // }
   showData() {
      return this.data
   }
   set edit({ id, name, email, address, phone }) {
      this.data = {
         id,
         name,
         email,
         address,
         phone
      }
   }
}

//let user = new User(testObject);






// 3. В классе «Contacts» реализуйте сл. св-ва и методы:
// 1. Свойство data – для хранения всех добавленных контактов в массиве. Каждый эл-т массива
// должен представлять собой объект созданный на основе класса «User».
// 2. Метод add() – для создания контакта (на основе класса «User») и добавления его в массив data.
// 3. Метод edit(id, obj) – для редактирования информации конкретного контакты из св-ва data,
// используя соответствующий метод из «User». В качестве параметра нужно передать
// идентификатор контакта для последующего поиска и объект с новыми данными для
// редактирования.
// 4. Метод remove(id) – для удаления контакта из общего массива данных по идентификатору. В
// качестве параметра нужно передать идентификатор контакта.
// 5. Метод get() – для получения всех контактов. Метод должен возвращать объект с данными из cвойства data.


class Contacts {
   constructor() {
      this.data = [];
      this.add(testObject);

   }
   add(object) {
      let user = new User(object);
      this.data.push(user);
      console.log(this.data)
   }
   edit(id, obj) {
      let editContacts = this.data.map((item) => {
         item.id === id ? user.edit(obj) = item : alert('совпадений не найдено');
      })
   }
}

const contacts = new Contacts();
