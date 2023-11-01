import he from 'he';
import AbstractStatefulView from '../../../abstract/view/state-view.ts';
import ButtonView from '../../button/button-view.ts';
import { createMailModalTemplate } from './mail-modal-template.ts';
import { MessageType } from '../../../model/types.ts';

const INIT_STATE: MessageType = {
  name: "",
  email: "",
  message: "",
}

export default class MailModalView extends AbstractStatefulView<MessageType> {
  #buttonId = "modal-submit";
  #callback: (data: MessageType) => void;

  constructor ( callback: (data: MessageType) => void ) {
    super();

    this._setState(INIT_STATE);
    this.#callback = callback;

    this._restoreHandlers();
  }

  _restoreHandlers = () => {
    this.element?.querySelector(`#${this.#buttonId}`)?.addEventListener("click", () => this.#callback(this._state));

    // input fields
    this.element?.querySelector("#name")?.addEventListener("input", this.#inputNameHandler);
    this.element?.querySelector("#email")?.addEventListener("input", this.#inputEmailHandler);
    this.element?.querySelector("#message")?.addEventListener("input", this.#inputMessageHandler);
  }

  #inputNameHandler = (e: Event) => {
    e.preventDefault();

    this._setState({
      ...this._state,
      name: he.encode((e.target as HTMLInputElement).value),
    });
  };

  #inputEmailHandler = (e: Event) => {
    e.preventDefault();

    this._setState({
      ...this._state,
      email: he.encode((e.target as HTMLInputElement).value),
    });
  };

  #inputMessageHandler = (e: Event) => {
    e.preventDefault();

    this._setState({
      ...this._state,
      message: he.encode((e.target as HTMLInputElement).value),
    });
  };

  get template() {
    return createMailModalTemplate( (new ButtonView(`Let's Talk`, this.#buttonId)).template );
  }
}