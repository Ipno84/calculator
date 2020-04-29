import NumericButton from '../../atoms/NumericButton';
import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const NumericButtons: React.FC = () => {
    return (
        <>
            {numbers.map((e) => (
                <NumericButton key={e} number={e.toString()} />
            ))}
        </>
    );
};

export default NumericButtons;
