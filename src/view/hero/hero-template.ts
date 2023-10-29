import style from './hero-template.module.sass'

export function createHeroTemplate() {
  return `
  <div class="${style.background}">
    <div class="${style.container}">

    </div>
  </div>
  `
}