// Задание C3.4
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalDevice (name, power) {
    this.name = name;
    this.power = power;
    this.isPluggetIn = false;
}

// Включаем
ElectricalDevice.prototype.plugIn = function () {
    if (this.isPluggetIn) {
        console.log(`${this.name} уже был включён`)
    } else {
        this.isPluggetIn = true
        console.log(`${this.name} включён`)
    }
}

// Выключаем
ElectricalDevice.prototype.unplug = function () {
    if (!this.isPluggetIn) {
        console.log(`${this.name} уже был выключен`)
    } else {
        this.isPluggetIn = false
        console.log(`${this.name} выключен`)
    }
}

function Computer (name, power, type, ram, proc, vga) {
    this.name = name;
    this.power = power;
    this.type = type;
    this.ram = ram;
    this.proc = proc;
    this.vga = vga;
    this.isPluggetIn = false;
}

Computer.prototype = new ElectricalDevice()

function Monitor (name, power, brand, diagonal) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.diagonal = diagonal;
    this.isPluggetIn = true;
}

Monitor.prototype = new ElectricalDevice()

const myComputer = new Computer("HomeComputer", 100, "stationary", 32, "Intel Dual Core", "GeForce 1080")
const myMonitor = new Monitor("MyMonitor", 120, "ASUS", 27)

console.log(myComputer, myMonitor)

// Включаем всё
myComputer.plugIn()
myMonitor.plugIn()

console.log(myComputer, myMonitor)

// Завершаем работу
myComputer.unplug()
myMonitor.unplug()

console.log(myComputer, myMonitor)