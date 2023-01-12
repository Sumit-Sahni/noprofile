import emailjs from "@emailjs/browser"
import React, {useRef} from 'react';





const Email = () => {
   const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_jdav3e7', 'template_mvz7wtx', e.target, '7z6wQnsHVTCn2Q-P4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert("Email has been sent. Thank You");
    }

    return (
         <>
         <h1 className="text-center md:text-4xl font-abc font-bold animate-bounce" >Contact Me</h1>
            <form className="mt-8 space-y-6"  ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none 
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Email address"
                />
              </div>

              <div >
                 <div className="my-2">
                      <label htmlFor="email-address" className="sr-only">
                       Email address
                      </label>
                      <input
                      id="email-address"
                      name="message"
                      type="Text"
                      required
                      className="appearance-none rounded-none 
                      w-full px-3 py-2 border border-gray-300
                      placeholder-gray-500 text-gray-900 rounded-t-md
                      focus:outline-none focus:ring-indigo-500
                      focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Your Phone Number"
                     />
                 </div>
               </div>
            </div>

           

            <div>
              <button
                type="submit"
                className="group  w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                Sent 
              </button>
            </div>
          </form>
           
         </>
    );
}

export default Email;