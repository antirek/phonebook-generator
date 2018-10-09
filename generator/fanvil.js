const StandardGenerator = require('./standard')

class FanvilGenerator extends StandardGenerator {
  constructor () {
    super()
    this.openTag = '<CiscoIPPhoneDirectory>'
    this.closeTag = '</CiscoIPPhoneDirectory>'
  }
}

module.exports = FanvilGenerator