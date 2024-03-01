function addTotalFamilyMembers(families) {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
     for (let family of families) {
    family.totalNumberOfFamilyMembers = 2 + (family.childrenNumber || 0); 

    if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
     reject(new Error('Yves is not an allowed dad in 2022'));
          return;
        }
            }
            resolve(families);
        }, 1000);
    });
}

let families = [
    { fatherName: "Yves", motherName: "Sophie", childrenNumber: 1 }
];

addTotalFamilyMembers(families)
    .then(updatedFamilies => {
    console.log(updatedFamilies);
    })
    .catch(error => {
        console.error(error.message);
    });
