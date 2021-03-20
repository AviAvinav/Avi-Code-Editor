import './App.css';
import React, { useState, useEffect } from 'react';
import TopPane from './components/TopPane';
import BottomPane from './components/BottomPane';

function App() {
  
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
        setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
          </html>
        `)
    }, 500)

    return () => clearTimeout(timeout);
  }, [html, css])

  return (
    <div className="App">
      <TopPane valuePaneOne={html} valuePaneTwo={css} changeValuePaneOne={setHtml} changeValuePaneTwo={setCss} />
      <BottomPane srcDoc={srcDoc} />
    </div>
  );
}

export default App;
