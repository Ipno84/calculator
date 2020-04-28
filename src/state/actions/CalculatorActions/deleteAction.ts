import { DELETE } from '../../../constants/CalculatorConstants';

export default function deleteAction(all?: boolean): DeleteActionType {
    return {
        type: DELETE,
        all,
    };
}
