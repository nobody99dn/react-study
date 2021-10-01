/* CALLBACKS */

//callback with ajax
function getData(callback) {
  $.get("example.php", function (response) {
    callback(response);
  });
}

// Common Problem: Scope Issues with Callbacks Inside Loops
//Target: 1 2 3 // Result: 4 4 4
for (var i = 1; i <= 3; i++) {
  // You can use syntax ES6 with let to fix
  setTimeout(function () {
    console.log(i + " second(s) elapsed");
  }, i * 1000);
}

//Common Problem: Callback Hell
readFile(fileName, function (text) {
  tokenize(text, function (tokens) {
    parse(tokens, function (parseTree) {
      optimize(parseTree, function (optimizedTree) {
        evaluate(optimizedTree, function (output) {
          console.log(output);
        });
      });
    });
  });
});

//Split the Code into Different Functions with Appropriate Name
function readFinish(text) {
  tokenize(text, tokenizeFinish);
}
function tokenizeFinish(tokens) {
  parse(tokens, parseFinish);
}
function parseFinish(parseTree) {
  optimize(parseTree, optimizeFinish);
}
function optimizeFinish(optimizedTree) {
  evalutate(optimizedTree, evaluateFinish);
}
function evaluateFinish(output) {
  console.log(output);
}
readFile(fileName, readFinish);

// Create a Function to Run a Pipeline of Tasks
function performTasks(input, tasks) {
  if (tasks.length === 1) return tasks[0](input);
  tasks[0](input, function (output) {
    performTasks(output, tasks.slice(1)); //Performs the tasks in the 'tasks[]' array
  });
}
performTasks(fileName, [
  readFile,
  token,
  parse,
  optimize,
  evaluate,
  function (output) {
    console.log(output);
  },
]);

/* PROMISES */
readFile("fileName")
  .then(function (text) {
    return tokenize(text);
  })
  .then(function (tokens) {
    return parse(tokens);
  })
  .then(function (parseTree) {
    return optimize(parseTree);
  })
  .then(function (optimizedTree) {
    return evaluate(optimizedTree);
  })
  .then(function (output) {
    console.log(output);
  });

/* ASYNC/AWAIT */
const doSomething = async () => {
  const data = await getData();
  console.log(data);
};
