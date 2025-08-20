export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        
        <div 
            className='journal__entry-picture' 
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://i0.wp.com/tomatazos.buscafs.com/2025/05/records-de-lilo-stitch.jpg?fit=1280,720&quality=75&strip=all)'
            }}
        ></div>

        <div className='journal__entry-body'>
            <p className='journal__entry-tile'>
                un nuevo dia
            </p>
            <p className='journal__entry-content'>
                Lorem Lorem
            </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>20</h4>
        </div>

    </div>
  )
}
