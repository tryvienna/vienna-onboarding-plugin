/**
 * ViennaOnboardingPluginFeedCard — Feed canvas showing a welcome message.
 */

import type { FeedCanvasProps } from '@tryvienna/sdk';

export function ViennaOnboardingPluginFeedCard(_props: FeedCanvasProps) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="2" fill="oklch(75.4% 0.12 83.6)" />
          <path
            d="M8 8L14 20L20 8"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <h3 className="text-sm font-medium">Welcome to Vienna</h3>
          <p className="text-xs text-muted-foreground">
            Your programmable desktop IDE is ready to go.
          </p>
        </div>
      </div>
    </div>
  );
}
