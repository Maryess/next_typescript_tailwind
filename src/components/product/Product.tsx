import '../../globals.css';
import Image from '../image/Image';

type Props = {
	info: string;
	price: number;
	pathName1: string;
	pathName2: string;
	alt?: string;
	position: string;
};

export default function Product({
	info,
	price,
	pathName1,
	pathName2,
	alt,
	position,
}: Props) {
	return position === 'left' ? (
		<main className='bg-amber-600 opacity-45 text-sm p-5  rounded-3xl  flex justify-between w-56 absolute right-0'>
			<div>
				<Image pathName={pathName2} width={84} height={49} alt='joyt' />
			</div>
			<div className='flex flex-col items-end'>
				<div>
					<p>{info}</p>
				</div>
				<span>${price} Per Hour</span>
				<Image pathName={pathName1} width={99} height={11} alt='status' />
			</div>
		</main>
	) : (
		<main className='flex p-5 opacity-45  bg-amber-600 rounded-3xl justify-between w-56 absolute '>
			<div className='flex flex-col'>
				<div>
					<p>{info} </p>
				</div>
				<span>${price} Per Hour</span>
				<Image pathName={pathName1} width={99} height={11} alt='status' />
			</div>
			<div>
				<Image pathName={pathName2} width={84} height={49} alt='joyt' />
			</div>
		</main>
	);
}
