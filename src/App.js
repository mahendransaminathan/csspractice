import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <label className='labelPractice'>SamplePractice</label>

	<input type="text" className="name"/>

	<select className="dropdown">
	<option value="1">Red </option> 
	</select>       

	<ul className="List"> 
	<li key="1">Large</li>
	<li key="1">Large</li>
	</ul> 
        
	<table>
	<tr>
	<th>vkp </th>
	<th>Tir </th>
	<th>Pal </th> 
	</tr>
	<tr>
	<td>1</td>
	<td>2 </td>
	<td>3 </td> 
	</tr>
	<tr>
	<td>1</td>
	<td>2 </td>
	<td>3 </td> 
	</tr>

	<tr>
	<td>1</td>
	<td>2 </td>
	<td>3 </td> 
	</tr>

	</table>
      </header>
    </div>
  );
}

export default App;
