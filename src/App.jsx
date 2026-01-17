// Root component that renders the PasswordInput and SubmitButton
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

function App() {
  return (
    <div>
      <h1>Password Input Lab</h1>
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}

export default App;
