# cryptonom-cli
CryptoNom - Command line instrument to get cryptocurrency data via https://nomics.com.

To use CLI, first run:
`sudo npm link`

In this repository for CLI is being used `commander`.

So you can get info about commands, using `cryptonom --help` or `cryptonom -h`.

To use API, you need to get key from https://nomics.com.
And then set key using: `cryptonom key set`.

So, if you've set up all, it's ready to give you info.

Use: `cryptonom check price`


~ You can change currency using `cryptonom check price --curr=EUR` or any other currency.
  (Default currency is: 'USD')

~ Also, you can set type of coin you're interesed using `cryptonom check price --coin=ETH`.
  (Default coin option is: 'BTC,ETH,XRP')
