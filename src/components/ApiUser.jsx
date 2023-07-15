import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import User from '../components/User'
import { useState } from 'react';
const UserLoad = Loading(User);
const ApiUser = (props) => {
  console.log("girildi");
    const [load, setLoad] = useState({loading:true,userData:""});
    const [ApiUserInfo,setApiUserInfo] = useState("");
    const [a,setA]=useState(false);
    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(
            data => {
              
                setLoad({loading:false,userData:data.results[0]})
                setApiUserInfo({top:"name",bottom:data.results[0].name.first + " " +data.results[0].name.last})
               
            })
        .catch(err => console.error(err));
    }, [a])
   

  return (
    <UserLoad isLoading={load.loading}
    userData={load.userData}
    setLoad={setLoad}
    a={a}
    setA={setA}
    ApiUserInfo={ApiUserInfo}
    setApiUserInfo={setApiUserInfo}
    />
  )
}

export default ApiUser