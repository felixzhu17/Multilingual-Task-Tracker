const { user_interact } = require('./interact');

async function main() {
  while (await user_interact()) {
    // Do nothing, continue looping
  }
}

main();
