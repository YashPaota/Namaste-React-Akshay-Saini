import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
    <div className="relative py-12 px-24 min-h-screen flex  flex-col justify-center items-center">
        <div className="max-w-screen-md text-center">
           <h2 className='text-4xl font-medium'>Contact Us</h2>
           <p className="text-xl font-serif mt-1">We'd Love to Hear From You</p>
        </div>
        <div className="flex justify-center items-center mt-8 w-full">
          <div className="w-1/2 flex flex-col">
            <div className="flex  px-5 py-0">
              <div className="mt-3">
                <PlaceIcon />
              </div>
              <div className="flex flex-col ml-5 text-lg">
                 <h3 className="text-orange-600 font-bold text-xl">Address</h3>
                 <p>24-Main Street, </p>
                  <p> Koramangala , Bangalore</p>
                  <p>508765</p>
              </div>
            </div>
            <div className=" flex px-5 py-0">
              <div className="mt-3">
                <LocalPhoneIcon />
              </div>
              <div className="flex flex-col ml-5 text-lg ">
                 <h3 className="text-orange-600 font-bold text-xl">Phone</h3>
                 <p>8864098765</p>
              </div>
            </div>
            <div className="flex px-5 py-0">
              <div className="mt-3">
                <EmailIcon />
              </div>
              <div className="flex flex-col ml-5 text-lg">
                 <h3 className="text-orange-600 font-bold text-xl">Email</h3>
                 <p>contactus@quickfood.com</p>
              </div>
            </div>
          </div>
          <div className="w-2/5 p-10 bg-orange-600 text-white">
            <form>
              <h2 className="text-2xl font-medium">Send Message</h2>
              <div className='relative w-full mt-3'>
                  <input className="w-full py-1 px-0 text-base my-3 outline-none border-b-2 border-solid border-gray-500 resize-none" type='text' required="required" />
                  <span className="absolute left-0 py-1 px-0 text-base my-3 text-black pointer-events-none  ">Full Name</span>
              </div>
              <div className='relative w-full mt-3'>
                  <input className="w-full py-1 px-0 text-base my-3 outline-none border-b-2 border-solid border-gray-500 resize-none" type='text' required="required" />
                  <span className="absolute left-0 py-1 px-0 text-base my-3 text-black ">Email</span>
              </div>
              <div className='relative w-full mt-3'>
                 <textarea className="w-full py-1 px-0 text-base my-3 outline-none border-b-2 border-solid border-gray-500 resize-none" required="required"></textarea>
                  <span className="absolute left-0 py-1 px-0 text-base my-3 text-black">Type Your Message</span>
              </div>
              <div className='relative w-full mt-3'>
                <input className="w-[100px] border-none cursor-pointer bg-orange-900 p-3 text-center text-sm hover:bg-white hover:text-black" type='submit' value="Send "/>
              </div>
            </form>
          </div>
        </div>  
    </div>
  );
}

export default Contact;