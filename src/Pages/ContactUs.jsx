import React from 'react';
import Layout from '../Components/common/Layout';
import Contact from '../Components/Contact';
import Images from "../Components/common/Images";

function ContactUs() {
  return (
    <Layout>
      <div className=" justify-center">
        
        <div className='bg-black'>
        <h1 className=" text-center container text-white text-4xl font-bold pb-20 pt-3">
          Contact Us
        </h1>
        </div>

  
        <div className='container space-y-10'>
        <div className="flex  flex-col md:flex-row gap-10py-12">
          
          <div className="md:w-1/2 mt-10 w-full">
            <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
              You Will Grow, You Will <br /> Succeed. We Promise That
            </h1>
            <p className="pt-4 pb-5 text-gray-700 text-sm leading-relaxed">
              Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt
              tincidunt ultrices. Diam convallis morbi pellentesque adipiscing
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700 mt-6">
              <div className="flex flex-col">
                <Images src="/Images/telephone.png" className="h-6 w-6 mb-2" />
                <span className="font-semibold">Call for inquiry</span>
                <span>+257 388-6895</span>
              </div>
              <div className="flex flex-col">
                <Images src="/Images/telephone.png" className="h-6 w-6 mb-2" />
                <span className="font-semibold">Send us email</span>
                <span>kramulous@sbcglobal.net</span>
              </div>
              <div className="flex flex-col">
                <Images src="/Images/telephone.png" className="h-6 w-6 mb-2" />
                <span className="font-semibold">Opening hours</span>
                <span>Mon - Fri: 10AM - 10PM</span>
              </div>
              <div className="flex flex-col">
                <Images src="/Images/telephone.png" className="h-6 w-6 mb-2" />
                <span className="font-semibold">Office</span>
                <span>19 North Road Piscataway, NY 08854</span>
              </div>
            </div>
          </div>

          
          <div className="md:w-1/2 mt-10 w-full">
            <Contact />
          </div>
        </div>

        
        <div className=" pb-12">
          <iframe
            title="Job Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0766662705!2d-74.30915022426437!3d40.69667269426109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1750759434494!5m2!1sen!2sin"
            className="w-full h-96 rounded-lg border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        
        <div className="flex flex-wrap justify-between   pb-20">
          {[1, 2, 3, 4].map((i) => (
            <Images
              key={i}
              src="/Images/zoom.png"
              className="h-14 w-14  sm:h-32 sm:w-32"
            />
          ))}
        </div>
        </div>
          
      </div>
    </Layout>
  );
}

export default ContactUs;
