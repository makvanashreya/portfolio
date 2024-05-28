import React from 'react';

const Contact = () => {

  function validate(event) {
    event.preventDefault(); 

    var em = document.getElementById("email").value;
    var uname = document.getElementById("name").value;
    var msg = document.getElementById("message").value;
    var vem = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var nameRegex = /^[A-Za-z][A-Za-z0-9_]{5,29}$/;

    if (uname === "") {
      alert("Enter Name");
      return false;
    } else if (!nameRegex.test(uname)) {
      alert("Name is not valid");
      return false;
    } else if (em === "") {
      alert("Enter Email");
      return false;
    } else if (!vem.test(em)) {
      alert("Email address is not valid");
      return false;
    } else if (msg === "") {
      alert("Enter Message");
      return false;
    } else {
      alert("Form submission successful!");
      return true;
    }
  }

  return (
    <div 
        name="Contact" 
        className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>

      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        
        <div className='flex justify-center items-cente'>
          <form onSubmit={validate} action="https://getform.io/f/lajkljdb" 
                method='POST'
                className='flex flex-col w-full md:w-1/2'>

            <input
              type="text"
              id='name'
              name='name'
              required
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none md:hover:scale-110 duration-300 ' />

            <input
              type="email"
              id='email'
              name='email'
              required
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none md:hover:scale-110 duration-300' />

            <textarea 
                 name="message" 
                 id='message' 
                 rows="10" 
                 placeholder='Enter Your Message' 
                 required 
                 className='  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none md:hover:mt-4 md:hover:scale-110 duration-300'></textarea>

            <button 
                 className='text-white bg-gradient-to-b from-cyan-500 to-purple-950 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' type='submit'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
