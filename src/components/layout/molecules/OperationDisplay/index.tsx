import DisplayOperation from './../../atoms/DisplayOperation';
import DisplayOperationScroller from './../../atoms/DisplayOperationScroller';
import OperationInput from './../../atoms/OperationInput';
import React from 'react';
import TreeItemsReferences from './../../../../helpers/TreeItemsReferences';

const OperationDisplay: React.FC = () => {
    return (
        <DisplayOperationScroller
            data-testid='operationScroller'
            ref={(ref) =>
                TreeItemsReferences.addReference(
                    'DisplayOperationScroller',
                    ref
                )
            }
        >
            <DisplayOperation>
                <OperationInput />
            </DisplayOperation>
        </DisplayOperationScroller>
    );
};

export default OperationDisplay;
