import React, { Component } from 'react'
const axios = require("axios");


export class list extends Component {
  
  state={
    resp:"0"

  }
  
  
  give=(e)=>{
    e.preventDefault();
    var fc=document.getElementById('fromC').value
    var tc=document.getElementById('toC').value
    axios({
      "method":"GET",
      "url":"https://currency-exchange.p.rapidapi.com/exchange",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"currency-exchange.p.rapidapi.com",
      "x-rapidapi-key":"b723b82285msh13db2f369819f8bp1fd34fjsn2a4ac5e44c8a"
      },"params":{
      "q":"1.0",
      "from":fc,
      "to":tc
      }
      },this.setState({
        resp : "Please wait, Loading!"
      }))
      .then((response)=>{
        var dar=response.data.toString()+" "+tc
        this.setState({
          resp : dar
        })
      })
      .catch((error)=>{
        console.log(error)
      })

    
}


  render() {
    
    return (
      
        <React.Fragment>
          <div className="container">
    
          <form>
            <div>
            <h1>FROM:</h1>
            </div>
          <select id="fromC" className="cur">
          <option value="USD">United States Dollars</option>
      <option value="EUR">Euro</option>
      <option value="GBP">United Kingdom Pounds</option>
      <option value="DZD">Algeria Dinars</option>
      <option value="ARP">Argentina Pesos</option>
      <option value="AUD">Australia Dollars</option>
      <option value="ATS">Austria Schillings</option>
      <option value="BSD">Bahamas Dollars</option>
      <option value="BBD">Barbados Dollars</option>
      <option value="BEF">Belgium Francs</option>
      <option value="BMD">Bermuda Dollars</option>
      <option value="BRR">Brazil Real</option>
      <option value="BGL">Bulgaria Lev</option>
      <option value="CAD">Canada Dollars</option>
      <option value="CLP">Chile Pesos</option>
      <option value="CNY">China Yuan Renmimbi</option>
      <option value="CYP">Cyprus Pounds</option>
      <option value="CSK">Czech Republic Koruna</option>
      <option value="DKK">Denmark Kroner</option>
      <option value="NLG">Dutch Guilders</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="EGP">Egypt Pounds</option>
      <option value="FJD">Fiji Dollars</option>
      <option value="FIM">Finland Markka</option>
      <option value="FRF">France Francs</option>
      <option value="DEM">Germany Deutsche Marks</option>
      <option value="XAU">Gold Ounces</option>
      <option value="GRD">Greece Drachmas</option>
      <option value="HKD">Hong Kong Dollars</option>
      <option value="HUF">Hungary Forint</option>
      <option value="ISK">Iceland Krona</option>
      <option value="INR">India Rupees</option>
      <option value="IDR">Indonesia Rupiah</option>
      <option value="IEP">Ireland Punt</option>
      <option value="ILS">Israel New Shekels</option>
      <option value="ITL">Italy Lira</option>
      <option value="JMD">Jamaica Dollars</option>
      <option value="JPY">Japan Yen</option>
      <option value="JOD">Jordan Dinar</option>
      <option value="KRW">Korea (South) Won</option>
      <option value="LBP">Lebanon Pounds</option>
      <option value="LUF">Luxembourg Francs</option>
      <option value="MYR">Malaysia Ringgit</option>
      <option value="MXP">Mexico Pesos</option>
      <option value="NLG">Netherlands Guilders</option>
      <option value="NZD">New Zealand Dollars</option>
      <option value="NOK">Norway Kroner</option>
      <option value="PKR">Pakistan Rupees</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="PHP">Philippines Pesos</option>
      <option value="XPT">Platinum Ounces</option>
      <option value="PLZ">Poland Zloty</option>
      <option value="PTE">Portugal Escudo</option>
      <option value="ROL">Romania Leu</option>
      <option value="RUR">Russia Rubles</option>
      <option value="SAR">Saudi Arabia Riyal</option>
      <option value="XAG">Silver Ounces</option>
      <option value="SGD">Singapore Dollars</option>
      <option value="SKK">Slovakia Koruna</option>
      <option value="ZAR">South Africa Rand</option>
      <option value="KRW">South Korea Won</option>
      <option value="ESP">Spain Pesetas</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="SDD">Sudan Dinar</option>
      <option value="SEK">Sweden Krona</option>
      <option value="CHF">Switzerland Francs</option>
      <option value="TWD">Taiwan Dollars</option>
      <option value="THB">Thailand Baht</option>
      <option value="TTD">Trinidad and Tobago Dollars</option>
      <option value="TRL">Turkey Lira</option>
      <option value="VEB">Venezuela Bolivar</option>
      <option value="ZMK">Zambia Kwacha</option>
      <option value="EUR">Euro</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="XAG">Silver Ounces</option>
      <option value="XAU">Gold Ounces</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="XPT">Platinum Ounces</option>
          </select><h1>TO:</h1><select id="toC" className="cur" >
          <option value="USD" >United States Dollars</option>
      <option value="EUR">Euro</option>
      <option value="GBP">United Kingdom Pounds</option>
      <option value="DZD">Algeria Dinars</option>
      <option value="ARP">Argentina Pesos</option>
      <option value="AUD">Australia Dollars</option>
      <option value="ATS">Austria Schillings</option>
      <option value="BSD">Bahamas Dollars</option>
      <option value="BBD">Barbados Dollars</option>
      <option value="BEF">Belgium Francs</option>
      <option value="BMD">Bermuda Dollars</option>
      <option value="BRR">Brazil Real</option>
      <option value="BGL">Bulgaria Lev</option>
      <option value="CAD">Canada Dollars</option>
      <option value="CLP">Chile Pesos</option>
      <option value="CNY">China Yuan Renmimbi</option>
      <option value="CYP">Cyprus Pounds</option>
      <option value="CSK">Czech Republic Koruna</option>
      <option value="DKK">Denmark Kroner</option>
      <option value="NLG">Dutch Guilders</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="EGP">Egypt Pounds</option>
      <option value="FJD">Fiji Dollars</option>
      <option value="FIM">Finland Markka</option>
      <option value="FRF">France Francs</option>
      <option value="DEM">Germany Deutsche Marks</option>
      <option value="XAU">Gold Ounces</option>
      <option value="GRD">Greece Drachmas</option>
      <option value="HKD">Hong Kong Dollars</option>
      <option value="HUF">Hungary Forint</option>
      <option value="ISK">Iceland Krona</option>
      <option value="INR">India Rupees</option>
      <option value="IDR">Indonesia Rupiah</option>
      <option value="IEP">Ireland Punt</option>
      <option value="ILS">Israel New Shekels</option>
      <option value="ITL">Italy Lira</option>
      <option value="JMD">Jamaica Dollars</option>
      <option value="JPY">Japan Yen</option>
      <option value="JOD">Jordan Dinar</option>
      <option value="KRW">Korea (South) Won</option>
      <option value="LBP">Lebanon Pounds</option>
      <option value="LUF">Luxembourg Francs</option>
      <option value="MYR">Malaysia Ringgit</option>
      <option value="MXP">Mexico Pesos</option>
      <option value="NLG">Netherlands Guilders</option>
      <option value="NZD">New Zealand Dollars</option>
      <option value="NOK">Norway Kroner</option>
      <option value="PKR">Pakistan Rupees</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="PHP">Philippines Pesos</option>
      <option value="XPT">Platinum Ounces</option>
      <option value="PLZ">Poland Zloty</option>
      <option value="PTE">Portugal Escudo</option>
      <option value="ROL">Romania Leu</option>
      <option value="RUR">Russia Rubles</option>
      <option value="SAR">Saudi Arabia Riyal</option>
      <option value="XAG">Silver Ounces</option>
      <option value="SGD">Singapore Dollars</option>
      <option value="SKK">Slovakia Koruna</option>
      <option value="ZAR">South Africa Rand</option>
      <option value="KRW">South Korea Won</option>
      <option value="ESP">Spain Pesetas</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="SDD">Sudan Dinar</option>
      <option value="SEK">Sweden Krona</option>
      <option value="CHF">Switzerland Francs</option>
      <option value="TWD">Taiwan Dollars</option>
      <option value="THB">Thailand Baht</option>
      <option value="TTD">Trinidad and Tobago Dollars</option>
      <option value="TRL">Turkey Lira</option>
      <option value="VEB">Venezuela Bolivar</option>
      <option value="ZMK">Zambia Kwacha</option>
      <option value="EUR">Euro</option>
      <option value="XCD">Eastern Caribbean Dollars</option>
      <option value="XDR">Special Drawing Right (IMF)</option>
      <option value="XAG">Silver Ounces</option>
      <option value="XAU">Gold Ounces</option>
      <option value="XPD">Palladium Ounces</option>
      <option value="XPT">Platinum Ounces</option>
          </select>
          <br></br>
          <br></br>
          <br></br>
          <input type="submit" className="btn" value="GET RESULTS" onClick={this.give}/>
          </form>
        
          </div>
          <React.Fragment>
        <div>
    <center><h1 id="resC">{this.state.resp}</h1></center>
        </div>
          <center><div className="putDown">
          DEVELOPED BY KAILAASH JEEVAN J
        </div></center>
        </React.Fragment>
        </React.Fragment>
      
    )
  }
}

export default list
