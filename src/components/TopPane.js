import React from 'react';
import './TopPane.css';
import Editor from './Editor';

export default function TopPane({ valuePaneOne, valuePaneTwo, changeValuePaneOne, changeValuePaneTwo }) {
  return (
    <div className="TopPane">
      <Editor language="xml" displayName="HTML" value={valuePaneOne} onChange={changeValuePaneOne} placeholder="Write your HTML here... and be grateful to Avi" />
      <Editor language="css" displayName="CSS" value={valuePaneTwo} onChange={changeValuePaneTwo} placeholder="Write your CSS here... and be grateful to Avi" />
    </div>
  );
}
