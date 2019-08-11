
const prepare = require('mocha-prepare')
const mongoUnit = require('mongo-unit')
const opts ={
"dbName":"example",
"dbpath":"C:\\dbPath"

}
prepare(done => mongoUnit.start(opts)
  .then(testMongoUrl => {
    process.env.MONGO_URL = testMongoUrl
    done()
  }))