import React, { Component } from 'react';






/*
    TODO: CREATE A SEARCH BAR that grabs the clicked criteria and searches the database for project with the specific criteria and displays them below 

    SEARCH ENGINE CRITERIA:

    PROJECT TYPE    / LANGUAGES                          / SORT 
     APP OR WEBSITE / HTML, SCSS, CSS, PHP, JS, REACTjs     ASCENDING, DESCENDING,CURRENT

     *  SEARCH BAR FUNCTIONALITY
        GRAB CRITERIA ON BUTTON CLICK
        SEARCH DATABASE
        DISPLAY ALL PROJECTS WITH SELECTED CRITERIA

*/

// if (document.getElementById('APP').checked = undefined) {
//     document.getElementById('Website').checked = true;
//  }


function displayProjects() {
    grabCriteria();
}


function grabCriteria() {
    let projectType;

    // iF APP CHECKBOX IS TRUE SAVE APP TO THE VARIABLE ELSE SAVE WEBSITE
    if(document.getElementById('APP').checked = true ) {
        projectType = app; 
    } else {
        projectType = website;
    }


    console.log(projectType);

}

class GallerySearch extends Component{
    render() {
        return (
            <div className='gallerySearch'>
            <table>
                <tr>
                    <th>Project Type</th>
                    <th>Programming Languages</th>
                        <th>Sort</th>
                        <th>
                    <button onClick={displayProjects}>SEARCH</button> </th>
                </tr>
                <tr>
                    <td>
                        
                            <label htmlFor="App">
                                <input type="checkbox" id="App" name="App" value="App" />
                                App
                            </label>
                            
                        
                            <label htmlFor="Website">
                                <input type="checkbox" id="Website" name="Website" value="Website" />
                                Website
                            </label>
                    </td>
                    <td>
                        
                            <label htmlFor="HTML">
                                <input type="checkbox" id="HTML" ref="HTML" name="HTML" value="HTML" />
                                HTML
                            </label>

                            
                            <label htmlFor="PHP">
                                <input type="checkbox" id="PHP" name="PHP" value="PHP" />
                                PHP
                            </label>
                                 
                        
                            <label htmlFor="CSS">
                                <input type="checkbox" id="CSS" name="CSS" value="CSS" />
                                CSS
                            </label>
                        
                            <label htmlFor="App">
                                <input type="checkbox" id="SCSS" name="SCSS" value="SCSS" />
                                SCSS
                            </label>

                            
                        
                            <label htmlFor="JS">
                                <input type="checkbox" id="JS" name="JS" value="JS" />
                                JS
                            </label>
                            
                        
                            <label htmlFor="REACTJS">
                                <input type="checkbox" id="REACTJS" name="REACTJS" value="REACTJS" />
                                REACTJS
                            </label>
                        
                            <label htmlFor="JAVA">
                                <input type="checkbox" id="JAVA" name="JAVA" value="JAVA" />
                                JAVA
                            </label>
                        
                            <label htmlFor="KOTLIN">
                                <input type="checkbox" id="KOTLIN" name="KOTLIN" value="KOTLIN" />
                                KOTLIN
                            </label>
                        
                            <label htmlFor="flutterBtn">
                                <input type="checkbox" id="flutterBtn" name="flutterBtn" value="flutterBtn" />
                                FLUTTER
                            </label>
                            
                    </td>
                    <td>
                        {/* todo ADD A YEAR DROP DOWN LIST 
                            
                         */}    
                                                    
                            <label htmlFor="2022">
                                <input type="checkbox" id="YEAR" name="2022" value="2021" />
                                2022
                            </label>
                                                    
                            <label htmlFor="2021">
                                <input type="checkbox" id="YEAR" name="2021" value="2021" />
                                2021
                            </label>
                                                    
                            <label htmlFor="2020">
                                <input type="checkbox" id="YEAR" name="2022" value="2020" />
                                2020
                            </label>
                                                    
                            <label htmlFor="2019">
                                <input type="checkbox" id="YEAR" name="2019" value="2019" />
                                2019
                            </label>
                                                    
                            <label htmlFor="2018">
                                <input type="checkbox" id="YEAR" name="2018" value="2018" />
                                2018
                            </label>
                                                    
                            <label htmlFor="2022">
                                <input type="checkbox" id="YEAR" name="2022" value="2022S" />
                                2022
                            </label>
                    </td>
                </tr>

                </table>

            </div>
        );
    }
}
export default GallerySearch;

