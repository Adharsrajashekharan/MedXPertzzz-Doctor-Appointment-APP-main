import React, { useEffect } from 'react'
import axiosConfig from '../../axiosConfig'
import LayoutAdmin from './LayoutAdmin'

function AdminViewDoctors() {


  useEffect(()=>{

       viewAllDoctorsApi()
  })


  const viewAllDoctorsApi=async()=>{

    try {
     

      const { data } = await axiosConfig.get(
        '/api/admin/viewAllDoctors',{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );

      console.log("xc", data);

    //

  }

  catch(err){

    console.log("errr",err)
  }


  return (


    <div>
  
        <LayoutAdmin>





        </LayoutAdmin>
    




    </div>
  )
}
}

export default AdminViewDoctors