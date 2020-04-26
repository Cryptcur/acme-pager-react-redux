import axios from "axios";
import { _loadEmployees } from "./actionCreators";

const loadEmployees = page => async dispatch => {
  const employees = (await axios.get(`/api/employees/${page}`)).data;
  console.log("IN THUNKS", employees);
  dispatch(_loadEmployees(employees));
};

export { loadEmployees };
