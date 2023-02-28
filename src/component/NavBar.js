import React from 'react'
import { useNavigate } from 'react-router-dom'



const NavBar = () => {
    const menuList =["Air freight","Sea freight","Quarantine","Maybe more","About us"]
    const navigate = useNavigate("");

    const goToHome = ()=>{
        console.log("click")
        navigate("/")
    }
    const goToThePage=(item)=>{
        if(item=="Air freight")
        {
            navigate("/airfreight")
        }
        else if(item=="Sea freight")
        {
            navigate("/seafreight")
        }
        else if(item=="Maybe more")
        {
            navigate("/maybemore")
        }
        else if(item=="About us")
        {
            navigate("/aboutus")
        }
        else if (item=="Quarantine")
        {
            navigate("/quarantine")
        }
    }
    return (
        <div>

            <div className='logo-area mt-3' onClick={goToHome}>
                <img width={150} src='/images/purplecolor.jpg' />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((item) =>
                        <li onClick={()=>goToThePage(item)}>{item}</li>
                    )}
                </ul>
            </div>


        </div>
    )
}

export default NavBar
