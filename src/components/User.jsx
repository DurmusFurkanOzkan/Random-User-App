import { Button } from 'react-bootstrap';
import React, { useState, memo} from 'react'
import {Row,Col,Table} from "react-bootstrap";
const User = memo((props) => {
    const {userData,ApiUserInfo} = props;
    const [addUser, setaddUser] = useState([]);
    const [info,setInfo] = useState(ApiUserInfo);
    
    const viewInfo = (e) =>{
        if(e.target.alt=="name"){
            setInfo({top:e.target.alt,bottom:userData.name.first + " " +userData.name.last})
        }else if(e.target.alt=="mail"){
            setInfo({top:e.target.alt,bottom:userData.email})
        }else if(e.target.alt=="age"){
            setInfo({top:e.target.alt,bottom:userData.dob.age})
        }else if(e.target.alt=="map"){
            setInfo({top:e.target.alt,bottom:userData.location.street.name})
        }else if(e.target.alt=="tel"){
            setInfo({top:e.target.alt,bottom:userData.phone})
        }else if(e.target.alt=="password"){
            setInfo({top:e.target.alt,bottom:userData.login.password})
        }
        
    }

    
    const newUser = () =>{
        const {setLoad,setA,a}=props;
        setLoad({loading:true,userData:""})
        setA(!a);
    }

    const addUserBtn = () =>{
       

        if(addUser.filter(user => user.id == userData.id.value).length){
            alert("This User already registered");
        }else{
            setaddUser([...addUser,{id:userData.id.value, firstname:userData.name.first + " " +userData.name.last,email:userData.email,phone:userData.phone,age:userData.dob.age}]);
        }
        
    }

  return (<>
    <div className='userInfo'>
        <div className='topDiv'>
        </div>
        <div className='bottomDiv'>
        </div>
        <img src={userData?.picture?.large} className='mt-3 rounded-circle img-thumbnail' alt="" />
        <div className='mt-3'>
        <p>My {info?.top} is</p>
        <h5>{info?.bottom}</h5>
        </div>
        <Row className='mt-5'>
            <Col >
                <img  role="button" className='rounded-circle img-thumbnail cursor-pointer' src={userData?.gender == "female" ? "./assets/woman.svg":"./assets/man.svg" } alt="name" onMouseOver={viewInfo} width={"45px"} height={"45px"} />
            </Col>
            <Col >
                <img  role="button" className='rounded-circle img-thumbnail' src={"./assets/mail.svg"} alt="mail" onMouseOver={viewInfo} width={"45px"} height={"45px"}/>
            </Col>
            <Col >
                <img  role="button" className='rounded-circle img-thumbnail' src={userData?.gender == "female" ? "./assets/growing-up-woman.svg":"./assets/growing-up-man.svg" } alt="age" onMouseOver={viewInfo} width={"45px"} height={"45px"}/>
            </Col>
            <Col >
                <img  role="button" className='rounded-circle img-thumbnail' src={"./assets/map.svg"} alt="map" onMouseOver={viewInfo} width={"45px"} height={"45px"}/>
            </Col>
            <Col >
                <img  role="button" className='rounded-circle img-thumbnail'src={"./assets/phone.svg"} alt="tel" onMouseOver={viewInfo} width={"45px"} height={"45px"}/>
            </Col>
            <Col >
                <img  role="button"  className='rounded-circle img-thumbnail' src={"./assets/padlock.svg"} alt="password" onMouseOver={viewInfo} width={"45px"} height={"45px"}/>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <Button className="buttons" onClick={newUser}>
                    NEW USER
                </Button>
            </Col>
            <Col>
                <Button className="buttons" onClick={addUserBtn}>
                    ADD USER 
                </Button>
            </Col>
        </Row>
        <Table striped bordered hover className='w-100 mt-2'>
        <thead>
          <tr>
            <th className='w-25 tableh'>First Name</th>
            <th className='tableh'>Email</th>
            <th className='tableh'>Phone</th>
            <th className='tableh'>Age</th>
          </tr>
        </thead>
        <tbody>
            {
                addUser.map((user) =>{
                    return (
                        <tr>
                            <td className='tabledata'>{user.firstname}</td>
                            <td className='tabledata'>{user.email}</td>
                            <td className='tabledata'>{user.phone}</td>
                            <td className='tabledata'>{user.age}</td>
                        </tr>
                        )
                })
            }
        </tbody>
      </Table>
        </div>
   
    </>
    
    
  )
});

export default User;