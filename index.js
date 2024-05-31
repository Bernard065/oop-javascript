// Object Literals
const circe = {
    radius: 5,
    draw: function() {
        console.log("draw")
    }
};

circe.draw();

// Using constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const circle = new Circle();
