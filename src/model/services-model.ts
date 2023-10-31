import { SERVICES_DATA } from './data';
import { ServiceType } from './types';

export default class ServicesModel {
  #services: ServiceType[] = [];
  #loading = true;

  // constructor() {

  // }

  get data () {
    if (!this.#loading) {
      return this.#services
    }
  }

  init() {
    this.#loading = true;

    // fetch api request
    this.#services = SERVICES_DATA;

    this.#loading = false;
  }
}