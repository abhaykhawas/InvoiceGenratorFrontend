import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../Components/Dashboard/Navbar';
import './Styles/dashboard.css'
import SideNav from '../Components/Dashboard/SideNav';

function Dashboard() {
    const [switchInvoice, setSwitchInvoice] = useState(1)
    const [numberItems, setNumberItems] = useState(0)
    const [items, setItems] = useState([])
    const [item, setItem] = useState('')
    const [qty, setQty] = useState('')
    const [price, setPrice] = useState('')
    const [grandTotal, setGrandTotal] = useState(0)
    const [invoices, setInvoices] = useState([])
    const [allItems, setAllItems] = useState([])
    const [customerName, setCustomerName] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [customerMobile, setCustomerMobile] = useState('')

    useEffect(() => {
        try{
            console.log("Check0")
            const fetchData = async () => {
                try{
                    let response = await axios.get('http://localhost:4000/api/v1/check-login', {withCredentials: true})
                    console.log(response.status)
                    if (response.status != 200){
                        console.log("CHECK1")
                        window.location.href = '/login'
                    }
                    else{
                        let invoices_arr = await axios.get('http://localhost:4000/api/v1/get-all-invoice-id', {withCredentials: true})
                        setInvoices(invoices_arr.data.Invoices)
                    }
                }
                catch(error){
                    console.log("CHECK3")
                    window.location.href = '/login'
                }
            }
            fetchData()
            
        }
        catch(error) {
            console.log("CHECK2")
            window.location.href = '/login'
        }
        
        },[])
    
    function handleAddingItems(){
        setItems([[item, qty, price], ...items])
        setGrandTotal(grandTotal + (qty*price))
        setAllItems([...allItems, {
            "name": item, 
            "price": price, 
            "qty": qty
        }])
        setItem("")
        setQty("")
        setPrice("")
    }

    async function getInvoice(invoiceId){
        const invoiceURI = await axios.post('http://localhost:4000/api/v1/get-pdf-invoice', {invoiceId}, {withCredentials: true})
        console.log(invoiceURI.data.invoiceURI)
        window.open(invoiceURI.data.invoiceURI, '_blank');
    }

    async function handleSubmit(){
        const data = {
            "customerName" : customerName,
            "customerAddress" : customerAddress,
            "customerMobile" : customerMobile,
            "items": allItems
        }
        const invoiceGenerated = await axios.post('http://localhost:4000/api/v1/generate-invoice', data, {withCredentials: true})
        console.log(invoiceGenerated.status)
        if (invoiceGenerated.status == 200){
            setItems([])
            setCustomerName('')
            setCustomerAddress('')
            setCustomerMobile('')
            setGrandTotal('')
            let invoices_arr = await axios.get('http://localhost:4000/api/v1/get-all-invoice-id', {withCredentials: true})
            setInvoices(invoices_arr.data.Invoices)
        }
        else{
            console.log("Something went wrong")
        }
    }
    return (
        <div className='dashboardContainer'>
            <Navbar/>
            <div className="generate-invoice-container">
                <SideNav active="generate-inv"/>
                <div className="part-two-generate-invoice-container">
                    {switchInvoice == 1 ? <div className='gen-inv-container'>
                        <div>
                            <label htmlFor="">Customer Name : </label>
                            <input type="text" name='' onChange={(e) => setCustomerName(e.target.value)} value={customerName}/>
                        </div>
                        <div>
                            <label htmlFor="">Customer Address : </label>
                            <textarea name="" id="" cols="30" rows="5" onChange={(e) => setCustomerAddress(e.target.value)} value={customerAddress}></textarea>
                        </div>
                        <div>
                            <label htmlFor="">Customer mobile number : </label>
                            <input type="text" name='' onChange={(e) => setCustomerMobile(e.target.value)} value={customerMobile}/>
                        </div>
                        
                        <label htmlFor="">Items</label>
                        <div key={numberItems} className="add-each-item">
                            <input type="text" placeholder='Item...' onChange={(e) => setItem(e.target.value)} value={item}/>
                            <input type="text" placeholder='Qty...' onChange={(e) => setQty(e.target.value)} value={qty}/>
                            <input type="text" placeholder='Price...' onChange={(e) => setPrice(e.target.value)} value={price}/>
                            <button className='adding-items' onClick={handleAddingItems}>ADD Items</button>
                        </div>                    
                        
                        <input type="submit" value="Submit" onClick={handleSubmit}/>

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
                        <ul>
                            <li># Invoice ID</li>
                            {
                                invoices.map((e,i) => (
                                    <li>
                                        {i} <span onClick={() => getInvoice(e)}>{e}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard