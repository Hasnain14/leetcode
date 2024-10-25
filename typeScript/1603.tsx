class ParkingSystem {
big: number;
medium: number;
small: number;
    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType: number): boolean {
        if(carType === 1){ 
            if(this.big >= 1){
                this.big--;
                return true;
            }else{
                return false
            }
        } else if (carType === 2) { 
            if (this.medium >= 1) {
                this.medium--;
                return true;
            } else {
                return false;
            }
        } else if (carType === 3) { 
            if (this.small >= 1) {
                this.small--;
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}

const parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(1));
