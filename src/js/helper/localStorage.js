export default class LocalStorage {
  static getItem = (name) => {
    return JSON.parse(localStorage.getItem(name))
  }

  static setItem = (name, value) => {
    localStorage.setItem(name, value)
  }
}
