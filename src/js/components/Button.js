export const Button = (id = '', className = '', content = 'Button') => `
  <button
    class="${['btn', className].join(' ').trim()}"
    id="${id}"
  >
    ${content}
  </button>
`
