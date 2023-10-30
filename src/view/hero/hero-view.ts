import AbstractView from '../../abstract/view/view.ts';
import { createHeroTemplate } from './hero-template.ts';

export default class HeroView extends AbstractView {
  get template() {
    return createHeroTemplate();
  }
}
