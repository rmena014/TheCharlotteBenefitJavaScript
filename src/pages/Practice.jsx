import React from "react";
import SideNavBar from "../components/SideNavBar";
import "./pages.css";
import TextEditor from "../components/TextEditor";

function Practice() {
  return (
    <div>
      <SideNavBar />
      <div className="practice-main py-10 px-5">
        <h1 className="text-2xl font-bold mb-5">Welcome to the Sandbox!</h1>
        <p className="mb-5 text-lg">
          This is still an extremely early build of this feature. It works
          however, to practice your HTML, CSS, and Javascript so have fun!
          <br></br> The first box = HTML. Second Box = CSS. Third Box =
          Javascript
        </p>

        <TextEditor />
      </div>
    </div>
  );
}

export default Practice;
