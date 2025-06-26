import React from 'react';
import Input from "./common/Input";
import Button from "./common/Button";

function Contact() {
  return (
    <div className="bg-sidebar-bg container  rounded-xl p-6 md:p-10">
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold">Contact Info</h1>
        <p className="text-gray-600">Nibh dis faucibus proin iacus tristique</p>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="w-full">
          <p className="font-medium mb-1">Your Name</p>
          <Input type="text" placeholder="First Name" className="border px-4 py-2 rounded-md w-full" />
        </div>
        <div className="w-full">
          <p className="font-medium mb-1">Your Last Name</p>
          <Input type="text" placeholder="Last Name" className="border px-4 py-2 rounded-md w-full" />
        </div>
      </div>

      
      <div className="mb-4">
        <p className="font-medium mb-1">Email Address</p>
        <Input type="email" placeholder="Your Email Address" />
      </div>

      
      <div className="mb-6">
        <p className="font-medium mb-1">Message</p>
        <Input type="text" placeholder="Your Message..." className="h-32" />
      </div>

      
      <div className="text-center md:text-left">
        <Button className="bg-button-bg text-white py-2 px-20 md:px-10 rounded-md" label="Send Message" />
      </div>
    </div>
  );
}

export default Contact;
