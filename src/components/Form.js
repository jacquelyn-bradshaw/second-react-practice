import React, {useState} from "react"

import styles from "./Form.module.css"

const Form = (props) => {
  const [enteredCurrentSavings, setCurrentSavings] = useState("")
  const [enteredYearlySavings, setYearlySavings] = useState("")
  const [enteredExpectedInterest, setExpectedInterest] = useState("")
  const [enteredInvestmentDuration, setInvestmentDuration] = useState("")

  const currentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value)
  }

  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(event.target.value)
  }
  
  const expectedInterestChangeHandler = (event) => {
    setExpectedInterest(event.target.value)
  }

  const investmentDurationChangeHandler = (event) => {
    setInvestmentDuration(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const savingData = {
      current: enteredCurrentSavings,
      yearly: enteredYearlySavings,
      interest: enteredExpectedInterest,
      duration: enteredInvestmentDuration
    }
    props.onSaveData(savingData)
    resetHandler()
  }

  const resetHandler = () => {
    setCurrentSavings("")
    setYearlySavings("")
    setExpectedInterest("")
    setInvestmentDuration("")
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            value={enteredCurrentSavings}
            onChange={currentSavingsChangeHandler}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={enteredYearlySavings}
            onChange={yearlySavingsChangeHandler}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            value={enteredExpectedInterest}
            onChange={expectedInterestChangeHandler}
            id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            value={enteredInvestmentDuration}
            onChange={investmentDurationChangeHandler}
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" onClick={resetHandler} className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default Form
