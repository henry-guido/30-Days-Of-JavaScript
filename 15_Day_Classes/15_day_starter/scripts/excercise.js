
// Exercises Level 1

// 1 Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get getInfoAnimal() {
        return `The name this animal is ${this.name}`
    }
}

const test = new Animal('ponky', 5, 'brown', 4);
console.log(test.getInfoAnimal)


// 2 Create a Dog and Cat child class from the Animal Class.

class Cat extends Animal {

}

const teo = new Cat('Teodoro', 3, 'white', 4);
console.log(teo.getInfoAnimal)

//Exercises Level 2

// 1. Override the method you create in Animal class

class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }

    get getInfoDog() {
        return this.breed
    }
}

const Mat = new Dog('Mateo', 2, 'black', 4, 'Pastor Aleman');
console.log("Mat", Mat.getInfoDog)


// Exercises Level 3

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.



class Statistics {
    constructor(array) {
        this.array = array
    }

    count() {
        return this.array.length;
    }

    sum() {
        return this.array.reduce((a, b) => a + b);
    }

    min() {
        let min = this.array.sort((a, b) => a - b);
        return min.at();
    }

    max() {
        let max = this.array.sort((a, b) => b - a);
        return max.at();
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        //return  //`${this.sum()} / ${this.count()}`;
        return (this.sum() / this.count());
    }

    median() {
        let sortData = this.array.sort((a, b) => a - b)
        let medianData = this.count() / 2
        return (this.count() % 2 !== 0)
            ? sortData.at(medianData)
            : (sortData.at(medianData) + sortData.at(medianData + 1)) / 2
    }

    mode() { //{'mode': 26, 'count': 5}
        let group = this.array.reduce((a, b) => {
            let find = a.map(x => Object.values(x).at()).indexOf(b);
            (find > -1)
                ? a[find]['count'] += 1
                : a.push({ mode: b, count: 1 });
            return a
        }, [])
        return group.sort((a, b) => b.count - a.count).at()
    }

    var() {
        let deviation = this.array.map(age => Math.pow((age - this.mean()), 2));
        return deviation.reduce((a, b) => a + b) / (this.count());
    }

    std() {
        return Math.sqrt(this.var())
    }

    get describe() {
        console.log('Count:', this.count()) // 25
        console.log('Sum: ', this.sum()) // 744
        console.log('Min: ', this.min()) // 24
        console.log('Max: ', this.max()) // 38
        console.log('Range: ', this.range())// 14
        console.log('Mean: ', this.mean().toFixed()) // 30
        console.log('Median: ', this.median()) // 29
        console.log('Mode: ', this.mode()) // {'mode': 26, 'count': 5}
        console.log('Variance: ', this.var().toFixed(1)) // 17.5
        console.log('Standard Deviation: ', this.std().toFixed(1)) // 4.2
    }
}

const arr = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(arr);

console.log(statistics.describe)

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = incomes
        this.expenses = expenses
    }
    totalIncome() {console.log('totalIncome') }
    totalExpense() { }
    accountInfo() { }
    addIncome() { }
    addExpense() { }
    accountBalance() { }

}


