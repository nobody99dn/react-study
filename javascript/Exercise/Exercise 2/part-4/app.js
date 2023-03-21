let btn = document.getElementsByTagName('button')[0]
let link = document.getElementById('w3r')

btn.getAttributes = () => {
  const href = link.href
  const hreflang = link.hreflang
  const rel = link.rel
  const target = link.target
  const type = link.type

  console.log(href)
  console.log(hreflang)
  console.log(rel)
  console.log(target)
  console.log(type)
}
