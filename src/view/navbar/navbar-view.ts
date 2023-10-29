import AbstractView from '../../abstract/view/view.ts';
import { createNavbarTemplate } from './navbar-template.ts';

export default class NavbarView extends AbstractView {
  get template() {
    return createNavbarTemplate();
  }
}