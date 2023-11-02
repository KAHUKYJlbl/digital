import style from './success-modal-template.module.sass'

export function createSuccessModalTemplate() {
  return `
    <div class="${style.container}">
      <h3 class="${style.header}">MESSAGE SENT</h3>
    </div>
  `
}
