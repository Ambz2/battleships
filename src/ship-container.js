import DragNDropShip from "./dragndropship.js";

export default class ShipContainer {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList = 'ship-container'
    this.dragNDropShip1 = new DragNDropShip(2);
    this.dragNDropShip2 = new DragNDropShip(3);
    this.dragNDropShip3 = new DragNDropShip(3);
    this.dragNDropShip4 = new DragNDropShip(4);
    this.dragNDropShip5 = new DragNDropShip(5);

    this.element.appendChild(this.dragNDropShip1.element);
    this.element.appendChild(this.dragNDropShip2.element);
    this.element.appendChild(this.dragNDropShip3.element);
    this.element.appendChild(this.dragNDropShip4.element);
    this.element.appendChild(this.dragNDropShip5.element);
  }
}