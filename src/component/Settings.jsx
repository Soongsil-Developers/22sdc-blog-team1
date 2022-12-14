import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getLoginUser } from '../remote'
import { useRecoilState,useSetRecoilState } from 'recoil'
import { authState, userState, profileState } from '../atoms/auth'
import { useRecoilValue } from 'recoil'
import { putLoginUser } from '../remote'

const Settings = () => {

    let navigate = useNavigate()
    
    
    const [user,setUser]= useRecoilState(userState)
    const setAuth = useSetRecoilState(authState)
    const [profile,setProfile] = useRecoilState(profileState)

    const [username1,setUsername]=useState(user.username)
    const [useremail,setUserEmail] = useState(user.email)
    const [biotext,setBiotext] = useState(user.bio)
    


    const logOut = () =>{
        localStorage.removeItem('token')
        setAuth(false)
        navigate("/")
    }
     

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(user)
        // setUser({...user,username:username1})
        // console.log(user)

        putLoginUser({...user,username:username1,email:useremail,bio:biotext})
        .then(res=>{
            setUser(res.data.user)
            setProfile(res.data.user)
            navigate("/a")
        }
        ).catch(err=>
            console.log(err)
        )
    }


  return (
    <div className="settings-page">
    <div className="container page">
        <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Your Settings</h1>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <fieldset>
                        <fieldset className="form-group">
                            <input className="form-control" type="text" placeholder="URL of profile picture" />
                        </fieldset>
                        <fieldset className="form-group">
                            <input className="form-control form-control-lg" type="text" placeholder="User Name" value={username1} onChange={(e)=>setUsername(e.currentTarget.value)} />
                        </fieldset>
                        <fieldset className="form-group">
                            <textarea className="form-control form-control-lg" rows="8"
                                      placeholder="Short bio about you" value={biotext} onChange={(e)=>setBiotext(e.currentTarget.value)}></textarea>
                        </fieldset>
                        <fieldset className="form-group">
                            <input className="form-control form-control-lg" type="email" placeholder="Email" value={useremail} onChange={(e)=>setUserEmail(e.currentTarget.value)}/>
                        </fieldset>
                        <fieldset className="form-group">
                            <input className="form-control form-control-lg" type="password" placeholder="Password"/>
                        </fieldset>
                        <button className="btn btn-lg btn-primary pull-xs-right" type='submit'>
                            Update Settings
                        </button>
                    </fieldset>
                    <button className="btn btn-outline-danger" ng-click="$ctrl.logout()" onClick={logOut}>
                        Or click here to logout.
                    </button>
                </form>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Settings