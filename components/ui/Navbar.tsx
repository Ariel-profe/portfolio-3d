import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex justify-center snap-start">
        <div className="container flex justify-between items-center py-2 mt-2 px-3">
            {/* Logo and Links */}
            <div className="flex items-center gap-12 h-8 w-8">
            <Image src={'/assets/logo-no-background.svg'} alt={'logo ariel'} width={30} height={30} className='object-contain w-auto h-auto' priority />
            <ul className='flex gap-5 capitalize'>
                <li> <Link href={'#hero'}>home</Link> </li>
                <li> <Link href={''}>studio</Link> </li>
                <li> <Link href={'#projects'}>projects</Link> </li>
                <li> <Link href={'#contact'}>contact</Link> </li>
              
            </ul>
            </div>
            {/* Icons */}
            <div className="flex items-center gap-2">
                <button>
                    <Image src={'/assets/search.png'} alt={'search'} width={20} height={20} />
                </button>
                <button className='w-full p-1 bg-pink-600 rounded-md capitalize md:hover:opacity-60'>hire now</button>
            </div>
        </div>
    </nav>
  )
}
