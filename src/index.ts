import { Chance } from "chance";
import { rateGrade } from "./app/utilities";

const random = new Chance();

const grade = random.integer({ min: 0, max: 10 });
const rating = rateGrade(grade);

console.log(grade, rating);
