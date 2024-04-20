import axios from 'axios'

export const convertDate = async(req, res)=>{
    const path = process.env.API_URL //Rita nase para consultar la conversión
    const key = process.env.API_KEY //APIKey de acceso al API
    const { from, to, amount} = req.body
    const url = `${path}/${key}/pair/${from}/${to}/${amount}`
    console.log(url)
    try{
        const { data } = await axios.get(url)
        if(data && data.result === 'success')
            return res.send({
                    from: from,
                    to: to,
                    conversionRate: data.conversion_rate,
                    convertedAmout: data.conversion_result})        
        return res.status(418).send({message: 'Error convirtiendo la cantidad', data})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error al realizar la conversión', err})
    }
}