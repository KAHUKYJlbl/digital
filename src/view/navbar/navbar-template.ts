import style from './navbar-template.module.sass'
import menu from '../../assets/images/icons/menu.svg'
import logo from '../../assets/images/icons/logo.svg'

export function createNavbarTemplate() {
  return `
    <div class="${style.container}">
      <a href="#" class="${style.navbutton}">
        <img src="${logo}" height="28px" width="32px" />
      </a>

      <a href="#" class="${style.navbutton}">
        <img src="${menu}" height="28px" width="32px" />
      </a>
    </div>
  `
}