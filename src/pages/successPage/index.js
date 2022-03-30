import React,{useEffect,useState} from 'react';
import CheckOut from '../../components/checkoutstep';
import Topbar from '../../components/Topbar/Topbar';


export default function Success(props) {
    const TraTienne=() => {
    }
    return (
        <div>
            <Topbar/>
            <CheckOut step1 step2 step3 step4></CheckOut>
            <div>
                KhoiDepTrai
            </div>
        </div>
    )
}