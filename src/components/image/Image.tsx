import '../../globals.css';

type Props = {
	width: number;
	height: number;
	pathName: string;
	alt: string;
};

export default function Image({ width, height, pathName, alt }: Props) {
	return <img src={pathName} alt={alt} width={width} height={height} />;
}
