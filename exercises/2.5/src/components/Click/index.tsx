import { useState } from "react";

interface ClickProps {
  title: string;
  message: string;
}

const Click = ({ title, message }: ClickProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setCount((count: number) => count + 1)}>
        count is {count}
      </button>
      {count == 10 && <p>{message}</p>}
    </div>
  );
};

export default Click;
