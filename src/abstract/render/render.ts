import AbstractView from '../view/view.ts';

enum RenderPosition {
  BEFOREBEGIN = 'beforebegin',
  AFTERBEGIN = 'afterbegin',
  BEFOREEND = 'beforeend',
  AFTEREND = 'afterend',
};

function createElement(template: string) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

function render(component: AbstractView, container: Element, place = RenderPosition.BEFOREEND) {
  if (!component.element) {
    throw new Error('Нeподходящий компонент');
  }

  container.insertAdjacentElement(place, component.element);
}

function replace(newComponent: AbstractView, oldComponent: AbstractView) {
  
  const newElement = newComponent.element;
  const oldElement = oldComponent.element;
  
  if (!newElement) {
    throw new Error('Отсутствует замещающий элемент');
  }

  if (!oldElement) {
    throw new Error('Отсутствует элемент для замены');
  }

  if (!oldElement.parentElement) {
    throw new Error('Отсутствует элемент-контейнер');
  }

  const parent = oldElement.parentElement;

  parent.replaceChild(newElement, oldElement);
}

function remove(component: AbstractView) {
  if (component === null) {
    return;
  }

  if (!component.element) {
    throw new Error('Отсутствует элемент для удаления');
  }

  component.element.remove();
  component.removeElement();
}

export {RenderPosition, createElement, render, replace, remove};
