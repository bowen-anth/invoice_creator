import React from "react"
import { useState } from 'react'

function Main() {

    const [formData, setFormData] = useState({
        customTask: "",
        washCar: false,
        mowLawn: false,
        pullWeeds: false
    })

    const [total, setTotal] = useState(0)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
        setTotal((prevTotal) => {
            if (checked) {
                switch (name) {
                    case 'washCar':
                        return prevTotal + 10;
                    case 'mowLawn':
                        return prevTotal + 20;
                    case 'pullWeeds':
                        return prevTotal + 30;
                    default:
                        return prevTotal;
                }
            } else {
                switch (name) {
                    case 'washCar':
                        return prevTotal - 10;
                    case 'mowLawn':
                        return prevTotal - 20;
                    case 'pullWeeds':
                        return prevTotal - 30;
                    default:
                        return prevTotal;
                }
            }
        })
        console.log(formData)
    }

    // function checkboxFlip(event) {
    //     const {name, value, type, checked} = event.target
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         [name]: type === "checkbox" ? !value : ""
    //     }))
    // }

    function handleSubmit(event) {
        console.log(event)
    }

  return (
    <>
        <main className="main-container">
                <form id="invoice-form" onSubmit={handleSubmit}>
                    {/* Main Button Container: Start */}
                    <div className="main-button-container">
                        <input type="text"
                        placeholder="Enter task" 
                        className="main-task-input" 
                        value={formData.customTask}  
                        />
                        <input 
                            type="checkbox" 
                            id="washCar"
                            name="washCar"
                            onChange={handleChange}
                            value={formData.washCar}
                        />
                        <label htmlFor="washCar">Wash Car $10</label>
                        <input 
                            type="checkbox" 
                            id="mowLawn"
                            name="mowLawn"
                            onChange={handleChange}
                            value={formData.mowLawn}
                        />
                        <label htmlFor="mowLawn">Mow Lawn $20</label>
                        <input 
                            type="checkbox" 
                            id="pullWeeds"
                            name="pullWeeds"
                            onChange={handleChange}
                            value={formData.pullWeeds}
                        />
                        <label htmlFor="pullWeeds">Pull Weeds $30</label>
                    </div>
                    {/* Main Button Container: End */}
                </form>

            {/* Task / Total Label Container: Start */}
            <div className="main-task-total-label-container">
                <span className="main-task-span">Task</span> <span className="main-total-span">Total</span>
            </div>
            {/* Task / Total Label Container: End */}

            {/* Dynamic Task & Total Container: Start */}
            <div className="main-task-container">
                {formData.washCar &&
                <div className="task-container">
                    <span className="main-task-span">Wash Car</span> <span className="main-total-span">$10</span>
                </div>
                }
                {formData.mowLawn &&
                <div className="task-container">
                    <span className="main-task-span">Mow Lawn</span> <span className="main-total-span">$20</span>
                </div>
                }
                {formData.pullWeeds &&
                <div className="task-container">
                    <span className="main-task-span">Pull Weeds</span> <span className="main-total-span">$30</span>
                </div>
                }
            </div>
            {/* Dynamic Task & Total Container: End */}

            {/* Notes & Total Amount Label Container: Start  */}
            <div className="main-task-total-container">
                <span className="main-notes-span">Notes</span> <span className="main-total-amount-label-span">Total Amount</span>
            </div>
            {/* Notes & Total Amount Label Container: End  */}

            {/* Notes and Total Amount Container: Start */}
            <div className="main-notes-container">
                <span className="main-notes-note-span">We accept cash, credit card, or PayPal</span> <span className="main-total-amount-span">${total}</span>
            </div>
            {/* Notes and Total Amount Container: End */}
        </main>
        {/* Main Container: End */}
        {/* Submit Button */}
        <button className="main-send-button" type="submit" form="invoice-form"><img src="./src/assets/mail.svg" alt="mail icon" width="10px" />Send invoice</button>
        {/* Submit Button */}
    </>
  )
}

export default Main