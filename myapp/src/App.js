import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })

    /
  const textBot = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Bot') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { text: textBot, author: 'Bot' }])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App">
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      <div className="messageList">
        {
          messageList.map((el, i) => <Message author={el.author} text={el.text} key={i} />)
        }
      </div>
    </div>
  );
}

export default App;

const Form = ({ data, setData, setMessage }) => {
  const { text, author } = data
  const submitForm = (el) => {
    el.preventDefault()
    if (text.length > 0) {
      setMessage(pervstate => [...pervstate, { text, author }])
    }
    setData(
      {
        text: '',
        author: ''
      }
    )
  }

  return (
    <div className="message-box">
      <h2>Message</h2>
      <form onSubmit={submitForm}>
        <div className="user-box">
          <input placeholder='Имя' value={author} onChange={(el) =>
            setData(pervstate => ({ ...pervstate, author: el.target.value }))
          } />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input placeholder='Текст' value={text} onChange={(el) =>
            setData(pervstate => ({ ...pervstate, text: el.target.value }))
          } />
          <label>Text message</label>
        </div>
        <button className='btn' type='submit'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Отправить
        </button>
      </form>
    </div>
  )
}

const Message = ({ author, text }) => {

  return (
    <div className='message'>
      <h3>{author}</h3>
      <hr></hr>
      <p className='message__text'>{text}</p>
    </div>
  )
}