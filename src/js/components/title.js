export const Title = (id = '', className = '', content = 'Button') => `
  <h1
    class="${['h1 title', className].join(' ').trim()}"
    id="${id}"
  >
    ${content}
  </h1>
`
