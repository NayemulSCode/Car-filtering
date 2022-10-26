import cars from '../cars.json'
const useCars = () => {
    let newCars = [];
    cars.forEach(function (car) {
        if (car.hasOwnProperty('cars')) {
            car.cars.forEach(function (c) {
                if (newCars.indexOf(c) === -1) {
                    newCars.push(c)
                }
            });
        }
    })
    return newCars;  
}
const useCitys = () => {
    let newCitys = [];
    cars.forEach(function (car) {
        if (car.hasOwnProperty('city')) {
            car.city.forEach(function (city) {
                if (newCitys.indexOf(city) === -1) {
                    newCitys.push(city)
                }
            });
        }
    })
    return newCitys;  
}

const useColors = () => {
    let newColors = [
        
    ];
    cars.forEach(function (car) {
        if (car.hasOwnProperty('color')) {
            car.color.forEach(function (color) {
                if (newColors.indexOf(color) === -1) {
                    newColors.push(color)
                }
            });
        }
    })
    return newColors;
}

export { useCars, useCitys, useColors }