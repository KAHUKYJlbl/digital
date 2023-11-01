import AbstractView from '../../abstract/view/view.ts';
import ButtonView from '../button/button-view.ts';

import { createFooterTemplate } from './footer-template.ts';

export default class FooterView extends AbstractView {
  #callback: (e: Event) => void;
  #buttonId = 'mail';

  constructor (callback: (e: Event) => void) {
    super();

    this.#callback = callback;

    this._addHandlers();
  }

  _addHandlers = () => {
    this.element?.querySelector(`#${this.#buttonId}`)?.addEventListener('click', this.#callback);
  }

  get template() {
    return createFooterTemplate( (new ButtonView(`Let's Talk`, this.#buttonId)).template );
  }
}