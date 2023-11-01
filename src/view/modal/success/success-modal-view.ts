import AbstractView from '../../../abstract/view/view.ts';
import { createSuccessModalTemplate } from './success-modal-template.ts';

export default class SuccessModalView extends AbstractView {
  get template() {
    return createSuccessModalTemplate();
  }
}