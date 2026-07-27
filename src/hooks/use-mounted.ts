import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** True only after the client has hydrated — avoids SSR/client render mismatches. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
