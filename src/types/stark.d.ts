// The stark bundle exports EmailCheck and PasswordStrengthCheck, but the
// package's own types/index.d.ts does not declare them (as of v1.5.0).
// Augment the module here so they can be imported in a type-safe way.
// Remove this file once upstream ships the declarations.
import type { ReactNode } from "react";

declare module "@omkarwarik1204/stark" {
  export function EmailCheck(): ReactNode;
  export function PasswordStrengthCheck(): ReactNode;
}
