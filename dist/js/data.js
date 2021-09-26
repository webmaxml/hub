
const books = {
  shotts_command_line: 'books/shotts_linux_command_line.pdf',
  bash_manual: 'books/bash_manual.pdf',
  progit: 'books/git.pdf',
}

const data = {

// <<{ menu

  menu: {

    'computer science': 'computer_science',
    'network': 'network',
    'development': 'development',
    'windows': 'windows',
    'linux': 'linux',
    'utilities': 'utilities',
    'html': 'html',
    'css': 'css',
    'javascript': 'javascript',
    'nodejs': 'nodejs',
    'php': 'php',
    'servers': 'servers',
    'databases': 'databases',
    'services': 'services',

    'books': {
      'Шоттс - командная строка Linux': 'shotts_linux_command_line',
      'bash manual': 'bash_manual',
      'progit': 'progit',
    },

  },

// }>>

// <<{ content

  content: {

// <<{ html_full

    html_full: [

  // <<{ meta

      {
        header: 'meta',
        items: [
          { name: '<meta>', desc: 'different metadata of the document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta' },
          { name: 'names values in <meta>', desc: 'standard names values in <meta>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name' },
          { name: 'open graph', desc: 'protocol to create social graph objects from the page', link: 'https://ogp.me/' },
        ]
      },

  // }>>

  // <<{ link

      {
        header: 'link',
        items: [
          { name: '<link>', desc: 'load external resources', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link' },
          { name: 'rel values', desc: 'possible rel values in <link>, <a>, <area> and <form>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types' },
          { name: 'preloading with rel="preload"', desc: 'how to start preloading resources early in the page lifecycle', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload' },
        ]
      },

  // }>>

  // <<{ sections

      {
        header: 'sections',
        items: [
          { name: '<article>', desc: 'self-contained composition in a document which is intended to be independently distributable or reusable', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article' },
          { name: '<aside>', desc: 'portion of a document whose content is only indirectly related to the document\'s main content', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside' },
          { name: '<section>', desc: 'generic section of a document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section' },
          { name: '<main>', desc: 'dominant content of the document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main' },
          { name: '<nav>', desc: 'section with main navigation links', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav' },
          { name: '<header>', desc: 'header information (nav, logo, search, author name) for the section', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header' },
          { name: '<footer>', desc: 'footer information (about the author, copyright, related links) for the section', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer' },
        ]
      },

  // }>>

  // <<{ semantic block tags

      {
        header: 'semantic block tags',
        items: [
          { name: '<p>', desc: 'paragraph', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p' },
          { name: '<h1> - <h6>', desc: 'six levels of section headings', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements' },
          { name: '<address>', desc: 'contact information for a person/organization', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address' },
          { name: '<menu>', desc: 'semantic altrenative to <ul> for the menus', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu' },
          { name: '<blockquote>', desc: 'block quotation', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote' },
          { name: '<figcaption>', desc: 'caption for the content in <figure>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption' },
          { name: '<figure>', desc: 'self-contained content with optional caption in <figcaption>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure' },
          { name: '<pre>', desc: 'preformatted text - presented exactly as written', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre' },
          { name: '<dialog>', desc: 'container for the dialog boxes', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog' },
        ]
      },

  // }>>

  // <<{ semantic inline tags

      {
        header: 'semantic inline tags',
        items: [
          { name: '<a>', desc: 'anchor', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a' },
          { name: '<abbr>', desc: 'abbreviation', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr' },
          { name: '<strong>', desc: 'text of strong importance, seriousness or urgency, bold', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong' },
          { name: '<b>', desc: 'bold text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b' },
          { name: '<del>', desc: 'deleted text, with line-through', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del' },
          { name: '<s>', desc: 'strikethrough text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s' },
          { name: '<ins>', desc: 'inserted text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins' },
          { name: '<u>', desc: 'underlined text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u' },
          { name: '<em>', desc: 'semantically emphasised text, displays italic', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em' },
          { name: '<i>', desc: 'italic text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i' },
          { name: '<mark>', desc: 'highlighted text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark' },
          { name: '<q>', desc: 'inline quotation', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q' },
          { name: '<cite>', desc: 'reference and title of a cited work', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite' },
          { name: '<data>', desc: 'content with its machine-readable value', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data' },
          { name: '<dfn>', desc: 'term that is currently defined', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn' },
          { name: '<small>', desc: 'small print, like copyright text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small' },
          { name: '<sub>', desc: 'subscript inline text, that should be rendered lower', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub' },
          { name: '<sup>', desc: 'superscript inline text, that should be rendered higher', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup' },
          { name: '<time>', desc: 'time or date', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time' },
          { name: '<bdo>', desc: 'render text in defferent direction', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo' },
          { name: '<bdi>', desc: 'bidirectional text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi' },
        ]
      },

  // }>>

  // <<{ lists

      {
        header: 'list',
        items: [
          { name: '<ul>', desc: 'unordered list', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul' },
          { name: '<ol>', desc: 'ordered list', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol' },
          { name: '<li>', desc: 'list item', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li' },
          { name: '<dl>', desc: 'description list', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl' },
          { name: '<dt>', desc: 'description term in <dl>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt' },
          { name: '<dd>', desc: 'description definition for <dt> in <dl>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd' },
        ]
      },

  // }>>

  // <<{ embeding content

      {
        header: 'embeding content',
        items: [
          { name: '<img>', desc: 'embed image in a document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img' },
          { name: '<picture>', desc: 'responsive images for browser to choose from', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture' },
          { name: '<video>', desc: 'embed video player', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video' },
          { name: '<audio>', desc: 'embed sound content in a document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio' },
          { name: '<source>', desc: 'media resource for <picture>, <video> or <audio>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source' },
          { name: '<track>', desc: 'subtitles for <video> and <audio>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track' },
          { name: '<embed>', desc: 'embed an external content', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed' },
          { name: '<iframe>', desc: 'embed anther HTML page into the current one, nested browsing context', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe' },
          { name: '<object>', desc: 'an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object' },
          { name: '<param>', desc: 'parameters for an <object> element', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param' },
          { name: '<svg>', desc: 'svg container', link: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg' },
          { name: '<canvas>', desc: 'container to draw with canvas API or WebGL API', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas' },
          { name: '<noscript>', desc: 'html to be inserted if scripting is not available on the page', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript' },
          { name: '<script>', desc: 'embed executable javascript code', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script' },
        ]
      },

  // }>>

  // <<{ tables

      {
        header: 'tables',
        items: [
          { name: '<table>', desc: 'table container', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' },
          { name: '<caption>', desc: 'table caption', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption' },
          { name: '<thead>', desc: 'container for header rows in a table', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead' },
          { name: '<tbody>', desc: 'container for body rows in a table', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody' },
          { name: '<tfoot>', desc: 'container for footer rows in a table', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot' },
          { name: '<col>', desc: 'defines a column within a table', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col' },
          { name: '<colgroup>', desc: 'defines a group of columns within a table', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup' },
          { name: '<tr>', desc: 'table row', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr' },
          { name: '<th>', desc: 'table header cell', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th' },
          { name: '<td>', desc: 'table body cell', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td' },
        ]
      },

  // }>>

  // <<{ forms

      {
        header: 'forms',
        items: [
          { name: '<form>', desc: 'form container', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form' },
          { name: '<input>', desc: 'form input element', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input' },
          { name: '<button>', desc: 'clickable button', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button' },
          { name: '<datalist>', desc: 'list of permissible or recomended <option> for <input>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist' },
          { name: '<fieldset>', desc: 'group for several form elements', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset' },
          { name: '<label>', desc: 'caption for an input element', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label' },
          { name: '<legend>', desc: 'caption for the <fieldset>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend' },
          { name: '<meter>', desc: 'graphical representation of a value within a known range', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter' },
          { name: '<optgroup>', desc: 'group of <option> in <select>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup' },
          { name: '<option>', desc: 'item in <select> or <datalist>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option' },
          { name: '<output>', desc: 'container for injecting the results of calculation or the outcome of a user action', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output' },
          { name: '<progress>', desc: 'progress bar', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress' },
          { name: '<select>', desc: 'menu of options', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select' },
          { name: '<textarea>', desc: 'multiline text input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea' },
        ]
      },

  // }>>

  // <<{ input types

      {
        header: 'input types',
        items: [
          { name: '<input type="button">', desc: 'clickable button', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button' },
          { name: '<input type="checkbox">', desc: 'checkbox', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox' },
          { name: '<input type="color">', desc: 'color picker', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color' },
          { name: '<input type="date">', desc: 'date picker', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date' },
          { name: '<input type="datetime-local">', desc: 'date and time picker', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local' },
          { name: '<input type="email">', desc: 'email input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email' },
          { name: '<input type="file">', desc: 'file picker', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file' },
          { name: '<input type="hidden">', desc: 'data that cannot be seen or modified by user', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden' },
          { name: '<input type="image">', desc: 'submit button from the image', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image' },
          { name: '<input type="month">', desc: 'month input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month' },
          { name: '<input type="number">', desc: 'number input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number' },
          { name: '<input type="password">', desc: 'password input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password' },
          { name: '<input type="radio">', desc: 'radio button', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio' },
          { name: '<input type="range">', desc: 'numeric value in a specified range', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range' },
          { name: '<input type="reset">', desc: 'reset all input to their initial values', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset' },
          { name: '<input type="search">', desc: 'search input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search' },
          { name: '<input type="submit">', desc: 'submit button', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit' },
          { name: '<input type="tel">', desc: 'telephone number input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel' },
          { name: '<input type="text">', desc: 'basic text input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text' },
          { name: '<input type="time">', desc: 'time input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time' },
          { name: '<input type="url">', desc: 'url input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url' },
          { name: '<input type="week">', desc: 'week input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week' },
        ]
      },

  // }>>

  // <<{ code

      {
        header: 'code',
        items: [
          { name: '<code>', desc: 'short fragment or a line of code', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code' },
          { name: '<kbd>', desc: 'keyboard or other user input', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd' },
          { name: '<samp>', desc: 'sample output from a program', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp' },
          { name: '<var>', desc: 'variable name', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var' },
        ]
      },

  // }>>

  // <<{ map

      {
        header: 'map',
        items: [
          { name: '<area>', desc: 'clickable area inside <map>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area' },
          { name: '<map>', desc: 'create clickable link area from image', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map' },
        ]
      },

  // }>>

  // <<{ separators

      {
        header: 'separators',
        items: [
          { name: '<hr>', desc: 'horizontal rule - thematic break between paragraphs', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr' },
          { name: '<br>', desc: 'line break', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br' },
          { name: '<wbr>', desc: 'word break', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr' },
        ]
      },

  // }>>

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'tag reference', desc: 'tag reference', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element' },
          { name: 'Quirks Mode and Standards Mode', desc: 'browser modes to display content', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode' },
          { name: 'Responsive images', desc: 'why and how use responsive images', link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images' },
          { name: 'global attributes', desc: 'attributes common to all HTML elements', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes' },
          { name: 'crossorigin', desc: 'crossorigin attribute for <link>, <img>, <video>, <audio> and <script>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin' },
          { name: '<!DOCTYPE html>', desc: 'prevent browser from switching into quirks mode', link: 'https://developer.mozilla.org/en-US/docs/Glossary/Doctype' },
          { name: '<html>', desc: 'document root element', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html' },
          { name: '<head>', desc: 'metadata about the document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head' },
          { name: '<body>', desc: 'content of the document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body' },
          { name: '<base>', desc: 'base URL for all relative URL\'s in a document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base' },
          { name: '<title>', desc: 'title of the document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title' },
          { name: '<style>', desc: 'global document css styles', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style' },
          { name: '<div>', desc: 'generic container', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div' },
          { name: '<span>', desc: 'generic inline conatainer', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span' },
          { name: '<rp>', desc: 'ruby fallback parenthesis', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp' },
          { name: '<rt>', desc: 'ruby text element', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt' },
          { name: '<ruby>', desc: 'small annotation that rendered above, below or next to the text', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby' },
          { name: '<details>', desc: 'disclosure widget, where information is visible when it is in opened state', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details' },
          { name: '<summary>', desc: 'caption for the <details> widget', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ css_full

    css_full: [

  // <<{ cascade

      {
        header: 'cascade',
        items: [
          { name: 'cascade', desc: 'how to combine props from different sources', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade' },
          { name: 'specificity', desc: 'selectors specificity when rules are matching', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity' },
        ]
      },

  // }>>

  // <<{ flow

      {
        header: 'flow',
        items: [
          { name: 'normal flow', desc: 'about normal flow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout' },
          { name: 'block and inline layout in normal flow', desc: 'block and inline layout in normal flow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow' },
          { name: 'in flow and out of flow', desc: 'about in flow and out of flow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow' },
          { name: 'formatting contexts', desc: 'about formatting contexts', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts' },
          { name: 'block formatting context', desc: 'about block formatting context', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context' },
          { name: 'flow layout and writing modes', desc: 'about writing modes', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes' },
          { name: 'flow layout and overflow', desc: 'about overflow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow' },
        ]
      },

  // }>>

  // <<{ z-stacking context

      {
        header: 'z-stacking context',
        items: [
          { name: 'z-stacking context', desc: 'stacking rules along z axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context' },
          { name: 'isolation', desc: 'whether an element must create new z-stacking context', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/isolation' },
        ]
      },

  // }>>

  // <<{ media queries

      {
        header: 'media queries',
        items: [
          { name: 'using media queries', desc: 'using media queries', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries' },
          { name: '@media', desc: 'rules based on the result of media queries', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media' },
        ]
      },

  // }>>

  // <<{ selectors

      {
        header: 'selectors',
        items: [
          { name: '* { }', desc: 'for every element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors' },
          { name: 'span { }', desc: 'for every span', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors' },
          { name: '.class { }', desc: 'class selector', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors' },
          { name: '#id { }', desc: 'id selector', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors' },
          { name: '[attr=value] { }', desc: 'attribute selector', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors' },
          { name: 'a, b { }', desc: 'for a and b', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list' },
          { name: 'a b { }', desc: 'for b that somewhere inside a', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator' },
          { name: 'a > b { }', desc: 'for b that is direct child of a', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator' },
          { name: 'a ~ b { }', desc: 'for b that somewhere follows a within one parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator' },
          { name: 'a + b { }', desc: 'for b that immediately follows a within one parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator' },
          { name: '::after', desc: 'pseudo-element that is the last child', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::after' },
          { name: '::backdrop', desc: 'box the size of the viewport which is rendered immediately beneath any element being presented in full-screen', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop' },
          { name: '::before', desc: 'pseudo-element that is the first child', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::before' },
          { name: '::cue', desc: 'subtitles in <video> or <audio>', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::cue' },
          { name: '::first-letter', desc: 'first letter of the first line in block element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter' },
          { name: '::first-line', desc: 'first line in block element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line' },
          { name: '::file-selector-button', desc: 'button in <input type="file">', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button' },
          { name: '::part()', desc: 'part in shadow DOM for web components', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::part' },
          { name: '::placeholder', desc: 'placeholder for <input> and <textarea>', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder' },
          { name: '::selection', desc: 'highlighted content by the user', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::selection' },
          { name: '::slotted()', desc: 'slotted element in shadow DOM for web components', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted' },
          { name: ':root', desc: '<html> element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:root' },
          { name: ':empty', desc: 'element without children', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:empty' },
          { name: ':hover', desc: 'element that being hovered with cursor', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:hover' },
          { name: ':active', desc: 'element on which left mouse button is pressed', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:active' },
          { name: ':target', desc: 'element with id mathing URL\'s fragment', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:target' },
          { name: ':lang()', desc: 'elements with certain lang attribute', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:lang' },
          { name: ':fullscreen', desc: 'element that is currently in fullscreen mode', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen' },
          { name: ':is()', desc: 'takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:is' },
          { name: ':where()', desc: 'takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:where' },
          { name: ':not()', desc: 'elements that do not match specified selectors', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:not' },
          { name: ':any-link', desc: 'visited and unvisited <a> and <area>', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link' },
          { name: ':link', desc: 'unvisited <a> and <area>', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:link' },
          { name: ':visited', desc: 'visited <a> and <area>', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:visited' },
          { name: ':focus', desc: 'element that is received focus with mouse or tab', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus' },
          { name: ':focus-within', desc: 'element or any its children received focus with mouse or tab', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within' },
          { name: ':required', desc: '<input>, <select> or <textarea> with required attribute', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:required' },
          { name: ':optional', desc: '<input>, <select> or <textarea> without required attribute', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:optional' },
          { name: ':default', desc: '<input> or <option> that has selected or checked attribute by default', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:default' },
          { name: ':checked', desc: 'radio, checkbox or <option> that has been checked', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:checked' },
          { name: ':enabled', desc: 'form element that doesn\'t have disabled attribute', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled' },
          { name: ':disabled', desc: 'form element with disabled attribute', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled' },
          { name: ':valid', desc: 'form element with validated value', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:valid' },
          { name: ':invalid', desc: 'form element with invalidated value', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid' },
          { name: ':read-only', desc: 'form element with readonly attribute', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only' },
          { name: ':read-write', desc: 'form element without readonly attribute', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write' },
          { name: ':in-range', desc: '<input> whose value is in range, specified by min/max attributes', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range' },
          { name: ':out-of-range', desc: '<input> whose value is out of range, specified by min/max attributes', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range' },
          { name: ':placeholder-shown', desc: '<input> and <textarea> that is currently displaying placeholder', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown' },
          { name: ':indeterminate', desc: 'checkbox with indeterminate attribute or radio, when all options are unchecked', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate' },
          { name: ':autofill', desc: '<input> element has its value autofilled by the browser', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill' },
          { name: ':nth-child()', desc: 'element that has specified position in parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child' },
          { name: ':nth-last-child()', desc: 'element that has specified position in parent, counting from the end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child' },
          { name: ':first-child', desc: 'element that is the first child in parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child' },
          { name: ':last-child', desc: 'element that is the last child in parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child' },
          { name: ':only-child', desc: 'element that is the only child in parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child' },
          { name: ':nth-of-type()', desc: 'element that has specified position among its type in parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type' },
          { name: ':nth-last-of-type()', desc: 'element that has specified position in parent among its type, counting form the end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type' },
          { name: ':first-of-type', desc: 'first element among its type in parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type' },
          { name: ':last-of-type', desc: 'last element among its type in parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type' },
          { name: ':only-of-type', desc: 'element that is only one among its type in parent', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type' },
        ]
      },

  // }>>

  // <<{ values

      {
        header: 'values',
        items: [
          { name: 'specified value', desc: 'value that actually written in style sheet', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/specified_value' },
          { name: 'computed value', desc: 'specified value after handling inherit/intial and converting relative values that don\'t depend on layout', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value' },
          { name: 'used value', desc: 'computed value after converting relative values that depend on layout, like width, height, margin, padding', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/used_value' },
          { name: 'actual value', desc: 'used value after making some local approximations, like rounding thickness of the border to the nearest integer', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/actual_value' },
          { name: 'resolved value', desc: 'value returned by getComputedStyle() - computed value, but for some props (width, height) returns used value', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/resolved_value' },
          { name: 'inherit', desc: 'computed value of the parent element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/inherit' },
          { name: 'initial', desc: 'initial or default value', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/initial' },
          { name: 'unset', desc: 'behaves like inherit for inherited property and like initial for non-inherited property', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/unset' },
        ]
      },

  // }>>

  // <<{ units

      {
        header: 'units',
        items: [
          { name: 'string units', desc: 'string units', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/string' },
          { name: 'length units', desc: 'distance units - rem, vw, vh, ...', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length' },
          { name: 'angle units', desc: 'angle units - deg, grad, rad, turn', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/angle' },
          { name: 'time units', desc: 'time units - s, ms', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/time' },
          { name: 'resolution units', desc: 'resolution units - dpi, dppx, dpcm, x', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/resolution' },
          { name: 'color units', desc: 'color units - blue, rgb(), hsl()', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value' },
        ]
      },

  // }>>

  // <<{ vars

      {
        header: 'vars',
        items: [
          { name: 'using css variables', desc: 'using css custom properties', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' },
          { name: 'var()', desc: 'insert value of a css variable', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/var()' },
          { name: 'env()', desc: 'like var() only for agent-defined environment variables', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/env()' },
        ]
      },

  // }>>

  // <<{ math

      {
        header: 'math',
        items: [
          { name: 'calc()', desc: 'perform calculations on values', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/calc()' },
          { name: 'clamp()', desc: 'get a value if it is between min/max, if its not - gets min or max', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()' },
          { name: 'max()', desc: 'get a max value between two', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/max()' },
          { name: 'min()', desc: 'get a min value between two', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/min()' },
        ]
      },

  // }>>

  // <<{ colors

      {
        header: 'colors',
        items: [
          { name: 'rgb()', desc: 'set rgb color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb()' },
          { name: 'rgba()', desc: 'set rgba color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgba()' },
          { name: 'hsl()', desc: 'set color in hue, saturation, lightnesss', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl()' },
          { name: 'hsla()', desc: 'set color in hue, saturation, lightness and alpha channel', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla()' },
          { name: 'linear-gradient()', desc: 'set gradient along a straight line', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient()' },
          { name: 'radial-gradient()', desc: 'set gradient in a circle form', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient()' },
          { name: 'conic-gradient()', desc: 'set gradient rotating around a center point', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient()' },
          { name: 'repeating-linear-gradient()', desc: 'set repeating gradient along a straight line', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient()' },
          { name: 'repeating-radial-gradient()', desc: 'set repeating gradient in a circle form', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-radial-gradient()' },
          { name: 'repeating-conic-gradient()', desc: 'set repeating gradient rotating around a center point', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-conic-gradient()' },
        ]
      },

  // }>>

  // <<{ position

      {
        header: 'position',
        items: [
          { name: 'containing block', desc: 'about element\'s containing block', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block' },
          { name: 'position', desc: 'set how element is positioned in a document', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position' },
          { name: 'top', desc: 'top edge position of the non-static positioned element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/top' },
          { name: 'right', desc: 'right edge position of the non-static positioned element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/right' },
          { name: 'bottom', desc: 'bottom edge position of the non-static positioned element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/bottom' },
          { name: 'left', desc: 'left edge position of the non-static positioned element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/left' },
          { name: 'z-index', desc: 'z-order of the non-static positioned element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/z-index' },
        ]
      },

  // }>>

  // <<{ block

      {
        header: 'block',
        items: [
          { name: 'basic box model', desc: 'basic box model for each element, rendered by browser', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model' },
          { name: 'margin collapsing', desc: 'vertical margin collapsing', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing' },
          { name: 'box-sizing', desc: 'whether width and height sets for content-box or border-box', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing' },
          { name: 'width', desc: 'width of the element content-box of border-box', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/width' },
          { name: 'height', desc: 'height of an element content-box or border-box', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/height' },
          { name: 'min-height', desc: 'minimum height of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-height' },
          { name: 'max-height', desc: 'maximum height of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/max-height' },
          { name: 'min-width', desc: 'minimum width of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-width' },
          { name: 'max-width', desc: 'maximum width of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/max-width' },
          { name: 'margin-top', desc: 'top margin of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top' },
          { name: 'margin-right', desc: 'right margin of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right' },
          { name: 'margin-bottom', desc: 'bottom margin of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom' },
          { name: 'margin-left', desc: 'left margin of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left' },
          { name: 'margin', desc: 'shorthand for - margin-top margin-right margin-bottom margin-left', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin' },
          { name: 'padding-top', desc: 'top padding of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top' },
          { name: 'padding-right', desc: 'right padding of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right' },
          { name: 'padding-bottom', desc: 'bottom padding of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom' },
          { name: 'padding-left', desc: 'left padding of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left' },
          { name: 'padding', desc: 'shorthand for - padding-top padding-right padding-bottom padding-left', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding' },
        ]
      },

  // }>>

  // <<{ tables

      {
        header: 'tables',
        items: [
          { name: 'border-collapse', desc: 'whether table cells have shared or separated borders', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse' },
          { name: 'border-spacing', desc: 'distance between table cells borders if border-collapse: separate', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing' },
          { name: 'caption-side', desc: 'table caption placement', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side' },
          { name: 'empty-cells', desc: 'whether table empty cells have borders and backgound', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells' },
          { name: 'table-layout', desc: 'table cells layout', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout' },
        ]
      },

  // }>>

  // <<{ flex

      {
        header: 'flex',
        items: [
          { name: 'Flex layout', desc: 'about flex layout', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout' },
          { name: 'flex-direction', desc: 'sets direction of the main axis on which flex items are placed', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction' },
          { name: 'flex-wrap', desc: 'whether items force into one line or can wrap onto multiple lines', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap' },
          { name: 'flex-flow', desc: 'shorthand for - flex-direction flex-wrap', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow' },
          { name: 'justify-content', desc: 'align items along main axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content' },
          { name: 'align-items', desc: 'align items along cross axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-items' },
          { name: 'align-content', desc: 'align rows of items along cross axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-content' },
          { name: 'align-self', desc: 'align specific item along cross axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-self' },
          { name: 'flex-grow', desc: 'sets grow factor - how much of the remaining space should be assigned to the item', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow' },
          { name: 'flex-shrink', desc: 'sets shrink factor - how much to shrink item compared to the others if nowrap is set and their size is larger than the container', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink' },
          { name: 'flex-basis', desc: 'sets the size of the item based on which the grow/shrink calculations will be performed', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis' },
          { name: 'flex', desc: 'shorthand for - flex-grow flex-shrink flex-basis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex' },
          { name: 'order', desc: 'sets the order of the specific item in a container', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/order' },
        ]
      },

  // }>>

  // <<{ grid

      {
        header: 'grid',
        items: [
          { name: 'Grid layout', desc: 'about Grid layout', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout' },
          { name: 'grid-template-columns', desc: 'set grid columns with their sizes', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns' },
          { name: 'grid-template-rows', desc: 'set grid rows with their sizes', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows' },
          { name: 'grid-auto-flow', desc: 'set auto-placement algorithm (def = row)', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow' },
          { name: 'grid-auto-columns', desc: 'size of the implicitly created column', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns' },
          { name: 'grid-auto-rows', desc: 'size of the implicitly created row', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows' },
          { name: 'column-gap', desc: 'gap between columns', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap' },
          { name: 'row-gap', desc: 'gap between rows', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap' },
          { name: 'gap', desc: 'shorthand for - row-gap column-gap', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gap' },
          { name: 'grid-template-areas', desc: '2d template with named grid areas', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas' },
          { name: 'grid-template', desc: 'shorthand for - grid-template-areas grid-template-rows grid-template columns', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template' },
          { name: 'grid', desc: 'shorthand for - grid-template grid-auto-flow grid-auto-columns grid-auto-rows', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid' },
          { name: 'justify-content', desc: 'align whole grid horizontally inside its container (def = stretch)', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content' },
          { name: 'justify-items', desc: 'align all items horizontally inside their cells', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items' },
          { name: 'align-content', desc: 'align whole grid vertically inside its container', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-content' },
          { name: 'align-items', desc: 'align all items vertically inside their cells', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-items' },
          { name: 'grid-column-start', desc: 'grid item position - from which column start to span', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start' },
          { name: 'grid-column-end', desc: 'grid item position - to which column to span', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end' },
          { name: 'grid-column', desc: 'shorthand for - grid-column-start / grid-column-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column' },
          { name: 'grid-row-start', desc: 'grid item position - from which row start to span', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start' },
          { name: 'grid-row-end', desc: 'grid item position - to which row to span', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end' },
          { name: 'grid-row', desc: 'shorthand for - grid-row-start / grid-row-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row' },
          { name: 'grid-area', desc: 'named area for grid-template-areas or shorthand for - grid-row-start grid-column-start grid-row-end grid-column-end', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area' },
          { name: 'justify-self', desc: 'align specific item horizontally inside its cell', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self' },
          { name: 'align-self', desc: 'align specific item vertically inside its cell', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-self' },
          { name: 'order', desc: 'sets the order of the specific item in a container', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/order' },
          { name: 'repeat()', desc: 'set repeated columns/rows sizes', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()' },
          { name: 'minmax()', desc: 'defines fluid size from min to max', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/minmax()' },
          { name: 'fit-content()', desc: 'sets the specified size if its greater than min-content and less than max-content, or else sets one of both', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content()' },
          { name: 'min-content', desc: 'minimal size, in text - the size of the longest word', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-content' },
          { name: 'max-content', desc: 'maximal size, in text - the size of the whole text in one line', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/max-content' },
        ]
      },

  // }>>

  // <<{ border

      {
        header: 'border',
        items: [
          { name: 'border-width', desc: 'width of the border', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' },
          { name: 'border-style', desc: 'style of the border', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-style' },
          { name: 'border-color', desc: 'color of the border', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-color' },
          { name: 'border-image', desc: 'draws an image around a given element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-image' },
          { name: 'border-radius', desc: 'rounds the corners of the border', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius' },
          { name: 'border-top', desc: 'shorthand for - border-top-width border-top-style border-top-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-top' },
          { name: 'border-bottom', desc: 'shorthand for - border-bottom-width border-bottom-style border-bottom-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom' },
          { name: 'border-left', desc: 'shorthand for - border-left-width border-left-style border-left-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-left' },
          { name: 'border-right', desc: 'shorthand for - border-right-width border-right-style border-right-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-right' },
          { name: 'border', desc: 'shorthand for - border-width border-style border-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border' },
        ]
      },

  // }>>

  // <<{ img/video positioning

      {
        header: 'img/video positioning',
        items: [
          { name: 'object-fit', desc: 'how image or video should be resized in <img> or <video> containers', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit' },
          { name: 'object-position', desc: 'image or video alignment in <img> or <video> containers', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-position' },
        ]
      },

  // }>>

  // <<{ overflow

      {
        header: 'overflow',
        items: [
          { name: 'using overflow', desc: 'about overflow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow' },
          { name: 'overflow-x', desc: 'sets what shows when content overflows block horizontally', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x' },
          { name: 'overflow-y', desc: 'sets what shows when content overflows block vertically', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y' },
          { name: 'overflow', desc: 'shorthand for - overflow-x overflow-y', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow' },
          { name: 'white-space', desc: 'how white-spaces and new lines are handled in rendered html', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/white-space' },
          { name: 'text-overflow', desc: 'how one-line overflown text is rendered', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow' },
          { name: '-webkit-line-clamp', desc: 'clip block element to the specified number of lines', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp' },
        ]
      },

  // }>>

  // <<{ text

      {
        header: 'text',
        items: [
          { name: '@font-face', desc: 'import local font', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face' },
          { name: 'font', desc: 'shorthand for the most of font properties', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font' },
          { name: 'font-family', desc: 'font family for an element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-family' },
          { name: 'font-size', desc: 'size of the font', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size' },
          { name: 'line-height', desc: 'the height of the line box', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height' },
          { name: 'color', desc: 'text color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color' },
          { name: 'font-style', desc: 'normal, italic or oblique font style', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-style' },
          { name: 'font-weight', desc: 'the boldness of the font', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight' },
          { name: 'text-align', desc: 'horizontal text alignment', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align' },
          { name: 'text-align-last', desc: 'horizontal text alignment of the last line', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last' },
          { name: 'vertical-align', desc: 'vertical align of the inline or table-cell element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align' },
          { name: 'font-feature-settings', desc: 'controls advanced typographic features in OpenType fonts', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings' },
          { name: 'font-kerning', desc: 'whether font kerning should be used or not', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning' },
          { name: 'font-optical-sizing', desc: 'whether text rendering is optimized for different sizes', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing' },
          { name: 'font-stretch', desc: 'selects normal, condensed or expanded face from a font', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch' },
          { name: 'font-variant', desc: 'shorthand to set all the font variants for a font', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant' },
          { name: 'letter-spacing', desc: 'sets spacing between text characters', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing' },
          { name: 'word-spacing', desc: 'sets space between words', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing' },
          { name: 'text-decoration', desc: 'sets text underline or overline', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration' },
          { name: 'text-emphasis', desc: 'sets some marks over the text characters', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis' },
          { name: 'text-indent', desc: 'empty space before lines in a text block', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent' },
          { name: 'text-shadow', desc: 'adds shadow to text', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow' },
          { name: 'text-transform', desc: 'sets uppercase, lowercase or capitalized', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform' },
          { name: 'text-underline-offset', desc: 'offset of a text-decoration: underline', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset' },
          { name: 'text-underline-position', desc: 'position of a text-decoration: underline', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position' },
        ]
      },

  // }>>

  // <<{ background

      {
        header: 'background',
        items: [
          { name: 'background-attachment', desc: 'whether background image is fixed or scrolls with the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment' },
          { name: 'background-blend-mode', desc: 'background image blend mode', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode' },
          { name: 'background-clip', desc: 'whether background image extends underneath border-box, padding-box or content-box', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip' },
          { name: 'background-color', desc: 'sets background color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color' },
          { name: 'background-image', desc: 'sets background images', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image' },
          { name: 'background-origin', desc: 'sets where background starts - from the border-box, padding-box or content-box', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin' },
          { name: 'background-position', desc: 'sets specific background position inside element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-position' },
          { name: 'background-repeat', desc: 'whether background should repeat inside element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat' },
          { name: 'background-size', desc: 'size of the background image', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-size' },
          { name: 'background', desc: 'shorthand of all background images - background: blue url("...") no-repeat center/contain scroll content-box;', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background' },
        ]
      },

  // }>>

  // <<{ transitions

      {
        header: 'transitions',
        items: [
          { name: 'using css transitions', desc: 'how to use css transitions', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions' },
          { name: 'transition-property', desc: 'css prop to which transition should be applied', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property' },
          { name: 'transition-duration', desc: 'set transition duration', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration' },
          { name: 'transition-timing-function', desc: 'set transition timing function', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function' },
          { name: 'transition-delay', desc: 'set transition delay', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay' },
          { name: 'transition', desc: 'shorthand for all transition properties', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition' },
        ]
      },

  // }>>

  // <<{ animation

      {
        header: 'animation',
        items: [
          { name: 'using css animation', desc: 'how to use animation', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations' },
          { name: '@keyframes', desc: 'set animation steps', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes' },
          { name: 'animation-name', desc: 'set animation names from @keyframes', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name' },
          { name: 'animation-duration', desc: 'set animation duration', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration' },
          { name: 'animation-timing-function', desc: 'set animation function', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function' },
          { name: 'animation-delay', desc: 'set animation delay', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay' },
          { name: 'animation-iteration-count', desc: 'set number of iterations animation should be played before stopping', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count' },
          { name: 'animation-direction', desc: 'set animation direction - forward, backward, alternate', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction' },
          { name: 'animation-fill-mode', desc: 'set how to apply styles to animated element before and after animation', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode' },
          { name: 'animation-play-state', desc: 'sets whether animation is running or paused', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state' },
          { name: 'animation', desc: 'shorthand for all the animation properties', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation' },
        ]
      },

  // }>>

  // <<{ transform

      {
        header: 'transform',
        items: [
          { name: 'using css transforms', desc: 'how to use css transforms', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms' },
          { name: 'perspective', desc: 'distance between element and user in order to give 3d transformation some perspective', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/perspective' },
          { name: 'perspective-origin', desc: 'determines the position at which user is looking at 3d transformation', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin' },
          { name: 'transform-origin', desc: 'determines the point around which the transformation is applied', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin' },
          { name: 'transform', desc: 'set transfrom function to transform the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform' },
          { name: 'backface-visibility', desc: 'whether the back of an element is visible during transformation', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility' },
          { name: 'matrix()', desc: '2D transformation matrix', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix()' },
          { name: 'matrix3d()', desc: '3D transformation matrix', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d()' },
          { name: 'perspective()', desc: 'setting perspective on the transform itself instead of a parent prop perspective', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective()' },
          { name: 'rotate()', desc: 'rotate element around z axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate()' },
          { name: 'rotate3d()', desc: 'rotate element in 3d', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d()' },
          { name: 'rotateX()', desc: 'rotate element around x axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX()' },
          { name: 'rotateY()', desc: 'rotate element around y axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY()' },
          { name: 'rotateZ()', desc: 'rotate element around z axis, same as rotate()', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ()' },
          { name: 'scale()', desc: 'scale element in 2d', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale()' },
          { name: 'scale3d()', desc: 'scale element in 3d', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d()' },
          { name: 'scaleX()', desc: 'scale element along x axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleX()' },
          { name: 'scaleY()', desc: 'scale element along y axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleY()' },
          { name: 'scaleZ()', desc: 'scale element along z axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleZ()' },
          { name: 'skew()', desc: 'skew element in 2d', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew()' },
          { name: 'skewX()', desc: 'skew element along x axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX()' },
          { name: 'skewY()', desc: 'skew element along y axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY()' },
          { name: 'translate()', desc: 'reposition element in 2d', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()' },
          { name: 'translate3d()', desc: 'reposition element in 3d', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d()' },
          { name: 'translateX()', desc: 'reposition element along x axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX()' },
          { name: 'translateY()', desc: 'reposition element along y axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY()' },
          { name: 'translateZ()', desc: 'reposition element along z axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ()' },
        ]
      },

  // }>>

  // <<{ filter

      {
        header: 'filter',
        items: [
          { name: 'filter', desc: 'applies graphical effects to an element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter' },
          { name: 'blur()', desc: 'blur the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur()' },
          { name: 'brightness()', desc: 'set element brightness', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness()' },
          { name: 'contrast()', desc: 'set element contrast', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast()' },
          { name: 'drop-shadow()', desc: 'set element shadow, like box-shadow, but creates a shadow with the element shape', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow()' },
          { name: 'grayscale()', desc: 'set grayscale levels on element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale()' },
          { name: 'hue-rotate()', desc: 'rotate the color wheel on element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate()' },
          { name: 'invert()', desc: 'invert the color on element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert()' },
          { name: 'opacity()', desc: 'set opacity on element, almost same as opacity prop', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity()' },
          { name: 'saturate()', desc: 'set saturate levels on element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate()' },
          { name: 'sepia()', desc: 'set sepia levels on element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia()' },
        ]
      },

  // }>>

  // <<{ float

      {
        header: 'float',
        items: [
          { name: 'float', desc: 'places an element on the left of right side of its container, allowing inline elements to wrap around it', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/float' },
          { name: 'clear', desc: 'whether an element must be moved below floating element that precede it', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clear' },
        ]
      },

  // }>>

  // <<{ shapes

      {
        header: 'shapes',
        items: [
          { name: 'using css shapes', desc: 'setting shape of a floating item', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes' },
          { name: 'shape-outside', desc: 'define a shape of a floating element, around which inline content should wrap', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside' },
          { name: 'shape-image-threshold', desc: 'sets alpha channel for floating element, around which inline content should wrap', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold' },
          { name: 'shape-margin', desc: 'sets margin of the shape, created by shape-outside', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin' },
          { name: 'clip-path', desc: 'clipping region that sets what part of an element should be shown', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path' },
          { name: 'circle()', desc: 'circle shape for shape-outside', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/circle()' },
          { name: 'inset()', desc: 'inset rectangle shape for shape-outside', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/inset()' },
          { name: 'polygon()', desc: 'polygon shape for shape-outside', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/polygon()' },
        ]
      },

  // }>>

  // <<{ counters

      {
        header: 'counters',
        items: [
          { name: 'using css counters', desc: 'using counters to automatically number stuff', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters' },
          { name: 'counter-set', desc: 'sets a counter with a given value (def = 0)', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/counter-set' },
          { name: 'counter-reset', desc: 'resets counter to a giving value (def = 0)', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset' },
          { name: 'counter-increment', desc: 'increments specified counter', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment' },
          { name: 'counter()', desc: 'display counter current value in content prop', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/counter()' },
          { name: 'counters()', desc: 'display nested counters, like lists inside lists', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/counters()' },
        ]
      },

  // }>>

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'css reference', desc: 'css reference', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index' },
          { name: 'display', desc: 'sets outer and inner display types - for element\'s participation in flow layout and for layout of its children', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display' },
          { name: 'visibility', desc: 'shows/hides element without changing the layout of the document', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/visibility' },
          { name: 'content', desc: 'replaces element\'s content with given value', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/content' },
          { name: 'list-style', desc: 'properties for bullets in <li>', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/list-style' },
          { name: 'contain', desc: 'element and its content are independent of the rest of the document as much as possible', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/contain' },
          { name: 'box-shadow', desc: 'sets block shadow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow' },
          { name: 'caret-color', desc: 'color of the blinking insertion caret', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color' },
          { name: 'cursor', desc: 'mouse cursor style when it is over the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/cursor' },
          { name: 'mix-blend-mode', desc: 'how content should blend with background and parent\'s content', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode' },
          { name: 'opacity', desc: 'opacity of the element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/opacity' },
          { name: 'outline-width', desc: 'width of the outline, line that is drawn around the border', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width' },
          { name: 'outline-style', desc: 'style of the outline', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style' },
          { name: 'outline-color', desc: 'color of the outline', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color' },
          { name: 'outline', desc: 'shorthand for - outline-width outline-style outline-color', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline' },
          { name: 'outline-offset', desc: 'offset betweeb outline and element\'s border', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset' },
          { name: 'all', desc: 'sets all properties except unicode-bidi, direction and css vars', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/all' },
          { name: 'direction', desc: 'sets direction of the text', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/direction' },
          { name: 'line-break', desc: 'how to break lines in chinese, japanese or korean text', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/line-break' },
          { name: 'aspect-ratio', desc: 'sets preferred aspect ratio for the box, which will be used in the calculations of auto sizes and some layout functions', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio' },
          { name: 'user-select', desc: 'whether user can select text', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select' },
          { name: 'pointer-events', desc: 'whether the element should be the target of a pointer event', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events' },
          { name: 'touch-action', desc: 'how element can be manipulated by touch events', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action' },
          { name: 'quotes', desc: 'how to render quotes, that are added with open-quote and close-quote values in content property', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/quotes' },
          { name: 'resize', desc: 'whether the element is resizable', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/resize' },
          { name: 'scroll-snap-type', desc: 'whether to scroll strictly on element and don\'t stop between them', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type' },
          { name: 'tab-size', desc: 'width of the tab character', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size' },
          { name: 'attr()', desc: 'get attribute value of the selected element', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/attr()' },
          { name: '@charset', desc: 'character encoding in style sheet', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@charset' },
          { name: '@import', desc: 'import rules from other style sheet', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@import' },
          { name: '@namespace', desc: 'XML namespace to be used in style sheet', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@namespace' },
          { name: '@supports', desc: 'rules that depends on browser\'s supporting specific feature', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@supports' },
          { name: '@page', desc: 'rules when printing a document', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@page' },
        ]
      },

  // }>>

    ],

// }>>




// <<{ computer_science

    computer_science: [

  // <<{ binary numbers

      {
        header: 'binary numbers',
        items: [
          { name: 'Обратный код', desc: 'чтобы записать отрицательное число, нужно перевернуть все разряды', link: 'https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%B4' },
          { name: 'Дополнительный код', desc: 'чтобы записать отрицательное число, нужно перевернуть все разряды и прибавить 1', link: 'https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%B4' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ network

    network: [

  // <<{ http

      {
        header: 'http',
        items: [
          { name: 'HTTP overview', desc: 'about HTTP protocol', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview' },
          { name: 'caching', desc: 'about HTTP caching', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching' },
          { name: 'cookies', desc: 'about HTTP cookies', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies' },
          { name: 'CORS', desc: 'about Cross-Origin Resource Sharing', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS' },
          { name: 'CSP', desc: 'about Content Security Policy', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP' },
          { name: 'HTTP versions', desc: 'about different HTTP versions', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP' },
          { name: 'Requests and Responses', desc: 'about HTTP messages', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages' },
          { name: 'typical HTTP session', desc: 'about typical HTTP session', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Session' },
          { name: 'connection management in HTTP/1.x', desc: 'about connection management in HTTP/1.x', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x' },
          { name: 'headers reference', desc: 'HTTP headers reference', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
          { name: 'methods reference', desc: 'HTTP methods reference', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods' },
          { name: 'codes reference', desc: 'HTTP response status codes reference', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status' },
        ]
      },

  // }>>

  // <<{ Созыкин - Компьютерные сети

      {
        header: 'Созыкин - Компьютерные сети',
        items: [
          { name: 'Классификация сетей', desc: 'классификация сетей', link: 'https://www.youtube.com/watch?v=Y4LK1OZ54h0&list=PLtPJ9lKvJ4oiNMvYbOzCmWy6cRzYAh9B1' },
          { name: 'Топология сетей', desc: 'топология сетей', link: 'https://www.youtube.com/watch?v=z8VmkYahV8M&list=PLtPJ9lKvJ4oiNMvYbOzCmWy6cRzYAh9B1&index=4' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ development

    development: [

  // <<{ security

      {
        header: 'security',
        items: [
          { name: 'Mozilla web security guidelines', desc: 'Mozilla web security guidelines', link: 'https://infosec.mozilla.org/guidelines/web_security' },
        ]
      },

  // }>>

  // <<{ PWA

      {
        header: 'PWA',
        items: [
          { name: 'PWA', desc: 'progressive web apps guide', link: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ windows

    windows: [

  // <<{ optimization

      {
        header: 'optimization',
        items: [
          { name: 'оптимизация и ускорение работы windows', desc: 'оптимизация и ускорение работы windows', link: 'https://sysadmintips.ru/vyzhimaem-iz-windows-10-maksimum-optimizatsiya-sistemy.html' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ linux

    linux: [

  // <<{ bash

      {
        header: 'bash',
        items: [
          { name: 'хабр - скрипты общее', desc: 'переменные, условия и общее для скриптов', link: 'https://habr.com/ru/company/ruvds/blog/325522/' },
          { name: 'хабр - циклы', desc: 'про циклы', link: 'https://habr.com/ru/company/ruvds/blog/325928/' },
          { name: 'хабр - параметры и ключи командной строки', desc: 'про параметры и ключи', link: 'https://habr.com/ru/company/ruvds/blog/326328/' },
          { name: 'хабр - ввод и вывод', desc: 'про ввод и вывод', link: 'https://habr.com/ru/company/ruvds/blog/326594/' },
          { name: 'хабр - сигналы, фоновые задачи', desc: 'про сигналы, фоновые задачи и управление сценариями', link: 'https://habr.com/ru/company/ruvds/blog/326826/' },
          { name: 'хабр - функции и разработка библиотек', desc: 'про функции и разработку библиотек', link: 'https://habr.com/ru/company/ruvds/blog/327248/' },
          { name: 'хабр - регулярные выражения', desc: 'про регулярные выражения', link: 'https://habr.com/ru/company/ruvds/blog/327896/' },
          { name: 'хабр - практические примеры', desc: 'практические примеры', link: 'https://habr.com/ru/company/ruvds/blog/328346/' },
          { name: 'brackets reference', desc: 'about different bash brackets', link: 'https://dev.to/rpalo/bash-brackets-quick-reference-4eh6' },
        ]
      },

  // }>>

  // <<{ ssh

      {
        header: 'ssh',
        items: [
          { name: 'ssh overview', desc: 'about ssh, servers and clients', link: 'https://www.ssh.com/academy/ssh' },
          { name: 'public key', desc: 'key for server to encrypt data', link: 'https://www.ssh.com/academy/cryptography/public-key' },
          { name: 'private key', desc: 'key for user to read data, encrypted by publix key on server', link: 'https://www.ssh.com/academy/cryptography/private-key' },
          { name: 'host key', desc: 'key for identifying hosts', link: 'https://www.ssh.com/academy/ssh/host-key' },
          { name: 'openssh', desc: 'open source implementation of the ssh protocol', link: 'https://www.ssh.com/academy/ssh/openssh' },
          { name: 'ssh', desc: 'openssh client', link: 'https://www.ssh.com/academy/ssh/command' },
          { name: 'ssh-keygen', desc: 'openssh tool for creating ssh key pairs', link: 'https://www.ssh.com/academy/ssh/keygen' },
          { name: 'ssh-copy-id', desc: 'openssh tool to install public key on the server', link: 'https://www.ssh.com/academy/ssh/copy-id' },
          { name: 'ssh-agent', desc: 'openssh agent to keep track of user\'s keys and passphrases', link: 'https://www.ssh.com/academy/ssh/agent' },
          { name: 'ssh-add', desc: 'openssh tool to add private keys to ssh agent', link: 'https://www.ssh.com/academy/ssh/add' },
          { name: 'sftp', desc: 'secure file transfer protocol', link: 'https://www.ssh.com/academy/ssh/sftp' },
          { name: 'scp', desc: 'secure copy protocol', link: 'https://www.ssh.com/academy/ssh/scp' },
          { name: 'sshd', desc: 'openssh server', link: 'https://www.ssh.com/academy/ssh/sshd' },
          { name: 'sshd_config', desc: 'configuration for ssh server located in /etc/ssh/sshd_config', link: 'https://www.ssh.com/academy/ssh/sshd_config' },
        ]
      },

  // }>>

  // <<{ awk

      {
        header: 'awk',
        items: [
          { name: 'awk', desc: 'how to use awk command', link: 'https://www.howtogeek.com/562941/how-to-use-the-awk-command-on-linux/' },
          { name: 'хабр - awk', desc: 'про awk', link: 'https://habr.com/ru/company/ruvds/blog/327754/' },
        ]
      },

  // }>>

  // <<{ i3

      {
        header: 'i3',
        items: [
          { name: 'i3 user guide', desc: 'user guide for i3 window manager', link: 'https://i3wm.org/docs/userguide.html' },
          { name: 'i3 layout saving', desc: 'guide for layout saving for i3 window manager', link: 'https://i3wm.org/docs/layout-saving.html' },
          { name: 'i3status', desc: 'configuration of the builtin bar manager in i3 window manager', link: 'https://i3wm.org/docs/i3status.html' },
        ]
      },

  // }>>

  // <<{ i3blocks

      {
        header: 'i3blocks',
        items: [
          { name: 'i3blocks', desc: 'more customizable bar manager for i3 wm', link: 'https://github.com/vivien/i3blocks#i3blocks' },
          { name: 'i3blocks-contrib', desc: 'community contributed blocklets for i3blocks', link: 'https://github.com/vivien/i3blocks-contrib' },
        ]
      },

  // }>>

  // <<{ ranger

      {
        header: 'ranger',
        items: [
          { name: 'ranger user guide', desc: 'shell file manager user guide', link: 'https://github.com/ranger/ranger/wiki/Official-user-guide#contents' },
          { name: 'ranger wiki', desc: 'shell file manager wiki', link: 'https://github.com/ranger/ranger/wiki' },
        ]
      },

  // }>>

  // <<{ fzf

      {
        header: 'fzf',
        items: [
          { name: 'fzf', desc: 'fuzzy finder utility', link: 'https://github.com/junegunn/fzf#table-of-contents' },
          { name: 'search syntax', desc: 'search syntax when searching in fzf', link: 'https://github.com/junegunn/fzf#search-syntax' },
        ]
      },

  // }>>

  // <<{ utilities

      {
        header: 'utilities',
        items: [
          { name: 'compton', desc: 'composition manager', link: 'https://github.com/chjj/compton#compton' },
          { name: 'rofi', desc: 'application launcher', link: 'https://github.com/davatorium/rofi#a-window-switcher-application-launcher-and-dmenu-replacement' },
          { name: 'fd', desc: 'fd finder, simple alternative to "find"', link: 'https://github.com/sharkdp/fd#fd' },
          { name: 'ripgrep', desc: 'line-oriented search tool', link: 'https://github.com/BurntSushi/ripgrep#ripgrep-rg' },
          { name: 'dunst', desc: 'configurable notification daemon', link: 'https://github.com/dunst-project/dunst#documentation' },
          { name: 'expect и автоматизация утилит', desc: 'про expect и автоматизацию интерактивных утилит', link: 'https://habr.com/ru/company/ruvds/blog/328436/' },
          { name: 'sed и обработка текстов', desc: 'про sed и обработку текстов', link: 'https://habr.com/ru/company/ruvds/blog/327530/' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ utilities

    utilities: [

  // <<{ vim

      {
        header: 'vim',
        items: [
          { name: 'vim cheat sheet', desc: 'vim cheat sheet', link: 'https://vim.rtorr.com/' },
          { name: 'normal mode', desc: 'different things you can do in normal mode', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Normal_mode.html' },
          { name: 'commands', desc: 'different commands to enter in command mode', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Command_Line_mode.html' },
          { name: 'visual mode', desc: 'about visual mode', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Visual_mode.html' },
          { name: 'recording macro', desc: 'how to record macro', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Recording_Macro.html' },
          { name: 'customization', desc: 'general vim customization', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Customizing_vim.html' },
          { name: 'regexp', desc: 'about regexp in search and replace', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Regular_Expressions.html' },
          { name: 'vim-plug', desc: 'vim-plug github page', link: 'https://github.com/junegunn/vim-plug#' },
          { name: 'vimawesome', desc: 'vim plugins hub page', link: 'https://vimawesome.com/' },
          { name: 'ranger.vim', desc: 'ranger vim plugin', link: 'https://github.com/francoiscabrol/ranger.vim' },
          { name: 'NERDTree', desc: 'nerdtree plugin', link: 'https://github.com/preservim/nerdtree#the-nerdtree-' },
          { name: 'Emmet-vim', desc: 'emmet plugin', link: 'https://github.com/mattn/emmet-vim#emmet-vim' },
          { name: 'fzf.vim', desc: 'fzf vim plugin', link: 'https://github.com/junegunn/fzf.vim#fzf-heart-vim' },
          { name: 'UltiSnips', desc: 'snippets plugin', link: 'https://github.com/SirVer/ultisnips#ultisnips' },
        ]
      },

  // }>>

  // <<{ git

      {
        header: 'git',
        items: [
          { name: 'git reference', desc: 'git commands reference', link: 'https://git-scm.com/docs' },
        ]
      },

  // }>>

  // <<{ photoshop

      {
        header: 'photoshop',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ vs code

      {
        header: 'vs code',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ chrome

      {
        header: 'chrome',
        items: [
        ]
      },

  // }>>

    ],

// }>>

// <<{ html

    html: [

  // <<{ html

      {
        header: 'html',
        items: [
          { name: 'tag reference', desc: 'tag reference', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element' },
          { name: 'names values in <meta>', desc: 'standard names values in <meta>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name' },
          { name: 'open graph', desc: 'protocol to create social graph objects from the page', link: 'https://ogp.me/' },
          { name: 'rel values', desc: 'possible rel values in <link>, <a>, <area> and <form>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types' },
          { name: 'preloading with rel="preload"', desc: 'how to start preloading resources early in the page lifecycle', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload' },
          { name: 'Quirks Mode and Standards Mode', desc: 'browser modes to display content', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode' },
          { name: 'Responsive images', desc: 'why and how use responsive images', link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images' },
          { name: 'global attributes', desc: 'attributes common to all HTML elements', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes' },
          { name: 'crossorigin', desc: 'crossorigin attribute for <link>, <img>, <video>, <audio> and <script>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin' },
        ]
      },

  // }>>

  // <<{ handlebars

      {
        header: 'handlebars',
        items: [
          { name: 'introduction', desc: 'about handlebars and its features', link: 'https://handlebarsjs.com/guide/' },
          { name: 'expressions', desc: 'about expressions', link: 'https://handlebarsjs.com/guide/expressions.html' },
          { name: 'partials', desc: 'about partials', link: 'https://handlebarsjs.com/guide/partials.html' },
          { name: 'block helpers', desc: 'about block helpers', link: 'https://handlebarsjs.com/guide/block-helpers.html' },
          { name: 'built-in helpers', desc: 'about built-in helpers', link: 'https://handlebarsjs.com/guide/builtin-helpers.html' },
          { name: 'precompiling templates', desc: 'how to precompile templates', link: 'https://handlebarsjs.com/installation/precompilation.html' },
          { name: 'api', desc: 'api reference', link: 'https://handlebarsjs.com/api-reference/' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ css

    css: [

  // <<{ css

      {
        header: 'css',
        items: [
          { name: 'css reference', desc: 'css reference', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index' },
          { name: 'at-rules', desc: 'css at-rules', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule' },
          { name: 'cascade', desc: 'how to combine props from different sources', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade' },
          { name: 'specificity', desc: 'selectors specificity when rules are matching', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity' },
          { name: 'block formatting context', desc: 'about block formatting context', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context' },
          { name: 'z-stacking context', desc: 'stacking rules along z axis', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context' },
          { name: 'containing block', desc: 'about element\'s containing block', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block' },
          { name: 'basic box model', desc: 'basic box model for each element, rendered by browser', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model' },
          { name: 'margin collapsing', desc: 'vertical margin collapsing', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing' },
          { name: 'Flex layout', desc: 'about flex layout', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout' },
          { name: 'Grid layout', desc: 'about Grid layout', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout' },
          { name: 'specified value', desc: 'value that actually written in style sheet', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/specified_value' },
          { name: 'computed value', desc: 'specified value after handling inherit/intial and converting relative values that don\'t depend on layout', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value' },
          { name: 'used value', desc: 'computed value after converting relative values that depend on layout, like width, height, margin, padding', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/used_value' },
          { name: 'actual value', desc: 'used value after making some local approximations, like rounding thickness of the border to the nearest integer', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/actual_value' },
          { name: 'resolved value', desc: 'value returned by getComputedStyle() - computed value, but for some props (width, height) returns used value', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/resolved_value' },
          { name: 'selectors', desc: 'css selectors', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors' },
          { name: 'units', desc: 'css units and values', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units' },
          { name: 'functions', desc: 'css functions', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions' },
          { name: 'using media queries', desc: 'using media queries', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries' },
          { name: 'using css variables', desc: 'using css custom properties', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' },
          { name: 'using overflow', desc: 'about overflow', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow' },
          { name: 'using css transitions', desc: 'how to use css transitions', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions' },
          { name: 'using css animation', desc: 'how to use animation', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations' },
          { name: 'using css transforms', desc: 'how to use css transforms', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms' },
          { name: 'using css shapes', desc: 'setting shape of a floating item', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes' },
          { name: 'using css counters', desc: 'using counters to automatically number stuff', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters' },
        ]
      },

  // }>>

  // <<{ sass

      {
        header: 'sass',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ javascript

    javascript: [

  // <<{ javascript

      {
        header: 'javascript',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ DOM

      {
        header: 'DOM',
        items: [
          { name: 'EventTarget', desc: 'interface for receiving events and attaching listeners', link: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget' },
          { name: 'Window', desc: 'interface for a browser window', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Window' },
          { name: 'Node', desc: 'interface for a node in DOM tree', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Node' },
          { name: 'Document', desc: 'interface for a loaded web page', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document' },
          { name: 'DocumentFragment', desc: 'interface for a document fragment', link: 'https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment' },
          { name: 'Element', desc: 'interface for an element', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Element' },
          { name: 'HTMLElement', desc: 'interface for an HTML element', link: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement' },
          { name: 'HTMLCollection', desc: 'interface for a live collection of elements', link: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection' },
          { name: 'NodeList', desc: 'interface for a live and static collection of nodes', link: 'https://developer.mozilla.org/en-US/docs/Web/API/NodeList' },
          { name: 'TreeWalker', desc: 'inteface for nodes with their position in subtree', link: 'https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker' },
          { name: 'Event', desc: 'interface for an event', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Event' },
          { name: 'Event reference', desc: 'event reference', link: 'https://developer.mozilla.org/en-US/docs/Web/Events' },
        ]
      },

  // }>>

  // <<{ typescript

      {
        header: 'typescript',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ webpack

      {
        header: 'webpack',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ react

      {
        header: 'react',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ eslint

      {
        header: 'eslint',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ babel

      {
        header: 'babel',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ browser-sync

      {
        header: 'browser-sync',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ browserify

      {
        header: 'browserify',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ uglifyjs

      {
        header: 'uglifyjs',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ Font Loading api

      {
        header: 'Font Loading api',
        items: [
          { name: 'CSS Font Loading api', desc: 'dynamically loading fonts', link: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API' },
          { name: 'FontFace', desc: 'interface for a single loadable font', link: 'https://developer.mozilla.org/en-US/docs/Web/API/FontFace' },
        ]
      },

  // }>>

  // <<{ CSSOM

      {
        header: 'CSSOM',
        items: [
          { name: 'CSSOM', desc: 'interfaces for css manipulation from javascript, like DOM but for CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model' },
        ]
      },

  // }>>

  // <<{ Canvas api

      {
        header: 'Canvas api',
        items: [
          { name: 'canvas api', desc: 'drawing 2D graphics via javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API' },
          { name: 'HTMLCanvasElement', desc: 'interface for <canvas> element', link: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement' },
          { name: 'CanvasRenderingContext2D', desc: 'interface for 2D drawing on the <canvas> element', link: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D' },
        ]
      },

  // }>>

  // <<{ Console api

      {
        header: 'Console api',
        items: [
          { name: 'Console', desc: 'interface for browser debugging console', link: 'https://developer.mozilla.org/en-US/docs/Web/API/console' },
        ]
      },

  // }>>

  // <<{ Fetch api

      {
        header: 'Fetch api',
        items: [
          { name: 'Fetch api', desc: 'api for fetching resources', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
          { name: 'fetch()', desc: 'function for fetching resources', link: 'https://developer.mozilla.org/en-US/docs/Web/API/fetch' },
          { name: 'Headers', desc: 'interface for configuring request HTTP headers', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Headers' },
          { name: 'Request', desc: 'interface for a request', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Request' },
          { name: 'Response', desc: 'interface for a response to a request', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Response' },
        ]
      },

  // }>>

  // <<{ File api

      {
        header: 'File api',
        items: [
          { name: 'Using File api', desc: 'using file api', link: 'https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications' },
          { name: 'FileList', desc: 'list of files, returned by the files prop of the <input type="file"> element', link: 'https://developer.mozilla.org/en-US/docs/Web/API/FileList' },
          { name: 'File', desc: 'interface for a file in FileList', link: 'https://developer.mozilla.org/en-US/docs/Web/API/File' },
          { name: 'FileReader', desc: 'interface for asynchronously read the contents of the file', link: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReader' },
        ]
      },

  // }>>

  // <<{ Fullscreen api

      {
        header: 'Fullscreen api',
        items: [
          { name: 'Fullscreen api guide', desc: 'fullscreen api guide', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide' },
          { name: 'Fullscreen api', desc: 'fullscreen api', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API' },
        ]
      },

  // }>>

  // <<{ Drag and Drop api

      {
        header: 'Drag and Drop api',
        items: [
          { name: 'Drag and Drop api', desc: 'enables to use drag and drop features', link: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API' },
        ]
      },

  // }>>

  // <<{ History api

      {
        header: 'History api',
        items: [
          { name: 'History api', desc: 'access to the browser session history', link: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API' },
          { name: 'History', desc: 'interface for manipulating browser session history', link: 'https://developer.mozilla.org/en-US/docs/Web/API/History' },
        ]
      },

  // }>>

  // <<{ IndexedDB api

      {
        header: 'IndexedDB api',
        items: [
          { name: 'Using IndexedDB', desc: 'how to use IndexedDB', link: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB' },
          { name: 'IndexedDB api', desc: 'client-side storage of big data', link: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API' },
        ]
      },

  // }>>

  // <<{ Intersectin Observer api

      {
        header: 'Intersection Observer api',
        items: [
          { name: 'Intersection Observer api', desc: 'asynchronously observer changes in the intersection of the target element', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' },
        ]
      },

  // }>>

  // <<{ Performance api

      {
        header: 'Performance api',
        items: [
          { name: 'Performance api', desc: 'client-side latency measurements', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API' },
        ]
      },

  // }>>

  // <<{ Streams api

      {
        header: 'Streams api',
        items: [
          { name: 'Streams api', desc: 'accessing streams of data received over the network', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API' },
        ]
      },

  // }>>

  // <<{ URL api

      {
        header: 'URL api',
        items: [
          { name: 'URL api', desc: 'access and manipulate URL', link: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_API' },
          { name: 'URL', desc: 'interface for URL', link: 'https://developer.mozilla.org/en-US/docs/Web/API/URL' },
          { name: 'URLSearchParams', desc: 'interface for a query string of a URL', link: 'https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams' },
        ]
      },

  // }>>

  // <<{ Web Animations api

      {
        header: 'Web Animations api',
        items: [
          { name: 'Web Animations api', desc: 'animations over javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API' },
          { name: 'using web animations api', desc: 'using web animations api', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API' },
        ]
      },

  // }>>

  // <<{ Web Storage api

      {
        header: 'Web Storage api',
        items: [
          { name: 'Web Storage api', desc: 'storing key/values pairs in the browser', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API' },
        ]
      },

  // }>>

  // <<{ Web Workers api

      {
        header: 'Web Workers api',
        items: [
          { name: 'Web Workers api', desc: 'creating threads in javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API' },
        ]
      },

  // }>>

  // <<{ WebSocket api

      {
        header: 'WebSocket api',
        items: [
          { name: 'WebSocket api', desc: 'two-way communication between browser and server', link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
        ]
      },

  // }>>

  // <<{ XMLHttpRequest

      {
        header: 'XMLHttpRequest',
        items: [
          { name: 'XMLHttpRequest', desc: 'making asynchronous requests to the server', link: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ nodejs

    nodejs: [

  // <<{ nodejs

      {
        header: 'nodejs',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ php

    php: [

  // <<{ php

      {
        header: 'php',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ servers

    servers: [

  // <<{ apache

      {
        header: 'apache',
        items: [
          { name: 'installation', desc: 'apache and php installation on Linux', link: 'https://medium.com/@bahadirmezgil/how-to-install-php-and-apache-on-linux-ubuntu-linux-mint-ea73a1c1c426' },
          { name: 'apache 2.4 documentation', desc: 'apache 2.4 documentation', link: 'https://httpd.apache.org/docs/2.4/' },
          { name: 'apache configuration: .htaccess', desc: 'apache configuration with .htaccess', link: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess' },
        ]
      },

  // }>>

  // <<{ nginx

      {
        header: 'nginx',
        items: [
          { name: 'nginx documentation', desc: 'nginx documentation', link: 'https://nginx.org/en/docs/' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ databases

    databases: [

  // <<{ sql

      {
        header: 'sql',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ services

    services: [

  // <<{ fonts

      {
        header: 'fonts',
        items: [
          { name: 'google fonts', desc: 'google fonts', link: 'https://fonts.google.com/' },
          { name: 'fontsquirrel', desc: 'download free fonts', link: 'https://www.fontsquirrel.com/' },
        ]
      },

  // }>>

  // <<{ icons

      {
        header: 'icons',
        items: [
          { name: 'font awesome cheetsheet', desc: 'font awesome cheetsheet', link: 'https://fontawesome.com/v5/cheatsheet' },
          { name: 'icofont cheetsheet', desc: 'icofont cheetsheet', link: 'https://icofont.com/icons' },
        ]
      },

  // }>>

  // <<{ chars

      {
        header: 'chars',
        items: [
          { name: 'character entities for HTML, CSS', desc: 'character table with its html (&#38;&#35;34&#59;) and css (\\0022) values', link: 'https://oinam.github.io/entities/' },
          { name: 'unicode char table', desc: 'unicode char table', link: 'https://unicode-table.com/en/' },
        ]
      },

  // }>>

  // <<{ number translation

      {
        header: 'number translation',
        items: [
          { name: 'Перевод в разные системы исчисления', desc: 'Перевод в разные системы исчисления', link: 'https://programforyou.ru/calculators/number-systems' },
        ]
      },

  // }>>

  // <<{ github

      {
        header: 'github',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

  // <<{ translators

      {
        header: 'translators',
        items: [
          { name: 'google переводчик', desc: 'google переводчик', link: 'https://translate.google.com/?hl=ru' },
        ]
      },

  // }>>

  // <<{ bitrix24

      {
        header: 'bitrix24',
        items: [
          { name: 'bitrix24', desc: 'bitrix24 admin page', link: 'https://uborshchiki.bitrix24.ua/stream/' },
          { name: 'helpdesk', desc: 'bitrix24 helpdesk', link: 'https://helpdesk.bitrix24.ru/' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ <books>

// <<{ shotts_linux_command_line

    shotts_linux_command_line: [

  // <<{ командная оболочка

      {
        header: 'командная оболочка',
        items: [
          { name: 'что такое командная строка', desc: 'что такое командная строка и эмуляторы терминалов', link: `${books.shotts_command_line}#page=26` },
          { name: 'консоль за кулисами', desc: 'о сеансах терминалов за ширмой рабочего стола и как между ними переключаться', link: `${books.shotts_command_line}#page=29` },
          { name: 'оболочка входа и простая оболочка', desc: '2 типа сеансов работы с оболочкой', link: `${books.shotts_command_line}#page=137` },
          { name: 'горячие клавиши оболочки', desc: 'горячие клавиши оболочки', link: `${books.shotts_command_line}#page=94` },
          { name: 'автодополнение с помощью tab', desc: 'автодополненине с помощью tab', link: `${books.shotts_command_line}#page=95` },
          { name: 'script', desc: 'запись в файл сеансов работы с оболочкой', link: `${books.shotts_command_line}#page=100` },
        ]
      },

  // }>>

  // <<{ подстановка в командной оболочке

      {
        header: 'подстановка в командной оболочке',
        items: [
          { name: 'wildcards для имен файлов', desc: 'групповые символы и классы символов', link: `${books.shotts_command_line}#page=46` },
          { name: 'подстановка путей и имен файлов', desc: 'подстановка результатов вместо wildcards перед выполнением команды', link: `${books.shotts_command_line}#page=82` },
          { name: 'подстановка арифметических выражений', desc: 'подстановка результатов арифметических выражений', link: `${books.shotts_command_line}#page=85` },
          { name: 'подстановка множества из {}', desc: 'подстановка множества из фигурных скобок', link: `${books.shotts_command_line}#page=86` },
          { name: 'подстановка вывода команд', desc: 'подстановка stdout команды с помощью ${}', link: `${books.shotts_command_line}#page=87` },
          { name: 'подстановка команды из истории', desc: 'подстановка команды из истории', link: `${books.shotts_command_line}#page=99` },
        ]
      },

  // }>>

  // <<{ экранирование

      {
        header: 'экранирование',
        items: [
          { name: 'экранирование с помощью двойных кавычек', desc: 'все спецсимволы кроме $, /, ` теряют значение', link: `${books.shotts_command_line}#page=89` },
          { name: 'экранирование с помощью одиночных кавычек', desc: 'все спецсимволы теряют значение', link: `${books.shotts_command_line}#page=90` },
          { name: 'экранирование символов с помощью \\', desc: 'экранирование одного символа', link: `${books.shotts_command_line}#page=91` },
          { name: 'спецсимволы \\n,\\r, \\t', desc: 'использование спецсимволов в командах', link: `${books.shotts_command_line}#page=92` },
        ]
      },

  // }>>

  // <<{ перенаправления ввода/вывода

      {
        header: 'перенаправления ввода/вывода',
        items: [
          { name: 'stdin, stdout, stderr', desc: 'немного о стандартных вводах и выводах', link: `${books.shotts_command_line}#page=70` },
          { name: 'перенаправление stdout', desc: 'как перенаправить stdout в файл', link: `${books.shotts_command_line}#page=71` },
          { name: 'перенаправление stderr', desc: 'как перенаправить stderr в файл', link: `${books.shotts_command_line}#page=72` },
          { name: 'перенаправление stdout и stderr', desc: 'как перенаправить stdout вместе с stderr в файл', link: `${books.shotts_command_line}#page=73` },
          { name: 'перенаправление в /dev/null', desc: 'как избавиться от нежелательного вывода', link: `${books.shotts_command_line}#page=73` },
          { name: 'перенаправление stdin', desc: 'как перенаправить stdin в файл', link: `${books.shotts_command_line}#page=75` },
          { name: 'оператор перенаправления <', desc: 'изменение ввода, вместо stdin - файл', link: `${books.shotts_command_line}#page=76` },
          { name: 'piping', desc: 'перенаправление вывода команды на ввод другой команды', link: `${books.shotts_command_line}#page=76` },
          { name: 'tee', desc: 'получает данные с stdin и передает одновременно в stdout и в файл', link: `${books.shotts_command_line}#page=79` },
        ]
      },

  // }>>

  // <<{ конфигурация командной оболочки

      {
        header: 'конфигурация командной оболочки',
        items: [
          { name: 'source .bashrc', desc: 'выполнить .bashrc в текущем сеансе оболочки', link: `${books.shotts_command_line}#page=144` },
          { name: 'alias', desc: 'создание псеводнимов', link: `${books.shotts_command_line}#page=68` },
          { name: 'спецсимволы, используемые в $PS1', desc: 'экранированные последовательности, используемые в строке приглашения', link: `${books.shotts_command_line}#page=164` },
          { name: 'спецсимволы цвета, используемые в $PS1', desc: 'экранированные последовательности цвета, используемые в строке приглашения', link: `${books.shotts_command_line}#page=167` },
          { name: 'спецсимолы позиции курсора, используемые в $PS1', desc: 'экранированные последовательности позиции курсора, используемые в строке приглашения', link: `${books.shotts_command_line}#page=169` },
        ]
      },

  // }>>

  // <<{ переменные окружения

      {
        header: 'переменные окружения',
        items: [
          { name: 'printenv', desc: 'вывод переменных окружения', link: `${books.shotts_command_line}#page=135` },
          { name: 'set', desc: 'вывод переменных окружения и оболочки и установка их значений', link: `${books.shotts_command_line}#page=135` },
          { name: 'некоторые переменные окружения', desc: 'некоторые переменные окружения', link: `${books.shotts_command_line}#page=136` },
          { name: 'export', desc: 'сделать содержимое переменной доступным дочерним процессам этой оболочки', link: `${books.shotts_command_line}#page=140` },
        ]
      },

  // }>>

  // <<{ информация о командах

      {
        header: 'информация о командах',
        items: [
          { name: 'что такое команды', desc: 'про разные типы команд', link: `${books.shotts_command_line}#page=60` },
          { name: 'type', desc: 'определение типа команды', link: `${books.shotts_command_line}#page=61` },
          { name: 'which', desc: 'определение местоположения исполняемого файла', link: `${books.shotts_command_line}#page=61` },
          { name: 'help', desc: 'получение справки для встроенных комманд (cd)', link: `${books.shotts_command_line}#page=62` },
          { name: 'man', desc: 'вывод одностраничного справочника для команды', link: `${books.shotts_command_line}#page=63` },
          { name: 'apropos', desc: 'поиск команды по ключевому слову в описании', link: `${books.shotts_command_line}#page=65` },
          { name: 'whatis', desc: 'вывод однострочного описания команды', link: `${books.shotts_command_line}#page=66` },
          { name: 'info', desc: 'вывод многостраничного справочника для команды', link: `${books.shotts_command_line}#page=66` },
        ]
      },

  // }>>

  // <<{ файловая система

      {
        header: 'файловая система',
        items: [
          { name: 'об именах файлов', desc: 'некоторые факты об именах файлов', link: `${books.shotts_command_line}#page=34` },
          { name: 'структура каталогов linux', desc: 'структура каталогов linux', link: `${books.shotts_command_line}#page=41` },
          { name: 'немного про inode', desc: 'что такое inode и как его посмотреть', link: `${books.shotts_command_line}#page=56` },
          { name: 'pwd', desc: 'о команде print working directory', link: `${books.shotts_command_line}#page=31` },
          { name: 'cd', desc: 'о команде change current working directory', link: `${books.shotts_command_line}#page=33` },
          { name: 'ls', desc: 'о команде list files', link: `${books.shotts_command_line}#page=35` },
          { name: 'ls -l', desc: 'поля формата ls -l', link: `${books.shotts_command_line}#page=38` },
          { name: 'file', desc: 'определение типа файла', link: `${books.shotts_command_line}#page=38` },
          { name: 'mkdir', desc: 'создание каталогов', link: `${books.shotts_command_line}#page=48` },
          { name: 'cp', desc: 'копирование файлов', link: `${books.shotts_command_line}#page=48` },
          { name: 'mv', desc: 'перемещение файлов', link: `${books.shotts_command_line}#page=49` },
          { name: 'rm', desc: 'удаление файлов', link: `${books.shotts_command_line}#page=50` },
          { name: 'ln', desc: 'о жестких и симолических ссылках и их создании', link: `${books.shotts_command_line}#page=52` },
          { name: 'touch', desc: 'создание нового файла или обновление времени модификации', link: `${books.shotts_command_line}#page=226` },
          { name: 'stat', desc: 'полная информация о файле', link: `${books.shotts_command_line}#page=226` },
        ]
      },

  // }>>

  // <<{ содержимое файлов

      {
        header: 'содержимое файлов',
        items: [
          { name: 'что такое текст', desc: 'что такое текст, редакторы и текстовые процессоры', link: `${books.shotts_command_line}#page=39` },
          { name: 'less', desc: 'просмотр содержимого файла', link: `${books.shotts_command_line}#page=39` },
          { name: 'cat', desc: 'показать содержимое файлов в stdout', link: `${books.shotts_command_line}#page=74` },
          { name: 'head/tail', desc: 'вывод первых/последних n строк содержимого файла', link: `${books.shotts_command_line}#page=78` },
          { name: 'sort', desc: 'сортировка результатов выводы', link: `${books.shotts_command_line}#page=76` },
          { name: 'uniq', desc: 'поиск или удаление повторяющихся строк', link: `${books.shotts_command_line}#page=77` },
          { name: 'wc', desc: 'cчетчик строк, слов, символов, байтов', link: `${books.shotts_command_line}#page=77` },
        ]
      },

  // }>>

  // <<{ разрешения файлов

      {
        header: 'разрешения файлов',
        items: [
          { name: 'подробнее о -rwxrw-r--', desc: 'подробнее о типах файлов и привелегиях', link: `${books.shotts_command_line}#page=104` },
          { name: 'восмеричные и двоичные маски привелегий', desc: 'изменение режима доступа к файлу', link: `${books.shotts_command_line}#page=107` },
          { name: 'umask', desc: 'показать/установить разрашенеия по умолчанию для новых файлов', link: `${books.shotts_command_line}#page=109` },
          { name: 'разрешения setuid, setgid, sticky bit', desc: 'об установке специальных разрешений', link: `${books.shotts_command_line}#page=111` },
          { name: 'chmod', desc: 'изменение режима доступа к файлу', link: `${books.shotts_command_line}#page=105` },
          { name: 'chown', desc: 'изменение владельца и группы файла', link: `${books.shotts_command_line}#page=115` },
          { name: 'chgrp', desc: 'изменение группы файла', link: `${books.shotts_command_line}#page=116` },
        ]
      },

  // }>>

  // <<{ пользователи

      {
        header: 'пользователи',
        items: [
          { name: 'id', desc: 'идентификаторы пользователя и групп куда он входит', link: `${books.shotts_command_line}#page=102` },
          { name: 'способы сменить пользователя', desc: '3 способа как сменить пользователя', link: `${books.shotts_command_line}#page=112` },
          { name: 'su', desc: 'запуск нового сеанса оболочки от имени другого пользователя', link: `${books.shotts_command_line}#page=112` },
          { name: 'sudo', desc: 'выполнение команды от имени другого пользователя', link: `${books.shotts_command_line}#page=113` },
          { name: 'passwd', desc: 'изменение пароля', link: `${books.shotts_command_line}#page=118` },
        ]
      },

  // }>>

  // <<{ поиск

      {
        header: 'поиск',
        items: [
          { name: 'поиск в истории', desc: 'поиск в истории команд', link: `${books.shotts_command_line}#page=97` },
          { name: 'locate', desc: 'поиск файлов по имени в базе данных файлов, которая обновляется раз в сутки программой updatedb', link: `${books.shotts_command_line}#page=214` },
          { name: 'find', desc: 'поиск файлов в указаном каталоге по параметрам -type, -name, -size и т.д.', link: `${books.shotts_command_line}#page=216` },
          { name: 'операторы find', desc: 'логические операторы при задании параметров в find, по умолчанию -and ', link: `${books.shotts_command_line}#page=220` },
          { name: 'операции find', desc: 'операции с найденными файлами, по умолчанию -print', link: `${books.shotts_command_line}#page=222` },
          { name: 'xargs', desc: 'преобразует вводные данные в список параметров указанной команды', link: `${books.shotts_command_line}#page=225` },
          { name: 'использование null character в find/xargs', desc: 'использование null character в find/xargs', link: `${books.shotts_command_line}#page=225` },
          { name: 'grep', desc: 'поиск по регулярному выражению', link: `${books.shotts_command_line}#page=245` },
        ]
      },

  // }>>

  // <<{ regexp

      {
        header: 'regexp',
        items: [
          { name: 'posix regexp - любой символ', desc: 'любой 1 символ - точка (.)', link: `${books.shotts_command_line}#page=247` },
          { name: 'posix regexp - начало/конец строки', desc: 'начало/конец строки - ^, $', link: `${books.shotts_command_line}#page=248` },
          { name: 'словарь в linux', desc: 'словари в linux и поиск слов в них', link: `${books.shotts_command_line}#page=248` },
          { name: 'posix regexp - диапазон символов', desc: 'диапазон символов - [abc]', link: `${books.shotts_command_line}#page=249` },
          { name: 'posix regexp - классы символов', desc: 'классы символов - [[:word:]]', link: `${books.shotts_command_line}#page=251` },
        ]
      },

  // }>>

  // <<{ процессы

      {
        header: 'процессы',
        items: [
          { name: 'как действует процесс', desc: 'что такое процесс и как он действует', link: `${books.shotts_command_line}#page=120` },
          { name: 'ps', desc: 'просмотр списка процессов', link: `${books.shotts_command_line}#page=121` },
          { name: 'top', desc: 'просмотр состояния процессов в динамике', link: `${books.shotts_command_line}#page=123` },
          { name: 'command &', desc: 'перевод процессa в фоновый режим при запуске', link: `${books.shotts_command_line}#page=126` },
          { name: 'jobs', desc: 'список процессов, переведенных в фоновый режим', link: `${books.shotts_command_line}#page=127` },
          { name: 'fg', desc: 'перевод процесса на передний план', link: `${books.shotts_command_line}#page=127` },
          { name: 'приостановка процесса', desc: 'перевод процесса в фоновый режим во время его работы', link: `${books.shotts_command_line}#page=128` },
          { name: 'bg', desc: 'перевод процесса в фоновый режим', link: `${books.shotts_command_line}#page=128` },
          { name: 'kill', desc: 'посылание сигналов процессам', link: `${books.shotts_command_line}#page=129` },
          { name: 'сигналы, посылаемые процессам', desc: 'часто используемые сигналы, посылаемые процессам с помощью kill или горячих клавиш', link: `${books.shotts_command_line}#page=129` },
          { name: 'killall', desc: 'посылание сигналов нескольним процессам', link: `${books.shotts_command_line}#page=131` },
          { name: 'pstree', desc: 'выводит список процессов в древовидной форме', link: `${books.shotts_command_line}#page=132` },
          { name: 'vmstat', desc: 'снэпшот использования системных ресурсов', link: `${books.shotts_command_line}#page=132` },
          { name: 'xload', desc: 'изменение нагрузки на систему с течением времени', link: `${books.shotts_command_line}#page=132` },
          { name: 'tload', desc: 'график изменения нагрузки на систему с течением времени', link: `${books.shotts_command_line}#page=132` },
        ]
      },

  // }>>

  // <<{ устройства

      {
        header: 'устройства',
        items: [
          { name: 'монтирование устройств', desc: 'про монтирование и про файл /etc/fstab, где перечисляются устройства, монтируемые на этапе загрузки', link: `${books.shotts_command_line}#page=183` },
          { name: 'mount', desc: 'монтирование файловых систем и просмотр списка уже смотнированых', link: `${books.shotts_command_line}#page=184` },
          { name: 'umount', desc: 'размонтирование подключенных файловых систем', link: `${books.shotts_command_line}#page=186` },
          { name: 'почему важно размонтировать устройства', desc: 'о буферах между устройством и операционной системой', link: `${books.shotts_command_line}#page=187` },
          { name: 'определение названия устройства', desc: 'определения названия устройства с помощью простмотра логов при его подключении', link: `${books.shotts_command_line}#page=188` },
          { name: 'fsdisk', desc: 'управление разделами на устройствах хранения', link: `${books.shotts_command_line}#page=191` },
          { name: 'mkfs', desc: 'создание новой файловой системы', link: `${books.shotts_command_line}#page=193` },
          { name: 'fsck', desc: 'проверка файловой системы на целостность', link: `${books.shotts_command_line}#page=194` },
          { name: 'dd', desc: 'копирование блоков данных из одного места в другое', link: `${books.shotts_command_line}#page=196` },
          { name: 'создание iso образа диска', desc: 'создание iso образа с помощью dd', link: `${books.shotts_command_line}#page=196` },
          { name: 'genisoimage', desc: 'создание iso образа из каталога', link: `${books.shotts_command_line}#page=197` },
          { name: 'монтирование iso образов', desc: 'монтирование локальных образов как устрoйства', link: `${books.shotts_command_line}#page=198` },
          { name: 'wodim', desc: 'очистка компакт-диска и запись на него образов', link: `${books.shotts_command_line}#page=198` },
          { name: 'md5sum', desc: 'контрольная сумма устройства/образа', link: `${books.shotts_command_line}#page=199` },
        ]
      },

  // }>>

  // <<{ сеть

      {
        header: 'сеть',
        items: [
          { name: 'ping', desc: 'проверка соединения с помощью отсылки ICMP сообщения ECHO_REQUEST', link: `${books.shotts_command_line}#page=201` },
          { name: 'traceroute', desc: 'трассировка маршрутизаторов на пути к целевому адресу', link: `${books.shotts_command_line}#page=202` },
          { name: 'netstat', desc: 'просмотр параметров сети', link: `${books.shotts_command_line}#page=203` },
          { name: 'ftp', desc: 'передача файлов по ftp', link: `${books.shotts_command_line}#page=205` },
          { name: 'wget', desc: 'загрузчик файлов и содержимого сайтов', link: `${books.shotts_command_line}#page=207` },
          { name: 'ssh', desc: 'шифрованное взаимодействие с удаленными хостами', link: `${books.shotts_command_line}#page=208` },
          { name: 'scp', desc: 'шифрованное копирование файлов с удаленного хоста', link: `${books.shotts_command_line}#page=212` },
          { name: 'sftp', desc: 'шифрованная передача файлов по ftp', link: `${books.shotts_command_line}#page=212` },
          { name: 'rsync', desc: 'синхронизация файлов с удаленной системой', link: `${books.shotts_command_line}#page=240` },
        ]
      },

  // }>>

  // <<{ архивация

      {
        header: 'архивация',
        items: [
          { name: 'gzip/gunzip', desc: 'сжатие/восстановление сжатых файлов', link: `${books.shotts_command_line}#page=230` },
          { name: 'bzip2/bunzip2', desc: 'сжатие/восстановление сжатых файлов с более высокой степенью, чем gzip', link: `${books.shotts_command_line}#page=232` },
          { name: 'что будет, если сжать уже сжатый файл', desc: 'что будет, если сжать уже сжатый файл', link: `${books.shotts_command_line}#page=233` },
          { name: 'tar', desc: 'архивирование файлов', link: `${books.shotts_command_line}#page=233` },
          { name: 'zip/unzip', desc: 'архивирование и сжатие/восстановление файлов', link: `${books.shotts_command_line}#page=238` },
        ]
      },

  // }>>

  // <<{ mix

      {
        header: 'mix',
        items: [

          { name: 'posix regexp - BRE и ERE', desc: 'простые и расширенные регулярные выражения', link: `${books.shotts_command_line}#page=254` },
        ]
      },

  // }>>

    ],

// }>>

// <<{ bash_manual

    bash_manual: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'what is shell and bash', desc: 'about bash and shell', link: `${books.bash_manual}#page=7` },
          { name: 'escape character \\', desc: 'preserves the literal value of the next character', link: `${books.bash_manual}#page=12` },
          { name: 'escape with single quotes', desc: 'preserves the literal value of each character within', link: `${books.bash_manual}#page=12` },
          { name: 'escape with double quotes', desc: 'preserves the literal value of each character, except $, \', \\', link: `${books.bash_manual}#page=12` },
          { name: 'ANSI-C quoting', desc: 'special chars inside $\'...\', for example - $\'\\n\' expands to new line', link: `${books.bash_manual}#page=12` },
          { name: 'piplines', desc: 'about piping commands', link: `${books.bash_manual}#page=14` },
          { name: 'listing commands', desc: 'listing commands with ;, && and ||', link: `${books.bash_manual}#page=15` },
          { name: 'looping', desc: 'using for, while, until', link: `${books.bash_manual}#page=16` },
          { name: 'conditionals', desc: 'using if, case, select', link: `${books.bash_manual}#page=17` },
          { name: 'grouping commands', desc: 'grouping commands with () and {}', link: `${books.bash_manual}#page=21` },
          { name: 'coprocesses', desc: 'executed asynchronously in a subshell', link: `${books.bash_manual}#page=21` },
          { name: 'parallel', desc: 'run commands in parallel', link: `${books.bash_manual}#page=22` },
          { name: 'functions', desc: 'about shell functions', link: `${books.bash_manual}#page=24` },
        ]
      },

  // }>>

    ],

// }>>

// <<{ progit

    progit: [

  // <<{ about git

      {
        header: 'about git',
        items: [
          { name: 'local vcs', desc: 'about local version control systems', link: `${books.progit}#page=14` },
          { name: 'centralized vcs', desc: 'about cetralized version control systems', link: `${books.progit}#page=15` },
          { name: 'distributed vcs', desc: 'about distributed version control systems', link: `${books.progit}#page=16` },
          { name: 'what is git', desc: 'what is git in a nutshell', link: `${books.progit}#page=18` },
        ]
      },

  // }>>

  // <<{ configuration

      {
        header: 'configuration',
        items: [
          { name: 'config files', desc: 'where are git config files and how to write in them', link: `${books.progit}#page=25` },
          { name: 'config user', desc: 'config name and email', link: `${books.progit}#page=26` },
          { name: 'config editor', desc: 'config default editor for typing messages', link: `${books.progit}#page=26` },
          { name: 'config default branch name', desc: 'config default default branch name instead of master', link: `${books.progit}#page=27` },
          { name: 'config list settings', desc: 'check your config settings', link: `${books.progit}#page=27` },
          { name: 'git aliases', desc: 'creating aliases for commands', link: `${books.progit}#page=67` },
          { name: '.gitignore', desc: 'about .gitignore', link: `${books.progit}#page=36` },
        ]
      },

  // }>>

  // <<{ repository

      {
        header: 'repository',
        items: [
          { name: 'initialize repository', desc: 'initialize repository with init', link: `${books.progit}#page=30` },
          { name: 'cloning repository', desc: 'cloning repository with clone', link: `${books.progit}#page=31` },
        ]
      },

  // }>>

  // <<{ checking info

      {
        header: 'checking info',
        items: [
          { name: 'check file status', desc: 'check file status with git status', link: `${books.progit}#page=32` },
          { name: 'short status', desc: 'about git status -s', link: `${books.progit}#page=35` },
          { name: 'viewwing staged and unstaged changes', desc: 'about git diff', link: `${books.progit}#page=37` },
          { name: 'viewing commit history', desc: 'about git log', link: `${books.progit}#page=44` },
          { name: 'options for git log', desc: 'options for git log', link: `${books.progit}#page=49` },
          { name: 'options for limit output in git log', desc: 'options for limit output in git log', link: `${books.progit}#page=50` },
          { name: 'specifiers for git log --pretty=format', desc: 'specifiers for git log --pretty=format', link: `${books.progit}#page=48` },
        ]
      },

  // }>>

  // <<{ staging

      {
        header: 'staging',
        items: [
          { name: 'about tracked and untracked files', desc: 'about tracked and untracked files', link: `${books.progit}#page=32` },
          { name: 'add new files', desc: 'add files with git add', link: `${books.progit}#page=33` },
          { name: 'unstage a staged file (reset)', desc: 'about git reset HEAD <file>', link: `${books.progit}#page=52` },
          { name: 'unstage a staged filr (restore)', desc: 'about git restore --staged <file>', link: `${books.progit}#page=54` },
          { name: 'unmodify a modified file (checkout)', desc: 'about git checkout -- <file>', link: `${books.progit}#page=53` },
          { name: 'unmodify a modified file (restore)', desc: 'about git restore <file>', link: `${books.progit}#page=55` },
        ]
      },

  // }>>

  // <<{ commiting

      {
        header: 'commiting',
        items: [
          { name: 'commiting', desc: 'about git commit', link: `${books.progit}#page=40` },
          { name: 'skipping staging area', desc: 'about git commit -a', link: `${books.progit}#page=42` },
          { name: 'uncommit', desc: 'about git commit --amend', link: `${books.progit}#page=51` },
        ]
      },

  // }>>

  // <<{ remotes

      {
        header: 'remotes',
        items: [
          { name: 'showing remotes', desc: 'about git remote -v', link: `${books.progit}#page=56` },
          { name: 'adding remotes', desc: 'about git remote add <shortname> <url>', link: `${books.progit}#page=57` },
          { name: 'fetching from remotes', desc: 'about git fetch <remote> and git pull', link: `${books.progit}#page=58` },
          { name: 'pushing to remotes', desc: 'about git push <remote> <branch>', link: `${books.progit}#page=58` },
          { name: 'info about remotes', desc: 'about git remote show <remote>', link: `${books.progit}#page=59` },
          { name: 'renaming remotes', desc: 'about git remote rename <old> <new>', link: `${books.progit}#page=60` },
          { name: 'delete remotes', desc: 'about git remote remove <remote>', link: `${books.progit}#page=60` },
        ]
      },

  // }>>

  // <<{ branches

      {
        header: 'branches',
        items: [
          { name: 'branches in a nutshell', desc: 'branches in a nutshell', link: `${books.progit}#page=69` },
          { name: 'creating branch', desc: 'about git branch <name>', link: `${books.progit}#page=71` },
          { name: 'switching branches', desc: 'about git checkout <branch>', link: `${books.progit}#page=72` },
          { name: 'git switch', desc: 'about git switch', link: `${books.progit}#page=76` },
          { name: 'merging', desc: 'about git merge <branch>', link: `${books.progit}#page=81` },
          { name: 'deleting branch', desc: 'about git branch -d <name>', link: `${books.progit}#page=82` },
          { name: 'merge conflicts', desc: 'about merge conflicts', link: `${books.progit}#page=82` },
          { name: 'list branches', desc: 'about git branch', link: `${books.progit}#page=85` },
          { name: 'rename branch', desc: 'about git branch --move <oldname> <newname>', link: `${books.progit}#page=87` },
          { name: 'about remote branches', desc: 'about remote branches', link: `${books.progit}#page=92` },
          { name: 'pushing branch', desc: 'about git push <remote> <branch>', link: `${books.progit}#page=97` },
          { name: 'tracking remote branches', desc: 'about git checkout --track <remote>/<branch>', link: `${books.progit}#page=99` },
          { name: 'delete remote branch', desc: 'about git push <remote> --delete <branch>', link: `${books.progit}#page=100` },
          { name: 'rabasing', desc: 'about git rebase <branch>', link: `${books.progit}#page=101` },
        ]
      },

  // }>>

  // <<{ tags

      {
        header: 'tags',
        items: [
          { name: 'showing tags', desc: 'about git tag', link: `${books.progit}#page=61` },
          { name: 'creating annotated tags', desc: 'about git tag -a <name> -m <message>', link: `${books.progit}#page=62` },
          { name: 'creating lightweight tags', desc: 'about git tag <name>', link: `${books.progit}#page=63` },
          { name: 'tagging commit', desc: 'about git tag -a <name> <commit>', link: `${books.progit}#page=64` },
          { name: 'pushing tags to remotes', desc: 'about git push <remote> <tagname>', link: `${books.progit}#page=64` },
          { name: 'deleting tags', desc: 'about git tag -d <name>', link: `${books.progit}#page=65` },
          { name: 'checkout tags', desc: 'about git checkout <tagname>', link: `${books.progit}#page=66` },
        ]
      },

  // }>>

  // <<{ working with filesystem

      {
        header: 'working with filesystem',
        items: [
          { name: 'removing files', desc: 'about git rm', link: `${books.progit}#page=42` },
          { name: 'moving files', desc: 'about git mv', link: `${books.progit}#page=43` },
        ]
      },

  // }>>

  // <<{ mix

      {
        header: 'mix',
        items: [
        ]
      },

  // }>>

    ],

// }>>

// }>>

  },

// }>>

}
