import React from 'react'
import { shallow } from 'enzyme'
import { CreateAccount } from './CreateAccount'
import { notify as notifyMock } from 'react-notify-toast'


// pull td instance off jest global object
const { td } = global
const mockCreateUser = td.function()
const expectedEmail = 'email'
const expectedPassword = 'password'

jest.mock('../../../js/setup-firebase', () => {
  return jest.fn().mockImplementation(() => {
    return {
      auth: () => (
        {
          createUserAndRetrieveDataWithEmailAndPassword: mockCreateUser
        }
      )
    }
  })
})

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('CreateAccount component', () => {
  beforeEach(() => {
    notifyMock.show.mockReset()
    td.reset()
  })

  it('renders', async () => {
    const pushDouble = td.func()
    const history = {
      push: pushDouble
    }
    const props = {
      history
    }
    const wrapper = shallow(<CreateAccount {...props} />)
    const instance = wrapper.instance()

    td.when(mockCreateUser(expectedEmail, expectedPassword))
      .thenReturn(Promise.resolve())

    instance.save({ email: expectedEmail, password: expectedPassword })

    await sleep(1000)

    expect(notifyMock.show.mock.calls.length).toEqual(1)
    expect(notifyMock.show.mock.calls[0][1]).toEqual('success')
    td.verify(pushDouble('/dashboard'))
  })

  it('renders', async () => {
    const expectedErrorMessage = 'fail'
    const wrapper = shallow(<CreateAccount />)
    const instance = wrapper.instance()

    td.when(mockCreateUser(expectedEmail, expectedPassword))
      .thenReturn(Promise.reject({ message: expectedErrorMessage}))

    instance.save({ email: expectedEmail, password: expectedPassword })

    await sleep(1000)

    expect(notifyMock.show.mock.calls.length).toEqual(1)
    expect(notifyMock.show.mock.calls[0][0]).toEqual(expectedErrorMessage)
    expect(notifyMock.show.mock.calls[0][1]).toEqual('error')
  })
})
