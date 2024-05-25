import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';

import { ContextProvider } from './store/ShoppingCartContext.jsx';

function App() {
  return (
    <ContextProvider>
      <Header/>
      <Shop />
    </ContextProvider>
  );
}

export default App;
