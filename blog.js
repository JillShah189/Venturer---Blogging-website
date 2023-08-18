const form = document.querySelector('#blog-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// get form data
	const formData = new FormData(form);

	// create blog post
	const blogPost = {
		title: formData.get('title'),
		image: formData.get('image'),
		content: formData.get('content')
	};

	// log blog post data
	console.log(blogPost);

	// reset form
	form.reset();
});

