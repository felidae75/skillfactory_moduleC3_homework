// Module C3.4, переписанный в виде классов

class ElectricalDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPluggetIn = false;
    }
    // Включаем
    plugIn() {
        if (this.isPluggetIn) {
            console.log(`${this.name} уже был включён`);
        } else {
            this.isPluggetIn = true;
            console.log(`${this.name} включён`);
        }
    }
    // Выключаем
    unplug() {
        if (!this.isPluggetIn) {
            console.log(`${this.name} уже был выключен`);
        } else {
            this.isPluggetIn = false;
            console.log(`${this.name} выключен`);
        }
    }
}

class Computer extends ElectricalDevice {
    constructor(name, power, ram, proc, vga) {
        super(name, power);
        this.ram = ram;
        this.proc = proc;
        this.vga = vga;
        this.isPluggetIn = false;
    }
}

class Monitor extends ElectricalDevice {
    constructor(name, power, brand, diagonal) {
        super(name, power);
        this.name = name;
        this.power = power;
        this.brand = brand;
        this.diagonal = diagonal;
        this.isPluggetIn = true;
    }
}

const myComputer = new Computer("Home", 100,  32, "Intel Dual Core", "GeForce 1080");
const myMonitor = new Monitor("MyMonitor", 120, "ASUS", 27);

// Включаем всё
myComputer.plugIn();
myMonitor.plugIn();

// Завершаем работу
myComputer.unplug();
myMonitor.unplug();

console.log(myComputer, myMonitor)
