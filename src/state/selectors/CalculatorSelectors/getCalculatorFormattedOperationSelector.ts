import { REPLACED_CHARS } from '../../../constants/CalculatorConstants';
import { createSelector } from 'reselect';
import getCalculatorOperationSelector from './getCalculatorOperationSelector';
import multipleReplacer from '../../../helpers/multipleReplacer';

export default createSelector(getCalculatorOperationSelector, (operation) =>
    multipleReplacer(operation, REPLACED_CHARS)
);
