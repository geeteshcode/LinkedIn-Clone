
import './App.css';
import Header from './Header';
import SideBar from './SideBar'
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        {/* Right Side Bar */}
        <SideBar />
      </div>
    </div>
  );
}

export default App;
