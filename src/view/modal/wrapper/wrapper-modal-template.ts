import style from './wrapper-modal-template.module.sass'

export function createWrapperModalTemplate( innerTemplate: string, id: string ) {
  return `
    <div class="${style.container}">
      <button id="${id}" class="${style.button}">CLOSE</button>
      ${innerTemplate}
    </div>
  `
}
