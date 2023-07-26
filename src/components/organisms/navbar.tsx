import Link from 'next/link';

export function Navbar() {
  return (
    <nav className='bg-[#ed1b24] p-4'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-white text-xl font-bold'>
            <img src='/marvel-logo.png' alt='Logotipo' className='h-12' />
          </Link>
          <div className='space-x-4'>
            <Link href='/' className='text-white'>
              Home
            </Link>
            <Link href='/heroes' className='text-white'>
              Heróis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
