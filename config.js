var path = require('path'),
    config;

var parse = require('url').parse;
var db = parse(process.env.KPDB_PORT);
var mguser = process.env.MG_USER;
var mgpassword = process.env.MG_PASSWORD;
var pguser = process.env.PG_USER;
var pgpassword = process.env.PG_PASSWORD;

config = {
    production: {
        url: 'http://blog.kat-park.com',
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: mguser,
                    pass: mgpassword
              }
          }
        },
        database: {
            client: 'pg',
            connection: {
                host     : db.hostname,
                user     : pguser,
                password : pgpassword,
                database : 'kp_blog',
                charset  : 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    },
    development: {
        url: 'http://localhost:2368',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    }

};

// Export config
module.exports = config;
