import "./App.css";
import Button from "./commons/Button";
import Badges from "./commons/Badges";
import Error from "./commons/Error";
import Input from "./commons/Input";
import Loading from "./commons/Loading";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Button text="click me" width={280} height={40} />
      <Badges text="ingredients" />
      <Input
        placeholder="my input"
        type="email"
        Icon={() => <div style={{ color: "red" }}> $ </div>}
      />
      <Loading visible={true} />

      <Card item="mango fresh juice" price="30" />
      {/* <Error/> */}
    </div>
  );
}

export default App;
