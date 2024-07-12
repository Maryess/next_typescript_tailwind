import '../../globals.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export default function Button({ text, ...props }: Props) {
	return (
		<button
			className='bg-gradient-to-r text-slate-200 w-56 h-16 from-cyan-500 to-blue-500 rounded-3xl'
			{...props}
		>
			<span className='text-2xl font-medium'>{text}</span>
		</button>
	);
}
