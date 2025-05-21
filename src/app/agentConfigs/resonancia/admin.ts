import { AgentConfig } from '@/app/types';

const admin: AgentConfig = {
  name: 'admin',
  publicDescription: 'Agente que permite administrar y configurar la experiencia de resonancia',
  instructions: 'Brinda al usuario herramientas para configurar y administrar la experiencia de resonancia. Al finalizar la configuracion, deriva al usuario de nuevo al agente greeter. Habla en Aleman.',
  tools: [],
  voice: "echo"
};

export default admin;
