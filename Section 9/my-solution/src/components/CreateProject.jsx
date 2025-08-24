import { useImperativeHandle, useRef, useState } from "react";

export default function CreateProject({ onSetProjects, dialogRef }) {
  const dialog = useRef();
  const [projectData, setProjectData] = useState({
    description: "",
    title: "",
    date: "",
  });

  function handleChange(event, variable) {
    setProjectData((prevData) => {
      return {
        ...prevData,
        [variable]: event.target.value,
      };
    });
  }

  function handleAddProject() {
    onSetProjects((prevProjectsData) => {
      const newData = [projectData,...prevProjectsData];
      return newData;
    });
    handleResetForm();
  }

  function handleResetForm() {
    setProjectData({
      description: "",
      title: "",
      date: "",
    });
  }

  useImperativeHandle(dialogRef, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      onClose={handleResetForm}
    >
      <form method="dialog" className="mt-4 text-right">
        <button onClick={handleResetForm}>Cancel</button>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={handleAddProject}
        >
          Save
        </button>
      </form>
      <p className="flex flex-col gap-1 my-4">
        <label>TITLE</label>
        <input
          type="text"
          onChange={(event) => {
            handleChange(event, "title");
          }}
          value={projectData.title}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label>DESCRIPTION</label>
        <input
          type="text"
          onChange={(event) => {
            handleChange(event, "description");
          }}
          value={projectData.description}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label>DUE DATE</label>
        <input
          type="date"
          onChange={(event) => {
            handleChange(event, "date");
          }}
          value={projectData.date}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
    </dialog>
  );
}
