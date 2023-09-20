import React from 'react'
// import './Footer.css'
import './Components.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'

function Footer() {
    return (
        <div>
            <footer className='ft'>
            
            <AiFillFacebook className='ic1'/> 
            <AiFillTwitterSquare className='ic2'/> 
            <AiFillInstagram className='ic3'/> 
          <AiFillYoutube className='ic4'/>
            

         
            </footer>            
        </div>
    )
}

export default Footer




// footer {
 
//     position: relative;
//     min-height: 25px;
//     background-color:rgb(62, 231, 56);
//     align-items: center;
//     width: 100%;
//     margin: 0px;
//     margin-top: 60px;
// }
// .ic1{
//     height: 5%;
//     width: 4%;
//     color: rgba(45, 2, 124, 0.77);
// }
// .ic2{
//     height: 5%;
//     width: 4%;
//     color: rgb(0, 81, 157);
// }
// .ic3{
//     height: 5%;
//     width: 4%;
//     color: rgb(154, 68, 148);
// }
// .ic4{
//     height: 6%;
//     width: 4%;
//     color: rgb(218, 31, 31);
// }
// .ft{
//     display: flex;
//     flex: 1 0 1;
//     gap: 20px;
//     justify-content: center;
// }

// .erm{
//     text-align: center;
// font-size: 8em;
// font-weight: bold;
// color: rgb(179, 179, 179);
// }
// .ep{
//     font-size: 0.3em;
//     color: rgba(31, 88, 233, 0.928);
// }