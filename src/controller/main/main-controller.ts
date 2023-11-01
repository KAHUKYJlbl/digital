import { render } from '../../abstract/render/render';
import { addService } from '../../utils/add-service';

import ServicesModel from '../../model/services-model';

import ModalController from '../modal/modal-controller';

import HeroView from '../../view/hero/hero-view';
import MainView from '../../view/main/main-view';
import NavbarView from '../../view/navbar/navbar-view';
import ServicesView from '../../view/services/services-view';
import { getHeight } from '../../utils/get-height';
import ClientsView from '../../view/clients/clients-view';
import FooterView from '../../view/footer/footer-view';

import { MainControllerProps } from './types';

export default class MainController {
  #appContainer: Element;
  #servicesModel: ServicesModel;
  #servicesComponent: ServicesView;
  #footerComponent: FooterView;
  #modalController: ModalController;

  #navbarComponent = new NavbarView();
  #wrapComponent = new MainView();
  #heroComponent = new HeroView();
  #clientsComponent = new ClientsView();
  


  constructor ({ servicesModel, appContainer }: MainControllerProps) {
    this.#servicesModel = servicesModel;
    this.#appContainer = appContainer;
    this.#servicesComponent = new ServicesView( getHeight(this.#servicesModel.data?.length) );
    this.#modalController = new ModalController( this.#appContainer );
    this.#footerComponent = new FooterView(this.#handleMailClick);
  };
  
  init () {
    this.#renderApp();
  };

  #handleMailClick = (e: Event) => {
    e.preventDefault();
    this.#modalController.init();
    document.body.style.overflow = 'hidden';
  }

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

    // services
    if (this.#wrapComponent.element && !this.#wrapComponent.element.contains(this.#servicesComponent.element)) {
      render(this.#servicesComponent, this.#wrapComponent.element);
    };
    if (this.#servicesModel.data) {
      this.#servicesModel.data.map((service) => {
        addService(this.#servicesComponent.element, service);
      });
    }

    // clients
    if (this.#wrapComponent.element && !this.#wrapComponent.element.contains(this.#clientsComponent.element)) {
      render(this.#clientsComponent, this.#wrapComponent.element);
    };

    // footer
    if (this.#wrapComponent.element && !this.#wrapComponent.element.contains(this.#footerComponent.element)) {
      render(this.#footerComponent, this.#wrapComponent.element);
    };
  };
}
