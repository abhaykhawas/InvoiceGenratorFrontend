import React, { useRef, useState, useEffect } from 'react'
import Navbar from '../Components/Dashboard/Navbar';
import SideNav from '../Components/Dashboard/SideNav';
import './Styles/PastInvoices.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios';

// const data = [
//     {
//       key: '1',
//       sno: '1',
//       name: 'John Brown',
//       date: '12/12/2024',
//       purid: 32,
//       price: 300,
//     },
//     {
//       key: '2',
//       sno: '2',
//       name: 'Joe Black',
//       date: '13/12/2024',
//       purid: 33,
//       price: 450,
//     },
//     {
//       key: '3',
//       sno: '3',
//       name: 'Jim Green',
//       date: '14/12/2024',
//       purid: 34,
//       price: 500,
//     },
//     {
//       key: '4',
//       sno: '4',
//       name: 'Jim Red',
//       date: '15/12/2024',
//       purid: 35,
//       price: 150,
//     },
//     {
//       key: '5',
//       sno: '5',
//       name: 'Sarah White',
//       date: '16/12/2024',
//       purid: 36,
//       price: 700,
//     },
//     {
//       key: '6',
//       sno: '6',
//       name: 'Michael Brown',
//       date: '17/12/2024',
//       purid: 37,
//       price: 250,
//     },
//     {
//       key: '7',
//       sno: '7',
//       name: 'Chris Black',
//       date: '18/12/2024',
//       purid: 38,
//       price: 400,
//     },
//     {
//       key: '8',
//       sno: '8',
//       name: 'Emily Green',
//       date: '19/12/2024',
//       purid: 39,
//       price: 550,
//     },
//     {
//       key: '9',
//       sno: '9',
//       name: 'David Smith',
//       date: '20/12/2024',
//       purid: 40,
//       price: 320,
//     },
//     {
//       key: '10',
//       sno: '10',
//       name: 'Sophia Harris',
//       date: '21/12/2024',
//       purid: 41,
//       price: 220,
//     },
//     {
//       key: '11',
//       sno: '11',
//       name: 'Liam Walker',
//       date: '22/12/2024',
//       purid: 42,
//       price: 480,
//     },
//     {
//       key: '12',
//       sno: '12',
//       name: 'Olivia Turner',
//       date: '23/12/2024',
//       purid: 43,
//       price: 380,
//     },
//     {
//       key: '13',
//       sno: '13',
//       name: 'Daniel Lee',
//       date: '24/12/2024',
//       purid: 44,
//       price: 600,
//     },
//     {
//       key: '14',
//       sno: '14',
//       name: 'Grace Adams',
//       date: '25/12/2024',
//       purid: 45,
//       price: 410,
//     },
//     {
//       key: '15',
//       sno: '15',
//       name: 'Lucas Young',
//       date: '26/12/2024',
//       purid: 46,
//       price: 720,
//     },
//     {
//       key: '16',
//       sno: '16',
//       name: 'Eva Walker',
//       date: '27/12/2024',
//       purid: 47,
//       price: 620,
//     },
//     {
//       key: '17',
//       sno: '17',
//       name: 'Aiden Scott',
//       date: '28/12/2024',
//       purid: 48,
//       price: 330,
//     },
//     {
//       key: '18',
//       sno: '18',
//       name: 'Mia Mitchell',
//       date: '29/12/2024',
//       purid: 49,
//       price: 490,
//     },
//     {
//       key: '19',
//       sno: '19',
//       name: 'James Taylor',
//       date: '30/12/2024',
//       purid: 50,
//       price: 550,
//     },
//     {
//       key: '20',
//       sno: '20',
//       name: 'Charlotte King',
//       date: '31/12/2024',
//       purid: 51,
//       price: 200,
//     },
//     {
//       key: '21',
//       sno: '21',
//       name: 'Ethan Wright',
//       date: '01/01/2025',
//       purid: 52,
//       price: 750,
//     },
//     {
//       key: '22',
//       sno: '22',
//       name: 'Abigail Scott',
//       date: '02/01/2025',
//       purid: 53,
//       price: 420,
//     },
//     {
//       key: '23',
//       sno: '23',
//       name: 'Mason Clark',
//       date: '03/01/2025',
//       purid: 54,
//       price: 500,
//     },
//     {
//       key: '24',
//       sno: '24',
//       name: 'Amelia Lewis',
//       date: '04/01/2025',
//       purid: 55,
//       price: 370,
//     },
//     {
//       key: '25',
//       sno: '25',
//       name: 'Isabella Martinez',
//       date: '05/01/2025',
//       purid: 56,
//       price: 600,
//     },
//     {
//       key: '26',
//       sno: '26',
//       name: 'Benjamin Harris',
//       date: '06/01/2025',
//       purid: 57,
//       price: 320,
//     },
//     {
//       key: '27',
//       sno: '27',
//       name: 'Lily Allen',
//       date: '07/01/2025',
//       purid: 58,
//       price: 390,
//     },
//     {
//       key: '28',
//       sno: '28',
//       name: 'Jack Wilson',
//       date: '08/01/2025',
//       purid: 59,
//       price: 650,
//     },
//     {
//       key: '29',
//       sno: '29',
//       name: 'Grace Hall',
//       date: '09/01/2025',
//       purid: 60,
//       price: 280,
//     },
//     {
//       key: '30',
//       sno: '30',
//       name: 'Elijah King',
//       date: '10/01/2025',
//       purid: 61,
//       price: 540,
//     },
//   ];
    
