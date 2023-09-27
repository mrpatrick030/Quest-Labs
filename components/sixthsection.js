import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function SixthSection() {
    const scriptRef = useRef(null);

    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;
      script.innerHTML = `
      {
        "width": "100%",
        "height": "250",
        "symbolsGroups": [
          {
            "name": "Cryptocurrencies",
            "symbols": [
              {
                "name": "BINANCE:BTCUSDT"
              },
              {
                "name": "BINANCE:ETHUSDT"
              },
              {
                "name": "BINANCE:BUSDUSDT"
              },
              {
                "name": "BINANCE:USDCUSDT"
              }
            ]
          },  
          {
            "name": "",
            "symbols": []
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en"
      }
      `;
  
      scriptRef.current = script;
  
      const tradingViewContainer = document.getElementById('tradingview-container');
  
      if (tradingViewContainer) {
        tradingViewContainer.appendChild(script);
      }
  
      return () => {
        if (scriptRef.current && scriptRef.current.parentNode) {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        }
      };
    }, []);
 return (
    <div className="p-[5%]">
        <div className="text-[180%] lg:text-[300%] md:text-[250%] text-center font-[600] mb-[5%]">Live Market Data</div>
        <div className="m-[auto]" style={{border:"2px solid #fff"}}>
            <Helmet>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js" async></script>
            </Helmet>
        <div id="tradingview-container"></div>
        </div>
        <div className="mt-[5%] text-center"><Link href="https://thequestlabs.vercel.app/staking"><div className="px-[0.5cm] py-[0.3cm] bg-[rgba(0,200,0,0.1)] rounded-md lg:text-[110%] md:text-[105%]">Proceed to Staking Page</div></Link></div>
    </div>
 )
}