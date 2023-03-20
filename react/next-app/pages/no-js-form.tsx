const Form = () => (
  <form action='/api/form' method='post'>
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

export default Form;
