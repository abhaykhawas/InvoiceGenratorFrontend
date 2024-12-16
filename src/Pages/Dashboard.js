import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../Components/Dashboard/Navbar';
import './Styles/dashboard.css'

function Dashboard() {
    const [switchInvoice, setSwitchInvoice] = useState(1)
    const [numberItems, setNumberItems] = useState(0)
    const [items, setItems] = useState([])
    const [item, setItem] = useState('')
    const [qty, setQty] = useState('')
    const [price, setPrice] = useState('')
    const [grandTotal, setGrandTotal] = useState(0)
    useEffect(() => {
        try{
            const fetchData = async () => {
                let response = await axios.get('http://localhost:4000/api/v1/check-login', {withCredentials: true})
                console.log(response.status)
                if (response.status != 200){
                    window.location.href = '/login'
                }
            }
            fetchData()
            
        }
        catch(error) {
            window.location.href = '/login'
        }
        
        },[])
    
    function handleAddingItems(){
        setItems([[item, qty, price], ...items])
        setGrandTotal(grandTotal + (qty*price))
        setItem("")
        setQty("")
        setPrice("")
    }
    return (
        <div className='dashboardContainer'>
            <Navbar/>
            <div className="generate-invoice-container">
                <div className="part-one-generate-invoice-container">
                    <ul>
                        <li className='active-mode-invoice'>Generate Invoice</li>
                        <li>Past Invoices</li>
                    </ul>
                </div>
                <div className="part-two-generate-invoice-container">
                    {switchInvoice == 1 ? <div className='gen-inv-container'>
                        <div>
                            <label htmlFor="">Customer Name : </label>
                            <input type="text" name=''/>
                        </div>
                        <div>
                            <label htmlFor="">Customer Address : </label>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <div>
                            <label htmlFor="">Customer mobile number : </label>
                            <input type="text" name=''/>
                        </div>
                        
                        <label htmlFor="">Items</label>
                        <div key={numberItems} className="add-each-item">
                            <input type="text" placeholder='Item...' onChange={(e) => setItem(e.target.value)} value={item}/>
                            <input type="text" placeholder='Qty...' onChange={(e) => setQty(e.target.value)} value={qty}/>
                            <input type="text" placeholder='Price...' onChange={(e) => setPrice(e.target.value)} value={price}/>
                            <button className='adding-items' onClick={handleAddingItems}>ADD Items</button>
                        </div>                    
                        
                        <input type="submit" value="Submit"/>

                    </div>: <div></div>}
                </div>
                <div className="part-three-generate-invoice-container">
                    <table className='item-lists-head'>
                    <thead>
                                    <th>ITEMS</th>
                                    <th>QTY</th>
                                    <th>PRICE</th>
                                    <th>Total</th>
                                    <th></th>
                                </thead>
                    </table>
                    <div className="product-table-container">
                        <table className="items-lists">
                                
                                <tbody>
                                    {
                                        // console.log(items)
                                        items.map((e,i) => (
                                            <tr id={"item_"+i}>
                                                <td><h3>{e[0]}</h3></td>
                                                <td>{e[1]}</td>
                                                <td>{e[2]}</td>
                                                <td>{e[1]*e[2]}</td>
                                                <span onClick={() => setItems(items.slice(0, i).concat(items.slice(i + 1)))} className="bin-generate-inv">🗑️</span>
                                            </tr>
                                        ))

                                    }
                                    
                                </tbody>
                                
                            </table>    
                    </div>
                    
                    <table className="items-list-foot">
                        <tfoot>
                            <tr className='grand-total-container'>
                                <td></td>
                                <td></td>
                                <td>Grand Total</td>
                                <td>{grandTotal}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="current-url-generate-container">
                        <h2>Invoice URL</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard