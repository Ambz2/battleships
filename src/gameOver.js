export default class GameOver {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList = 'gameOver';
    this.element.textContent = 'Game Over!'
    this.button = document.createElement('button')
    this.button.textContent = 'try again?'
    this.element.appendChild(this.button)
    }
}