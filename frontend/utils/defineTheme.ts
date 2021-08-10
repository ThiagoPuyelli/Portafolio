export default function defineTheme (theme: 'Dark' | 'Light' | string, lightTheme: any, blackTheme: any) {
  if (theme === 'Dark') {
    return blackTheme
  } else {
    return lightTheme
  }
}