"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var iabstract_car_1 = require("./iabstract.car");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, color) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.color = color;
        return _this;
    }
    Car.prototype.move = function () {
        console.log("move");
    };
    Car.prototype.stop = function () {
        console.log("stop");
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    return Car;
}(iabstract_car_1["default"]));
exports["default"] = Car;
