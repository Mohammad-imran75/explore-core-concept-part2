import './App.css'
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
import Counter from './counter';


function App() {
 function handleClick() {
  alert('button clicked');    
  } 

  function handleClicked2(num){
    alert(num + 3);
  }
  return (
    <>
      <h3>React Core concept</h3>

      <Friends></Friends>


      <Users></Users>
      <Team></Team>

      <Counter></Counter>


      <button onClick={handleClick}>first</button>
      <button onClick={() =>handleClicked2(5)}>second</button>
      <button onClick={()=>alert('handle click')}>three</button>
    </>
  )
}

export default App
