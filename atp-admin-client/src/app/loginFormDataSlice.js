import { createSlice } from '@reduxjs/toolkit';

const loginFormDataSlice = createSlice({
  name: 'loginFormData',
  initialState: {
    email: {
      value: '',
      isValid: false,
      wasValidated: false
    },
    password: {
      value: '',
      isValid: false,
      wasValidated: false
    },
  },
  reducers: {
    emailUpdated: (state, action) => {
      state.email = action.payload
    },
    passwordUpdated: (state, action) => {
      state.password = action.payload
    },
  }
})

export const {
  emailUpdated,
  passwordUpdated,
} = loginFormDataSlice.actions

export const emailChanged = value => dispatch => {
  dispatch(emailUpdated({
    value,
    isValid: value.length > 0,
    wasValidated: true
  }))
}

export const passwordChanged = value => dispatch => {
  dispatch(emailUpdated({
    value,
    isValid: value.length > 0,
    wasValidated: true
  }))
}


export default loginFormDataSlice.reducer