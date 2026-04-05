/**
 * Vienna Onboarding Plugin Integration — no authentication required.
 *
 * API calls are made in the main process via GraphQL resolvers.
 */

import { defineIntegration } from '@tryvienna/sdk';
import { registerViennaOnboardingPluginSchema } from './schema';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ViennaOnboardingPluginClient {}

export const viennaOnboardingPluginIntegration = defineIntegration<ViennaOnboardingPluginClient>({
  id: 'vienna_onboarding_plugin',
  name: 'Vienna Onboarding Plugin',
  description: 'Vienna Onboarding Plugin integration',
  icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>' },

  // No auth required — always return a client
  createClient: async () => ({}),

  schema: registerViennaOnboardingPluginSchema,
});
