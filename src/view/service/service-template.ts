import { ServiceType } from '../../model/types';
import style from './service-template.module.sass';
import arrowNext from '../../assets/images/icons/arrow-next.svg';

export function createServiceTemplate(props: ServiceType) {
  return `
    <div class="${style.container}">
      <img class="${style.image}" src="${props.img}" alt="${props.name}" height="200px" width="224px" />

      <h3 class="${style.header}">
        ${props.name}
      </h1>

      <p class="${style.text}">
        ${props.description}
      </p>

      <button class="${style.button}" type="button">
        Learn more
        <img src="${arrowNext}" height="24px" width="24px" />
      </button>
    </div>
  `
}