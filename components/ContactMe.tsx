import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";


type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

const ContactMe = (props: Props) => {
    const { 
        register,
        handleSubmit 
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:alexcopleysoftware@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} From:(${formData.email})`
    };

  return (
    
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute uppercase top-24 tracking-[15px] text-gray-500 text-2xl">
            Contact
        </h3>

        <div className="flex flex-col space-y-10 mt-32">
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s Talk.</span>
            </h4>

            <div className="space-y-2">  
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl md:text-2xl">(910) 800-9853</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl md:text-2xl">alexcopleysoftware@gmail.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl md:text-2xl">919 Spicebush Dr</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[100%] mx-auto">
                <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
                <input {...register("email")} placeholder="Email" className="contactInput" type="email" />

                <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />

                <textarea {...register("message")} placeholder="Message" className="contactInput" />
                <button type="submit" className="bg-[#F7AB0A] py-2 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe