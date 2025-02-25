import Chance from "chance";

const chance = new Chance(); // ✅ Correct
export const fakeUserData = () => {
    console.log( chance.name({ middle: true }))
  return chance.name({ middle: true })// Example usage
};

// Output: Random name
