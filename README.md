# phonebook-generator

Multi vendor XML phonebook generator

Digium, Yealink, Grandstream, Fanvil, Snom, Htek


### install

> npm install phonebook-generator

### usage

`````javascript

const { DigiumGenerator, 
        YealinkGenerator, 
        GrandstreamGenerator,
        FanvilGenerator, 
        SnomGenerator, 
        HtekGenerator,
      } = require('phonebook-generator')


let generator = new DigiumGenerator();
let arrayOfContacts = [
    {
        name: 'Vasiliy',
        phone: '110'
    },
    {
        name: 'Anton',
        phone: '121'
    }
];

generator.prepareXML(arrayOfContacts).then(xml => console.log(xml))

`````
