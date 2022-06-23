import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ErrorBoundary from '../src/components/errorBoundary/ErrorBoundary'

function App() {
  return (
    <div className="app">
      <Header/>
      
      <ErrorBoundary>
         <Main/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
