// Classes in the JS


const object = {
    "name": "Rishi",
    "age": 23
}


class Rectangle {
    constructor(width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        return this.width*this.height;
    }

    paint(){
        console.log(`Painted with ${this.color} for the rectangular surface`);
    }
}


const rectangle = new Rectangle(2,3,"red")
const area = rectangle.area()
console.log(area)

