/**
 * Main tests
 */

describe('Module', function () {
  let utils

  it('should import', function () {
    utils = require('../../dist')

    expect(utils).to.have.property('airDensity')
    expect(utils).to.have.property('airPressure')
    expect(utils).to.have.property('Interval')
    expect(utils).to.have.property('treeMap')
  })

  it('should compute airDensity', function () {
    expect(utils.airDensity(1000)).to.equal(1.1116425776886818)
  })

  it('should compute airPressure', function () {
    expect(utils.airPressure(1000)).to.equal(89874.57050221058)
  })

  it('should perform treeMap', function () {
    const tree1 = {
      aNumber: 1,
      aString: 'string1',
      aDate: new Date(1000),
      anArray: [
        2,
        'string2',
        new Date(2000)
      ],
      anObject: {
        aNumber: 3,
        aString: 'string3',
        aDate: new Date(3000)
      }
    }
    const tree2 = utils.treeMap(tree1, (obj) => {
      // Map dates to numbers
      if (obj instanceof Date) return obj.getTime()
      return obj
    })

    expect(tree2).to.deep.equal({
      aNumber: 1,
      aString: 'string1',
      aDate: (new Date(1000)).getTime(),
      anArray: [
        2,
        'string2',
        (new Date(2000)).getTime()
      ],
      anObject: {
        aNumber: 3,
        aString: 'string3',
        aDate: (new Date(3000)).getTime()
      }
    })
  })

  it('should create Interval', function () {
    const inst = new utils.Interval(0, -1)
    expect(inst).to.have.property('empty', true)
  })
})
