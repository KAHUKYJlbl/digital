import style from './services-template.module.sass'

export function createServicesTemplate(height: number) {
  return `
    <div class="${style.container}" style="height: ${height}px;">
      <h2 class="${style.header}">
        What we do to help<br>our client grow in<br>digital era
      </h1>
    </div>
  `
}