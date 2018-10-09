class StandardGenerator {
  _prepareItems (array) {
    let r = array.map((item) => {
      return '<DirectoryEntry>' +
        '<Name>' + item.name + '</Name>' +
        '<Telephone>' + item.phone + '</Telephone>' +
        '</DirectoryEntry>'
    })

    return Promise.resolve(r.join(''))
  }

  prepareXML (array) {
    return this._prepareItems(array)
      .then(itemsString => {
        return '<?xml version="1.0" encoding="UTF-8"?>' + 
          this.openTag + itemsString + this.closeTag ;
      })
  }
}

module.exports = StandardGenerator