function Sidebar({ appName, menuItems }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">{appName}</h2>
      <nav aria-label="Workspace navigation">
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item} className="sidebar-menu-item">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
