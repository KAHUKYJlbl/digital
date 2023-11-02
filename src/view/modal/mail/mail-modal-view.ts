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
  _error = true;

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
    if ( !validation('name', this._state.name) ) {
      document.querySelector('#name')?.classList.add('error');
      this._setError(true);

      return;
    }

    if ( !validation('email', this._state.email) ) {
      document.querySelector('#email')?.classList.add('error');
      this._setError(true);

      return;
    }

    if ( !validation('message', this._state.message) ) {
      document.querySelector('#message')?.classList.add('error');
      this._setError(true);

      return;
    }

    if ( !this._error ) {
      this.#callback(this._state);
    }
  }

  #inputNameHandler = (e: Event) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;

    if ( !validation('name', value) ) {
      return;
    }

    document.querySelector('#name')?.classList.remove('error');
    this._setError(false);

    this._setState({
      ...this._state,
      name: he.encode(value),
    });
  };

  #inputEmailHandler = (e: Event) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;

    if ( !validation('email', value) ) {
      return;
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

    if ( !validation('message', value) ) {
      return;
    }

    document.querySelector('#message')?.classList.remove('error');
    this._setError(false);

    this._setState({
      ...this._state,
      message: he.encode(value),
    });
  };

  get template() {
    return createMailModalTemplate( (new ButtonView(`SUBMIT`, this.#buttonId)).template );
  };

  _setError (error: boolean) {
    this._error = error;
  }
}