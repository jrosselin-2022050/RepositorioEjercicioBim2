import { Navbar } from '../components/Navbar/Nanbar.jsx'
import { CurrencyConverter } from '../components/CurrencyConverter/CurrencyConverter.jsx'
import { AdditionalInfo } from '../components/AdditionalInfo/AdditionalInfo.jsx'

export const Home = () => {
  return (
    <> {/* React Fragment!! */}
      <Navbar></Navbar>
      <CurrencyConverter></CurrencyConverter>
      <AdditionalInfo></AdditionalInfo>
    </>
  )
}
