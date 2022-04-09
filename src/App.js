
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from "./Feed";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        {/* Right Side Bar */}
        <SideBar />
        {/* Feed  */}
        <Feed />

      </div>
    </div>
  );
}

export default App;
