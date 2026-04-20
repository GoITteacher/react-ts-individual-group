import Lessons from "./components/Lessons/Lessons";
import Movies from "./components/Movies/Movies";
import Students from "./components/Students/Students";

const App = () => {
  return (
    <div>
      <Movies />
      <Students />
      <Lessons />
    </div>
  );
};

export default App;
