const app = require('commander');
const key = require('../commands/key');

app
  .command('set')
  .description('Set API Key - Get at https://nomics.com')
  .action(key.set);

app
  .command('show')
  .description('Show API Key.')
  .action(key.show);

app
  .command('remove')
  .description('Remove API Key.')
  .action(key.remove);

app.parse(process.argv);