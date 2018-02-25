import * as actions from '../'

describe('uiSettings actions', () => {
  it('uiSettings should create SET_SHOW_SPINNER action', () => {
    const expected = true

    expect(actions.uiSettings.setShowSpinner(expected)).toEqual({
      type: 'SET_SHOW_SPINNER',
      newState: expected,
    })
  })

  it('uiSettings should create SET_SHOW_OVERLAY action', () => {
    const expected = true

    expect(actions.uiSettings.setShowOverlay(expected)).toEqual({
      type: 'SET_SHOW_OVERLAY',
      newState: expected,
    })
  })
})
