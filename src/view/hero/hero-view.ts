import AbstractView from '../../abstract/view/view.ts';
import ButtonView from '../button/button-view.ts';
import { createHeroTemplate } from './hero-template.ts';

export default class HeroView extends AbstractView {
  #buttonId = 'unused';

  get template() {
    return createHeroTemplate( (new ButtonView('See Our Project', this.#buttonId)).template );
  }
}
