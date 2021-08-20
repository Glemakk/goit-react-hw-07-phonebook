// Это динамика - функция, которая возвращает объект. Получает значения
// и возвращ. объект с подставленным значением.value в нашем случае.
// ОДИНАКОВЫЙ ТИП - ЗАЗНЫЙ payload
//и это называется Action creator
// export const myAction = (value) => {
//   return {
//     type: 'MY_ACTION',
//     payload: value,
//   }
// }

export const myAction = (value) => {
  return {
    type: 'MY_ACTION',
    payload: value,
  }
}

// Это статика - литерал объекта с неизменяемыми значениями
export const myAction2 = {
  type: 'MY_ACTION_2',
  payload: 'super payload 2',
}

// Каррирование
const greeting = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`)
  }
}

const fullGreeting = greeting('Nice to meet you')
console.log(fullGreeting('Adam'))
