import React from 'react'
import { Link } from 'react-router-dom'
import { 
  LinkedinLogo, 
  WhatsappLogo,
  InstagramLogo
} from 'phosphor-react'

const SocialIcons = () => {
  return (
    <div className='flex items-center gap-4 mt-5 ml-1 mb-2 max-md:mt-4'>
      {/* LinkedIn */}
      <Link 
        target='_blank' 
        to='https://www.linkedin.com/in/naimish-sri/'
        className="group transition transform hover:scale-110 text-white hover:text-blue-400"
        title="Connect on LinkedIn"
      >
        <LinkedinLogo size={32} weight="fill" className="transition-colors duration-300" />
      </Link>
      
      {/* WhatsApp */}
      <Link 
        target='_blank' 
        to='https://wa.link/dv21xs'
        className="group transition transform hover:scale-110 text-white hover:text-green-400"
        title="Chat on WhatsApp"
      >
        <WhatsappLogo size={32} weight="fill" className="transition-colors duration-300" />
      </Link>
      
      {/* Instagram */}
      <Link 
        target='_blank' 
        to='https://www.instagram.com/naimish_sri/'
        className="group transition transform hover:scale-110 text-white hover:text-pink-400"
        title="Follow on Instagram"
      >
        <InstagramLogo size={32} weight="fill" className="transition-colors duration-300" />
      </Link>
    </div>
  )
}

export default SocialIcons
