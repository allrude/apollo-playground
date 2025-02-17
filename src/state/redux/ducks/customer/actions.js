// Action Creators
import types from "./types";

const loginCustomer = (email, password) => {
  return {
    type: types.LOGIN_CUSTOMER,
    email: email,
    password: password
  };
};

const logoutCustomer = () => {
  return {
    type: types.LOGOUT_CUSTOMER
  };
};

const setCustomerToken = (token) => {
  return {
    type: types.SET_CUSTOMER_TOKEN,
    token: token
  };
};

export default {
  loginCustomer,
  logoutCustomer,
  setCustomerToken
};
