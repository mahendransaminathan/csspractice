import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="company-details-container">
          <form className='company-details'>

            <div className='company-details-child'>
              <label className='companyNameLabel'>Company Name </label>
              <input type='text' className='companyNameText'/>
              
              </div>
            <div className='company-details-child'>   </div>
            <div className='company-details-child'>   </div>
            <div className='company-details-child'>   </div>

          </form>      
      </div>
    </div>
  );
}

export default App;
