import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigApp } from './apps/configApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InjectStyle } from './natived';
import { Settings } from './pages/Settings';
const VITE_PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;
console.log(`build time:${import.meta.env.VITE_APP_BUILD_TIME}`);
InjectStyle(`
body{
  margin:0;
}
.ant-btn:not(:disabled):focus-visible {
  outline: none;
}
`);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={VITE_PUBLIC_URL}>
      <Routes>
        {/* <Route path="/" element={<App></App>} /> */}
        <Route path="/" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);