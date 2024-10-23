import PropTypes from 'prop-types';

function Project({ title, image, deployedLink, repoLink }) {
	return (
		<div className="card mb-4" style={{ width: '18rem' }}>
			<img src={image} className="card-img-top" alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<a
					href={deployedLink}
					className="btn btn-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					View Project
				</a>
				<a
					href={repoLink}
					className="btn btn-secondary ms-2"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub Repo
				</a>
			</div>
		</div>
	);
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	deployedLink: PropTypes.string.isRequired,
	repoLink: PropTypes.string.isRequired,
};

export default Project;
