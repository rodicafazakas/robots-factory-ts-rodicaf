var Type;
(function (Type) {
    Type[Type["Cleaner"] = 0] = "Cleaner";
    Type[Type["Waiter"] = 1] = "Waiter";
    Type[Type["Developer"] = 2] = "Developer";
})(Type || (Type = {}));
var Robot = /** @class */ (function () {
    function Robot(name, type, number, message) {
        this.name = name;
        this.type = type;
        this.power = number;
        this.message = message;
    }
    Robot.prototype.trabajar = function () {
        console.log(this.message);
    };
    return Robot;
}());
var robot = new Robot("Murphy", Type.Cleaner, 100, "Larala larita, I clean my little house");
robot.trabajar();
var createRobot = function (type) { };
