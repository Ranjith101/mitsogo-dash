import React from 'react'
// import pro1 from '../Assets/profile-pic-01'
function Users() {
    const persons = [
        {
            name:"Drew James",
            Country:"USA",
            src: '',
            num: 8715674877             
        },
        {
            name:"Drew James",
            Country:"USA",
            src:'',
            num: 8715674877             
        },
        {
            name:"Drew James",
            Country:"USA",
            src:'',
            num: 8715674877             
        },
    ]
    console.log(persons)
  return (
    <div>
        {persons.map((p,index)=>{
            return (
                <>
                <span key={index}><img src="" alt="pic"/> {p.name} <br /> {p.Country}</span>
                <span key={index} style={{float:"right"}}>{p.num}</span>
                </>
            
            )
        })}
    </div>
  )
}

export default Users