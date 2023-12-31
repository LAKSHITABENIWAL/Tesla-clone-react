import Header from "./Components/header/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import Backdrop from "./Components/backdrop/Backdrop";

import { useState } from "react";

function App({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar && (
        <>
          <Backdrop onClick={() => setShowSidebar(false)} />
          <Sidebar setShowSidebar={setShowSidebar} />
        </>
      )}
      <main className={showSidebar ? "blur-content" : ""}>
        <Header setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </>
  );
}

export default App;
