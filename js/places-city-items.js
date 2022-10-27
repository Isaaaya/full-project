
(function () {

    const cities = [
        {
            id: 1,
            title: "Oslo - First point",
            subtitle: "The Capital and Largest City of Norway",
            imgURL: "img/oslo.jpeg",
            imgAlt: "Oslo",
            duration: "1 night",
            place: "Scandic Hotel",
            description: "We start our journey from Oslo, the capital of Norway. On a walking tour, you will see the opera house, parliament, the royal palace, and more.",
            firstProposalImgURL: "img/svg/cutlery.svg",
            firstProposalImgAlt: "Cutlery Icon",
            firstProposalDescription: "- Dinner included",
            secondProposalImgURL: "img/svg/bag.svg",
            secondProposalImgAlt: "Bag Icon",
            secondProposalDescription: "- Leave your backpack in the hotel",
            thirdProposalImgURL: "img/svg/plane.svg",
            thirdProposalImgAlt: "Plane Icon",
            thirdProposalDescription: "- Transfer from the airport"
        },
        {
            id: 2,
            title: "Trondheim - Second point",
            subtitle: "The First Capital With the Royal Residence",
            imgURL: "img/trondheim.jpeg",
            imgAlt: "Trondheim",
            duration: "2 nights",
            place: "Radisson Hotel",
            description: "The main Christian landmark of Norway, the Nidaros Cathedral is located here. The architectural sign of the new era is a high TV tower with a revolving restaurant.",
            firstProposalImgURL: "img/svg/train.svg",
            firstProposalImgAlt: "Train Icon",
            firstProposalDescription: "- Arriving at 9 a.m",
            secondProposalImgURL: "img/svg/camera.svg",
            secondProposalImgAlt: "Camera Icon",
            secondProposalDescription: "- Instagram-friendly places",
            thirdProposalImgURL: "img/svg/pointer.svg",
            thirdProposalImgAlt: "Pointer Icon",
            thirdProposalDescription: "- 3-hours walking tour"
        },
        {
            id: 3,
            title: "Bodø - Third point",
            subtitle: "Unique Fishing Spot in Fascinating Scenery",
            imgURL: "img/bodo.jpeg",
            imgAlt: "Bodo",
            duration: "2 nights",
            place: "Gronheim Guesthouse",
            description: "We've left 'urban' Norway, and Bodø is our first stop for no sightseeing. We will simply go fishing, enjoy the fresh air, and try dishes with salmon and trout.",
            firstProposalImgURL: "img/svg/map.svg",
            firstProposalImgAlt: "Map Icon",
            firstProposalDescription: "- Fishing spots",
            secondProposalImgURL: "img/svg/cutlery.svg",
            secondProposalImgAlt: "Cutlery Icon",
            secondProposalDescription: "- Fish dinner",
            thirdProposalImgURL: "img/svg/cable-car.svg",
            thirdProposalImgAlt: "Cable car Icon",
            thirdProposalDescription: "- Cable car ride"
        },
        {
            id: 4,
            title: "Lofoten Islands - Fourth point",
            subtitle: "Stunning Place Beyond the Arctic circle",
            imgURL: "img/lofoten-islands.jpeg",
            imgAlt: "Lofoten Islands",
            duration: "2 nights",
            place: "Cabinn Hotel",
            description: "The islands are located in the harsh waters of the Norwegian Sea. It is a land of wild nature, majestic mountains, fjords, and long sandy beaches.",
            firstProposalImgURL: "img/svg/beach.svg",
            firstProposalImgAlt: "Beach Icon",
            firstProposalDescription: "- Unique beaches",
            secondProposalImgURL: "img/svg/beverages.svg",
            secondProposalImgAlt: "Beverages Icon",
            secondProposalDescription: "- Tasting of local liqueurs",
            thirdProposalImgURL: "img/svg/boat.svg",
            thirdProposalImgAlt: "Boat Icon",
            thirdProposalDescription: "- Boat trip"
        },
        {
            id: 5,
            title: "Tromsø - Final point",
            subtitle: "Spot for Hunting the Northern Lights ",
            imgURL: "img/tromso.jpeg",
            imgAlt: "Tromsø",
            duration: "3 nights",
            place: "Scandic Hotel",
            description: "The largest Norwegian city in the Arctic Circle is also called “Paris of the North”. The main attractions are the Polar Museum and the Arctic Cathedral.",
            firstProposalImgURL: "img/svg/luggage.svg",
            firstProposalImgAlt: "Luggage Icon",
            firstProposalDescription: "- Free souvenirs",
            secondProposalImgURL: "img/svg/plane.svg",
            secondProposalImgAlt: "Plane Icon",
            secondProposalDescription: "- International airport",
            thirdProposalImgURL: "img/svg/telescope.svg",
            thirdProposalImgAlt: "Telescope Icon",
            thirdProposalDescription: "- Northern Lights"
        }
    ];

    function renderCities(cities) {
        const citiesContainer = document.querySelector(".places__city");
        citiesContainer.innerHTML = "";
        for (const city of cities) {
            citiesContainer.innerHTML += `
            <article class="places__city-item">
              <div class="places__city-item-image-container">
                <img src="${city.imgURL}" alt="${city.imgAlt}" class="places__city-item-image" />
              </div>
              <div class="places__city-item-info">
                <p class="places__city-item-title">${city.title}</p>
                <h3 class="places__city-item-subtitle">
                  ${city.subtitle}
                </h3>
                <p class="places__city-item-duration">${city.duration}</p>
                <p class="places__city-item-place">${city.place}</p>
                <p class="places__city-item-description">${city.description}</p>
                <div class="places__proposals">
                  <div class="places__proposal-container">
                    <img src="${city.firstProposalImgURL}" alt="${city.firstProposalImgAlt}" class="places__proposal-image" />
                    <p class="places__proposal-description">${city.firstProposalDescription}</p>
                  </div>
                  <div class="places__proposal-container">
                    <img src="${city.secondProposalImgURL}" alt="${city.secondProposalImgAlt}" class="places__proposal-image" />
                    <p class="places__proposal-description">${city.secondProposalDescription}</p>
                  </div>
                  <div class="places__proposal-container">
                    <img src="${city.thirdProposalImgURL}" alt="${city.thirdProposalImgAlt}" class="places__proposal-image" />
                    <p class="places__proposal-description">${city.thirdProposalDescription}</p>
                  </div>
                  <div class="places__redirection-container">
                    <a href="#contact-us-form" class="places__redirection">Book now →</a>
                  </div>
                </div>
              </div>
            </article>
            `
        }
    }
    renderCities(cities);

})()

