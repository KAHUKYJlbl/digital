import AbstractView from '../../abstract/view/view.ts';
import { createButtonTemplate } from './button-template.ts';

export default class ButtonView extends AbstractView {
  #text: string;
  #id: string;

  constructor (text: string, id: string) {
    super();

    this.#text = text;
    this.#id = id;
  }

  get template() {
    return createButtonTemplate(this.#text, this.#id);
  }
}
