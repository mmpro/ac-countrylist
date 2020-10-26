const expect = require('expect')
const _  = require('lodash')
const acCountryList = require('../index')

describe('Start tests', () => {
  it('Fetch list', (done) => {
    let test = acCountryList.shortList()
    expect(test).toHaveLength(249)
    return done()
  })

  it('Fetch random country', (done) => {
    let test = _.get(acCountryList.random(), 'name')
    let list = _.map(acCountryList.shortList(), 'name')
    expect(list).toContain(test)
    return done()
  })

  it('Query ISO2 - DE - should return Germany', (done) => {
    let test = acCountryList.query({ iso2: 'DE' })
    expect(test).toHaveProperty('nativeName', 'Deutschland')
    return done()
  })

  it('Query ISO3 - LAO - should return Laos', (done) => {
    let test = acCountryList.query({ iso3: 'LAO' })
    expect(test).toHaveProperty('name', 'Laos')
    expect(test).toHaveProperty('nativeName', 'ສປປລາວ')
    return done()
  })

  it('Query Laos', (done) => {
    let test = acCountryList.query({ name: 'Laos' })
    expect(test).toHaveProperty('nativeName', 'ສປປລາວ')
    return done()
  })

  it('Query Laos in japanese - ラオス人民民主共和国', (done) => {
    let test = acCountryList.query({ name: 'ラオス人民民主共和国' })
    expect(test).toHaveProperty('nativeName', 'ສປປລາວ')
    return done()
  })

  it('Query Laos in native - ສປປລາວ', (done) => {
    let test = acCountryList.query({ name: 'ラオス人民民主共和国' })
    expect(test).toHaveProperty('nativeName', 'ສປປລາວ')
    return done()
  })

  it('Query name with lower first', (done) => {
    let test = acCountryList.query({ name: 'deutschland' })
    expect(test).toHaveProperty('nativeName', 'Deutschland')
    return done()
  })

  it('Query name with not match', (done) => {
    let test = acCountryList.query({ name: 'wonderland' })
    expect(test).toBe.undefined
    return done()
  })
})
