import { createElementWithParams, populateTable } from './createtable.js';

const createVIPCheckbox = (robots) => {
    const checkboxElement = createElementWithParams('input', {
        type: "checkbox",
        label: "VIP",
    });

    const onVIPCheckboxClick = (event) =>{
        const isCheced = event.target.checked;
        const tbodyElement = document.querySelector("tbody");

        tbodyElement.replaceChild();

        if (!isCheced) {
            //rodyti visus robotus
            populateTable(robots, tbodyElement);

            return;
        }
        //rodyti VIP robotus
        const VIPRobots = robots.filter((robot) => robot.vip);

        populateTable(VIPRobots, tbodyElement);
    };

    checkboxElement.addEventListener("change", onVIPCheckboxClick);

    document.body.prepend(checkboxElement);
};

export { createVIPCheckbox };
