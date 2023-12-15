import { useState } from 'react'

function Main() {

  return (
    <>
        <main className="main-container">
            <input className="main-task-input" type="text" placeholder="Enter task" />
            <div className="main-button-container">
                <button className="main-task-button">Wash Car: $10</button>
                <button className="main-task-button">Mow Lawn: $20</button>
                <button className="main-task-button">Pull Weeds: $30</button>
            </div>
        <div className="main-invoice-container">
            <span className="main-task-span">Task</span> <span className="main-total-span">Total</span>
        </div>
        <div className="main-task-container">
            <span className="main-task-span">Wash Car</span> <span className="main-total-span">$10</span>
        </div>
        <div className="main-notes-span">
            <span>We accept cash, credit card, or PayPal</span> <span className="main-total-amount-span">$600</span>
        </div>
        </main>
        <button className="main-send-button"><img src="./src/assets/mail.svg" alt="mail icon" width="10px" /> Send invoice</button>
    </>
  )
}

export default Main