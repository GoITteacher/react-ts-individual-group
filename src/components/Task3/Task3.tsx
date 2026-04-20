import MessageList from "./MessageList/MessageList";
import css from "./Task3.module.css";
const messages = [
  { text: "Привіт! Як справи?", isRead: true },
  { text: "Не забудь про заняття завтра", isRead: false },
  { text: "Я надіслав тобі файл", isRead: true },
  { text: "Передзвони мені, будь ласка", isRead: false },
];
const Task3 = () => {
  return (
    <div className={css["task3"]}>
      <MessageList messages={messages}></MessageList>
    </div>
  );
};

export default Task3;
