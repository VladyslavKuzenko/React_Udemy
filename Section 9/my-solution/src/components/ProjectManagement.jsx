import notebook from "../assets/no-projects.png";
import Task from "./Task";

export default function ProjectManagement({
  project,
  setProject,
  handleOpenDialog,
  handleDelete,
}) {
  console.log(project);
  return (
    <>
      <div className="w-[35rem] mt-16">
        {!project && (
          <div className="mt-24 text-center w-2/3">
            {/* <form className="mt-4 text-right"> */}
            <img
              className="w-16 h-16 object-contain mx-auto"
              src={notebook}
              alt="Notebook"
            />
            <h2 className="text-xl font-bold text-stone-500 my-4">
              No Project Selected
            </h2>
            <p className="text-stone-400 mb-4">
              Select a project or get started with a new one
            </p>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleOpenDialog}
            >
              Create new project
            </button>
            {/* </form> */}
          </div>
        )}

        {project && (
          <>
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">
                  Learning React
                </h1>
                <button
                  className="text-stone-600 hover:text-stone-950"
                  onClick={() => handleDelete(project)}
                >
                  Delete
                </button>
              </div>
              <p className="mb-4 text-stone-400">{project.date}</p>

              <p className="text-stone-600 whitespace-pre-wrap">
                {project.description}
              </p>
            </header>
            <Task />
          </>
        )}
      </div>
    </>
  );
}

// import notebook from "../assets/no-projects.png";
// import Task from "./Task";

// export default function ProjectManagement({ project, setProject, handleOpenDialog,handleDelete }) {
//   console.log(project);
//   return (
//     <>
//       <div className="mt-24 text-center w-2/3">
//         {!project && (
//           <>
//             {/* <form className="mt-4 text-right"> */}
//             <img
//               className="w-16 h-16 object-contain mx-auto"
//               src={notebook}
//               alt="Notebook"
//             />
//             <h2 className="text-xl font-bold text-stone-500 my-4">
//               No Project Selected
//             </h2>
//             <p className="text-stone-400 mb-4">
//               Select a project or get started with a new one
//             </p>
//             <button
//               className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
//               onClick={handleOpenDialog}
//             >
//               Create new project
//             </button>
//             {/* </form> */}
//           </>
//         )}

//         {project && (
//           <>
//             <h1 className="text-3xl font-bold text-stone-600 mb-2">
//               Learning React
//             </h1>
//             <p>{project.date}</p>
//             <p>
//               <button onClick={()=>handleDelete(project)}>Delete</button>
//             </p>
//             <p>
//                 {project.description}
//             </p>
//             <h1>Tasks</h1>
//             <Task/>
//           </>
//         )}
//       </div>
//     </>
//   );
// }
