import React from "react";

interface Props {
	styles?: object;
}

const Loader = ({ styles }: Props) => {
	return <div className="loader" style={styles}></div>;
};

export default Loader;
