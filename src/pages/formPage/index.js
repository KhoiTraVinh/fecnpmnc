import React,{useState} from 'react'
import CheckOut from '../../components/checkoutstep';
import {useDispatch, useSelector} from 'react-redux';
import './index.css';
import Topbar from '../../components/Topbar/Topbar';

export default function Form(props) {
    const [hoten, setHoten] = useState("")
    const [diachi, setDiachi] = useState("")
    const [phuong, setPhuong] = useState("")
    const [quan, setQuan] = useState("")
    const [sodienthoai, setSodienthoai] = useState("")
    const dispatch = useDispatch();
    const GiaoHangne = (e) => {
        e.preventDefault();
        props.history.push('/thanhtoan')
    }
    return (
        <div>
            <Topbar/>
            <CheckOut step1 step2></CheckOut>
            <form className="form" onSubmit={GiaoHangne}>
                <div>
                    <h1>Thong Tin Giao Hang</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Ho Ten</label>
                    <input type="text" id="fullName" placeholder="Nhap Ho Ten" value={hoten} onChange={(e) => setHoten(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="diachi">Dia Chi</label>
                    <input type="text" id="diachi" placeholder="Nhap Dia Chi" value={diachi} onChange={(e) => setDiachi(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="phuong">Phuong</label>
                    <input type="text" id="phuong" placeholder="Nhap Phuong" value={phuong} onChange={(e) => setPhuong(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="quan">Quan</label>
                    <input type="text" id="quan" placeholder="Nhap Quan" value={quan} onChange={(e) => setQuan(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="sodienthoai">So Dien Thoai</label>
                    <input type="text" id="sodienthoai" placeholder="Nhap So Dien Thoai" value={sodienthoai} onChange={(e) => setSodienthoai(e.target.value)} required/>
                </div>
                 <div>
                    <label/>
                    <button className="primary" type="submit">Tiep Tuc</button>
                </div>
            </form>
        </div>
    )
}