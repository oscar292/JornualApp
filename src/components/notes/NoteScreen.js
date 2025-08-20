import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
        <NotesAppBar />
        <div className="notes__content">
          
          <input 
            type="text"
            placeholder="Some awesome title"
            className="notes_title-input"
            autoComplete="off"
          />

          <textarea
            placeholder="What happened today"
            className="notes__textarea"
          >
          </textarea>

          <div className="notes__image">
            <img src="https://media.istockphoto.com/id/538449165/es/foto/hermoso-paisaje-con-nubes-sobre-el-mar-al-atardecer-toma.jpg?s=612x612&w=0&k=20&c=eCiTmgmyCdsjCLWWEmbybsAbR92iqdTp7GQ5zNa7WbQ=" alt="paisaje"/>
          </div>

        </div>

    </div>
  )
}
