import './form.css'

function Form() {
    return (
        <form>
            <h2>Get a Free Quote!</h2>
            <p>
                As soon as you contact our expert team, this
                will be the only form you have to fill in!
            </p>
             <input type="text" placeholder="Enter your name"></input>
             <input type="text" placeholder="Enter your email"></input>
             <input type="text" placeholder="Enter your number"></input>
             <input type="text" className="message" placeholder="Add your message"></input>
            <button type="submit">Request a Callback</button>
        </form>
    )
}

export default Form