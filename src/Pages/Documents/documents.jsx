import './documents.css'
import resume from '../../Documents/Resume - Derek Gauger.pdf'

const Documents = () => {
    
    return (
        <>  
            <div className='resume-container'>
                <iframe src={resume}title="resume"></iframe>
            </div>
        </>
    )
}

export default Documents