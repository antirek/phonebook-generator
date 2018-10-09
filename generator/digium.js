const StandardGenerator = require('./standard')

class DigiumGenerator extends StandardGenerator {
  constructor () {
    super()
    this.openTag = '<DigiumIPPhoneDirectory>'
    this.closeTag = '</DigiumIPPhoneDirectory>'
  }
}

module.exports = DigiumGenerator