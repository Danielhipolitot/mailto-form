const Form = () =>  {
    console.error(`dd`);
    return <div>
        <form action="mailto:recipient@example.com" method="post" enctype="multipart/form-data" target="_top">
        Subject:<br/>
    <input type="text" name="subject" placeholder="Your Name/"/><br/>
    Email:<br/>
    <input type="email" name="email" placeholder="Your Email"/><br/>
    Message:<br/>
            <button type="submit">
                enviar
            </button>

            <a href="mailto:no-one@snai1mai1.com?subject=free chocolate">example</a>

        </form>
    </div>

}

export default Form;