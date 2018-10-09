const StandardGenerator = require('./standard')

class SnomGenerator extends StandardGenerator {
  constructor () {
    super()
    this.openTag = '<SnomIPPhoneDirectory>'
    this.closeTag = '</SnomIPPhoneDirectory>'
  }
}

module.exports = SnomGenerator