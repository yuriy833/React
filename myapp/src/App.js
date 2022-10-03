import './App.css';

function App() {
  const text = "Welcome"

  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;

const Message = ({ text }) => {

  return (
    <div className='message'>
      <p className='message__text'>{text}</p>
    </div>
  )
}