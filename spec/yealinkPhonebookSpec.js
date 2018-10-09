/* global describe, it, expect */

const fs = require('fs');
const YealinkGenerator = require('./../generator/yealink')

describe('number', () => {
  it('should return 200 response code', (done) => {
    let generator = new YealinkGenerator();
    let file = fs.readFileSync('./spec/samples/test.json')
    let json = JSON.parse(file)

    let realphonebookxml = fs.readFileSync('./spec/samples/yealink.xml').toString();
    let q = realphonebookxml.replace(/\>\s+\</g,'><');    

    generator.prepareXML(json).then(xml => {      
      expect(xml).toEqual(q)
      done()
    })    
  })
})
