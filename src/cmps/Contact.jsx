export function Contact() {

    return (
        <div className="contact">
            <h1 className="font-Gilmer-Heavy">Interested?<br />
                Let's Get In Touch!</h1>

            <p className="font-Gilmer-Light info">I'm active on <a href="https://www.linkedin.com/in/eden-rize-9476541b7/" target="_blank">LinkedIn</a>,
                so you can reach me there. I'm also available on <a href="https://www.facebook.com/profile.php?id=100006550717856" target="_blank">Facebook</a> and
                on <a href="https://www.instagram.com/edenrize/" target="_blank">Instagram</a>. Contact me !
            </p>

            <a href="../public/files/Eden_Rize-Resume.pdf" download="Eden Rize - Resume.pdf" >

                <button className="flex align-center resume">
                    <img src="../public/img/pdf.svg" />
                    <p className="font-Gilmer-Bold">Download Resume</p>
                </button>
            </a>

        </div>
    )
}
