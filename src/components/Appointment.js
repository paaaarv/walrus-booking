import { Fragment } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Appointment() {

    const showAppointments = () =>  { 
        let timeArrays= ['10:30', '11:00', '11:30', '12:00', '12:30']; 
        return timeArrays.map(appointment => {
            return <div className="border-2 p-2 border-slate-800 rounded-full" >{appointment}</div>
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
    <Fragment className="flex"> 
        {chooseMonth()}
        {showAppointments()}
    
    </Fragment>
    )

}