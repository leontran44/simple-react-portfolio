import { useState } from 'react';

function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({});

	// Regex pattern for email validation
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Handle input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Validate form fields
	const validate = () => {
		const newErrors = {};
		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!emailPattern.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			// Form submission logic here (e.g., send data to a server)
			console.log('Form submitted:', formData);
			// Clear form after submission (optional)
			setFormData({ name: '', email: '', message: '' });
			setErrors({});
			alert('Thank you for your message! 😊');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					type="text"
					className="form-control"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				{errors.name && (
					<small className="text-danger">{errors.name}</small>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input
					type="email"
					className="form-control"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && (
					<small className="text-danger">{errors.email}</small>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="message" className="form-label">
					Message
				</label>
				<textarea
					className="form-control"
					id="message"
					name="message"
					rows="3"
					value={formData.message}
					onChange={handleChange}
				></textarea>
				{errors.message && (
					<small className="text-danger">{errors.message}</small>
				)}
			</div>
			<button type="submit" className="btn btn-primary">
				Send
			</button>
		</form>
	);
}

export default ContactForm;
