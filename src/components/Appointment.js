import { Fragment } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Appointment() {

    const showAppointments = () =>  { 
        let timeArrays= ['10:30', '11:00', '11:30', '12:00', '12:30']; 
        return timeArrays.map(appointment => {
            return <div className="timeslot rounded-full" >{appointment}</div>
            })
    };

    const chooseMonth = () => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let currentMonth = new Date().getMonth();
            return( 
                <Fragment>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                         {months[currentMonth]} 
                    <FontAwesomeIcon icon={faArrowRight}/>
                </Fragment> 
            )
     };

    return(  
    <div className="flex popup"> 
        <div className="month">
            {chooseMonth()}
        </div>
        <div className="appointmentslots">
            {showAppointments()}
        </div>
    
    </div>
    )

}