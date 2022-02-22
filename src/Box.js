export default class Box {
  constructor(i, j) {
    this.element = document.createElement('div');
    this.element.classList = 'box';
    this.element.dataset.coordinates = `${i},${j}`;
    this.element.dataset.valid = true;
    this.element.addEventListener('dragenter', this.handleDragEnter)
    this.element.ondragleave = this.handleDragLeave
    this.valid = this.element.dataset.valid;
  }

  handleDragEnter() {
    event.target.classList.toggle('dragover');
  }

  handleDragLeave() {
    event.target.classList.toggle('dragover');
  }
}

