import { injectTransferTools } from '../utils';
import facilitador from './facilitador';
import explainer from './explicador';
import admin from './admin';
import greeter from './greeter';

// Define agents
facilitador.downstreamAgents = [greeter];
explainer.downstreamAgents = [facilitador];
admin.downstreamAgents = [greeter];
greeter.downstreamAgents = [facilitador, explainer, admin];

// add the transfer tool to point to downstreamAgents
const agents = injectTransferTools([greeter, facilitador, explainer, admin]);

export default agents;
