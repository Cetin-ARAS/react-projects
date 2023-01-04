import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <main>
    <section className='container' >
      <h3>0 birhdays today</h3>
      <List />
    </section>
    </main>;
}

export default App;
