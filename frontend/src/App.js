import React from 'react';
import { GetMem } from './GetMem';
import { NodeCheck } from './NodeCheck';

const App = () => {
  return <div>
  <h1>Memory Infomation</h1>
  <GetMem />
  <h1>Node Check Status</h1>
  <NodeCheck />
  
  </div>;
};

export default App;