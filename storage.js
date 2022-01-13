// Storage в файле Storage.js.
// Класс должен иметь методы:
// reset() - очищает хранящиеся в объекте данные.
// addValue(key, value) - сохраняет значение под указанным ключом.
// getValue(key) - возвращает значение по указанному ключу.
// deleteValue(key) - удаляет значение с ключом, возвращает true если такое есть, либо false если нет.
// getKeys() - возвращает массив состоящий из одних ключей.
// DrinkStorage - объект для хранения рецептов напитков. Ключом является название напитка, значением - информация о нём.

class Storage {
  constructor() {
    this.DrinkStorage = {};
  }

  addValue(key, value) {
    this.DrinkStorage[key] = value
  }

  getValue(key) {
    console.log(this.DrinkStorage[key])
  }

  getKeys() {
      
    for(let key in this.DrinkStorage){
        console.log(key)
    }
  }

  getValues(){
      for(let key in this.DrinkStorage){
          console.log(`${key} info: ${this.DrinkStorage[key]}`)
      }
  }

  deleteValue(key) {
      if(this.DrinkStorage[key]){
          delete this.DrinkStorage[key]
          return true
      } else { return false }
      
  }

  reset() {
      for(let key in this.DrinkStorage){
          delete this.DrinkStorage[key]
      }
  }
}

const drinks = new Storage();

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')

btn1.addEventListener('click', () => {
    let name = prompt('Name drink')
    let info = prompt('Info drink')
    drinks.addValue(name, info)
})
btn2.addEventListener('click', ()=> {
    let name = prompt('name drink?')
    drinks.getValue(name)
})
btn3.addEventListener('click', ()=> {
    drinks.getKeys()
})
btn4.addEventListener('click', ()=> {
    let name = prompt('name drink?')
    console.log(drinks.deleteValue(name))
    
})
btn5.addEventListener('click', ()=> {
    drinks.reset()
})
btn6.addEventListener('click', ()=> {
    drinks.getValues()
})
