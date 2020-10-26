const _ = require('lodash')
const countryList = require('./countrylist')

const acCountryList = () => {
  /**
   * Returns a short list of all countries. Each entry with country name, iso2/alpha2code and the spoken languages.
   */
  const shortList = () => {
    return _.map(countryList, (item) => {
      return {
        name: item.name,
        iso2: _.toLower(item.alpha2Code),
        alpha2Code: _.toLower(item.alpha2Code),
        languages: item.languages
      }
    })
  }

    /**
   * Returns a random country from the list
   */
  const random = () => {
    return _.sample(countryList)
  }

  /**
   * This function ingests a query params (currently iso2 only) and returns the country.
   *
   * @param params.iso2 STRING iso2 code
   * @param params.iso3 STRING iso3 code
   */
  const query = (params) => {
    const iso2 = _.get(params, 'iso2')
    const iso3 = _.get(params, 'iso3')

    const findQuery = {}
    if (iso2) _.set(findQuery, 'alpha2Code', _.toUpper(iso2))
    else if (iso3) _.set(findQuery, 'alpha3Code', _.toUpper(iso3))
    return _.find(countryList, findQuery)
  }

  return {
    shortList,
    random,
    query
  }
}

module.exports = acCountryList()
