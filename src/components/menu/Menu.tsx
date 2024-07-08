import Link from 'next/link';

const Menu = () => {
	return (
		<div className=' flex space-x-8 w-max h-5 bg-stone-800 '>
			<Link href={'/products'}>Products</Link>

			<Link href={'/products/home'}>Home</Link>

			<Link href={'/products/category'}>Category</Link>
		</div>
	);
};

export default Menu;
