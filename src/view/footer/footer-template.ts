import style from './footer-template.module.sass'

export function createFooterTemplate() {
  return `
    <div class="${style.background}">
      <div class="${style.container}">
        <div class="${style.containerTop}">
          <h2 class="${style.header}">
            Our Beloved<br>Client
          </h2>

          <p class="${style.text}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.
          </p>
        </div>

        <div class="${style.containerBottom}">

        </div>
      </div>
    </div>
  `
}
