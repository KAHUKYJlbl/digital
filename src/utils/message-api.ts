import Api from '../abstract/api';
import { MessageType } from '../model/types';

export default class MessageApi extends Api {
  async sendMessage(message: MessageType) {
    const response = await this._load({
      url: "products/add",
      method: "POST",
      body: JSON.stringify(message),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    const parsedResponse = await Api.parseResponse(response as Response);

    return parsedResponse;
  }
}