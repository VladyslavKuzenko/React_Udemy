import { useRef, useState } from "react";
import CreateProject from "./components/CreateProject";
import Projects from "./components/Projects";
import ProjectManagement from "./components/ProjectManagement";

function App() {
  const dialog = useRef();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();

  function handleOpenDialog() {
    dialog.current.open();
  }
  function handleDelete(project){
    setProjects((prevProjects)=>{
      const newProjects=prevProjects.map((item)=>item!==project);
      return newProjects;
    })
    setSelectedProject();
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Projects
        projects={projects}
        handleSelectProject={setSelectedProject}
        handleOpenDialog={handleOpenDialog}
      />
      <ProjectManagement
        project={selectedProject}
        handleOpenDialog={handleOpenDialog}
        handleDelete={handleDelete}
      />

      <CreateProject onSetProjects={setProjects} dialogRef={dialog} />
    </main>
  );
}

export default App;
