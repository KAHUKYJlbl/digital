import { render } from '../abstract/render/render';
import ButtonView from '../view/button/button-view';

export function addButton (container: Element | null | undefined, text: string, id: string) {
  const button = new ButtonView(text, id);

  if (container && !container.contains(button.element)) {
    render(button, container);
  }
};