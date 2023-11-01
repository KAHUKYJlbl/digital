import logo from '../../assets/images/icons/logo-light.svg'
import style from './footer-template.module.sass'

export function createFooterTemplate(template: string) {
  return `
    <div class="${style.background}">
      <div class="${style.backgroundAdd}">
        <div class="${style.container}">
          <div class="${style.containerTop}">
            <h2 class="${style.header}">
              Intersted to work<br>with our team?
            </h2>

            <p class="${style.text}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.
            </p>

            <div class="${style.insert}">
              ${template}
            </div>
          </div>

          <div class="${style.containerBottom}">
            <div class="${style.footerContacts}">
              <div class="${style.contactsHeader}">
                <img src="${logo}" height="28px" width="32px" />
                <h3>Afrianska</h3>
              </div>

              <div class="${style.contacts}">
                <span>
                  <b>A.</b>
                </span>

                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>

              <div class="${style.contacts}">
                <span>
                  <b>T.</b>
                </span>

                <span>
                  +62-812-7313-4321
                </span>
              </div>

              <div class="${style.contacts}">
                <span>
                  <b>E.</b>
                </span>

                <span>
                  hello.afrian@gmail.com
                </span>
              </div>
            </div>

            <div class="${style.footerMenu}">
              <div class="${style.footerHeader}">
                About Us
              </div>

              <div class="${style.footerItem}">
                About
              </div>

              <div class="${style.footerItem}">
                What We Do
              </div>

              <div class="${style.footerItem}">
                Project
              </div>

              <div class="${style.footerItem}">
                How It Work With Us
              </div>
            </div>

            <div class="${style.footerMenu}">
              <div class="${style.footerHeader}">
                Follow Us
              </div>

              <div class="${style.footerItem}">
                Instagram
              </div>

              <div class="${style.footerItem}">
                Facebook
              </div>

              <div class="${style.footerItem}">
                Linkedin
              </div>

              <div class="${style.footerItem}">
                Youtube
              </div>
            </div>
          </div>
            
          <div class="${style.copyright}">
            2019 © Afrianska. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  `
}
