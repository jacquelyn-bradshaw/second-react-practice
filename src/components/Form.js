import React, {useState} from "react"

import styles from "./Form.module.css"

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10
}

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput)

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    props.onCalculate(userInput)
    resetHandler()
  }

  const resetHandler = () => {
    setUserInput(initialUserInput)
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            value={userInput["current-savings"]}
            onChange={(event) => 
              inputChangeHandler("current-savings", event.target.value)
            }
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={userInput["yearly-contribution"]}
            onChange={(event) => 
              inputChangeHandler("yearly-contribution", event.target.value)
            }
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
            value={userInput["expected-return"]}
            onChange={(event) => 
              inputChangeHandler("expected-return", event.target.value)
            }
            id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => 
              inputChangeHandler("duration", event.target.value)
            }
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
