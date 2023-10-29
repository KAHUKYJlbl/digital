import { render } from '../../abstract/render/render';
import HeroView from '../../view/hero/hero-view';
import MainView from '../../view/main/main-view';
import NavbarView from '../../view/navbar/navbar-view';
import { MainControllerProps } from './types';

export default class MainController {
  #appContainer: Element;
  #navbarComponent = new NavbarView();
  #wrapComponent = new MainView();
  #heroComponent = new HeroView();

  constructor ({appContainer}: MainControllerProps) {
    this.#appContainer = appContainer;
  };

  init () {
    this.#renderApp();
  }

  #renderApp () {
    // navbar (position: absolute)
    if (!this.#appContainer.contains(this.#navbarComponent.element)) {
      render(this.#navbarComponent, this.#appContainer);
    }

    // container
    if (!this.#appContainer.contains(this.#wrapComponent.element)) {
      render(this.#wrapComponent, this.#appContainer);
    }

    // hero
    if (this.#wrapComponent.element && !this.#wrapComponent.element.contains(this.#heroComponent.element)) {
      render(this.#heroComponent, this.#wrapComponent.element);
    }
  }
}