class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
  const myCar = new Car("Ford");
  
console.log(myCar.cnam);

  
  