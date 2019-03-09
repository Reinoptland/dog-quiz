export const randomBreed = (breeds) => {
    return breeds[Math.floor(Math.random()*breeds.length)];
}