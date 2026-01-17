// Component for password input
// Logs typing events for anti-bot analysis

function PasswordInput() {
    const handleChange = () => {
      console.log("Entering password...");
    };
  
    return (
      <div>
        <input
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>
    );
  }
  
  export default PasswordInput;
  