import Link from 'next/link';
import '../../globals.css';
const Menu = () => {
	return (
		<div className=' flex place-content-between text-2xl text-pink-500  bg-black-800 '>
			<Link href={'/products'}>Products</Link>

			<Link href={'/products/home'}>Home</Link>

			<Link href={'/products/category'}>Category</Link>
		</div>
	);
};

export default Menu;
