import {rangeDivideValues,fnDivide} from "./func"

export const divideItems = {
  ...rangeDivideValues(2, fnDivide),
  ...rangeDivideValues(3, fnDivide),
  ...rangeDivideValues(4, fnDivide),
  ...rangeDivideValues(5, fnDivide),
  ...rangeDivideValues(6, fnDivide),
  ...rangeDivideValues(10, fnDivide),
  ...rangeDivideValues(12, fnDivide),
  ...rangeDivideValues(24, fnDivide),
};
