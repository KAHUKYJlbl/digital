import { render } from '../../abstract/render/render';
import { addButton } from '../../utils/add-button';
import { addService } from '../../utils/add-service';

import ServicesModel from '../../model/services-model';

import HeroView from '../../view/hero/hero-view';
import MainView from '../../view/main/main-view';
import NavbarView from '../../view/navbar/navbar-view';
import ServicesView from '../../view/services/services-view';

import { MainControllerProps } from './types';
import { getHeight } from '../../utils/get-height';

const BUTTONS = {
  unused1: {
    name: "See Our Project",
    id: "unused1"
  },
}

export default class MainController {
  #appContainer: Element;
  #servicesModel: ServicesModel;
  #navbarComponent = new NavbarView();
  #wrapComponent = new MainView();
  #heroComponent = new HeroView();
  #servicesComponent: ServicesView;

  constructor ({servicesModel, appContainer}: MainControllerProps) {
    this.#servicesModel = servicesModel;
    this.#appContainer = appContainer;
    this.#servicesComponent = new ServicesView(getHeight(this.#servicesModel.data?.length));
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
    if (this.#servicesModel.data) {
      this.#servicesModel.data.map((service) => {
        addService(this.#servicesComponent.element, service);
      });
    }
  };
}
