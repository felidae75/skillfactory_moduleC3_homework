// Тестовые объекты, чтобы проверять, работает ли код

const testProto = {
    key1: "value1",
    key2: "value2"
}

const testObj = Object.create(testProto)

testObj.objKey1 = "obj_value1"
testObj.objKey2 = "obj_value2"

// Задание 1.
// Написать функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

function printOwnProp (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, Значение: ${obj[key]}`)
        }
    }
}

printOwnProp(testObj)
// "Ключ: objKey1, Значение: obj_value1"
// "Ключ: objKey2, Значение: obj_value2"


// Задание 2
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function isPropInObj (obj, str) {
    return (str in obj);
}

// Для быстрого теста строки поместила в массив

const test_strings_array = ["value1", "key2", "random_string"]

for (let test_string in test_strings_array) {
    console.log(test_strings_array[test_string], isPropInObj(testProto, test_strings_array[test_string]))
}

// "value1"
// false
// "key2"
// true
// "random_string"
// false

function createEmptyObj () {
    return Object.create(null)
}

console.log(Object.getPrototypeOf(createEmptyObj()))

// null