const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      const api = new CryptoAPI(key);
      const priceOutputData = await api.getPriceData(cmd.coin, cmd.curr);
      console.log(priceOutputData);
    } catch (e) {
      console.log(e.message.red);
    }
  },
};

module.exports = check;