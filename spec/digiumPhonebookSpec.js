/* global describe, it, expect */

const fs = require('fs');
const DigiumGenerator = require('./../generator/digium')

describe('number', () => {
  it('should return 200 response code', (done) => {
    let generator = new DigiumGenerator();
    let file = fs.readFileSync('./spec/samples/test.json')
    let json = JSON.parse(file)

    let realphonebookxml = fs.readFileSync('./spec/samples/digium.xml').toString();
    let q = realphonebookxml.replace(/\>\s+\</g,'><');    

    generator.prepareXML(json).then(xml => {      
      expect(xml).toEqual(q)
      done()
    })    
  })
})
