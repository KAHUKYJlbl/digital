import AbstractView from '../../abstract/view/view.ts';
import { ServiceType } from '../../model/types.ts';
import { createServiceTemplate } from './service-template.ts';

export default class ServiceView extends AbstractView {
  #props: ServiceType;

  constructor (props: ServiceType) {
    super();

    this.#props = props;
  }

  get template() {
    return createServiceTemplate(this.#props);
  }
}
