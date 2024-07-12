import Button from '@/components/button/Button';
import Image from '@/components/image/Image';
import Product from '@/components/product/Product';

export default function Page() {
	return (
		<main className='flex justify-between items-center max-w-7xl pt-14  m-auto'>
			<div className=' flex flex-col gap-10'>
				<h2
					className='text-2xl
				'
				>
					Gaming Consoles
				</h2>
				<h1
					className='text-6xl text-teal-900
				'
				>
					Try It, Rent It,<b className='text-pink-600'>Save $50!</b>{' '}
				</h1>
				<div className='text-lg text-regal-blue font-medium'>
					<p>
						It is a long established fact that a reader will be distracted by
					</p>
					<p>the readable content of a page when looking at its layout. The</p>
					<p>point of using Lorem Ipsum is that it has a more-or-less normal</p>
					<p> distribution of letters as opposed.</p>
				</div>
				<Button text='Get Started Now' />
			</div>
			<div className='relative'>
				<Product
					position='right'
					info='Sony Dualshock 4 Wireless Controller '
					price={50}
					pathName2='/Group 2.svg'
					pathName1='/Group 12.svg'
				/>
				<Image pathName='/Group.svg' width={567} height={584} alt='joy' />
				<Product
					position='left'
					info='Sony Dualshock 4 Wireless Controller '
					price={50}
					pathName2='/Group 2.svg'
					pathName1='/Group 12.svg'
				/>
			</div>
		</main>
	);
}
