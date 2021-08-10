export default function themeDefine (theme: string, lightTheme: any, darkTheme: any) {
  if (theme === 'Dark') {
    return darkTheme
  } else {
    return lightTheme
  }
}
