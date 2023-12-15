import { useState } from 'react'

function Main() {

  return (
    <>
        <main className="main-container">
            <input className="main-task-input" type="text" placeholder="Enter task" />
            {/* Main Button Container: Start */}
            <div className="main-button-container">
                <button className="main-task-button">Wash Car: $10</button>
                <button className="main-task-button">Mow Lawn: $20</button>
                <button className="main-task-button">Pull Weeds: $30</button>
            </div>
            {/* Main Button Container: End */}

            {/* Task / Total Label Container: Start */}
            <div className="main-task-total-label-container">
                <span className="main-task-span">Task</span> <span className="main-total-span">Total</span>
            </div>
            {/* Task / Total Label Container: End */}

            {/* Dynamic Task & Total Container: Start */}
            <div className="main-task-container">
                <span className="main-task-span">Wash Car</span> <span className="main-total-span">$10</span>
            </div>
            {/* Dynamic Task & Total Container: End */}

            {/* Notes & Total Amount Label Container: Start  */}
            <div className="main-task-total-container">
                <span className="main-notes-span">Notes</span> <span className="main-total-amount-label-span">Total Amount</span>
            </div>
            {/* Notes & Total Amount Label Container: End  */}

            {/* Notes and Total Amount Container: Start */}
            <div className="main-notes-container">
                <span className="main-notes-note-span">We accept cash, credit card, or PayPal</span> <span className="main-total-amount-span">$600</span>
            </div>
            {/* Notes and Total Amount Container: End */}
        </main>
        {/* Main Container: End */}
        {/* Submit Button */}
        <button className="main-send-button"><img src="./src/assets/mail.svg" alt="mail icon" width="10px" /> Send invoice</button>
        {/* Submit Button */}
    </>
  )
}

export default Main