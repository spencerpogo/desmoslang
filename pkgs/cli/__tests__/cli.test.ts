import main from "../src/cli";

it("prints hello world", () => {
  const log = jest.spyOn(global.console, "log");

  main();
  expect(log).toHaveBeenCalledWith("Hello world!");

  log.mockRestore();
});
