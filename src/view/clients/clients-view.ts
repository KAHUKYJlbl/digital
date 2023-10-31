import AbstractView from '../../abstract/view/view.ts';
import { createClientsTemplate } from './clients-template.ts';

export default class ClientsView extends AbstractView {
  get template() {
    return createClientsTemplate();
  }
}