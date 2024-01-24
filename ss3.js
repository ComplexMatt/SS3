import { useState } from 'react';

function MyComponent() 
  const [showMessage, setShowMessage] = useState(true);

  const handleClick = () => {
    setShowMessage = false;
  };
{
  return (
    <div>
      <div>
      <h1>Hello, {name}!</h1>
      {showMessage (
        <p>This message is visible.</p>
      )}
      <button> onClick={() => handleClick()};
        Toggle Message
      </button>
      </div>
    </div>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById);