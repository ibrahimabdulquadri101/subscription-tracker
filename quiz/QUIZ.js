document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quizform");
    form.addEventListener("submit", e => {
        e.preventDefault();
        // Get values from form
        const category = document.getElementById("category")
        const difficulty = document.getElementById("difficulty")
        const catgory = category.value
        const difficult = difficulty.value
        console.log("Selected category:", catgory);
        console.log("Selected difficulty:", difficult);

        // Construct URL for API request
        const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;

        // Redirect to second page with form data
        const redirectUrl = `Question.html?category=${encodeURIComponent(catgory)}&difficulty=${encodeURIComponent(difficult)}`;
        window.location.href = redirectUrl;

        // Optionally, you can also fetch data from the API
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("API Response:", data);
        //         // Process API response as needed
        //     })
        //     .catch(error => console.error("Error fetching data:", error));
    });
});
