import { MessagesRole } from '@prisma/client';

import { run } from '../../functions';

interface IMessage {
  role: MessagesRole;
  content: string;
}

interface IRequest {
  messages: IMessage[];
}

class SendMessageToModel {
  async execute({ messages }: IRequest) {
    const response = await run(messages).catch(error => console.error("An error occurred:", error));

    return response;
  }
}

export { SendMessageToModel }