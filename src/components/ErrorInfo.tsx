import React from "react";

interface Props {
	text: string;
	classNameFromProps?: string;
}

const ErrorInfo = ({ text, classNameFromProps }: Props) => {
	return <p className={classNameFromProps}> {text}</p>;
};

export default ErrorInfo;
