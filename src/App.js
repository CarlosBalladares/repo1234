import React from "react";
import SimpleCard from "./components/SimpleCard";
import SampleFormik from "./components/SampleFormik";
import SampleForm from "./components/SampleForm";

class App extends React.Component {
  render() {
    return (
      <div style={{ width: "50%" }}>
        <React.Fragment>
          {/* <SimpleCard render={SampleFormik} /> */}
          <SampleForm />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
