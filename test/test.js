const expect = require('expect')
const acCountryList = require('../index')

describe('Start tests', () => {
  it('Fetch list', (done) => {
    let test = acCountryList.shortList()
    expect(test).toHaveLength(249)
    return done()
  })

  it('Query DE - should return Germany', (done) => {
    let test = acCountryList.query({ iso2: 'DE' })
    expect(test).toHaveProperty('nativeName', 'Deutschland')
    return done()
  })
})
