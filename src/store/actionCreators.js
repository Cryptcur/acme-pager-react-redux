import { ADD_PEOPLE, ADD_COUNT, LOAD_EMPLOYEES } from "./actionConstants";

export const _loadEmployees = employees => ({
  type: LOAD_EMPLOYEES,
  employees
});
