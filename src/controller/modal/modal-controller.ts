import { remove, render } from '../../abstract/render/render';
import { MessageType } from '../../model/types';

import MailModalView from '../../view/modal/mail/mail-modal-view';
import SuccessModalView from '../../view/modal/success/success-modal-view';
import WrapperModalView from '../../view/modal/wrapper/wrapper-modal-view';

export default class ModalController {
  #appContainer: Element;
  #modalComponent: WrapperModalView | null = null;
  #innerComponent: MailModalView | SuccessModalView | null = null;

  constructor (appContainer: Element) {
    this.#appContainer = appContainer;
  }

  init (innerComponent: MailModalView | SuccessModalView = new MailModalView(this.#onFormSubmit)) {
    this.#innerComponent = innerComponent;
    this.#modalComponent = new WrapperModalView(this.#innerComponent.template, this.#removeModal);
    this.#renderModal();
  }

  #onFormSubmit = (data: MessageType) => {

    console.log(data);
  }

  #renderModal = () => {
    if (this.#appContainer && this.#modalComponent && !this.#appContainer.contains(this.#modalComponent.element)) {
      render(this.#modalComponent, this.#appContainer);
    };
  }

  #removeModal = () => {
    if (this.#modalComponent) {
      remove(this.#modalComponent);
      this.#modalComponent = null
      document.body.style.overflow = 'scroll';
    }
  }
}