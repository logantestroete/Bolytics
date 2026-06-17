import "../../styles/index.css";

type ImageButtonProps = {
    Image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick: () => void;
    className: string;
}

function ImageButton({Image, onClick, className}: ImageButtonProps) {
    return <Image 
        className={`hover:cursor-pointer ${className}`}
        onClick={onClick}
    />
}

export default ImageButton;