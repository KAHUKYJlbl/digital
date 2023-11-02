const Pattern = {
  name: /^[A-Za-z\s]{1,20}$/,
  email: /^[A-Za-z\._-]+@([A-Za-z_-]+\.)*[A-Za-z_-]+\.[A-Za-z]{2,3}$/,
  message: /^[\w\W\d\s]{1,250}$/,
}

export function validation(type: keyof typeof Pattern, string: string): boolean {
  return Pattern[type].test(string);
}