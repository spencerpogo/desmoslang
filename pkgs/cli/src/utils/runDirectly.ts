/**
 * A helper to check if a script is run directly from the command line.
 * Returns whether the current module is being run from the command line.
 * This is a separate function to allow it to be mocked properly during testing.
 * @param main The value of `require.main`
 * @param module The value of `module`
 */
export default function runDirectly(main: any, module: any) {
  return main === module;
}
