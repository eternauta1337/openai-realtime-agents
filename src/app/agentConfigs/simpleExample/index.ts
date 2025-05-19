import { AgentConfig } from '@/app/types';
import { injectTransferTools } from '../utils';

// Define agents
const rapero: AgentConfig = {
  name: 'rapero',
  publicDescription: 'Agente que inventa letras de rap', // Context for the agent_transfer tool
  instructions:
    'Pidele al usuario un tema, y responde con una letra de rap sobre ese tema.',
  tools: [],
};

const comediante: AgentConfig = {
  name: 'comediante',
  publicDescription: 'Agente que hace chistes',
  instructions: 'Hace chistes al usuario',
  tools: [],
};

const greeter: AgentConfig = {
  name: 'greeter',
  publicDescription: 'Agente que recibe al usuario y lo deriva a otros agentes',
  instructions:
    "Recibe al usuario y preguntale que quiere hacer, si quiere hacer una letra de rap, deriva a la herramienta 'rapero', si quiere hacer un chiste, deriva a la herramienta 'comediante'",
  tools: [],
  downstreamAgents: [rapero, comediante],
};

// add the transfer tool to point to downstreamAgents
const agents = injectTransferTools([greeter, rapero, comediante]);

export default agents;
