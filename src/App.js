
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import AppContextProvider from "./store/AppContext";
function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <Header></Header>
        <Content></Content>
      </AppContextProvider>
    </div>
  );
}

export default App;
