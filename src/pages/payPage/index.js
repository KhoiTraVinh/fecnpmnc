import React,{useState} from 'react'
import CheckOut from '../../components/checkoutstep';
import Topbar from '../../components/Topbar/Topbar';

export const PayPage = (props) => {
    const [PhuongThucThanhToan, setPhuongThucThanhToan] = useState('PayPal')
    const ThanhToanne = (e) => {
        e.preventDefault();
        props.history.push('/donhang');
    }
    return (
        <div>
            <Topbar/>
            <CheckOut step1 step2 step3></CheckOut>
            <form className="form" onSubmit={ThanhToanne}>
                <div>
                    <h1>Phuong Thuc Thanh Toan</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required checked onChange={(e) => setPhuongThucThanhToan(e.target.value)}/>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                    <div>
                        <input type="radio" id="stripe" value="Stripe" name="paymentMethod" required onChange={(e) => setPhuongThucThanhToan(e.target.value)}/>
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">Tiep Tuc</button>
                </div>
            </form>
        </div>
    )
}