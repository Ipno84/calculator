import { useEffect, useState } from 'react';

export default function useLongPress(
    callback: Function = () => {},
    ms: number = 300
) {
    const [startLongPress, setStartLongPress] = useState(false);

    useEffect(() => {
        let timerId: number | undefined;
        if (startLongPress) {
            timerId = setTimeout(callback, ms);
        } else clearTimeout(timerId);

        return () => {
            clearTimeout(timerId);
        };
    }, [callback, ms, startLongPress]);

    return {
        onMouseDown: () => setStartLongPress(true),
        onMouseUp: () => setStartLongPress(false),
        onMouseLeave: () => setStartLongPress(false),
        onTouchStart: () => setStartLongPress(true),
        onTouchEnd: () => setStartLongPress(false),
    };
}
