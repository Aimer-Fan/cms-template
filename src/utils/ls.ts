export default {
  get (key: string): any | null {
    const value = window.localStorage.getItem(key)
    if (!value) return null
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  },

  set (key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
