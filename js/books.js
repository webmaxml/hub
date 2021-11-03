
const books = {
  shotts_command_line: 'books/shotts_linux_command_line.pdf',
  bash_manual: 'books/bash_manual.pdf',
  progit: 'books/git.pdf',
}

const data = {

// <<{ menu

  menu: {

    'shotts - linux command line': 'shotts_linux_command_line_book',
    'progit': 'progit_book',
    'bash manual': 'bash_manual_book',

  },

// }>>

// <<{ content

  content: {

// <<{ shotts_linux_command_line_book

    shotts_linux_command_line_book: [

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

// <<{ bash_manual_book

    bash_manual_book: [

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

// <<{ progit_book

    progit_book: [

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

  },

// }>>

}
