import { useState } from 'react'
import axios from 'axios'
import './CurrencyConverted.css'

export const CurrencyConverter = () => {
    const [ formData, setFormData] = useState({
        from: '',
        to: '',
        amount: ''
    })
    const currencyCodes = ['GTQ', 'EUR', 'MXN', 'USD', 'HNL', 'CRC']
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')
    const url = 'http://localhost:2880/conversion/'

    const handleChange = (e)=>{
        const { name, value } = e.target
        setFormData((prevData)=>(
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            //Respuesta
            const { data } = await axios.post(url, formData)
            setResult(data)
            setError('')
        }catch(err){
            //Error
            console.log(err)
            setError(err?.response ? err?.response?.data?.message : err?.message)
            setResult('')
        }
    }
    return (
        <div className='converter'>
            <form 
                onSubmit={handleSubmit}
            >
                <select 
                    className='input'
                    onChange={handleChange} 
                    name="from"
                >
                    <option value="">Select from currency</option>
                    {
                        currencyCodes.map(code=> (
                            <option key={code} value={code}>
                                {code}
                            </option>
                        ))
                    }
                </select>
                <select 
                    className='input'
                    name="to" 
                    onChange={handleChange}
                >
                    <option value="">Select to currency</option>
                    {
                        currencyCodes.map(code=> (
                            <option key={code} value={code}>
                                {code}
                            </option>
                        ))
                    }
                </select>
                {/*Elimianr el imput para poder ver (Input da error)*/}
                <input
                    className='input'
                    type="number"
                    onChange={handleChange}
                    value={formData.amount}
                    name="amount"
                />

                <button className='submit-btn' value="submit">Convert</button>
            </form>
            {
                result && (
                    <div className='result'>
                        <p>Conversion Rate: {result.conversionRate}</p>
                        <h3>Conversion Amount: {result.convertedAmount}</h3>
                    </div>
                )
            }
            {
                error && <p>Error: {error}</p>
            }
        </div>
    )
}
