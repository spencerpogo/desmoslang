#!/usr/bin/env node
import runDirectly from "./utils/runDirectly";

/**
 * The main function of the CLI.
 */
export default function main() {
  console.log("Hello world!");
}

/**
 * The entrypoint of the module. If script invoked from command line calls main.
 */
export function entry(mainFunction: () => void) {
  // If not being imported
  if (runDirectly(require.main, module)) {
    mainFunction();
  }
}

entry(main);
