/* CALLBACKS */
function greeting(name) {
  console.log(`Hello ${name}, welcome to Scotch!`);
}

function introduction(firstName, lastName, callback) {
  const fullName = `${firstName} ${lastName}`;
  callback(fullName);
}

introduction("Chris", "Nwamba", greeting);

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
//create a promise
const weather = true;
const date = new Promise(function (resolve, reject) {
  if (weather) {
    const dateDetails = {
      name: "Cubana Restaurant",
      location: "55th Street",
      table: 5,
    };
    resolve(dateDetails);
  } else {
    reject(new Error("Bad weather, so no Date"));
  }
});

//using promise
date
  .then(function (done) {
    // the content from the resolve() is here
  })
  .catch(function (error) {
    // the info from the reject() is here
  });

//create short promise
const orderUber = function (dateDetails) {
  const message = `Get me an Uber ASAP to ${dateDetails.location}`;
  return Promise.resolve(message);
};

const myDate = function () {
  date
    .then(orderUber)
    .then(function (done) {
      console.log(done);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

myDate();

/* ASYNC/AWAIT */
async function myDate() {
  try {
    let dateDetails = await date;
    let message = await orderUber(dateDetails);
    console.log(message);
  } catch (error) {
    console.log(error.message);
  }
}

(async () => {
  await myDate();
})();
