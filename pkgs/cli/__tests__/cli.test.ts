import main, { entry } from "../src/cli";

function mockConsole() {
  return jest.spyOn(global.console, "log").mockImplementation(() => {});
}

it("Uses runDirectly correctly", () => {
  const runDirectlyMock = jest.spyOn(
    require("../src/utils/runDirectly"),
    "default"
  );
  const mainMock = jest.fn().mockImplementation(() => {});
  const log = mockConsole(); // hide output

  // Test runDirectly returning false
  runDirectlyMock.mockImplementation(() => {
    return false;
  });
  entry(mainMock);
  expect(runDirectlyMock).toHaveBeenCalledTimes(1);
  expect(mainMock).not.toHaveBeenCalled();
  // Clear mocks
  runDirectlyMock.mockClear();
  mainMock.mockClear();

  // Test runDirectly returning true
  runDirectlyMock.mockImplementation(() => {
    return true;
  });
  entry(mainMock);
  expect(runDirectlyMock).toHaveBeenCalledTimes(1);
  expect(mainMock).toHaveBeenCalledTimes(1);

  // Reset mocks
  runDirectlyMock.mockRestore();
  log.mockRestore();
});

it("prints hello world", () => {
  const log = mockConsole();

  main();
  expect(log).toHaveBeenCalledWith("Hello world!");

  log.mockRestore();
});
