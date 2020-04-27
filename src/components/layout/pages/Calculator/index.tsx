import AppContainer from './../../atoms/AppContainer';
import Backspace from './../../atoms/Backspace';
import Button from './../../atoms/Button';
import ContentEditable from './../../atoms/ContentEditable';
import DisplayContainer from './../../atoms/DisplayContainer';
import DisplayOperation from './../../atoms/DisplayOperation';
import DisplayOperationScroller from './../../atoms/DisplayOperationScroller';
import NumericPadContainer from './../../atoms/NumericPadContainer';
import OperatorsPadContainer from './../../atoms/OperatorsPadContainer';
import PadContainer from './../../atoms/PadContainer';
import React from 'react';
import Result from './../../atoms/Result';

const Calculator: React.FC = () => {
    return (
        <AppContainer>
            <DisplayContainer top={true}>
                <DisplayOperationScroller>
                    <DisplayOperation>
                        <ContentEditable
                            placeholder='Type operation...'
                            contentEditable={true}
                        />
                    </DisplayOperation>
                </DisplayOperationScroller>
                <Result>56</Result>
            </DisplayContainer>
            <PadContainer>
                <NumericPadContainer>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>0</Button>
                    <Button>,</Button>
                    <Button>=</Button>
                </NumericPadContainer>
                <OperatorsPadContainer>
                    <Button full={true}>
                        <Backspace />
                    </Button>
                    <Button>÷</Button>
                    <Button>×</Button>
                    <Button>-</Button>
                    <Button>+</Button>
                    <Button>(</Button>
                    <Button>)</Button>
                </OperatorsPadContainer>
            </PadContainer>
        </AppContainer>
    );
};

export default Calculator;
