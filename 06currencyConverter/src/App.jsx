import { useState } from "react";
import { InputBox } from "./components";
import useCurrInfo from "./hooks/useCurrinfo";

// import { RefreshCw } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
//  for swap icon

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    // this is used to multiply and convert the value of the currency we require
    // like to convert $10 in inr , multiply the usd to exchange rate -> 1 USD = 83 INR -> 10 x 83 = 830 inr
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        // backgroundImage: `url('${BackgroundImage}')`,
        backgroundImage: `url('https://images.unsplash.com/photo-1739372425262-1642d83a10c5?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* bg-white/30 for the glass background */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              {/* <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-2xl bg-blue-500 text-white text-2xl  px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button> */}

              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-400 rounded-full bg-white text-white p-2"
                onClick={swap}
              >
                <ArrowUpDown className="w-6 h-6 text-black" />
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                // passing amountDisable here means the user cannot change the converted value i.e. the result
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
