import style from './services-template.module.sass'

export function createServicesTemplate() {
  return `
    <div id="insert-services" class="${style.insert}">
      <h1 class="${style.header}">
        What we do to help<br>our client grow in<br>digital era
      </h1>
    </div>
  `
}