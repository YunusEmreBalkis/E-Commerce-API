/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
    {
      '$match': {
        'product': new ObjectId('630ab3b96b3666b5d7c7b270')
      }
    }, {
      '$group': {
        '_id': null, 
        'avarageRating': {
          '$avg': '$rating'
        }, 
        'numrOfReviews': {
          '$sum': 1
        }
      }
    }
  ];
  
  MongoClient.connect(
    '',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(connectErr, client) {
      assert.equal(null, connectErr);
      const coll = client.db('').collection('');
      coll.aggregate(agg, (cmdErr, result) => {
        assert.equal(null, cmdErr);
      });
      client.close();
    });