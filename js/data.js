
const data = {

// <<{ menu

  menu: {

    'network': {
      'mix': 'network_mix',
    },

    'linux': {
      'utilities': 'linux_utilities',
      'mix': 'linux_mix',
    },

    'git': {
      'reference': 'git_reference',
      'mix': 'git_mix',
    },

    'vim': {
      'vim reference book': 'vim_reference_book',
      'vimscript the hard way book': 'vimscript_the_hard_way_book',
      'plugins': 'vim_plugins',
      'mix': 'vim_mix',
    },

    'html': {
      'html': 'html_mdn',
      'handlebars': 'handlebars',
      'mix': 'html_mix',
    },

    'css': {
      'css': 'css_mdn',
      'sass': 'sass',
      'mix': 'css_mix',
    },

    'javascript': {
      'javascript': 'javascript_mdn',
      'DOM': 'dom',
      'api': 'js_api',
      'utilities': 'js_utilities',
      'typescript': 'typescript',
      'webpack': 'webpack',
      'react': 'react',
      'mix': 'js_mix',
    },

    'http': {
      'http': 'http_mdn',
      'apache': 'apache',
      'nginx': 'nginx',
      'mix': 'http_mix',
    },

    'nodejs': {
      'nodejs': 'nodejs',
      'mix': 'nodejs_mix',
    },

    'php': {
      'php': 'php',
      'mix': 'php_mix',
    },

    'databases': {
      'sql w3school': 'sql_w3school',
      'mix': 'db_mix',
    },

    'CRM': {
      'bitrix24': 'bitrix24',
      'mix': 'crm_mix',
    },

    'mix': 'mix',

  },

// }>>

// <<{ content

  content: {

// <<{ <network>

// <<{ network_mix

    network_mix: [

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

// }>>

// <<{ <linux>

// <<{ linux_utilities

    linux_utilities: [

  // <<{ bash

      {
        header: 'bash',
        items: [
          { name: 'хабр - скрипты общее', desc: 'переменные, условия и общее для скриптов', link: 'https://habr.com/ru/company/ruvds/blog/325522/' },
          { name: 'хабр - циклы', desc: 'про циклы', link: 'https://habr.com/ru/company/ruvds/blog/325928/' },
          { name: 'хабр - параметры и ключи командной строки', desc: 'про параметры и ключи', link: 'https://habr.com/ru/company/ruvds/blog/326328/' },
          { name: 'хабр - expect и автоматизация утилит', desc: 'про expect и автоматизацию интерактивных утилит', link: 'https://habr.com/ru/company/ruvds/blog/328436/' },
          { name: 'хабр - sed и обработка текстов', desc: 'про sed и обработку текстов', link: 'https://habr.com/ru/company/ruvds/blog/327530/' },
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

  // <<{ compton

      {
        header: 'compton',
        items: [
          { name: 'compton', desc: 'composition manager', link: 'https://github.com/chjj/compton#compton' },
        ]
      },

  // }>>

  // <<{ rofi

      {
        header: 'rofi',
        items: [
          { name: 'rofi', desc: 'application launcher', link: 'https://github.com/davatorium/rofi#a-window-switcher-application-launcher-and-dmenu-replacement' },
        ]
      },

  // }>>

  // <<{ fd

      {
        header: 'fd',
        items: [
          { name: 'fd', desc: 'fd finder, simple alternative to "find"', link: 'https://github.com/sharkdp/fd#fd' },
        ]
      },

  // }>>

  // <<{ ripgrep

      {
        header: 'ripgrep',
        items: [
          { name: 'ripgrep', desc: 'line-oriented search tool', link: 'https://github.com/BurntSushi/ripgrep#ripgrep-rg' },
        ]
      },

  // }>>

  // <<{ dunst

      {
        header: 'dunst',
        items: [
          { name: 'dunst', desc: 'configurable notification daemon', link: 'https://github.com/dunst-project/dunst#documentation' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ linux_mix

    linux_mix: [

    ],

// }>>

// }>>

// <<{ <git>

// <<{ git_reference

    git_reference: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'git reference', desc: 'git commands reference', link: 'https://git-scm.com/docs' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ git_mix

    git_mix: [

    ],

// }>>

// }>>

// <<{ <vim>

// <<{ vim_reference_book

    vim_reference_book: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'normal mode', desc: 'different things you can do in normal mode', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Normal_mode.html' },
          { name: 'commands', desc: 'different commands to enter in command mode', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Command_Line_mode.html' },
          { name: 'visual mode', desc: 'about visual mode', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Visual_mode.html' },
          { name: 'recording macro', desc: 'how to record macro', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Recording_Macro.html' },
          { name: 'customization', desc: 'general vim customization', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Customizing_vim.html' },
          { name: 'regexp', desc: 'about regexp in search and replace', link: 'https://learnbyexample.gitbooks.io/vim-reference/content/Regular_Expressions.html' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ vimscript_the_hard_way_book

    vimscript_the_hard_way_book: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ vim_plugins

    vim_plugins: [

  // <<{ vimawesome

      {
        header: 'vimawesome',
        items: [
          { name: 'vimawesome', desc: 'vim plugins hub page', link: 'https://vimawesome.com/' },
        ]
      },

  // }>>

  // <<{ vim-plug

      {
        header: 'vim-plug',
        items: [
          { name: 'vim-plug', desc: 'vim-plug github page', link: 'https://github.com/junegunn/vim-plug#' },
        ]
      },

  // }>>

  // <<{ NERDTree

      {
        header: 'NERDTree',
        items: [
          { name: 'NERDTree', desc: 'nerdtree plugin', link: 'https://github.com/preservim/nerdtree#the-nerdtree-' },
        ]
      },

  // }>>

  // <<{ ranger.vim

      {
        header: 'ranger.vim',
        items: [
          { name: 'ranger.vim', desc: 'ranger vim plugin', link: 'https://github.com/francoiscabrol/ranger.vim' },
        ]
      },

  // }>>

  // <<{ Emmet-vim

      {
        header: 'Emmet-vim',
        items: [
          { name: 'Emmet-vim', desc: 'emmet plugin', link: 'https://github.com/mattn/emmet-vim#emmet-vim' },
        ]
      },

  // }>>

  // <<{ fzf.vim

      {
        header: 'fzf.vim',
        items: [
          { name: 'fzf.vim', desc: 'fzf vim plugin', link: 'https://github.com/junegunn/fzf.vim#fzf-heart-vim' },
        ]
      },

  // }>>

  // <<{ UltiSnips

      {
        header: 'UltiSnips',
        items: [
          { name: 'UltiSnips', desc: 'snippets plugin', link: 'https://github.com/SirVer/ultisnips#ultisnips' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ vim_mix

    vim_mix: [

  // <<{ cheatsheets

      {
        header: 'cheatsheets',
        items: [
          { name: 'vim cheat sheet', desc: 'vim cheat sheet', link: 'https://vim.rtorr.com/' },
        ]
      },

  // }>>

    ],

// }>>

// }>>

// <<{ <html>

// <<{ html_mdn

    html_mdn: [

  // <<{ meta

      {
        header: 'meta',
        items: [
          { name: '<meta>', desc: 'different metadata of the document', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta' },
          { name: 'names values in <meta>', desc: 'standard names values in <meta>', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name' },
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

// <<{ handlebars

    handlebars: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'installation via CDN', desc: 'installation via CDN', link: 'https://handlebarsjs.com/guide/#installation' },

          { name: 'basic expressions', desc: 'about basic expressions', link: 'https://handlebarsjs.com/guide/expressions.html#basic-usage' },
          { name: 'path expressions', desc: 'about dot-separated path expressions', link: 'https://handlebarsjs.com/guide/expressions.html#path-expressions' },
          { name: 'changing the context', desc: 'about going up with ../ in expression', link: 'https://handlebarsjs.com/guide/expressions.html#changing-the-context' },
          { name: 'allowed chars in expression', desc: 'which chars are allowed and how to escape them with []', link: 'https://handlebarsjs.com/guide/expressions.html#literal-segments' },
          { name: 'HTML escaping', desc: 'about escaped {{...}} and not-escaped {{{...}}}', link: 'https://handlebarsjs.com/guide/expressions.html#html-escaping' },
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ html_mix

    html_mix: [

  // <<{ opengraph

      {
        header: 'opengraph',
        items: [
          { name: 'open graph', desc: 'social graph protocol', link: 'https://ogp.me/' },
        ]
      },

  // }>>

    ],

// }>>

// }>>

// <<{ <css>

// <<{ css_mdn

    css_mdn: [

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

// <<{ sass

    sass: [

  // <<{ syntax

      {
        header: 'syntax',
        items: [
          { name: 'syntax', desc: 'about scss and indented syntax', link: 'https://sass-lang.com/documentation/syntax' },
          { name: 'structure', desc: 'about top-level statements, universal statements and expressions', link: 'https://sass-lang.com/documentation/syntax/structure' },
          { name: 'comments', desc: 'about comments', link: 'https://sass-lang.com/documentation/syntax/comments' },
        ]
      },

  // }>>

  // <<{ interpolation

      {
        header: 'interpolation',
        items: [
          { name: 'interpolation', desc: 'about injecting values from expressions with #{...}', link: 'https://sass-lang.com/documentation/interpolation' },
          { name: 'selector', desc: 'inject expression values into selectors', link: 'https://sass-lang.com/documentation/style-rules#interpolation' },
          { name: 'prop', desc: 'inject experssion values into property names', link: 'https://sass-lang.com/documentation/style-rules/declarations#interpolation' },
          { name: 'values', desc: 'inject expression values into prop values', link: 'https://sass-lang.com/documentation/style-rules/declarations#custom-properties' },
        ]
      },

  // }>>

  // <<{ variables

      {
        header: 'variables',
        items: [
          { name: 'variables', desc: 'about variables', link: 'https://sass-lang.com/documentation/variables' },
          { name: 'default values', desc: 'assigns variable only if this variable isn\'t defined', link: 'https://sass-lang.com/documentation/variables#default-values' },
          { name: 'scope', desc: 'about variables scope', link: 'https://sass-lang.com/documentation/variables#scope' },
        ]
      },

  // }>>

  // <<{ at-rules

      {
        header: 'at-rules',
        items: [
          { name: '@use', desc: 'loads mixins, functions and vars from other sass stylesheets', link: 'https://sass-lang.com/documentation/at-rules/use' },
          { name: '@use...with', desc: 'loading module with some configuration of the default values', link: 'https://sass-lang.com/documentation/at-rules/use#configuration' },
          { name: '@forward', desc: 'forwarding module to make one entry point for multiple modules', link: 'https://sass-lang.com/documentation/at-rules/forward' },
          { name: '@forward...with', desc: 'forwarding module with some configuration of default values', link: 'https://sass-lang.com/documentation/at-rules/forward#configuring-modules' },
          { name: '@mixin and @include', desc: 'about mixins', link: 'https://sass-lang.com/documentation/at-rules/mixin' },
          { name: '@content', desc: 'content blocks in mixins', link: 'https://sass-lang.com/documentation/at-rules/mixin#content-blocks' },
          { name: '@function', desc: 'about functions', link: 'https://sass-lang.com/documentation/at-rules/function' },
          { name: '@extend', desc: 'extending existing rules', link: 'https://sass-lang.com/documentation/at-rules/extend' },
          { name: '@error', desc: 'throwing errors in mixins and functions', link: 'https://sass-lang.com/documentation/at-rules/error' },
          { name: '@warn', desc: 'throwing warnings in mixins and functions', link: 'https://sass-lang.com/documentation/at-rules/warn' },
          { name: '@debug', desc: 'debugging variable of expression', link: 'https://sass-lang.com/documentation/at-rules/debug' },
          { name: '@at-root', desc: 'disables nesting and making selector to be at root of the document', link: 'https://sass-lang.com/documentation/at-rules/at-root' },
          { name: '@if and @else', desc: 'conditional blocks in sass', link: 'https://sass-lang.com/documentation/at-rules/control/if' },
          { name: '@each', desc: 'list loop', link: 'https://sass-lang.com/documentation/at-rules/control/each' },
          { name: '@for', desc: 'for loop', link: 'https://sass-lang.com/documentation/at-rules/control/for' },
          { name: '@while', desc: 'while loop', link: 'https://sass-lang.com/documentation/at-rules/control/while' },
        ]
      },

  // }>>

  // <<{ operators

      {
        header: 'operators',
        items: [
          { name: 'equality operators', desc: 'about operators == and !=', link: 'https://sass-lang.com/documentation/operators/equality' },
          { name: 'relational operators', desc: 'about operators >, <, >=, <=', link: 'https://sass-lang.com/documentation/operators/relational' },
          { name: 'numeric operators', desc: 'about operators +, -, *, math.div(), %', link: 'https://sass-lang.com/documentation/operators/numeric' },
          { name: 'string operators', desc: 'about concatenation operators', link: 'https://sass-lang.com/documentation/operators/string' },
          { name: 'boolean operators', desc: 'about operators and, or, not', link: 'https://sass-lang.com/documentation/operators/boolean' },
        ]
      },

  // }>>

  // <<{ numbers

      {
        header: 'numbers',
        items: [
          { name: 'numbers', desc: 'about numbers type', link: 'https://sass-lang.com/documentation/values/numbers' },
          { name: 'ceil()', desc: 'rounds number to the next highest whole', link: 'https://sass-lang.com/documentation/modules/math#ceil' },
          { name: 'math.clamp()', desc: 'restricts a number to the range between min and max', link: 'https://sass-lang.com/documentation/modules/math#clamp' },
          { name: 'floor()', desc: 'rounds number to the next lowest whole', link: 'https://sass-lang.com/documentation/modules/math#floor' },
          { name: 'max()', desc: 'return the highest of the given numbers', link: 'https://sass-lang.com/documentation/modules/math#max' },
          { name: 'min()', desc: 'return the lowest of the given numbers', link: 'https://sass-lang.com/documentation/modules/math#min' },
          { name: 'round()', desc: 'rounds number to the nearest whole', link: 'https://sass-lang.com/documentation/modules/math#round' },
          { name: 'abs()', desc: 'returns absolute value of a given number', link: 'https://sass-lang.com/documentation/modules/math#abs' },
          { name: 'comparable()', desc: 'whether two numbers have compatible units', link: 'https://sass-lang.com/documentation/modules/math#compatible' },
          { name: 'unitless()', desc: 'whether given number has no units', link: 'https://sass-lang.com/documentation/modules/math#is-unitless' },
          { name: 'unit()', desc: 'returns number\'s unit as a string', link: 'https://sass-lang.com/documentation/modules/math#unit' },
          { name: 'math.div()', desc: 'divides two numbers', link: 'https://sass-lang.com/documentation/modules/math#div' },
          { name: 'percentage()', desc: 'converts a unitless number between 0 and 1 to a percentage', link: 'https://sass-lang.com/documentation/modules/math#percentage' },
          { name: 'random()', desc: 'returns random number with given limit', link: 'https://sass-lang.com/documentation/modules/math#random' },
        ]
      },

  // }>>

  // <<{ strings

      {
        header: 'strings',
        items: [
          { name: 'strings', desc: 'about strings type', link: 'https://sass-lang.com/documentation/values/strings' },
          { name: 'quote()', desc: 'returns quoted string', link: 'https://sass-lang.com/documentation/modules/string#quote' },
          { name: 'str-index()', desc: 'returns index of the first occurance of the substring or null', link: 'https://sass-lang.com/documentation/modules/string#index' },
          { name: 'str-insert()', desc: 'inserts substring in string', link: 'https://sass-lang.com/documentation/modules/string#insert' },
          { name: 'str-length()', desc: 'returns the number of characters in string', link: 'https://sass-lang.com/documentation/modules/string#length' },
          { name: 'str-slice()', desc: 'returns a slice of the string', link: 'https://sass-lang.com/documentation/modules/string#slice' },
          { name: 'to-upper-case()', desc: 'converts string to upper case', link: 'https://sass-lang.com/documentation/modules/string#to-upper-case' },
          { name: 'to-lower-case()', desc: 'converts string to lower case', link: 'https://sass-lang.com/documentation/modules/string#to-lower-case' },
          { name: 'unique-id()', desc: 'returns randomly generated unquoted string', link: 'https://sass-lang.com/documentation/modules/string#unique-id' },
          { name: 'unquote()', desc: 'returns unquoted string', link: 'https://sass-lang.com/documentation/modules/string#unquote' },
        ]
      },

  // }>>

  // <<{ colors

      {
        header: 'colors',
        items: [
          { name: 'colors', desc: 'about colors type', link: 'https://sass-lang.com/documentation/values/colors' },
          { name: 'adjust-color()', desc: 'changes some properties of given color', link: 'https://sass-lang.com/documentation/modules/color#adjust' },
          { name: 'adjust-hue()', desc: 'changes color hue', link: 'https://sass-lang.com/documentation/modules/color#adjust-hue' },
          { name: 'alpha()', desc: 'returns alpha channel as a number between 0 and 1', link: 'https://sass-lang.com/documentation/modules/color#alpha' },
          { name: 'color.blackness()', desc: 'returns blackness of a color as a number between 0% and 100%', link: 'https://sass-lang.com/documentation/modules/color#blackness' },
          { name: 'blue()', desc: 'returns blue channel of a color as a number between 0 and 255', link: 'https://sass-lang.com/documentation/modules/color#blue' },
          { name: 'change-color()', desc: 'sets new properties of a given color', link: 'https://sass-lang.com/documentation/modules/color#change' },
          { name: 'complement()', desc: 'returns rgb complement of a color', link: 'https://sass-lang.com/documentation/modules/color#complement' },
          { name: 'darken()', desc: 'makes color darker', link: 'https://sass-lang.com/documentation/modules/color#darken' },
          { name: 'desaturate()', desc: 'makes color less saturated', link: 'https://sass-lang.com/documentation/modules/color#desaturate' },
          { name: 'grayscale()', desc: 'returns gray color with the same lightness as given color', link: 'https://sass-lang.com/documentation/modules/color#grayscale' },
          { name: 'green()', desc: 'returns green channel of a color as a number between 0 and 255', link: 'https://sass-lang.com/documentation/modules/color#green' },
          { name: 'hue()', desc: 'returns hue of a color as a number between 0deg and 360deg', link: 'https://sass-lang.com/documentation/modules/color#hue' },
          { name: 'color.hwb()', desc: 'returns color with the given hue, whiteness, blackness and alpha', link: 'https://sass-lang.com/documentation/modules/color#hwb' },
          { name: 'ie-hex-str()', desc: 'returns color for internet explorer', link: 'https://sass-lang.com/documentation/modules/color#ie-hex-str' },
          { name: 'invert()', desc: 'return inverse or negative of given color', link: 'https://sass-lang.com/documentation/modules/color#invert' },
          { name: 'lighten()', desc: 'makes color lighter', link: 'https://sass-lang.com/documentation/modules/color#lighten' },
          { name: 'lightness()', desc: 'returns HSL lightness of a color as a number between 0% and 100%', link: 'https://sass-lang.com/documentation/modules/color#lightness' },
          { name: 'mix()', desc: 'returns a mixture of two given colors', link: 'https://sass-lang.com/documentation/modules/color#mix' },
          { name: 'opacity()', desc: 'makes color more opaque', link: 'https://sass-lang.com/documentation/modules/color#opacify' },
          { name: 'red()', desc: 'returns red channel of a color as a number between 0 and 255', link: 'https://sass-lang.com/documentation/modules/color#red' },
          { name: 'saturate()', desc: 'makes color more saturate', link: 'https://sass-lang.com/documentation/modules/color#saturate' },
          { name: 'saturation()', desc: 'returns HSL saturation of a color as a number between 0% and 100%', link: 'https://sass-lang.com/documentation/modules/color#saturation' },
          { name: 'scale-color()', desc: 'fluidly scales some properties of a given color', link: 'https://sass-lang.com/documentation/modules/color#scale' },
          { name: 'transparentize()', desc: 'makes color more transparent', link: 'https://sass-lang.com/documentation/modules/color#transparentize' },
          { name: 'color.whiteness()', desc: 'returns HWB whiteness of a color as a number between 0% and 100%', link: 'https://sass-lang.com/documentation/modules/color#whiteness' },
        ]
      },

  // }>>

  // <<{ lists

      {
        header: 'lists',
        items: [
          { name: 'lists', desc: 'about list type', link: 'https://sass-lang.com/documentation/values/lists' },
          { name: 'append()', desc: 'appends value to the end of the list', link: 'https://sass-lang.com/documentation/modules/list#append' },
          { name: 'index()', desc: 'returns index of a value in the list', link: 'https://sass-lang.com/documentation/modules/list#index' },
          { name: 'is-bracketed()', desc: 'returns whether list has square brackets', link: 'https://sass-lang.com/documentation/modules/list#is-bracketed' },
          { name: 'join()', desc: 'joins to lists', link: 'https://sass-lang.com/documentation/modules/list#join' },
          { name: 'length()', desc: 'returns number of elements in the list', link: 'https://sass-lang.com/documentation/modules/list#length' },
          { name: 'list-separator()', desc: 'returns elements separator in the list as unquoted string (space, comma or slash)', link: 'https://sass-lang.com/documentation/modules/list#separator' },
          { name: 'nth()', desc: 'returns element of the given index in the list', link: 'https://sass-lang.com/documentation/modules/list#nth' },
          { name: 'set-nth()', desc: 'replaces element at the given index with new provided value in the list', link: 'https://sass-lang.com/documentation/modules/list#set-nth' },
          { name: 'list.slash()', desc: 'returns slash separated list with given elements', link: 'https://sass-lang.com/documentation/modules/list#slash' },
          { name: 'zip()', desc: 'combines given lists into a list of sub-lists', link: 'https://sass-lang.com/documentation/modules/list#zip' },
        ]
      },

  // }>>

  // <<{ maps

      {
        header: 'maps',
        items: [
          { name: 'maps', desc: 'about map type', link: 'https://sass-lang.com/documentation/values/maps' },
          { name: 'map.deep-merge()', desc: 'deeply merges two maps', link: 'https://sass-lang.com/documentation/modules/map#deep-merge' },
          { name: 'map.deep-remove()', desc: 'deeply removes a given key with value in the map', link: 'https://sass-lang.com/documentation/modules/map#deep-remove' },
          { name: 'map-get()', desc: 'returns a value for a given key', link: 'https://sass-lang.com/documentation/modules/map#get' },
          { name: 'map-has-key()', desc: 'whether map has given key', link: 'https://sass-lang.com/documentation/modules/map#has-key' },
          { name: 'map-keys()', desc: 'returns comma-separated list of all the keys in the map', link: 'https://sass-lang.com/documentation/modules/map#keys' },
          { name: 'map-merge()', desc: 'merges two maps', link: 'https://sass-lang.com/documentation/modules/map#merge' },
          { name: 'map-remove()', desc: 'removes a given key with value in the map', link: 'https://sass-lang.com/documentation/modules/map#remove' },
          { name: 'map.set()', desc: 'adds a given key value pair to the map', link: 'https://sass-lang.com/documentation/modules/map#set' },
          { name: 'map-values()', desc: 'returns a comma-separated list of all the values in the map', link: 'https://sass-lang.com/documentation/modules/map#values' },
        ]
      },

  // }>>

  // <<{ meta

      {
        header: 'meta',
        items: [
          { name: 'meta.load-css()', desc: 'load css at given url as it was written as the contents of this mixin', link: 'https://sass-lang.com/documentation/modules/meta#load-css' },
          { name: 'call()', desc: 'invokes given function and returns the result', link: 'https://sass-lang.com/documentation/modules/meta#call' },
          { name: 'content-exists()', desc: 'whether the current mixin was passed a content during including', link: 'https://sass-lang.com/documentation/modules/meta#content-exists' },
          { name: 'feature-exists()', desc: 'whether the current sass implementation supports given feature', link: 'https://sass-lang.com/documentation/modules/meta#feature-exists' },
          { name: 'function-exists()', desc: 'whether a given function is defined', link: 'https://sass-lang.com/documentation/modules/meta#function-exists' },
          { name: 'get-function()', desc: 'returns a function by the given name', link: 'https://sass-lang.com/documentation/modules/meta#get-function' },
          { name: 'global-variable-exists()', desc: 'whether a given global variable exists', link: 'https://sass-lang.com/documentation/modules/meta#global-variable-exists' },
          { name: 'inspect()', desc: 'returns an unquoted string representation of a value', link: 'https://sass-lang.com/documentation/modules/meta#inspect' },
          { name: 'keywords()', desc: 'returns a map from a provided argument list to a mixin/function', link: 'https://sass-lang.com/documentation/modules/meta#keywords' },
          { name: 'mixin-exists()', desc: 'whether a given mixin exists', link: 'https://sass-lang.com/documentation/modules/meta#mixin-exists' },
          { name: 'meta.module-functions()', desc: 'returns all the functions defined in a module as a map name: function', link: 'https://sass-lang.com/documentation/modules/meta#module-functions' },
          { name: 'meta.module-variables()', desc: 'returns all the variables defined in a module as a map name: value', link: 'https://sass-lang.com/documentation/modules/meta#module-variables' },
          { name: 'type-of()', desc: 'returns the type of a value', link: 'https://sass-lang.com/documentation/modules/meta#type-of' },
          { name: 'variable-exists()', desc: 'whether a given variable exists', link: 'https://sass-lang.com/documentation/modules/meta#variable-exists' },
        ]
      },

  // }>>

  // <<{ selectors

      {
        header: 'selectors',
        items: [
          { name: 'nesting', desc: 'about selector nesting', link: 'https://sass-lang.com/documentation/style-rules#nesting' },
          { name: 'parent selector', desc: 'about parent selector &', link: 'https://sass-lang.com/documentation/style-rules/parent-selector' },
          { name: 'placeholders', desc: 'about placeholder selector', link: 'https://sass-lang.com/documentation/style-rules/placeholder-selectors' },
          { name: 'is-superselector()', desc: 'whether first selector matches all the elements that the second matches', link: 'https://sass-lang.com/documentation/modules/selector#is-superselector' },
          { name: 'selector-append()', desc: 'combines selectors without whitespaces between them', link: 'https://sass-lang.com/documentation/modules/selector#append' },
          { name: 'selector-extend()', desc: 'extends selector as with @extend rule', link: 'https://sass-lang.com/documentation/modules/selector#extend' },
          { name: 'selector-nest()', desc: 'combines selectors as thought they were nested within one another', link: 'https://sass-lang.com/documentation/modules/selector#nest' },
          { name: 'selector-parse()', desc: 'parses string, returns value in the selector format', link: 'https://sass-lang.com/documentation/modules/selector#parse' },
          { name: 'selector-replace()', desc: 'replaces parts of the given selector', link: 'https://sass-lang.com/documentation/modules/selector#replace' },
          { name: 'selector-unify()', desc: 'returns selector that matches elements that both given selector matches', link: 'https://sass-lang.com/documentation/modules/selector#unify' },
          { name: 'simple-selector()', desc: 'breaks down complex selector into list of simple ones', link: 'https://sass-lang.com/documentation/modules/selector#simple-selectors' },
        ]
      },

  // }>>

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'boolean', desc: 'about boolean type', link: 'https://sass-lang.com/documentation/values/booleans' },
          { name: 'null', desc: 'about null type', link: 'https://sass-lang.com/documentation/values/null' },
          { name: 'CLI', desc: 'Dart sass command line interface ', link: 'https://sass-lang.com/documentation/cli/dart-sass' },
          { name: 'javascript api', desc: 'sass javascript api', link: 'https://sass-lang.com/documentation/js-api' },
          { name: 'sass online', desc: 'sass online playground', link: 'https://www.sassmeister.com/' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ css_mix

    css_mix: [


    ],

// }>>

// }>>

// <<{ <javascript>

// <<{ javascript_mdn

    javascript_mdn: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ dom

    dom: [

  // <<{ mix

      {
        header: 'mix',
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

    ],

// }>>

// <<{ js_api

    js_api: [

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

// <<{ js_utilities

    js_utilities: [

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

    ],

// }>>

// <<{ typescript

    typescript: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ webpack

    webpack: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ react

    react: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ js_mix

    js_mix: [


    ],

// }>>

// }>>

// <<{ <http>

// <<{ http_mdn

    http_mdn: [

  // <<{ mix

      {
        header: 'mix',
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

    ],

// }>>

// <<{ apache

    apache: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'installation', desc: 'apache and php installation on Linux', link: 'https://medium.com/@bahadirmezgil/how-to-install-php-and-apache-on-linux-ubuntu-linux-mint-ea73a1c1c426' },
          { name: 'apache 2.4 documentation', desc: 'apache 2.4 documentation', link: 'https://httpd.apache.org/docs/2.4/' },
          { name: 'apache configuration: .htaccess', desc: 'apache configuration with .htaccess', link: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ nginx

    nginx: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'nginx documentation', desc: 'nginx documentation', link: 'https://nginx.org/en/docs/' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ http_mix

    http_mix: [


    ],

// }>>

// }>>

// <<{ <nodejs>

// <<{ nodejs

    nodejs: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ nodejs_mix

    nodejs_mix: [


    ],

// }>>

// }>>

// <<{ <php>

// <<{ php

    php: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ php_mix

    php_mix: [


    ],

// }>>

// }>>

// <<{ <databases>

// <<{ sql_w3school

    sql_w3school: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: '', desc: '', link: '' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ db_mix

    db_mix: [


    ],

// }>>

// }>>

// <<{ <CRM>

// <<{ bitrix24

    bitrix24: [

  // <<{ mix

      {
        header: 'mix',
        items: [
          { name: 'bitrix24', desc: 'bitrix24 admin page', link: 'https://uborshchiki.bitrix24.ua/stream/' },
          { name: 'helpdesk', desc: 'bitrix24 helpdesk', link: 'https://helpdesk.bitrix24.ru/' },
        ]
      },

  // }>>

    ],

// }>>

// <<{ crm_mix

    crm_mix: [


    ],

// }>>

// }>>

// <<{ mix

    mix: [

  // <<{ binary numbers

      {
        header: 'binary numbers',
        items: [
          { name: 'Обратный код', desc: 'чтобы записать отрицательное число, нужно перевернуть все разряды', link: 'https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%B4' },
          { name: 'Дополнительный код', desc: 'чтобы записать отрицательное число, нужно перевернуть все разряды и прибавить 1', link: 'https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%B4' },
          { name: 'Перевод в разные системы исчисления', desc: 'Перевод в разные системы исчисления', link: 'https://programforyou.ru/calculators/number-systems' },
        ]
      },

  // }>>

  // <<{ fonts and icons

      {
        header: 'fonts and icons',
        items: [
          { name: 'google fonts', desc: 'google fonts', link: 'https://fonts.google.com/' },
          { name: 'fontsquirrel', desc: 'download free fonts', link: 'https://www.fontsquirrel.com/' },
          { name: 'font awesome cheetsheet', desc: 'font awesome cheetsheet', link: 'https://fontawesome.com/v5/cheatsheet' },
          { name: 'icofont cheetsheet', desc: 'icofont cheetsheet', link: 'https://icofont.com/icons' },
          { name: 'favicons', desc: 'how to create favicons', link: 'https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs' },
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

  // <<{ PWA

      {
        header: 'PWA',
        items: [
          { name: 'PWA', desc: 'progressive web apps guide', link: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps' },
        ]
      },

  // }>>

  // <<{ windows

      {
        header: 'windows',
        items: [
          { name: 'оптимизация и ускорение работы windows', desc: 'оптимизация и ускорение работы windows', link: 'https://sysadmintips.ru/vyzhimaem-iz-windows-10-maksimum-optimizatsiya-sistemy.html' },
        ]
      },

  // }>>

  // <<{ security

      {
        header: 'security',
        items: [
          { name: 'Mozilla web security guidelines', desc: 'Mozilla web security guidelines', link: 'https://infosec.mozilla.org/guidelines/web_security' },
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

    ],

// }>>

  },

// }>>

}
