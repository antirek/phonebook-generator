const StandardGenerator = require('./standard')

class YealinkGenerator extends StandardGenerator {
  constructor () {
    super()
    this.openTag = '<YealinkIPPhoneDirectory>'
    this.closeTag = '</YealinkIPPhoneDirectory>'
  }
}

module.exports = YealinkGenerator