import { useState } from 'react'

function Main() {

  return (
    <>
        <main className="main-index">
            <button>Wash Car: $10</button>
            <button>Mow Lawn: $20</button>
            <button>Pull Weeds: $30</button>
        </main>
        <div>
            <span className="main-task-span">Task</span> <span className="main-total-span">Total</span>
            <span className="main-task-span">Wash Car</span> <span className="main-total-span">$10</span>
        </div>
        <div className="main-notes-span">
            <span>We accept cash, credit card, or PayPal</span> <span className="main-total-amount-span">$600</span>
        </div>
        <button><img src="./src/assets/mail.svg" alt="mail icon" width="10px" /> Send invoice</button>
    </>
  )
}

export default Main