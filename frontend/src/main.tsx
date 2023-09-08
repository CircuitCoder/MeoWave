import { hydrate, prerender as ssr } from 'preact-iso';

export function App() {
  return <div id="app">
    Meow
  </div>;
}

hydrate(<App />);

export async function prerender(data) {
	return await ssr(<App {...data} />);
}