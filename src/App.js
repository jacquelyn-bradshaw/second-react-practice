import Header from "./components/Header"
import Form from "./components/Form"
import Table from "./components/Table"

function App() {

  const yearlyData = []; // per-year results

  const calculateHandler = (userInput) => {

    let currentSavings = +userInput.current;
    const yearlyContribution = +userInput.yearly;
    const expectedReturn = +userInput.interest / 100;
    const duration = +userInput.duration;

    console.log("CS" + currentSavings)
    console.log("YS" + yearlyContribution)
    console.log("ER" + expectedReturn)
    console.log("D" + duration)

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    console.log("YD" + yearlyData.savingsEndOfYear)

    // do something with yearlyData ...
  };

  const saveDataHandler = (enteredSavingsData) => {
      const savingsData = {
        ...enteredSavingsData,
        id: Math.random().toString()
      }
      console.log(savingsData)
      calculateHandler(savingsData)
  }

  return (
    <div>
      <Header/>
      <Form
        onSaveData={saveDataHandler}  
      />
      {!yearlyData.length === 0 && (<Table/>)}
      {yearlyData.length === 0 && (<h2>No savings found.</h2>)}
    </div>
  );
}

export default App;
