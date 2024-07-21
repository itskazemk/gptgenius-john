import Link from "next/link";
import React from "react";

const HomePage = () => {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">GPTGenius</h1>
					<p className="py-6">chatGPT for tours and knowing other places</p>
					<Link href="/chat" className="btn btn-primary">
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
