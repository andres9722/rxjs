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

// import { Subject } from "rxjs";

// const subject = new Subject();

// subject.subscribe(
//   x => addItem("Obs 1 " + x),
//   e => addItem("Obs 1 " + e),
//   () => addItem("Obs 1 Complete")
// );

// subject.next("First thing that I emited");

// const observerSub = subject.subscribe(x => addItem("Obs 2 " + x));

// subject.next("Second thing that I emited");
// observerSub.unsubscribe();
// subject.next("Third thing that I emited");

// function addItem(x) {
//   const node = document.createElement("li");
//   const text = document.createTextNode(x);
//   node.appendChild(text);
//   const ul = document.getElementById("output");
//   ul.appendChild(node);
// }

// import { BehaviorSubject } from "rxjs";

// const subject = new BehaviorSubject("First");

// subject.subscribe(
//   x => addItem("Obs 1 " + x),
//   e => addItem("Obs 1 " + e),
//   () => addItem("Obs 1 Complete")
// );

// subject.next("First thing that I emited");
// subject.next("... Observer 2 is going to subscribe ...");
// const observerSub = subject.subscribe(x => addItem("Obs 2 " + x));

// subject.next("Second thing that I emited");
// observerSub.unsubscribe();
// subject.next("Third thing that I emited");

// function addItem(x) {
//   const node = document.createElement("li");
//   const text = document.createTextNode(x);
//   node.appendChild(text);
//   const ul = document.getElementById("output");
//   ul.appendChild(node);
// }

import { ReplaySubject } from "rxjs";

const subject = new ReplaySubject(2);

subject.subscribe(
  x => addItem("Obs 1 " + x),
  e => addItem("Obs 1 " + e),
  () => addItem("Obs 1 Complete")
);

subject.next("First thing that I emited");
subject.next("Another thing that I emited");
subject.next("... Observer 2 is going to subscribe ...");
const observerSub = subject.subscribe(x => addItem("Obs 2 " + x));

subject.next("Second thing that I emited");
observerSub.unsubscribe();
subject.next("Third thing that I emited");

function addItem(x) {
  const node = document.createElement("li");
  const text = document.createTextNode(x);
  node.appendChild(text);
  const ul = document.getElementById("output");
  ul.appendChild(node);
}
