import React from 'react'
import loading from '../Assets/Images/spinner-flame.gif'

const Spinner = () => {
          return (
            <div className="text-center" style={{marginTop: "12em"}}>
                <img src={loading} alt="loading"/>
            </div>
        )
    }
export default Spinner