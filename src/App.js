import React from "react";
import Header from "./Components/Layout/Header";
import Content from "./Components/Layout/Content";
import { ProjectsProvider, SelectedProjectsProvider } from "./Context";
const App = () => {
  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <div>
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectsProvider>
  );
};

export default App;
