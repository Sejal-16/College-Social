import axios from "axios";

export const LoginCall = async (userData, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const result = await axios.post(
      process.env.REACT_APP_API + "auth/login",
      userData
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
