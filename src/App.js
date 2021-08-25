import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="d-md-flex h-md-100 align-items-center">
      <div className="col-md-6 p-0 bg-white h-md-100">
        <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center left">
          <LeftSide />
        </div>
      </div>
      <div className="col-md-6 p-0 bg-color h-md-100">
        <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
