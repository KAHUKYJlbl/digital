import { ServiceType } from '../../model/types'
import style from './services-template.module.sass'

export function createServiceTemplate(props: ServiceType) {
  return `
    <div class="${style.container}">
      <img class="${style.image}" src="${props.img}" alt="${props.name}" height="200px" width="224px" />

      <h1 class="${style.header}">
        ${props.name}
      </h1>

      <p class="${style.text}">
        ${props.description}
      </p>
    </div>
  `
}