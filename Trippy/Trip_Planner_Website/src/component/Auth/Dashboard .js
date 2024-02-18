import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AuthPage.css"
const Dashboard = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3002/auth/verify')
        .then(res=> {
            if(res.data.status) {

            } else {
                navigate('/')
            }
            console.log(res)
        })
    }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard