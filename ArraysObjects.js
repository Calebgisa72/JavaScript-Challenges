function organizeByGender(array) {
    const result = {
        females: [],
        males: []
    };

    for (let i = 0; i < array.length; i++) {
        const person = array[i].split(", ");
        const nameParts = person[0].split(" ");
        const firstName = nameParts[0];
        const secondName = nameParts.slice(1).join(" ");
        const age = parseInt(person[1]);
        const gender = person[2].trim().toLowerCase();

        const personInfo = { "second-name": secondName, age };

        if (gender === "male") {
            result.males.push({ [firstName]: personInfo });
        } else if (gender === "female") {
            result.females.push({ [firstName]: personInfo });
        }
        }

        return result;
    }

    const people = [
        "Patrick wyne, 30, male",
        "lil wyne, 32, male",
        "Eric mimi, 21, female",
        "Dodos deck, 21, male",
        "Alian Dwine, 22, male",
        "Patrick wyne, 33, male",
        "Patrick wyne, 10, male",
        "Patrick wyne, 40, male"
    ];

    const organized = organizeByGender(people);
    console.log(organized);
