export class CookieUtils {
  public static all(): { [key: string]: string } {
    const pairs: { [key: string]: string } = {}
    const cookieStringSplit: string[] = CookieUtils.cookieStringSplit()

    if (cookieStringSplit[0] !== '') {
      let parts: string[] = []

      for (let i = 0; i < cookieStringSplit.length; i++) {
        parts = cookieStringSplit[i].split('=')
        pairs[parts[0]] = parts[1]
      }
    }

    return pairs
  }

  public static get(key: string): string | undefined {
    return CookieUtils.all()[key]
  }

  public static set(key: string, value: string, expiresAt: Date | null = null): void {
    let cookie: string = `${key}=${value}; path=/`
    if (expiresAt) {
      cookie = `${cookie}; expires=${expiresAt.toUTCString()}`
    }
    document.cookie = cookie
  }

  public static remove(key: string): void {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    CookieUtils.set(key, '', yesterday)
  }

  private static cookieString(): string {
    return document.cookie
  }

  private static cookieStringSplit(): string[] {
    return CookieUtils.cookieString().split('; ')
  }
}
