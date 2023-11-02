import AbstractView from '../../../abstract/view/view.ts';
import { createWrapperModalTemplate } from './wrapper-modal-template.ts';

export default class WrapperModalView extends AbstractView {
  #callback: () => void;
  #buttonId = 'modal-close';

  constructor ( callback: () => void ) {
    super();

    this.#callback = callback;

    this._addHandlers();
  }

  _addHandlers = () => {
    this.element?.querySelector(`#${this.#buttonId}`)?.addEventListener('click', this.#callback);
  }

  get template() {
    return createWrapperModalTemplate( this.#buttonId );
  }
}