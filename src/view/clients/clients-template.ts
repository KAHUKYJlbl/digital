import style from './clients-template.module.sass'

export function createClientsTemplate() {
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
          <div class="${style.client}">LOGO CLIENT 1</div>

          <div class="${style.client}">LOGO CLIENT 2</div>

          <div class="${style.client}">LOGO CLIENT 3</div>

          <div class="${style.client}">LOGO CLIENT 4</div>

          <div class="${style.client}">LOGO CLIENT 5</div>

          <div class="${style.client}">LOGO CLIENT 6</div>

          <div class="${style.client}">LOGO CLIENT 7</div>

          <div class="${style.client}">More Client</div>
        </div>
      </div>
    </div>
  `
}
