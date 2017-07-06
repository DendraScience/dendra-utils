import * as _air from './_air'

/**
 * Get air density (kg/m^3) at the given height (h) in meters.
 */
export default function airDensity (h) {
  return _air.calc(_air.DENSITY, h)
}
