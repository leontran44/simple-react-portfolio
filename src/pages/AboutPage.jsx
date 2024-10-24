import profileImage from '../assets/profile.png';

function AboutPage() {
	return (
		<div className="container-fluid">
			<h1 className="title text-center mt-4">⭐ About Me ⭐</h1>
			<div className="text-center mt-3">
				<img
					src={profileImage}
					alt="Profile"
					className="profile-picture"
				/>
			</div>
			<h2 className="intro-text text-center mt-4">
				Hello there! 👋 I am thrilled that you stopped by my portfolio!
			</h2>
			<p
				className="paragraph-text text-center mx-auto"
				style={{ maxWidth: '1100px' }}
			>
				My name is Leonardo, and I am a passionate web developer with a
				love for building amazing applications. I thrive on solving
				complex problems with elegant and creative solutions. 🚀 Outside
				of coding, you will often find me leveling up in my favorite
				video games 🎮 or working on my gains at the gym 💪. I believe
				in balancing a curious mind with a healthy body, and I am always
				up for a new challenge—whether it is mastering a tricky
				algorithm or smashing a new personal record!
			</p>
		</div>
	);
}

export default AboutPage;