function PastInvoices() {
    const [invoiceId, setInvoiceId] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [date, setDate] = useState('')
    const [tableData, setTableData] = useState([])
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [pdf, setPdf] = useState('')
    const searchInput = useRef(null);

    useEffect(() => {
        try{
            const fetchData = async () => {
                try{
                    let response = await axios.get('http://localhost:4000/api/v1/check-login', {withCredentials: true})
                    console.log(response.status)
                    if (response.status != 200){
                        console.log("CHECK1")
                        window.location.href = '/login'
                    }
                    else{
                        let invoices_arr = await axios.post('http://localhost:4000/api/v1/get-given-date', {"duration": 30}, {withCredentials: true})
                        setTableData(invoices_arr.data.superFilterInvoices)
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
    }, [])

    const handleFilter = async () => {
        console.log(customerName, invoiceId, date)
        const filtertedData = await axios.post('http://localhost:4000/api/v1/get-invoice-info', 
        {
            "invoiceId" : invoiceId, 
            "customerName" : customerName, 
            "dateOfPurchase" :  date == '' ? "" : date.split('-')[2]+'/'+date.split('-')[1]+'/'+date.split('-')[0]
        }, 
        {
            withCredentials: true
        })
        setTableData(filtertedData.data.superFilterInvoices)
        setInvoiceId("")
        setCustomerName("")
        setDate("")
    }

    const handleResetFilter = async (req, res) => {
        setInvoiceId("")
        setCustomerName("")
        setDate("")
        let invoices_arr = await axios.post('http://localhost:4000/api/v1/get-given-date', {"duration": 30}, {withCredentials: true})
        setTableData(invoices_arr.data.superFilterInvoices)
    }

    const handleViewClick = async (key) => {
        // console.log(key);
        const invoiceURI = await axios.post('http://localhost:4000/api/v1/get-pdf-invoice', {"invoiceId":key}, {withCredentials: true})
        console.log(invoiceURI.data.invoiceURI)
        setPdf(invoiceURI.data.invoiceURI)
    };
    const handlePeriordChange = async (value) => {
        if (value === '30d'){
            let invoices_arr = await axios.post('http://localhost:4000/api/v1/get-given-date', {"duration": 30}, {withCredentials: true})
            setTableData(invoices_arr.data.superFilterInvoices)
        }
        else if (value === '6m'){
            let invoices_arr = await axios.post('http://localhost:4000/api/v1/get-given-date', {"duration": 30*6}, {withCredentials: true})
            setTableData(invoices_arr.data.superFilterInvoices)
        }
        else if (value === '1y'){
            let invoices_arr = await axios.post('http://localhost:4000/api/v1/get-given-date', {"duration": 30*12}, {withCredentials: true})
            setTableData(invoices_arr.data.superFilterInvoices)
        }
        else if (value === '5y'){
            let invoices_arr = await axios.post('http://localhost:4000/api/v1/get-given-date', {"duration": 30*12*5}, {withCredentials: true})
            setTableData(invoices_arr.data.superFilterInvoices)
        }
    };
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
        style={{
            padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
        >
        <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
            marginBottom: 8,
            display: 'block',
            }}
        />
        <Space>
            <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
                width: 90,
            }}
            >
            Search
            </Button>
            <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
                width: 90,
            }}
            >
            Reset
            </Button>
            <Button
            type="link"
            size="small"
            onClick={() => {
                confirm({
                closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
            }}
            >
            Filter
            </Button>
            <Button
            type="link"
            size="small"
            onClick={() => {
                close();
            }}
            >
            close
            </Button>
        </Space>
        </div>
    ),
    filterIcon: (filtered) => (
        <SearchOutlined
        style={{
            color: filtered ? '#1677ff' : undefined,
        }}
        />
    ),
    onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filterDropdownProps: {
        onOpenChange(open) {
        if (open) {
            setTimeout(() => searchInput.current?.select(), 100);
        }
        },
    },
    render: (text) =>
        searchedColumn === dataIndex ? (
        <Highlighter
            highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
        />
        ) : (
        text
        ),
    });
    const columns = [
    {
        title: 'Serial No.',
        dataIndex: 'sno',
        key: 'sno',
        width: '16.5%',
        ...getColumnSearchProps('sno'),
    },
    {
        title: 'Customer Name',
        dataIndex: 'name',
        key: 'name',
        width: '16.5%',
        ...getColumnSearchProps('name'),
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: '16.5%',
        ...getColumnSearchProps('date'),
    },
    {
        title: 'Mobile Number',
        dataIndex: 'purid',
        key: 'purid',
        ...getColumnSearchProps('purid'),
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        width: '16.5%',
        ...getColumnSearchProps('price'),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Button onClick={() => handleViewClick(record.key)}>View</Button>
        ),
      },
    ];
    return (
        <div className="pastInvCon">
            <Navbar/>
            <div className="past-invoice-container">
                <SideNav active="past-inv"/>
                <div className="all-invoices-container">
                    <div className="filter-container">
                        <div className="filter-part-one-container">
                            <Input type="text" placeholder='Invoice ID....' style={{margin:3}} value={invoiceId} onChange={(e)=> setInvoiceId(e.target.value)}/>
                            <Input type="text" placeholder='customer name...' style={{margin:3}} value={customerName} onChange={(e)=> setCustomerName(e.target.value)}/>
                            <Input type="date" style={{margin:3}} value={date} onChange={(e) => setDate(e.target.value)}/>
                            <Button type='link' size='small' style={{margin:3}} onClick={handleFilter}>Filter</Button>
                            <Button type='link' size='small' style={{margin:3, color:'red'}} onClick={handleResetFilter}>Reset</Button>
                        </div>
                       
                        <div className="filter-part-two-container">
                            <Select
                                size='large'
                                style={{margin:3}}
                                defaultValue='30d'
                                onChange={handlePeriordChange}
                                options={[
                                    {
                                        value : "30d",
                                        label : "Last 30 Days"
                                    },
                                    {
                                        value : '6m',
                                        label : "Last 6 Months"
                                    },
                                    {
                                        value : '1y',
                                        label : 'Last 1 Year'
                                    },
                                    {
                                        value : '5y',
                                        label : 'Last 5 Years'
                                    }
                                ]}
                            />
                        </div>

                    </div>
                    <Table columns={columns} dataSource={tableData} pagination={{
                    pageSize: 6, // Number of rows per page
                    }}
                    // scroll={{
                    //     y: '72vh', // Set a fixed height to enable vertical scrolling
                    //   }}
                    />;
                </div>
                <div className="show-invoice-container">
                    <iframe src={pdf} frameborder="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default PastInvoices