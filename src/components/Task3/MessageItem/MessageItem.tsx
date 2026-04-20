import { CheckCircleOutlined } from "@ant-design/icons";
import type { Message } from "../../../types/message";
import css from "./MessageItem.module.css";

interface MessageItemProps {
  message: Message;
}

const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <div className={css["messageItem"]}>
      <p>{message.text}</p>
      {message.isRead && <CheckCircleOutlined />}
    </div>
  );
};

export default MessageItem;
