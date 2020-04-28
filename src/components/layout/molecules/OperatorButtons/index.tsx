import OperatorButton from '../../atoms/OperatorButton';
import React from 'react';

const operators = [
    {
        operator: '/',
        label: '÷',
    },
    {
        operator: '*',
        label: '×',
    },
    {
        operator: '-',
        label: '-',
    },
    {
        operator: '+',
        label: '+',
    },
    {
        operator: '(',
        label: '(',
    },
    {
        operator: ')',
        label: ')',
    },
];

const OperatorButtons: React.FC = () => {
    return (
        <>
            {operators.map((e) => (
                <OperatorButton key={e.operator} {...e} />
            ))}
        </>
    );
};

export default OperatorButtons;
