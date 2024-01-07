export class ObjectUtils {
  public static clone(obj: { [key: string]: any }): { [key: string]: any } {
    return JSON.parse(JSON.stringify(obj))
  }

  public static removeValues(obj: { [key: string]: any }, checkValue: any): { [key: string]: any } {
    const cloneObj: { [key: string]: any } = ObjectUtils.clone(obj)
    Object.keys(cloneObj).forEach((k: string) => cloneObj[k] == checkValue && delete cloneObj[k])
    return cloneObj
  }
}