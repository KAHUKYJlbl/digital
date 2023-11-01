import AbstractView from '../../../abstract/view/view.ts';
import { createWrapperModalTemplate } from './wrapper-modal-template.ts';

export default class WrapperModalView extends AbstractView {
  #innerTemplate: string;
  #callback: (e: Event) => void;
  #buttonId = 'modal-close';

  constructor ( innerTemplate: string, callback: (e: Event) => void ) {
    super();

    this.#callback = callback;
    this.#innerTemplate = innerTemplate

    this._addHandlers();
  }

  _addHandlers = () => {
    this.element?.querySelector(`#${this.#buttonId}`)?.addEventListener('click', this.#callback);
  }

  get template() {
    return createWrapperModalTemplate(this.#innerTemplate, this.#buttonId);
  }
}