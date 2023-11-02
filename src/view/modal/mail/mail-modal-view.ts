import he from 'he';
import ButtonView from '../../button/button-view.ts';
import { createMailModalTemplate } from './mail-modal-template.ts';
import { MessageType } from '../../../model/types.ts';
import AbstractView from '../../../abstract/view/view.ts';
import { validation } from '../../../utils/validation.ts';

const INIT_STATE: MessageType = {
  name: "",
  email: "",
  message: "",
}

export default class MailModalView extends AbstractView {
  #buttonId = "modal-submit";
  #callback: (data: MessageType) => void;
  _state: MessageType;
  _error = false;

  constructor ( callback: (data: MessageType) => void ) {
    super();

    this._setState(INIT_STATE);
    this.#callback = callback;

    this._addHandlers();
  };

  _setState (data: MessageType) {
    this._state = data;
  };

  _addHandlers = () => {
    this.element?.querySelector(`#${this.#buttonId}`)?.addEventListener('click', this.#formSubmitHandler);

    // input fields
    this.element?.querySelector('#name')?.addEventListener('input', this.#inputNameHandler);
    this.element?.querySelector('#email')?.addEventListener('input', this.#inputEmailHandler);
    this.element?.querySelector('#message')?.addEventListener('input', this.#inputMessageHandler);
  };

  #formSubmitHandler = () => {
    if ( !this._error ) {
      this.#callback(this._state);
    }
  }

  #inputNameHandler = (e: Event) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;

    if ( !validation('name', value) ) {
      document.querySelector('#name')?.classList.add('error');
      this._setError(true);
      return;
    }

    document.querySelector('#name')?.classList.remove('error');
    this._setError(false);

    this._setState({
      ...this._state,
      email: he.encode(value),
    });
  };

  #inputEmailHandler = (e: Event) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;

    if ( validation('email', value) ) {
      document.querySelector('#email')?.classList.add('error');
      this._setError(true);
    }

    document.querySelector('#email')?.classList.remove('error');
    this._setError(false);

    this._setState({
      ...this._state,
      email: he.encode(value),
    });
  };

  #inputMessageHandler = (e: Event) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;

    if ( validation('message', value) ) {
      document.querySelector('#message')?.classList.add('error');
      this._setError(true);
    }

    document.querySelector('#message')?.classList.remove('error');
    this._setError(false);

    this._setState({
      ...this._state,
      email: he.encode(value),
    });
  };

  get template() {
    return createMailModalTemplate( (new ButtonView(`Let's Talk`, this.#buttonId)).template );
  };

  _setError (error: boolean) {
    this._error = error;
  }
}