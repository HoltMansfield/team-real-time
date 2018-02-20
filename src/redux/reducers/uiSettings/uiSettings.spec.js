import uiSettings from './uiSettings'

describe('uiSettings reducer', () => {
  const expected = {
    showSpinner: false,
    showOverlay: false,
  }

  it('should handle initial state', () => {
    expect(uiSettings(expected, {})).toEqual(expected)
  })
})
