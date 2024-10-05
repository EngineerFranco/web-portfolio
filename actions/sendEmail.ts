"use server"

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from '@/email/contact-form-email'
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async(formData: FormData) =>{
    "use server";
    
    const email = formData.get("senderEmail")
    const message = formData.get("message")

    if(!validateString(email, 500)){
        return{
            error:true,
            success:false,
            message: 'Invalid email'
        }
    }

    if(!validateString(message, 1000)){
        return{
            error:true,
            success:false,
            message: 'Invalid message'
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: `${email} <onboarding@resend.com>`,
            to: 'engr.franco26@gmail.com',
            subject: 'Message from contact form',
            replyTo: email as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                email: email as string
            })
          
        })
    
    } catch (error: unknown) {
        return {
            error: true,
            success: false,
            message: getErrorMessage(error)
        }
    } 

    return {
        data
    }
}