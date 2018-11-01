// import * as Rx from "rxjs";
// import { share } from "rxjs/operators";

// const obs = Rx.Observable.create(observer => {
//   try {
//     observer.next("Hi guys!");
//     observer.next("How are you");
//     setInterval(() => {
//       observer.next("I`m good");
//     }, 2000);
//   } catch (err) {
//     observer.error(err);
//   }
// }).pipe(share());

// const addItem = x => {
//   const node = document.createElement("li");
//   const text = document.createTextNode(x);
//   node.appendChild(text);
//   const ul = document.getElementById("output");
//   ul.appendChild(node);
// };

// const observer = obs.subscribe(
//   x => addItem(x),
//   e => addItem("Error"),
//   c => addItem("Complete")
// );

// const observerTwo = obs.subscribe(x => addItem(`${x} Observer Two`));

// setTimeout(() => {
//   observer.unsubscribe();
// }, 4001);

// observer.add(observerTwo);

// setTimeout(() => {
//   const coldObs = obs.subscribe(x => addItem(`${x} Observer Three`));
// }, 3000);

// const hotObs = Rx.fromEvent(document, "mousemove");

// setTimeout(() => {
//   const reallyHot = hotObs.subscribe(x => addItem(`${x} Observer Four`));
// }, 4000);
