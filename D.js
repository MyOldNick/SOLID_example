// Предположим, что мы работаем с localStorage и в коде нужно будет везде писать это:
// localStorage.setItem(key, value)
// Но если у нашего типмлида возникнет желание заменить localStorage на indexedDB, то нам будет больно
// Поэтому можно создать отдельный класс, который будет управлять хранилищем

class DBService {
    
    setData(key, data) {
        return localStorage.setItem(key, JSON.stringify(data))
    }

    getItem(key) {
        return JSON.parse(localStorage.getItem(key))
    }

}