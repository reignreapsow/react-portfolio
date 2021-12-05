import React from 'react';
import ProjectThumb from './ProjectThumb';

import dumbyImg from '../../imgs/dumby/04-thumbnail.jpg';





//# SHOWCASE SECTION
class Showcase extends React.Component {
    render() {
        return (
            <section className="showcase">
                <div className="showcaseGallery">
                    <div className="showcaseRow">
                        
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />

                    </div>
                    <div className="showcaseRow">
                        
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />

                    </div>
                </div>
            </section>

        )
    }
}

export default Showcase;