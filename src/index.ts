/**
 * @vienna/plugin-vienna-onboarding-plugin — Vienna onboarding plugin with top bar icon
 *
 * Self-contained plugin package containing:
 * - Integration definition
 * - Entity definitions (none)
 * - GraphQL schema extension
 */

import { definePlugin } from '@tryvienna/sdk';
import { viennaOnboardingPluginIntegration } from './integration';
import { ViennaOnboardingPluginPluginDrawer } from './ui/ViennaOnboardingPluginPluginDrawer';
import { ViennaOnboardingPluginMenuBarIcon } from './ui/ViennaOnboardingPluginMenuBarIcon';
import { ViennaOnboardingPluginMenuBarContent } from './ui/ViennaOnboardingPluginMenuBarContent';
import { ViennaOnboardingPluginFeedCard } from './ui/ViennaOnboardingPluginFeedCard';

const VIENNA_V_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="2" fill="oklch(75.4% 0.12 83.6)"/><path d="M8 8L14 20L20 8" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// ── Plugin Definition ────────────────────────────────────────────────────────

export const viennaOnboardingPluginPlugin = definePlugin({
  id: 'vienna_onboarding_plugin',
  name: 'Vienna Onboarding Plugin',
  description: 'Vienna onboarding plugin with top bar icon',
  icon: { svg: VIENNA_V_SVG },

  integrations: [viennaOnboardingPluginIntegration],
  entities: [],

  canvases: {
    drawer: {
      component: ViennaOnboardingPluginPluginDrawer,
      label: 'Vienna Onboarding Plugin',
    },
    'menu-bar': {
      icon: ViennaOnboardingPluginMenuBarIcon,
      component: ViennaOnboardingPluginMenuBarContent,
      label: 'Vienna Onboarding Plugin',
      priority: 30,
    },
    feed: {
      component: ViennaOnboardingPluginFeedCard,
      label: 'Welcome',
      description: 'Welcome to Vienna onboarding card',
      priority: 10,
    },
  },
});

// ── Re-exports for direct access ─────────────────────────────────────────────

export { viennaOnboardingPluginIntegration } from './integration';
export { registerViennaOnboardingPluginSchema } from './schema';
