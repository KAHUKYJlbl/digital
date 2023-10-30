import AbstractView from '../../abstract/view/view.ts';
import { createServicesTemplate } from './services-template.ts';

export default class ServicesView extends AbstractView {
  get template() {
    return createServicesTemplate();
  }
}
