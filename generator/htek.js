const StandardGenerator = require('./standard')

class HtekGenerator extends StandardGenerator {
  constructor () {
    super()
    this.openTag = '<PhoneDirectory>'
    this.closeTag = '</PhoneDirectory>'
  }
}

module.exports = HtekGenerator