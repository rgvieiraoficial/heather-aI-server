export function requestXRPTransfer(args: { [key: string]: any }) {
  const destination_address = args.destination_address;
  const amount = args.amount;

  console.log(destination_address, amount);

  if (destination_address && amount) {
    return JSON.stringify({
      status: 'sucess',
      message: 'Transfer request sent for user approval successfully.',
      data: {
        destination_address,
        amount,
      }
    });
  } else {
    return JSON.stringify({
      status: 'ok',
      message: 'No content, continue answering prompt.'
    });
  }
}

export const requestXRPTransferTool = [
  {
    type: 'function',
    function: {
      name: 'request_xrp_transfer',
      description: "Send request transfer from the user's wallet to the destination wallet provided by him.",
      parameters: {
        type: 'object',
        properties: {
          destination_address: {
            type: 'string',
            description: 'The destination wallet that the user wants to send the XRP to.',
          },
          amount: {
            type: 'number',
            description: 'Amount of XRP the user wants to send.',
          },
        },
        required: ['destination_address', 'amont'],
      },
    },
  },
]