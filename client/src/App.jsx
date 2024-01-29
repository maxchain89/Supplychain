import React, { useState} from 'react';
import { ThemeProvider} from '@mui/material/styles';
import AddItemForm from "./components/AddItemForm";
import { EthProvider } from "./contexts/EthContext";
import ItemList from "./components/ItemList";
import theme from './components/theme';

function App() {

  const [items] = useState([]); 

  return (
    <ThemeProvider theme={theme}>
    <EthProvider>
      <div style={{
        backgroundImage: 'url(/Supplychain/img/supplychain.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>
       
        <AddItemForm />
        <ItemList items={items}  />
      </div>
    </EthProvider>
  </ThemeProvider>
  );
}

export default App;
