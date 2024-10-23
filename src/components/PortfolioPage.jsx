import Project from '../components/Project';
import project1Image from '../assets/beatbrowser.png';
import project2Image from '../assets/bookhive.png';
import project3Image from '../assets/JATE.png';
import project4Image from '../assets/weather-dashboard.png';

function PortfolioPage() {
	return (
		<div className="container">
			<h2>My Portfolio</h2>
			<div className="row">
				<div className="col-md-4">
					<Project
						title="Project 1"
						image={project1Image}
						deployedLink="https://kevinvongmany.github.io/beatbrowser/"
						repoLink="https://github.com/leontran44/beatbrowser"
					/>
				</div>
				<div className="col-md-4">
					<Project
						title="Project 2"
						image={project2Image}
						deployedLink="https://book-hive-c90u.onrender.com/"
						repoLink="https://github.com/leontran44/book-hive"
					/>
				</div>
				<div className="col-md-4">
					<Project
						title="Project 3"
						image={project3Image}
						deployedLink="https://jate-text-editor-pcpj.onrender.com/"
						repoLink="https://github.com/leontran44/pwa-text-editor"
					/>
				</div>
				<div className="col-md-4">
					<Project
						title="Project 4"
						image={project4Image}
						deployedLink="https://leontran44.github.io/weather-dashboard/"
						repoLink="https://github.com/leontran44/weather-dashboard"
					/>
				</div>
			</div>
		</div>
	);
}

export default PortfolioPage;
