import React from 'react'

const Hall = ({color,time}) => {
    
     
    return (
        <div style={{background:`#${color}`,width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}} className="doniasal">
              {time}
        </div>
    )
}
export default Hall
