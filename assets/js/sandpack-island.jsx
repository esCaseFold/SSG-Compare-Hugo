import React from 'react';
import { createRoot } from 'react-dom/client';
import { Sandpack } from '@codesandbox/sandpack-react';

document.querySelectorAll('.sandpack-island').forEach((el) => {
  const files = {};
  el.querySelectorAll('textarea[data-path]').forEach((t) => {
    const path = t.dataset.path;
    files[path] = {
      code: t.value.replace(/^\n/, ''),
     ...(t.dataset.hidden === 'true' ? { hidden: true } : {}),
     ...(t.dataset.active === 'true' || path === '/index.js' ? { active: true } : {}),
    };
  });

  createRoot(el.querySelector('.sandpack-root')).render(
    <Sandpack
      template="react"
      theme="auto"
      files={files}
      options={{
        showLineNumbers: true,
        editorHeight: parseInt(el.dataset.height, 10) || 350,
      }}
    />
  );
});