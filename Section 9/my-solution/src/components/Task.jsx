import { useState } from "react";

export default function () {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function handleAddTask() {
    setTasks((prev) => {
      return [...prev, task];
    });
    setTask("");
  }
  function handleRemove(indexTaskToRemove) {
    setTasks((prev) => {
      const newTaskList = prev.filter(
        (item, index) => index !== indexTaskToRemove
      );
      return newTaskList;
    });
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <div className="flex items-center gap-4">
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
          value={task}
          onChange={handleChange}
        />
        <button
          className="text=stone-700 hover:text-stone-950"
          onClick={handleAddTask}
        >
          Add task
        </button>
      </div>

      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((item, index) => (
          <li key={index} className="flex justify-between my-4">
            <span>{item}</span>
            <button
              className="text-stone-700 hover:text-red-500"
              onClick={() => {
                handleRemove(index);
              }}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// import { useState } from "react";

// export default function () {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");

//   function handleAddTask() {
//     setTasks((prev) => {
//       return [...prev, task];
//     });
//     setTask("");
//   }
//   function handleRemove(indexTaskToRemove) {
//     setTasks((prev) => {
//       const newTaskList = prev.filter((item,index) => index !== indexTaskToRemove);
//       return newTaskList;
//     });
//   }

//   function handleChange(event) {
//     setTask(event.target.value);
//   }

//   return (
//     <>
//       <div>
//         <input type="text" value={task} onChange={handleChange} />
//         <button onClick={handleAddTask}>Add task</button>
//         {tasks.map((item, index) => (
//           <p key={index}>
//             {item}
//             <button
//               onClick={() => {
//                 handleRemove(index);
//               }}
//             >
//               Clear
//             </button>
//           </p>
//         ))}
//       </div>
//     </>
//   );
// }
