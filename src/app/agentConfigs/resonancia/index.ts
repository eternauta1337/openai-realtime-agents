
import { AgentConfig } from '@/app/types';
import { injectTransferTools } from '../utils';

// Define agents
const facilitador: AgentConfig = {
  name: 'facilitador',
  publicDescription: 'Agente que facilita la experiencia de resonancia',
  instructions:
    'Guia al usuario en una meditacion guiada. Al terminar derivalo al agente greeter.',
  tools: [],
};

const explainer: AgentConfig = {
  name: 'explainer',
  publicDescription: 'Agente que explica la experiencia de resonancia',
  instructions: 'Explicale al usuario como funciona la experiencia de resonancia. Al terminar derivalo al agente greeter.',
  tools: [],
};

const admin: AgentConfig = {
  name: 'admin',
  publicDescription: 'Agente que permite administrar y configurar la experiencia de resonancia',
  instructions: 'Brinda al usuario herramientas para configurar y administrar la experiencia de resonancia. Al finalizar la configuracion, deriva al usuario de nuevo al agente greeter.',
  tools: [],
};

const greeter: AgentConfig = {
  name: 'greeter',
  publicDescription: 'Agente que recibe al usuario y lo deriva a otros agentes',
  instructions:
    'Recibe al usuario y derivalo al agente correspondiente. No menciones al agente admin, ya que solo es para usuarios avanzados.',
  tools: [],
};

facilitador.downstreamAgents = [greeter];
explainer.downstreamAgents = [greeter];
admin.downstreamAgents = [greeter];
greeter.downstreamAgents = [facilitador, explainer, admin];

// add the transfer tool to point to downstreamAgents
const agents = injectTransferTools([greeter, facilitador, explainer, admin]);

export default agents;
