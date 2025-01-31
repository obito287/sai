document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const teacher = document.getElementById('teacher').value;
        const ratingElements = document.getElementsByName('rating');
        let rating;
        for (const elem of ratingElements) {
            if (elem.checked) {
                rating = elem.value;
                break;
            }
        }
        const feedback = document.getElementById('feedback').value;

        if (!teacher || !rating || !feedback) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        // Display the feedback summary (In reality, you'd send this data to a server)
        alert(`Feedback Submitted!\n\nTeacher: ${teacher}\nRating: ${rating} star(s)\nFeedback: ${feedback}`);

        // Reset the form
        feedbackForm.reset();
    });
});
