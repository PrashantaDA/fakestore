import ReactLoading from "react-loading";

const Loading = () => {
	return (
		<ReactLoading
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			type={"cylon"}
			color={"#1e608c"}
			height={100}
			width={100}
		/>
	);
};

export default Loading;
