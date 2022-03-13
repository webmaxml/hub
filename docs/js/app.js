
// <<{ helpers

function escape(string) {
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };
  const htmlEscaper = /[&<>"'\/]/g

  return ('' + string).replace(htmlEscaper, function(match) {
    return htmlEscapes[match]
  })
}

function htmlToElem(html) {
  const div = document.createElement('div')
  div.insertAdjacentHTML('afterbegin', html)

  return div.firstElementChild
}

// }>>

// <<{ globals

// array of topic names
const topics = Object.keys(data)

// }>>

// <<{ elems

const elems = {

  navItem: (href, name) => htmlToElem(`
    <li class="nav__item">
      <a class="nav__link" href="${href}">${name}</a>
    </li>
  `),

  contentsItem: (href, name) => htmlToElem(`
    <li class="contents-list__item">
      <a class="contents-list__link" href="${href}">${name}</a>
    </li>
  `),

  blocksItem: (id, name, links) => htmlToElem(`
    <li class="blocks-list__item">
      <h2 id="${id}" class="blocks-list__header">${name}</h2>
      <ul class="block-list__links links-list">${links}</ul>
    </li>
  `),

  linksItem: (name, desc, link) => `
    <li class="links-list__item">
      <a class="links-list__link" href="${link}" target="_blank">${name}</a>
      <span class="links-list__desc">${desc}</span>
    </li>
  `,

}

// }>>

// <<{ refs

const refs = {
  menu: document.querySelector('.menu'),
  menuBtn: document.querySelector('.header__btn'),
  navList: document.querySelector('.nav__list'),
  main: document.querySelector('.main'),
  mainHeader: document.querySelector('.main__header'),
  contentsList: document.querySelector('.contents-list'),
  blocksList: document.querySelector('.blocks-list'),
}

// }>>

// <<{ menu toggle

;(function () {
  const { menuBtn, main, menu } = refs

  menuBtn.addEventListener('click', e => menu.classList.toggle('open'))
  main.addEventListener('click', e => menu.classList.remove('open'))
})()

// }>>

// <<{ nav items

;(function () {
  const { navList } = refs
  const { navItem } = elems

  const items = topics.map(topic => navItem(`${topic}`, topic))
  navList.replaceChildren(...items)
})()

// }>>

// <<{ contents and links blocks

;(function() {
  const { menu, mainHeader, contentsList, blocksList, navList } = refs
  const { contentsItem, blocksItem, linksItem } = elems

  function clickHandler(e) {
    // reset actions
    e.preventDefault()
    menu.classList.remove('open')
    window.scrollTo(0, 0)

    // topic name from nav link text
    const topic = e.target.innerHTML
    const blocks = data[topic]

    // array of contents items elems
    const contentsItems = blocks.map(block => {
      const header = escape(block.header)
      return contentsItem(`#${header}`, header)
    })

    // array of blocks items elems
    const blocksItems = blocks.map(block => {
      const header = escape(block.header)
      
      // links are array of html strings, not elems
      const links = block.items.map(item => { 
        const name = escape(item.name)
        const desc = escape(item.desc)
        const link = escape(item.link)

        return linksItem(name, desc, link)
      })

      return blocksItem(header, header, links.join(''))
    })

    // replacing DOM content
    mainHeader.innerHTML = topic
    contentsList.replaceChildren(...contentsItems)
    blocksList.replaceChildren(...blocksItems)
  }

  navList.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', clickHandler)
  })

})()

// }>>

