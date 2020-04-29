import React, { useEffect } from 'react';

const onContextMenu = (e: Event) => e.preventDefault();

const Setup: React.FC = () => {
    useEffect(() => {
        document.body.addEventListener('contextmenu', onContextMenu);
        return () => {
            document.body.removeEventListener('contextmenu', onContextMenu);
        };
    }, []);
    return null;
};

export default Setup;
