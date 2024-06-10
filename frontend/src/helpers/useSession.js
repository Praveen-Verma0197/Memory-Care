import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UsersActions } from "../redux/UsersSlice";

export const useSession = () => {
  console.log("useSession ran");
  const dispatch = useDispatch();
  const isLoggedIn = window.sessionStorage.getItem("isLoggedIn");
  const id = window.sessionStorage.getItem("loggedId");
  const role = window.sessionStorage.getItem("loggedRole");
  const name = window.sessionStorage.getItem("loggedName");

  useEffect(() => {
    if (isLoggedIn && id && role && name) {
      console.log("useSession ran2");
      dispatch(UsersActions.toggleLogIn(true));
      dispatch(UsersActions.addUser({ id, name, role }));
    }
  }, [dispatch, isLoggedIn, id, name, role]);

  return [];
};
