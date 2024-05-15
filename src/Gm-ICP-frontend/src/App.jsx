import { useState } from 'react';
import { Gm_ICP_backend } from 'declarations/Gm-ICP-backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Gm_ICP_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <section id="greeting" 
      class="rounded overflow-hidden shadow-lg">
        <img src="/logo2.svg" alt="DFINITY logo" class="pt-6 pb-8 mb-4" />
        <h2 class="text-center">GM!</h2>
        <p class="text-sm pt-4 pb-6 mb-4 text-center">
          Demo ICP app with Motoko and React
        </p>
      </section>
      <form action="#" onSubmit={handleSubmit}
        class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10">
        <label htmlFor="name"
          class="block text-gray-500 text-md font-bold mb-2">Name: </label>
        <input id="name" alt="Name" type="text" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline" />
        <button type="submit" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
      <section id="greeting" 
      class="max-w-sm rounded overflow-hidden shadow-lg">{greeting}</section>
    </main>
  );
}

export default App;
