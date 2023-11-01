import style from './mail-modal-template.module.sass'

export function createMailModalTemplate(template: string) {
  return `
    <div class="${style.container}">
      <h3 class="${style.header}">SEND US MESSAGE</h3>

      <form id="form" class="${style.form}">
        <label class="${style.label}" for="name">Full Name</label>
        <input class="${style.input}" type="text" id="name" name="name" placeholder="Your Name" />

        <label class="${style.label}" for="email">Email</label>
        <input class="${style.input}" type="email" id="email" name="email" placeholder="Your Email" />

        <label class="${style.label}" for="message">Message</label>
        <textarea class="${style.textarea}" rows="3" id="message" name="message" placeholder="Your Message"></textarea>

        ${template}
      </form>
    </div>
  `
}
