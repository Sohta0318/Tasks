import { UPDATE_SNACK_QUANTITY, UPDATE_DRINK_QUANTITY,SNACK_SLICE } from "../types";

export const snackUpdate = (operator, id) => ({
  type: UPDATE_SNACK_QUANTITY,
  payload: { operator, id }
});

export const drinkUpdate = (operator, id) => ({
  type: UPDATE_DRINK_QUANTITY,
  payload: { operator, id }
});

// export const snackUpdate2 = (num1, num2) => ({
//   type: SNACK_SLICE,
//   payload: { num1, num2 }
// });
