import { Ollama } from 'ollama';
import { ollamaConfig } from 'src/config/ollama';

interface IMessage {
  role: string;
  content: string;
}

import { requestXRPTransfer, requestXRPTransferTool } from './tools/request-XRP-Transfer';

export async function run(messages: IMessage[]) {
  const ollama = new Ollama({
    host: ollamaConfig.host
  });

  let functionResponses = [];

  // First API call: Send the query and function description to the model
  const response = await ollama.chat({
    model: ollamaConfig.modelName,
    messages: messages,
    tools: requestXRPTransferTool,
  })
  // Add the model's response to the conversation history
  messages.push(response.message);

  // Check if the model decided to use the provided function
  if (!response.message.tool_calls || response.message.tool_calls.length === 0) {
    console.log("The model didn't use the function. Its response was:");
    console.log(response.message.content);
    return {
      content: response.message.content,
      functionResponses
    };
  }

  // Process function calls made by the model
  if (response.message.tool_calls) {
    const availableFunctions = {
      request_xrp_transfer: requestXRPTransfer,
    };
    for (const tool of response.message.tool_calls) {
      const functionToCall = availableFunctions[tool.function.name];
      const functionResponse = functionToCall(tool.function.arguments);
      console.log('functionResponse', functionResponse)
      // Add function response to the conversation
      messages.push({
        role: 'tool',
        content: functionResponse,
      });
      functionResponses.push(functionResponse);
    }
  }

  // Second API call: Get final response from the model
  const finalResponse = await ollama.chat({
    model: ollamaConfig.modelName,
    messages: messages,
  });
  console.log(finalResponse.message.content);
  return {
    content: response.message.content,
    functionResponses
  };
}