/**
 * ViennaOnboardingPluginMenuBarIcon — Menu bar icon showing the Vienna "V" logo.
 */

import type { MenuBarIconProps } from '@tryvienna/sdk';

export function ViennaOnboardingPluginMenuBarIcon(_props: MenuBarIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="2" fill="oklch(75.4% 0.12 83.6)" />
      <path
        d="M8 8L14 20L20 8"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
