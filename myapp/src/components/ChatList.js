import * as React from 'react';
import Chat from './Chat';

export default function ChatList() {
    const [chatList, setChatList] = React.useState([])
    React.useEffect(() => {
        setChatList(() => [{ id: 1, title: 'Chat-1' }])
    }, [])

    return (
        <>
            <ul className="chat-list">
                {
                    chatList.map((el, i) => <Chat id={el.id} title={el.title} key={i} />)
                }
            </ul>
        </>
    );
}
