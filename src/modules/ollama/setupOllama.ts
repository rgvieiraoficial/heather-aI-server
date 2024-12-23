import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Ollama } from "ollama";

import { ollamaConfig } from '../../config/ollama';

import { modelfile } from './model/modelFile';

export async function setupOllama() {
  const ollama = new Ollama({
    host: ollamaConfig.host
  });

  console.log('Pulling Model: ', ollamaConfig.model);

  await ollama.pull({ model: ollamaConfig.model }).catch(error => console.error("An error occurred:", error));

  console.log('Creating custom Model: ', ollamaConfig.modelName);

  await ollama.create({ model: ollamaConfig.modelName, modelfile: modelfile }).catch(error => console.error("An error occurred:", error));
}

setupOllama().then(() => {
  console.log('Setup finished!');
});