import { ThemeProvider } from '@mui/material/styles';
import ExampleComponent from './component/ExampleComponent';
import { themeFactory } from './themes';

function App() {
  const themeName = process.env.REACT_APP_THEME || '';
  const theme = themeFactory(themeName)
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ExampleComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
