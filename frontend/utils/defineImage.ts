export default function defineImage (theme: string, image: string) {
    if (theme === 'Dark') {
      return require('../public/img/' + image + 'Light.svg')
    } else {
      return require('../public/img/' + image + 'Dark.svg')
    }
}