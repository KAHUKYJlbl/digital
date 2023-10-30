import style from './hero-template.module.sass'

export function createHeroTemplate() {
  return `
  <div class="${style.background}">
    <div class="${style.container}">
      <h1 class="${style.header}">New Automation<br>Tool for Your Home</h1>
      <p class="${style.text}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
    </div>
  </div>
  `
}