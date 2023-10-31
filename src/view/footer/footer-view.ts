import AbstractView from '../../abstract/view/view.ts';
import { createFooterTemplate } from './footer-template.ts';

export default class FooterView extends AbstractView {
  get template() {
    return createFooterTemplate();
  }
}