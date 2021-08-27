function LoadMeal() {
    const item = document.getElementById('item-name').value;
    if (item.length == 0) {
        return;
    }
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    url += item;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => DisplayMeals(data['meals']));
}


function DisplayMeals(meal) {
    console.log(meal);
    const div = document.getElementById('meals');
    div.textContent = '';
    if (meal == null) {
        div.innerHTML = `
        <p class="text-danger text-center">Item not found </p>
        `;
        return;
    }
    try {
        for (m of meal) {
            const div2 = document.createElement('div');
            div2.classList.add('card');
            div2.innerHTML = `
        <img src="${m.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${m.strMeal}</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>`;
            div.appendChild(div2);
        }
    }
    catch (error) {
        div.innerHTML = `<p class="text-center">Something Went Wrong</p>`;
        div.classList.add('text-danger');
    }
}
