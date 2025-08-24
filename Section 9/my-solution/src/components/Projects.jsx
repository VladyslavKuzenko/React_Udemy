export default function Projects({ projects, handleOpenDialog, handleSelectProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={handleOpenDialog}
      >
        + Add Project
      </button>
      <ul>
        {projects.map((item, index) => (
          <li key={index}>
            <button onClick={()=>{handleSelectProject(item)}}>{item.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
