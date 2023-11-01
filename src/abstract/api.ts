type LoadProps = {
  url: string;
  method: string;
  body: string | null;
  headers: Headers;
}

export default class Api {
  _endPoint: string;

  constructor(endPoint: string) {
    this._endPoint = endPoint;
  }

  async _load({
    url,
    method = 'GET',
    body = null,
    headers = new Headers(),
  }: LoadProps) {

    const response = await fetch(
      `${this._endPoint}/${url}`,
      {method, body, headers},
    );

    try {
      Api.checkStatus(response);
      return response;
    } catch (err) {
      Api.catchError(err);
    }
  }

  static parseResponse(response: Response) {
    return response.json();
  }

  static checkStatus(response: Response) {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  static catchError(err: any) {
    throw err;
  }
}
