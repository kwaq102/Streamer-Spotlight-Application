import React from "react";

interface Props {
	text: string;
}

const SuccessInfo = ({ text }: Props) => {
	return <p className="successInfo">{text}</p>;
};

export default SuccessInfo;
