(this.webpackJsonpthecurrencyconverter=this.webpackJsonpthecurrencyconverter||[]).push([[0],{16:function(e,a,t){e.exports=t(41)},21:function(e,a,t){},22:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(15),r=t.n(o),i=(t(21),t(22),t(2)),u=t(3),c=t(5),m=t(4),E=t(23),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={resp:"0"},e.give=function(a){a.preventDefault();var t=document.getElementById("fromC").value,n=document.getElementById("toC").value;E({method:"GET",url:"https://currency-exchange.p.rapidapi.com/exchange",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"currency-exchange.p.rapidapi.com","x-rapidapi-key":"b723b82285msh13db2f369819f8bp1fd34fjsn2a4ac5e44c8a"},params:{q:"1.0",from:t,to:n}},e.setState({resp:"Please wait, Loading!"})).then((function(a){var t=a.data.toString()+" "+n;e.setState({resp:t})})).catch((function(e){console.log(e)}))},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("h1",null,"FROM:")),l.a.createElement("select",{id:"fromC",className:"cur"},l.a.createElement("option",{value:"USD"},"United States Dollars"),l.a.createElement("option",{value:"EUR"},"Euro"),l.a.createElement("option",{value:"GBP"},"United Kingdom Pounds"),l.a.createElement("option",{value:"DZD"},"Algeria Dinars"),l.a.createElement("option",{value:"ARP"},"Argentina Pesos"),l.a.createElement("option",{value:"AUD"},"Australia Dollars"),l.a.createElement("option",{value:"ATS"},"Austria Schillings"),l.a.createElement("option",{value:"BSD"},"Bahamas Dollars"),l.a.createElement("option",{value:"BBD"},"Barbados Dollars"),l.a.createElement("option",{value:"BEF"},"Belgium Francs"),l.a.createElement("option",{value:"BMD"},"Bermuda Dollars"),l.a.createElement("option",{value:"BRR"},"Brazil Real"),l.a.createElement("option",{value:"BGL"},"Bulgaria Lev"),l.a.createElement("option",{value:"CAD"},"Canada Dollars"),l.a.createElement("option",{value:"CLP"},"Chile Pesos"),l.a.createElement("option",{value:"CNY"},"China Yuan Renmimbi"),l.a.createElement("option",{value:"CYP"},"Cyprus Pounds"),l.a.createElement("option",{value:"CSK"},"Czech Republic Koruna"),l.a.createElement("option",{value:"DKK"},"Denmark Kroner"),l.a.createElement("option",{value:"NLG"},"Dutch Guilders"),l.a.createElement("option",{value:"XCD"},"Eastern Caribbean Dollars"),l.a.createElement("option",{value:"EGP"},"Egypt Pounds"),l.a.createElement("option",{value:"FJD"},"Fiji Dollars"),l.a.createElement("option",{value:"FIM"},"Finland Markka"),l.a.createElement("option",{value:"FRF"},"France Francs"),l.a.createElement("option",{value:"DEM"},"Germany Deutsche Marks"),l.a.createElement("option",{value:"XAU"},"Gold Ounces"),l.a.createElement("option",{value:"GRD"},"Greece Drachmas"),l.a.createElement("option",{value:"HKD"},"Hong Kong Dollars"),l.a.createElement("option",{value:"HUF"},"Hungary Forint"),l.a.createElement("option",{value:"ISK"},"Iceland Krona"),l.a.createElement("option",{value:"INR"},"India Rupees"),l.a.createElement("option",{value:"IDR"},"Indonesia Rupiah"),l.a.createElement("option",{value:"IEP"},"Ireland Punt"),l.a.createElement("option",{value:"ILS"},"Israel New Shekels"),l.a.createElement("option",{value:"ITL"},"Italy Lira"),l.a.createElement("option",{value:"JMD"},"Jamaica Dollars"),l.a.createElement("option",{value:"JPY"},"Japan Yen"),l.a.createElement("option",{value:"JOD"},"Jordan Dinar"),l.a.createElement("option",{value:"KRW"},"Korea (South) Won"),l.a.createElement("option",{value:"LBP"},"Lebanon Pounds"),l.a.createElement("option",{value:"LUF"},"Luxembourg Francs"),l.a.createElement("option",{value:"MYR"},"Malaysia Ringgit"),l.a.createElement("option",{value:"MXP"},"Mexico Pesos"),l.a.createElement("option",{value:"NLG"},"Netherlands Guilders"),l.a.createElement("option",{value:"NZD"},"New Zealand Dollars"),l.a.createElement("option",{value:"NOK"},"Norway Kroner"),l.a.createElement("option",{value:"PKR"},"Pakistan Rupees"),l.a.createElement("option",{value:"XPD"},"Palladium Ounces"),l.a.createElement("option",{value:"PHP"},"Philippines Pesos"),l.a.createElement("option",{value:"XPT"},"Platinum Ounces"),l.a.createElement("option",{value:"PLZ"},"Poland Zloty"),l.a.createElement("option",{value:"PTE"},"Portugal Escudo"),l.a.createElement("option",{value:"ROL"},"Romania Leu"),l.a.createElement("option",{value:"RUR"},"Russia Rubles"),l.a.createElement("option",{value:"SAR"},"Saudi Arabia Riyal"),l.a.createElement("option",{value:"XAG"},"Silver Ounces"),l.a.createElement("option",{value:"SGD"},"Singapore Dollars"),l.a.createElement("option",{value:"SKK"},"Slovakia Koruna"),l.a.createElement("option",{value:"ZAR"},"South Africa Rand"),l.a.createElement("option",{value:"KRW"},"South Korea Won"),l.a.createElement("option",{value:"ESP"},"Spain Pesetas"),l.a.createElement("option",{value:"XDR"},"Special Drawing Right (IMF)"),l.a.createElement("option",{value:"SDD"},"Sudan Dinar"),l.a.createElement("option",{value:"SEK"},"Sweden Krona"),l.a.createElement("option",{value:"CHF"},"Switzerland Francs"),l.a.createElement("option",{value:"TWD"},"Taiwan Dollars"),l.a.createElement("option",{value:"THB"},"Thailand Baht"),l.a.createElement("option",{value:"TTD"},"Trinidad and Tobago Dollars"),l.a.createElement("option",{value:"TRL"},"Turkey Lira"),l.a.createElement("option",{value:"VEB"},"Venezuela Bolivar"),l.a.createElement("option",{value:"ZMK"},"Zambia Kwacha"),l.a.createElement("option",{value:"EUR"},"Euro"),l.a.createElement("option",{value:"XCD"},"Eastern Caribbean Dollars"),l.a.createElement("option",{value:"XDR"},"Special Drawing Right (IMF)"),l.a.createElement("option",{value:"XAG"},"Silver Ounces"),l.a.createElement("option",{value:"XAU"},"Gold Ounces"),l.a.createElement("option",{value:"XPD"},"Palladium Ounces"),l.a.createElement("option",{value:"XPT"},"Platinum Ounces")),l.a.createElement("h1",null,"TO:"),l.a.createElement("select",{id:"toC",className:"cur"},l.a.createElement("option",{value:"USD"},"United States Dollars"),l.a.createElement("option",{value:"EUR"},"Euro"),l.a.createElement("option",{value:"GBP"},"United Kingdom Pounds"),l.a.createElement("option",{value:"DZD"},"Algeria Dinars"),l.a.createElement("option",{value:"ARP"},"Argentina Pesos"),l.a.createElement("option",{value:"AUD"},"Australia Dollars"),l.a.createElement("option",{value:"ATS"},"Austria Schillings"),l.a.createElement("option",{value:"BSD"},"Bahamas Dollars"),l.a.createElement("option",{value:"BBD"},"Barbados Dollars"),l.a.createElement("option",{value:"BEF"},"Belgium Francs"),l.a.createElement("option",{value:"BMD"},"Bermuda Dollars"),l.a.createElement("option",{value:"BRR"},"Brazil Real"),l.a.createElement("option",{value:"BGL"},"Bulgaria Lev"),l.a.createElement("option",{value:"CAD"},"Canada Dollars"),l.a.createElement("option",{value:"CLP"},"Chile Pesos"),l.a.createElement("option",{value:"CNY"},"China Yuan Renmimbi"),l.a.createElement("option",{value:"CYP"},"Cyprus Pounds"),l.a.createElement("option",{value:"CSK"},"Czech Republic Koruna"),l.a.createElement("option",{value:"DKK"},"Denmark Kroner"),l.a.createElement("option",{value:"NLG"},"Dutch Guilders"),l.a.createElement("option",{value:"XCD"},"Eastern Caribbean Dollars"),l.a.createElement("option",{value:"EGP"},"Egypt Pounds"),l.a.createElement("option",{value:"FJD"},"Fiji Dollars"),l.a.createElement("option",{value:"FIM"},"Finland Markka"),l.a.createElement("option",{value:"FRF"},"France Francs"),l.a.createElement("option",{value:"DEM"},"Germany Deutsche Marks"),l.a.createElement("option",{value:"XAU"},"Gold Ounces"),l.a.createElement("option",{value:"GRD"},"Greece Drachmas"),l.a.createElement("option",{value:"HKD"},"Hong Kong Dollars"),l.a.createElement("option",{value:"HUF"},"Hungary Forint"),l.a.createElement("option",{value:"ISK"},"Iceland Krona"),l.a.createElement("option",{value:"INR"},"India Rupees"),l.a.createElement("option",{value:"IDR"},"Indonesia Rupiah"),l.a.createElement("option",{value:"IEP"},"Ireland Punt"),l.a.createElement("option",{value:"ILS"},"Israel New Shekels"),l.a.createElement("option",{value:"ITL"},"Italy Lira"),l.a.createElement("option",{value:"JMD"},"Jamaica Dollars"),l.a.createElement("option",{value:"JPY"},"Japan Yen"),l.a.createElement("option",{value:"JOD"},"Jordan Dinar"),l.a.createElement("option",{value:"KRW"},"Korea (South) Won"),l.a.createElement("option",{value:"LBP"},"Lebanon Pounds"),l.a.createElement("option",{value:"LUF"},"Luxembourg Francs"),l.a.createElement("option",{value:"MYR"},"Malaysia Ringgit"),l.a.createElement("option",{value:"MXP"},"Mexico Pesos"),l.a.createElement("option",{value:"NLG"},"Netherlands Guilders"),l.a.createElement("option",{value:"NZD"},"New Zealand Dollars"),l.a.createElement("option",{value:"NOK"},"Norway Kroner"),l.a.createElement("option",{value:"PKR"},"Pakistan Rupees"),l.a.createElement("option",{value:"XPD"},"Palladium Ounces"),l.a.createElement("option",{value:"PHP"},"Philippines Pesos"),l.a.createElement("option",{value:"XPT"},"Platinum Ounces"),l.a.createElement("option",{value:"PLZ"},"Poland Zloty"),l.a.createElement("option",{value:"PTE"},"Portugal Escudo"),l.a.createElement("option",{value:"ROL"},"Romania Leu"),l.a.createElement("option",{value:"RUR"},"Russia Rubles"),l.a.createElement("option",{value:"SAR"},"Saudi Arabia Riyal"),l.a.createElement("option",{value:"XAG"},"Silver Ounces"),l.a.createElement("option",{value:"SGD"},"Singapore Dollars"),l.a.createElement("option",{value:"SKK"},"Slovakia Koruna"),l.a.createElement("option",{value:"ZAR"},"South Africa Rand"),l.a.createElement("option",{value:"KRW"},"South Korea Won"),l.a.createElement("option",{value:"ESP"},"Spain Pesetas"),l.a.createElement("option",{value:"XDR"},"Special Drawing Right (IMF)"),l.a.createElement("option",{value:"SDD"},"Sudan Dinar"),l.a.createElement("option",{value:"SEK"},"Sweden Krona"),l.a.createElement("option",{value:"CHF"},"Switzerland Francs"),l.a.createElement("option",{value:"TWD"},"Taiwan Dollars"),l.a.createElement("option",{value:"THB"},"Thailand Baht"),l.a.createElement("option",{value:"TTD"},"Trinidad and Tobago Dollars"),l.a.createElement("option",{value:"TRL"},"Turkey Lira"),l.a.createElement("option",{value:"VEB"},"Venezuela Bolivar"),l.a.createElement("option",{value:"ZMK"},"Zambia Kwacha"),l.a.createElement("option",{value:"EUR"},"Euro"),l.a.createElement("option",{value:"XCD"},"Eastern Caribbean Dollars"),l.a.createElement("option",{value:"XDR"},"Special Drawing Right (IMF)"),l.a.createElement("option",{value:"XAG"},"Silver Ounces"),l.a.createElement("option",{value:"XAU"},"Gold Ounces"),l.a.createElement("option",{value:"XPD"},"Palladium Ounces"),l.a.createElement("option",{value:"XPT"},"Platinum Ounces")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"btn",value:"GET RESULTS",onClick:this.give}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",{id:"resC"},this.state.resp))),l.a.createElement("center",null,l.a.createElement("div",{className:"putDown"},"DEVELOPED BY KAILAASH JEEVAN J"))))}}]),t}(n.Component);var v={background:"#000",color:"#FFF",padding:"10px",textAlign:"center"},s=function(){return l.a.createElement("div",{style:v},l.a.createElement("h1",null,"The Currency Converter"))},D=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(p,{getRes:this.getRes}))}}]),t}(n.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bdf920bd.chunk.js.map