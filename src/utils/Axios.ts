import axios from 'axios'

export class AxiosUtils {
  public static get<T>(
    url: string,
    headers: { [key: string]: any } = {},
    params: { [key: string]: any } = {}
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios
        .get(url, {
          headers: headers,
          params: params
        })
        .then((resp: { data: T }) => {
          resolve(resp.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  public static post<T>(
    url: string,
    headers: { [key: string]: any } = {},
    params: { [key: string]: any } = {},
    body: { [key: string]: any } | null = null
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios
        .post(url, body, {
          headers: headers,
          params: params
        })
        .then((resp: { data: T }) => {
          resolve(resp.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
