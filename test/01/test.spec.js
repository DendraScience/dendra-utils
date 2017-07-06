/**
 * Main tests
 */

describe('Module', function () {
  let utils

  it('should import', function () {
    utils = require('../../dist')

    expect(utils).to.have.property('Interval')
  })

  it('should compute airDensity', function () {
    const fn = require('../../dist/airDensity')

    expect(utils).to.have.property('airDensity', fn)
    expect(fn(1000)).to.equal(1.1116425776886818)
  })

  it('should compute airPressure', function () {
    const fn = require('../../dist/airPressure')

    expect(utils).to.have.property('airPressure', fn)
    expect(fn(1000)).to.equal(89874.57050221058)
  })

  it('should perform treeMap', function () {
    const fn = require('../../dist/treeMap')

    expect(utils).to.have.property('treeMap', fn)

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
    const tree2 = fn(tree1, (obj) => {
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
    const Cls = require('../../dist/Interval')

    expect(utils).to.have.property('Interval', Cls)

    const inst = new Cls(0, -1)
    expect(inst).to.have.property('empty', true)
  })
})
