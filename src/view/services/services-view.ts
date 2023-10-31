import AbstractView from '../../abstract/view/view.ts';
import { createServicesTemplate } from './services-template.ts';

export default class ServicesView extends AbstractView {
  #height: number;

  constructor (height: number) {
    super();

    this.#height = height;
  };

  get template() {
    return createServicesTemplate(this.#height);
  };
}
