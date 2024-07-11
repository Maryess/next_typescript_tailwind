import Image from 'next/image';
import Link from 'next/link';
import '../../globals.css';
import Button from '../button/Button';
const Header = () => {
	return (
		<main className='w-full  m-auto text-2xl   text-regal-blue font-medium bg-black-800 max-w-7xl'>
			<div className='flex justify-between  '>
				<Image src='/healas.svg' alt='' width={286.536} height={78} />
				<div className=' flex gap-11 items-center '>
					<Link href={'/home/'}>Home</Link>
					<Link href={'/about-us/'}>About us</Link>
					<Link href={'/prices/'}>Prices</Link>
					<Link href={'/rules/'}>Rules</Link>

					<Button text={'Get started'} />
				</div>
			</div>
		</main>
	);
};

export default Header;
