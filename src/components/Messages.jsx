// import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
// import { ChatContext } from "../context/ChatContext";
// import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  // const [messages, setMessages] = useState([]);
  // const { data } = useContext(ChatContext);

  // useEffect(() => {
  //   const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
  //     doc.exists() && setMessages(doc.data().messages);
  //   });

  //   return () => {
  //     unSub();
  //   };
  // }, [data.chatId]);

  // console.log(messages)

  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;