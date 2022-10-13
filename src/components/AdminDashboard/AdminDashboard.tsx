function AdminDashboard() {
  return (
    <form action="" className="main">
      <label htmlFor="proyect-name">Project Name</label>
      <input
        type="text"
        name="proyect-name"
        id="proyect-name"
        placeholder="Please type the project name"
      />
      <button className="button is-primary">Send</button>
    </form>
  );
}

export { AdminDashboard };
