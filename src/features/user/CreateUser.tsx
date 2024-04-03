import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72 px-2"
      />

      {username !== "" && (
        <div>
          <Button disabled={false}>Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
