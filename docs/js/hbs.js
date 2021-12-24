const hbs = [

  // <<{ comments

      {
        header: 'comments',
        items: [
          { 
            code: `{{! ...  }}`, 
            desc: 'will not output to html' 
          },
          { 
            code: `{{!-- ... --}}`, 
            desc: 'will not outpu to html, can contain {, }' 
          },
          { 
            code: `<!-- ... -->`, 
            desc: 'will output to html' 
          },
        ]
      },

  // }>>

  // <<{ compiling templates

      {
        header: 'compiling templates',
        items: [
          { 
            code: `const t = Handlebars.compile('<p>{{x}}</p>')`, 
            desc: `compiling template` 
          },
          { 
            code: `t({ x: 25 })`, 
            desc: `creating compiled html string from template`
          },
          { 
            code: `const pre = Handlebars.precompile('<p>{{x}}</p>')`, 
            desc: `precompiling template, so it can be sent over internet`
          },
          { 
            code: `const t = Handlebars.template(pre)`, 
            desc: `sets up precompiled template`
          },
        ]
      },

  // }>>

  // <<{ test

      {
        header: 'test',
        items: [
          { 
            code: `Handlebars.registerHelper("bold", function(text) {
  var b = "<b>" + Handlebars.escapeExpression(text) + "</b>";
  return new Handlebars.SafeString(b);
});`, 
            desc: `compiling template` 
          },
          { 
            code: `t({ x: 25 })`, 
            desc: `creating compiled html string from template`
          },
        ]
      },

  // }>>

  // <<{ virtual hosts in linux

      {
        header: 'virtual hosts in linux',
        items: [
          { 
            code: `/etc/apache2/sites-available/000-default.conf`, 
            desc: `copy this file and rename in to something like test.my.conf in this same folder` 
          },
          { 
            code: `<VirtualHost *:80>
  ServerAdmin webmaxml@gmail.com
  ServerName test.my
  ServerAlias www.test.my
  DocumentRoot /home/webmaxml/static/work/test
  ErrorLog \${APACHE_LOG_DIR}/error.log
  CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
`, 
            desc: `change content in test.my to something like this`
          },
          { 
            code: `sudo a2ensite test.my.conf`, 
            desc: `this will load the test.my.conf site (will create symlink in sites-enabled folder)` 
          },
          { 
            code: `<Directory /home/webmaxml/static/work/>
  Options Indexes FollowSymLinks
  AllowOverride None
  Require all granted
</Directory>
`, 
            desc: `add something like this to /etc/apache2/apache2.conf if your DocumentRoot is not /var/www/. This will enable your custom folder for apache` 
          },
          { 
            code: `127.0.0.1         test.my`, 
            desc: `add to /etc/hosts something like this` 
          },
          { 
            code: `sudo systemctl restart apache2`, 
            desc: `reload apache` 
          },
        ]
      },

  // }>>

]

  

