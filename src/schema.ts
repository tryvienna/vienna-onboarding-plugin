/**
 * Vienna Onboarding Plugin integration GraphQL schema registration.
 *
 * Registers all Vienna Onboarding Plugin-specific GraphQL types, queries, and mutations
 * on the Pothos builder. Called via the integration's `schema` callback
 * during plugin loading.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SchemaBuilder } from '@tryvienna/sdk';
import { viennaOnboardingPluginIntegration } from './integration';
import * as api from './api';

// ─────────────────────────────────────────────────────────────────────────────
// Backing shapes — match what API methods return
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// Schema Registration
// ─────────────────────────────────────────────────────────────────────────────

export function registerViennaOnboardingPluginSchema(builder: SchemaBuilder) {
  // TODO: Define your GraphQL types, queries, and mutations here
}
