module.exports = {
    mongo: {
        development: {
            connectionString: ''
        },
        production: {
            connectionString: ''
        },
        dbuser: "test",
        dbpass: "test",
        url: "mongodb://test:test@ds063859.mongolab.com:63859/torrentjs"
    }
}
/*
 To connect using the shell:
 mongo ds063859.mongolab.com:63859/torrentjs -u <dbuser> -p <dbpassword>
 To connect using a driver via the standard URI (what's this?):
 mongodb://<dbuser>:<dbpassword>@ds063859.mongolab.com:63859/torrentjs
 */
