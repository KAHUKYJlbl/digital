import AbstractView from './view.js';

export default class AbstractStatefulView<T> extends AbstractView {
  _state: T;

  updateElement(update: T) {
    if (!update) {
      return;
    }

    this._setState(update);

    this.#rerenderElement();
  }

  _restoreHandlers() {
    throw new Error('Abstract method not implemented: restoreHandlers');
  }

  _setState(update: T) {
    this._state = structuredClone({...this._state, ...update});
  }

  #rerenderElement() {
    const prevElement = this.element;
    if (prevElement) {
      const parent = prevElement.parentElement;
      this.removeElement();

      const newElement = this.element;
      
      if (parent) {
        parent.replaceChild(newElement, prevElement);
      }
    }

    this._restoreHandlers();
  }
}
