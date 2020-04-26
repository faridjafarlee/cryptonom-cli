const app = require('commander');
const check = require('../commands/check');

app
  .command('price')
  .description('Check price of coins.')
  .option('--coin <type>', 'Add specific coin types in CSV format.', 'BTC,ETH,XRP')
  .option('--curr <currency>', 'Change the currency.', 'USD')
  .action(cmd => check.price(cmd));

app.parse(process.argv);