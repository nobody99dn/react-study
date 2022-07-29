import { FormEventHandler } from 'react';
const Form = () => {
  const handleSubmit = async (event: FormEventHandler<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      pswrd: event.target.pswrd.value,
      roll: event.target.roll.value
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full data: ${result.data}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='roll'>Roll:</label>
      <input
        type='number'
        id='roll'
        name='roll'
        required
        minLength={10}
        maxLength={20}
      />
      <label htmlFor='first'>First name:</label>
      <input type='text' id='first' name='first' />
      <label htmlFor='last'>Last name:</label>
      <input type='text' id='last' name='last' />
      <label htmlFor='pswrd'>Password:</label>
      <input
        type='password'
        id='pswrd'
        name='pswrd'
        pattern='[a-z0-9]{1,15}'
        title='Password should be digits (0 to 9) or alphabets (a to z).'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
