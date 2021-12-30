import React from 'react';

class Form extends React.Component{
    render() {
        return (
            <Form className="contactForm">
                        
<<<<<<< HEAD
                <div className="namebox">
                    <label htmlFor="potentialClientFname">
                        First Name<span>*</span>
                    </label>
                    <input type="text" className="potentialClientFnameplaceholder" placeholder="Joe"/>
                
                    <label htmlFor="potentialClientLname">
                        Last Name<span>*</span>
                    </label>
                    <input type="text"className="potentialClientLnameplaceholder" placeholder="Client" />
                </div>
=======
                        <div className="namebox">
                            <label htmlFor="potentialClientFname">
                                First Name<span>*</span>
                            </label>
                            <input type="text" className="potentialClientFname" placeholder="Joe"/>
                        
                            <label htmlFor="potentialClientLname">
                                Last Name<span>*</span>
                            </label>
                            <input type="text"  className="potentialClientLname" placeholder="Client" />
                        </div>
>>>>>>> navRouter

                        
                        <label htmlFor="potentialClientEmail">
                            Email<span>*</span>
                        </label>
                        <input type="email" className="potentialClientEmail" placeholder="asldkfj@gopro.com" />
                        
                        <label htmlFor="potentialClientPhone">
                            Phone
                        </label>
                        <input type="tel" className="potentialClientPhone" placeholder="(000-000-0000)" />
                        
                        <label htmlFor="potentialClientEmail">
                            Message Type<span>*</span>
                        </label>

                        <select>
                            <option>New Project</option>
                            <option>Update Site</option>
                            <option>Web Site Design</option>
                            <option>App Design</option>
                            <option>Other</option>
                        </select>
                        
                        <label htmlFor="NewClientMessage">
                            Message <span>*</span>
                        </label>
                        <textarea className="NewClientMessage" placeholder="Tell me about your problems and I will send you my ideas of solutions"></textarea>

                        <button>Send</button>
                        
        </Form>

        );
    }
}
export default Form;