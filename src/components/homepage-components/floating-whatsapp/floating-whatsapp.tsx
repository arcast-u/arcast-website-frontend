'use client'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function FloatingWhatsAppComponent() {
	return (
		<FloatingWhatsApp
			phoneNumber='+971508249795'
			accountName='Arcast'
			avatar='/icons/logo.svg'
			// style={{ right: '20px', top: '20px', bottom: 'unset' }}
		/>
	)
}
