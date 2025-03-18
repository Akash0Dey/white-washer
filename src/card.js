export class card {
  #color;
  #type;
  #value;
  constructor(color, type, value) {
    this.#color = color;
    this.#type = type;
    this.#value = value;
  }

  details() {
    return { color: this.#color, type: this.#type, value: this.#value };
  }
}
