import React, {Component} from 'react';
import dumbyImg from '../../imgs/dumby/04-thumbnail.jpg';

let projectThumbName = "dumbyProjectName";
let projectIconName = "Android";




class ProjectThumb extends React.Component{
    render(props) {
        return (
            <div className="showcaseImgBox">
<<<<<<< HEAD
                <img src={dumbyImg} className="projectThumb" alt="true" />
=======
                <img src={dumbyImg} className="projectThumb" alt={projectThumbName} />
>>>>>>> navRouter
                <div className="projectDataBox">
                    <div className="projectData">
                        <h3>ProjectName</h3>
                        <p>Short Description of project. Lorme;las a;lkjd ;lkdlfja; slkdfj;a lsd; alsjdf; lajs; fdlkaj ;dlfkja; ldsklsdjf; alksjd f;alkjs d;fkaj s;ldkjfa ;slkjfd ;alksasalskjf;alksjg ;aksfjglksdjf;gskjf;lg skjd;fg;lskjf ;lgflgj;lskjd;flgks ;ldkfjg s;lkdfjg ;sdkfjlgskdjfga;slskdfjgs;lkdfgj;slkdfjg;slkdfj</p>
                        <div className='projectTypeIcon'>
<<<<<<< HEAD
                            <img src="#" className="projectTypeIcon" alt="true" />
=======
                            <img src="#" className="projectTypeIcon" alt={projectIconName} />
>>>>>>> navRouter
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProjectThumb;