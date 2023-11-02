import {createElement} from '../render/render.ts';

export default class AbstractView {
  #element: Element | null = null;

  _callback = {};

  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template(): string {
    throw new Error('Abstract method not implemented: get template');
  }

  _addHandlers() {
    throw new Error('Abstract method not implemented: _addHandlers');
  }

  removeElement() {
    this.#element = null;
  }
}
