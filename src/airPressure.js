import * as _air from './_air'

/**
 * Get air pressure (pascals) at the given height (h) in meters.
 */
export default function airPressure(h) {
  return _air.calc(_air.PRESSURE, h)
}
