//using functions
// function Car(make, model, year, engine)
// {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.engine = engine;
// }
// function Engine(cylinders, horsepower, mpg)
// {
//     this.cylinders = cylinders;
//     this.horsepower = horsepower;
//     this.mpg = mpg;
//     this.oil = {
//         type: '5W30',
//         level: 100
//     };
//     this.readOilLevel = () => this.oil.level;
// }
// let eng = new Engine(4 ,350, 25);
// let myCar = new Car('nissan', 'GT-R', 2015, eng);

//adapted to classes
class Car{
    constructor(make, model, year, engine){
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }
}
class Engine{
    constructor(cylinders, horsepower, mpg){
        this.cylinders = cylinders;
        this.horsepower = horsepower;
        this.mpg = mpg;
    }
    oil = {
        type: '5W30',
        level: 100
    };
    readOilLevel(){
        return this.oil.level;
    }
}

let eng = new Engine(4 ,350, 25);
let myCar = new Car('nissan', 'GT-R', 2015, eng);