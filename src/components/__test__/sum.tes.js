import {sum} from "../sum";

test("Calculates sum of 2 numbers", ()=> {
    const res1 = sum(3,4);
    const res2 = sum(0,5);
    expect(res1).toBe(7);
    expect(res2).toBe(5);
})