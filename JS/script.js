// Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
// вкл./выкл., расчет времени закипания воды.
let Teapot = function () {
   this.get = function () {
      this.power = +prompt('Введите мощность чайника, Вт.');
      this.volume = +prompt('Введите объём чайника, л.');
      this.water = +prompt('Введите количество воды в чайнике, л.');
      this.waterTemperature = +prompt('Введите исходную температуру воды, °C.');
      this.operation();
   };
   this.operation = function () {
      this.onOf = confirm('Включить чайник?');
      this.onOf ? this.calc() : this.show();
   };
   this.calc = function () {
      this.timeInSeconds = Math.round((4183 * this.water * (100 - this.waterTemperature)) / this.power);
      this.timeInMinutes = Math.round(this.timeInSeconds / 60);
      this.show();
   }
   this.show = function () {
      if (this.onOf) {
         console.log(`Мощность чайника: ${this.power} Вт.`);
         console.log(`Количество воды в чайнике: ${this.water} л.`);
         console.log(`Объём чайника: ${this.volume} л.`);
         console.log(`Время закипания воды ${this.timeInSeconds} сек.`);
         console.log(`Время закипания воды ${this.timeInMinutes} мин.`);
      } else {
         alert('Вы не включили чайник');
         console.log(`Мощность чайника: ${this.power} Вт.`);
         console.log(`Количество воды в чайнике: ${this.water} л.`);
         console.log(`Объём чайника: ${this.volume} л.`);
      }
   }
};
let teapot = new Teapot();
teapot.get();

// Формула расчета времени нагрева: t = c * m * (t2 - t1) / W, где
// t - время нагрева, сек.W - мощность водонагревателя, Вт c - теплоемкость нагреваемого материала, Дж / кг * К(вода = 4183 Дж / кг * К)
// m - масса нагреваемого материала, кг(для воды можно принять условно 1 кг = 1 литр) t1 - температура исходная, К t2 - температура требуемая