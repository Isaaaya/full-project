// const { render } = require("ejs");

(function () {

    const aboutUsItems = [

        {
            id: 1,
            imgURL: "img/plan-item-01.png",
            imgAlt: "Image 01",
            title: "Contact us",
            description: "Some tour conditions may be changed according to the season. To learn more about the program, please contact us."
        },
        {
            id: 2,
            imgURL: "img/plan-item-02.png",
            imgAlt: "Image 02",
            title: "Pick a date",
            description: " We conduct tours all year round, almost every week, but the most comfortable weather for sightseeing is in summer."
        },
        {
            id: 3,
            imgURL: "img/plan-item-03.png",
            imgAlt: "Image 03",
            title: "Start your journey",
            description: "  If necessary, we help you apply for a visa to Norway, as well as advise what things you should take with you."
        },
    ];

    function renderItems(aboutUsItems) {
        const itemsContainer = document.querySelector(".about__plan");
        itemsContainer.innerHTML = "";
        for (const item of aboutUsItems) {
            itemsContainer.innerHTML += `
            <article class="about__plan-item">
            <div class="about__plan-item-image-container">
              <img src="${item.imgURL}" alt="${item.imgAlt}" class="about__plan-item-image" />
            </div>
            <h4 class="about__plan-item-title">${item.title}</h4>
            <p class="about__plan-item-description">${item.description}</p>
          </article>
          `
        }
    }
    renderItems(aboutUsItems);

})()