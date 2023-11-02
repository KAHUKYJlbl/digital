import style from './wrapper-modal-template.module.sass'

export function createWrapperModalTemplate( id: string ) {
  return `
    <div class="${style.container}" id="modal-wrapper">
      <button id="${id}" class="${style.button}">CLOSE</button>
    </div>
  `
}
