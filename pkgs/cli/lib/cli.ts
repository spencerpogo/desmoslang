#!/usr/bin/env node

export default function main() {
  console.log("Hello world!");
}

// If not being imported
if (require.main === module) {
  main();
}
