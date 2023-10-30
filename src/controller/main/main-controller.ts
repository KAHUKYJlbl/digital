import { render } from '../../abstract/render/render';
import { addButton } from '../../utils/add-button';

import HeroView from '../../view/hero/hero-view';
import MainView from '../../view/main/main-view';
import NavbarView from '../../view/navbar/navbar-view';
import ServicesView from '../../view/services/services-view';

import { MainControllerProps } from './types';

const BUTTONS = {
  unused1: {
    name: "See Our Project",
    id: "unused1"
  },
}

export default class MainController {
  #appContainer: Element;
  #navbarComponent = new NavbarView();
  #wrapComponent = new MainView();
  #heroComponent = new HeroView();
  #servicesComponent = new ServicesView();

  constructor ({appContainer}: MainControllerProps) {
    this.#appContainer = appContainer;
  };

  init () {
    this.#renderApp();
  };

  #renderApp () {
    // navbar (position: absolute)
    if (!this.#appContainer.contains(this.#navbarComponent.element)) {
      render(this.#navbarComponent, this.#appContainer);
    };

    // container
    if (!this.#appContainer.contains(this.#wrapComponent.element)) {
      render(this.#wrapComponent, this.#appContainer);
    };

    // hero
    if (this.#wrapComponent.element && !this.#wrapComponent.element.contains(this.#heroComponent.element)) {
      render(this.#heroComponent, this.#wrapComponent.element);
    };
    addButton(this.#heroComponent.element?.querySelector('#insert-hero'), BUTTONS.unused1.name, BUTTONS.unused1.id);

    // services
    if (this.#wrapComponent.element && !this.#wrapComponent.element.contains(this.#servicesComponent.element)) {
      render(this.#servicesComponent, this.#wrapComponent.element);
    };
    
  };
}
