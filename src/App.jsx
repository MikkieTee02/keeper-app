import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((noteItem) => {
        return (
          <Content
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
    </div>
  );
}

export default App;
