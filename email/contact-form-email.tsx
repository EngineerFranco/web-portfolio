import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'

import { Tailwind } from '@react-email/tailwind'


type ContactFormEmailProps = {
    message: string,
    email: string
}

export default function ContactFormEmail({
    message, email
}: ContactFormEmailProps) {
  return (
    <Html>
        <Head></Head>
        <Preview>New Message from your web portfolio</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-gray-700'>
                <Container>
                    <Section className='bg-white border-black/10 my-10 px-3 py-1 rounded-md h-[25rem] flex flex-col justify-center text-center'>
                        <Heading className='mb-auto leading-tight '>You received the following message from the contact form</Heading>
                        <Text className='text-gray-900 border-black/10 px-2 py-3 rounded-sm border-2 mx-auto'>{message}</Text>
                        <Hr className='-mb-1'></Hr>
                        <Text className='font-semibold'>The sender`s email is: <span className='italic'>{email}</span></Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
