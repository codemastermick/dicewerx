import * as functions from "firebase-functions";
import { evaluate, rollMax, rollMin, forge } from "dicewerx";

// BEGIN DICEWERX API
export const roll = functions.https.onRequest((request, response) => {
    const expression = request.query.exp;
    response.send(evaluate(expression));
});

export const max = functions.https.onRequest((request, response) => {
    const expression = request.query.exp;
    response.send(rollMax(expression));
});

export const min = functions.https.onRequest((request, response) => {
    const expression = request.query.exp;
    response.send(rollMin(expression));
});

export const getDice = functions.https.onRequest((request, response) => {
    const expression = request.query.exp;
    response.send(forge(expression));
});

export const roll20 = functions.https.onRequest((request, response) => {
    const result = evaluate("1d20");
    response.send(result);
});

export const rollStats = functions.https.onRequest((request, response) => {
    const results = [6];
    for (let i = 0; i < 6; i++) {
        results[i] = evaluate("4d6-L");
    }
    response.send(results);
});

export const rollPercentile = functions.https.onRequest((request, response) => {
    const result = evaluate("1d100");
    response.send(result);
});
// END DICEWERX API