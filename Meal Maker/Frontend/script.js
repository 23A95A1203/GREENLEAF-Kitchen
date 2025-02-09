document.getElementById("save").addEventListener("click", function() {
    const selectedDate = document.getElementById("meal-date").value;
    if (!selectedDate) {
        alert("Please select a date!");
        return;
    }
    
    const mealPlan = {
        date: selectedDate,
        breakfast: document.getElementById("breakfast").value,
        lunch: document.getElementById("lunch").value,
        dinner: document.getElementById("dinner").value
    };
    
    localStorage.setItem("mealPlan-" + mealPlan.date, JSON.stringify(mealPlan));
    alert("Meal Plan Saved for " + mealPlan.date);
});

document.getElementById("meal-date").addEventListener("change", function() {
    const selectedDate = this.value;
    const savedPlan = localStorage.getItem("mealPlan-" + selectedDate);
    if (savedPlan) {
        const mealData = JSON.parse(savedPlan);
        document.getElementById("breakfast").value = mealData.breakfast;
        document.getElementById("lunch").value = mealData.lunch;
        document.getElementById("dinner").value = mealData.dinner;
    } else {
        document.getElementById("breakfast").value = "";
        document.getElementById("lunch").value = "";
        document.getElementById("dinner").value = "";
    }
});

function searchMeal(mealType) {
    const query = document.getElementById(mealType).value;
    if (query) {
        window.open("https://www.google.com/search?q=" + encodeURIComponent(query + " recipe"), "_blank");
    } else {
        alert("Please enter a meal name to search for recipes.");
    }
}

document.getElementById("generate-grocery").addEventListener("click", function() {
    let searchQuery = '';
    document.querySelectorAll(".meal-input").forEach(input => {
        if (input.value) searchQuery += input.value + ' ';
    });
    if (searchQuery.trim() !== '') {
        window.open("https://www.google.com/search?q=" + encodeURIComponent(searchQuery + " ingredients"), "_blank");
    } else {
        alert("Please enter meal names before searching for groceries.");
    }
});