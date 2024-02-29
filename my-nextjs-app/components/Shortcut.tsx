// components/Shortcut.tsx
import React from 'react';

interface ShortcutProps {
    title: string;
    url: string;
  }
  
  const Shortcut: React.FC<ShortcutProps> = ({ title, url }) => {
    return (
      <div className="shortcut">
        <a href={url}>{title}</a>
      </div>
    );
  }
  
  export default Shortcut;
  