'use strict';

console.log('Hello world');
console.log("Press Enter to exit...");
process.stdin.once('data', () => process.exit());
