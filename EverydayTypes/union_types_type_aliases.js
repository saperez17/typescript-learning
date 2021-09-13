//Union types
//union types are created using the vertical bar operator |. Union Types allow typing variables which can take more than one type.
//This way we can build more complex cases where we expect the incoming variable to have more thatn one type
function travel(country) {
    if (Array.isArray(country)) {
        country.forEach(s => {
            console.log(`Traveling to ${s}`);
        });
    }
    else {
        console.log(`Traveling to ${country}`);
    }
}
travel('Canada, US, UK');
