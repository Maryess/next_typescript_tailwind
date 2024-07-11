import '../../globals.css';
type Props = {
	click?: () => void;
	text: string;
};

export default function Button({ click, text }: Props) {
	return (
		<button
			className='bg-gradient-to-r text-slate-200 w-56 h-16 from-cyan-500 to-blue-500 rounded-3xl'
			onClick={click}
		>
			{text}
		</button>
	);
}
