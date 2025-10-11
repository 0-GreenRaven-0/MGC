import { FaWhatsapp, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';
import AppearOnScroll from '../Utility/AppearOnScroll';

const Contact = () => {

  const phoneNumber = '+9616666750';
  const whatsNumber = '+96171940750';

  const openWhatsApp = () => {
    const number = whatsNumber.replace(/\D/g, '');
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${number}`
      : `https://web.whatsapp.com/send?phone=${number}`;
    window.open(url, '_blank');
  };

  const callOrCopyNumber = () => {
    if (/Mobi/.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber)
        .then(() => alert('Phone number copied to clipboard!'))
        .catch(() => alert('Failed to copy number'));
    }
  };

  return (
    <div id='contact' className='py-10 md:py-30 lg:py-10 contact-bg flex flex-col items-center justify-center text-center gap-8 md:h-[80vh] lg:h-full'>

      <AppearOnScroll animationClass='shiftUp' delay={100}>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='contact-title'>Where to Find us</h2>
          <br className='hidden dm:block lg:hidden'/>
          <p>Zgharta</p>
          <p>Near St Yo Hanna Church</p>
        </div>
      </AppearOnScroll>

      <AppearOnScroll animationClass='shiftUp' delay={200}>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='contact-title'>Contact Us</h2>
          <br className='hidden md:block lg:hidden'/>
          <div className='flex justify-center gap-8'>
            <button 
              onClick={openWhatsApp} 
              className='cursor-pointer flex items-center font-bold text-xl rounded-lg transition'
            >
              <FaWhatsapp size={50} color='white' className='contact-icon bg-green-700 p-1 rounded-2xl'/> 
            </button>

            <button 
              onClick={callOrCopyNumber} 
              className='cursor-pointer flex items-center rounded-lg transition font-bold text-xl'
            >
              <FaPhone size={50} color='white' className= 'bg-color2 p-2 rounded-2xl contact-icon'/> 
            </button>
          </div>
        </div>
      </AppearOnScroll>

      <AppearOnScroll animationClass='shiftUp' delay={300}>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='contact-title'>Current Opening Hours:</h2>
          <br className='hidden md:block lg:hidden'/>
          <p>Mon-Fri</p>
          <p>3:00Pm-9:00Pm</p>
        </div>
      </AppearOnScroll>

      <AppearOnScroll animationClass='shiftUp' delay={400}>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='contact-title'>Follow Us On Socials</h2>
          <br className='hidden md:block lg:hidden'/>
          <div className='flex gap-8 justify-center'>
            <a href='https://www.facebook.com/share/1MbnFNXms4/' target='_blank' rel='noopener noreferrer'>
              <FaFacebook size={50} color='white' className='bg-blue-500 p-1 rounded-2xl contact-icon'/>
            </a>
            <a href='https://www.instagram.com/mgczgharta?igsh=dXF6eXY5MG8xMG04' target='_blank' rel='noopener noreferrer'>
              <FaInstagram size={50} color='white' className='bg-pink-500 p-1 rounded-2xl contact-icon'/>
            </a>
          </div>
        </div>
      </AppearOnScroll>

    </div>
  )
}

export default Contact;
