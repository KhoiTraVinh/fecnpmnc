import React,{useEffect,useState} from 'react';
import CheckOut from '../components/CheckOut';


export default function DonHang(props) {
    const TraTienne=() => {
        dispatch(TaoDonHang({ ...giohang, ChiTietDonHang: giohang.ChiTietDonHang}))
    }
    return (
        <div>
            <CheckOut step1 step2 step3 step4></CheckOut>
            <div>
                KhoiDepTrai
            </div>
        </div>
    )
}