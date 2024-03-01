// // components/Shortcut.tsx
// "use client"; // This is a client component 👈🏽
// import React, { useState, useEffect } from 'react';

// interface ShortcutData {
//     mainShortcutId: number;
//     title: string;
//     imageUrl: string;
//     linkUrl: string;
// }

// const Shortcut: React.FC = () => {
//     const [shortcuts, setShortcuts] = useState<ShortcutData[]>([]);

//     useEffect(() => {
//         fetch('https://api.testvalley.kr/main-shortcut/all')
//             .then(response => response.json())
//             .then(data => setShortcuts(data))
//             .catch(error => console.error('Error fetching shortcuts:', error));
//     }, []);

//     // Calculate the width of each shortcut dynamically based on the number of shortcuts
//     const shortcutWidth = 100 / shortcuts.length;

//     return (
//         <div className="shortcuts-container">
//             {shortcuts.map(shortcut => (
//                 <div key={shortcut.mainShortcutId} className="shortcut" style={{ width: `${shortcutWidth}%` }}>
//                     <img src={shortcut.imageUrl} alt={shortcut.title} />
//                     <a href={shortcut.linkUrl}>{shortcut.title}</a>
//                 </div>
//             ))}
//             <style jsx>{`
//                 .shortcuts-container {
//                     display: flex;
//                     flex-wrap: nowrap; /* Prevent wrapping */
//                     overflow-x: auto; /* Enable horizontal scrolling if necessary */
//                 }

//                 .shortcut {
//                     flex: 0 0 auto; /* Allow resizing */
//                     max-width: ${shortcutWidth}%; /* Set the width of each shortcut */
//                     padding: 0 10px; /* Add some padding between shortcuts */
//                 }

//                 .shortcut img {
//                     max-width: 100%;
//                     height: auto;
//                 }

//                 .shortcut a {
//                     display: block;
//                     text-align: center;
//                     text-decoration: none;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Shortcut;

"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';

interface ShortcutProps {
    title: string;
    imageUrl: string;
    linkUrl: string;
}

const Shortcut: React.FC<ShortcutProps> = ({ title, imageUrl, linkUrl }) => {
    const [shortcuts, setShortcuts] = useState<ShortcutProps[]>([]);

    useEffect(() => {
        fetch('https://api.testvalley.kr/main-shortcut/all')
            .then(response => response.json())
            .then(data => setShortcuts(data))
            .catch(error => console.error('Error fetching shortcuts:', error));
    }, []);

    const shortcutWidth = 100 / shortcuts.length;

    return (
        <div className="shortcuts-container">
            {shortcuts.map(shortcut => (
                <div key={shortcut.title} className="shortcut" style={{ width: `${shortcutWidth}%` }}>
                    <img src={shortcut.imageUrl} alt={shortcut.title} />
                    <a href={shortcut.linkUrl}>{shortcut.title}</a>
                </div>
            ))}
            <style jsx>{`
                .shortcuts-container {
                    display: flex;
                    flex-wrap: nowrap; /* Prevent wrapping */
                    overflow-x: auto; /* Enable horizontal scrolling if necessary */
                }

                .shortcut {
                    flex: 0 0 auto; /* Allow resizing */
                    max-width: ${shortcutWidth}%; /* Set the width of each shortcut */
                    padding: 0 10px; /* Add some padding between shortcuts */
                }

                .shortcut img {
                    max-width: 100%;
                    height: auto;
                }

                .shortcut a {
                    display: block;
                    text-align: center;
                    text-decoration: none;
                }
            `}</style>
        </div>
    );
};

export default Shortcut;
