const StandardGenerator = require('./standard')

class GrandstreamGenerator extends StandardGenerator {
  constructor () {
    super()
    this.openTag = '<AddressBook>'
    this.closeTag = '</AddressBook>'
  }

  _prepareItems (array) {
    let r = array.map((item) => {
      let firstName = item.name.split(' ')[1];
      let lastName = item.name.split(' ')[0];

      return '<Contact>' + 
        '<LastName>' + (firstName ? lastName : '-') + '</LastName>' +
        '<FirstName>' + (firstName ? firstName : lastName) + '</FirstName>' +
        '<Phone>' +
          '<phonenumber>' + item.phone + '</phonenumber>' +
          '<accountindex>1</accountindex>' +
        '</Phone>' +
        '<Groups><groupid>0</groupid></Groups>' +
      '</Contact>';
    })

    return Promise.resolve(r.join(''))
  }

}

module.exports = GrandstreamGenerator