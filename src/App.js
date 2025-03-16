import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="company-details-container">
          <form className='company-details'>

            <div className='company-details-child'>
            <div className='company-Name-Label'>
              <label className='cnlabel'>Company Name</label>
            </div>
            <div className='company-Name-Text'>
              <input type='text' className='cntext'/>
            </div>
            </div>
            <div className='company-details-child'>
            <div className='reg-Num-Label'>
              <label className='rnlabel'>Registration Number</label>
            </div>
            <div className='reg-Num-Text'>
              <input type='text' className='rntext'/>
            </div>               
            </div>
            <div className='company-details-child'>
            <div className='address-Label'>
              <label className='addresslabel'>Address</label>
            </div>
            <div className='address-Text'>
              <input type='text' className='addresstext'/>
            </div>
            </div>
            <div className='company-details-child'>
            <div className='city-Label'>
              <label className='citylabel'>City</label>
            </div>
            <div className='city-Text'>
              <input type='text' className='citytext'/>
            </div>
            </div>

            <div className='company-details-child'>
            <div className='state-Label'>
              <label className='statelabel'>State</label>
            </div>
            <div className='state-Text'>
              <input type='text' className='statetext'/>
            </div>
            </div>
            
            <div className='company-details-child'>
            <div className='country-Label'>
              <label className='countrylabel'>Country</label>
            </div>
            <div className='country-Text'>
              <select className='countrytext'>
                <option value='1'>USA</option>
                <option value='2'>UK</option>
                <option value='3'>Germany</option>
                <option value='4'>France</option>
                <option value='5'>Sweden</option>
                </select>
            </div>
            </div>

            
            <div className='company-details-child'>
            <div className='postal-Label'>
              <label className='postallabel'>Postal Code</label>
            </div>
            <div className='postal-Text'>
              <input type='text' className='postaltext'/>
            </div>
            </div>

            <div className='company-details-child'>
            <div className='button-empty'>
              
            </div>
            <div className='button-Text'>
              <button className='buttontext'>
              Submit
              </button>
            </div>
            </div>


          </form>      
      </div>
    </div>
  );
}

export default App;
