import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(false);

    const timer = setTimeout(() => {
      setModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main">
      {!modal ? (
        <div className="btn" onClick={() => setModal(!modal)}>
          <button>OPEN</button>
        </div>
      ) : (
        <div className="modal">
          <div className="close" onClick={() => setModal(!modal)}>
            X
          </div>
          <div className="content">MY MODAL</div>
        </div>
      )}
    </div>
  );
}

export default App;
