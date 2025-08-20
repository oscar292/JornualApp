import { JorunalEntries } from "./JournalEntries"

export const Sidebar = () => {
  return (
    <aside className="jorunal__sidebar">
        
        <div className="jornual__sidebar-navbar">
            <h3 className="mt-5">
                <i className="far fa-moon"></i>
                <span> Oscar</span>
            </h3>
            <button className="btn">
                Logout
            </button>
        </div>

        <div className="journal__new-entry">
            <i className="far fa-calendar-plus fa-5x"></i>
            <p className="mt-5">
                New entry
            </p>
        </div>

        <JorunalEntries />

    </aside>
  )
}
