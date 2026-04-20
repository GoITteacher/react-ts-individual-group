import type { Message } from "../../../types/message";
import MessageItem from "../MessageItem/MessageItem";
import css from "./MessageList.module.css";

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className={css["messageList"]}>
      {messages.map((message) => {
        return <MessageItem message={message} />;
      })}
    </div>
  );
};

export default MessageList;
