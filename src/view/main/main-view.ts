import AbstractView from '../../abstract/view/view.ts';
import { createMainTemplate } from './main-template.ts';

export default class MainView extends AbstractView {
  get template() {
    return createMainTemplate();
  }
}
