function ResumePage() {
	return (
		<div className="container">
			<h2>Resume</h2>
			<p>
				I’m currently in the process of updating my CV to reflect my
				latest projects and skills. In the meantime, you can still check
				out my old CV below. Feel free to download it and reach out if
				you have any questions! 😊
			</p>
			<p>
				<a
					href="../assets/Leon-Tran-Resume.pdf"
					download="Leon-Tran-Resume.pdf"
					className="btn btn-primary"
				>
					Download My Old CV
				</a>
			</p>
			<h3>Skills</h3>
			<ul>
				<li>JavaScript</li>
				<li>React</li>
				<li>Node.js</li>
				<li>CSS</li>
				<li>HTML</li>
				<li>Express.js</li>
				<li>GraphQL</li>
				<li>MongoDB</li>
				<li>MySQL</li>
				<li>Sequelize</li>
				<li>RESTful APIs</li>
				<li>Git</li>
			</ul>
		</div>
	);
}

export default ResumePage;
