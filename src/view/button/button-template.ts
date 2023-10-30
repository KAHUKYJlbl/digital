import style from './button-template.module.sass'

export function createButtonTemplate(text: string, id: string) {
  return `
    <button class="${style.button}" id="${id}" type="button">
      ${text}
    </button>
  `
}
