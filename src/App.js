import './App.css';


const App = () => {
  return (
  <div>
      <div><Header/></div>
      <div className="App">
        <ul>
          <li>css</li>
              
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
    </div>);

}

const Header = () => {
  return (<div>
    <a>Home</a>
    <a>News Feed</a>
    <a>Messeges</a>
  </div>);
}


const App1 = () => {
  return (<div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 80px)',
    gridTemplateRows: 'repeat(4, 80px)',
    gap: '35px',
    margin: '50px'
  }}>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', fontSize: '48px', fontWeight: 'bold', width: '80px', height: '80px' }}>1</span>
    <span style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>2</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>3</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>4</span>

    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>5</span>
        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>5</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>6</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>7</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>8</span>

    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>9</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>10</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>11</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>12</span>

    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>13</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>14</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}>15</span>
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', fontSize: '24px', fontWeight: 'bold', width: '80px', height: '80px' }}></span>
  </div>

  )
}

export default App