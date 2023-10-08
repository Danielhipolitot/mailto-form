const Form = () =>  {
    console.error(`dd`);
    return <div>
        <form action="mailto:recipient@example.com" method="get" enctype="text/plain" target="_top">
        Subject:<br/>
    <input type="text" name="subject" placeholder="Your Name/"/><br/>
    Email:<br/>
    <input type="email" name="email" placeholder="Your Email"/><br/>
    Message:<br/>
            <button type="submit">
                enviar
            </button>

        </form>
    </div>

}

export default Form;