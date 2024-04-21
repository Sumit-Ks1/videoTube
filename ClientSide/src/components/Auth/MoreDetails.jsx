import AvatarCard from "./AvatarCard";
import "./Auth.css"
import mySvg from '../../assets/avatars/avatar2.svg'
import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AvatarBackCard from "./AvatarBackCard";
// import { useHistory } from "react-router-dom";
import React from 'react';
import { useNavigate } from 'react-router-dom'


function MoreDetails() {

    const list = [1, 2, 3, 4];
    const backlist = [2, 3, 4, 5];

    const navigate = useNavigate(true);

    // const history = useHistory();


    const [avatar, setAvatar] = useState('default')
    const [back, setBack] = useState('1');
    function selectedAvatar(selected) {
        // console.log(selected)
        setAvatar(String(selected))

    }
    function selectedBack(selected) {
        setBack(String(selected))
    }

    function selectedOnClick() {
        // history.push('/');
        navigate('/')

    }
    return (
        <>
            <div className="moreDetailsParent bg-dark text-light">
                <div className="selected container d-flex justify-content-start mb-5 ">
                    <div className="card selected-avatar"
                    // style={{ width: "12rem" }}
                    >

                        <img src={"src/assets/avatars/avatar" + avatar + ".svg"} className="" alt="avatar image" />

                    </div>
                    <button className="btn bg-success select-btn " onClick={selectedOnClick}>
                        Select
                    </button>
                    <div className="selected-back col-8">
                        <img src={"src/assets/avatar-back/avatar-back" + back + ".jpg"} alt="" />

                    </div>

                </ div>

                <h1>Choose your avatar : </h1>

                <div className="row row-cols-4 row-cols-md-6 g-4 d-flex justify-content-center">

                    {/* <AvatarCard /> */}
                    {list.map((i) => {
                        console.log(i)
                        return (<AvatarCard key={i} id={i} onSelect={selectedAvatar} />)
                    })}

                </div>

                <h1 className="mt-5">Choose background : </h1>
                <div className="avatar-backs row row-cols-1 row-cols-md-2 g-4 mx-3">

                    {backlist.map((back) => {
                        console.log("Hello it works")
                        return (<AvatarBackCard key={back} id={back} onSelect={selectedBack} />)
                    })}

                </div>
                <br />
                <br />
            </div>
        </>
    )
}

export default MoreDetails;