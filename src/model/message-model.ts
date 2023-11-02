import MessageApi from '../utils/message-api';
import { MessageType } from './types';

const ENDPOINT = "https://dummyjson.com";

export default class MessageModel {
  #messageApi = new MessageApi( ENDPOINT );
  #messages: MessageType[] = [];

  async sendMessage(message: MessageType) {
    try {
      const response = await this.#messageApi.sendMessage(message);

      this.#messages.push(response);
      console.log(this.#messages);
    } catch(err) {
      throw new Error('Can\'t send message');
    }

  }
}