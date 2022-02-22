export default class DragNDropShip {
  constructor(size) {
    this.element = document.createElement('div');
    this.element.classList.add('dragndropship');
    this.element.setAttribute('draggable', 'true');
    this.element.dataset.size = size;
    this.defineSize(size);
  }

  defineSize(size) {
    for (let i=0; i < size; i++) {
      let box = document.createElement('div');
      box.classList = 'ship-segment';
      this.element.appendChild(box);
    }
  }
}
