const net = require('net')


function main() {
  let sockPath = '/iving/event';

  let client = net.createConnection(sockPath, () => {
    console.log('connected to iving event hub');
    let msg = JSON.stringify({ info : 'hello world' });
    client.write(msg);
  });

  client.on('data', data => {
    console.log(`======= event arrived ======= ${Date.now()}`);
    console.log(JSON.parse(data.toString('utf8')));
  });


  client.on('error', err => {
    console.error('error: ' + err);
  });


  client.on('close', () => {
    console.log('disconnectex from iving event hub');
  });


  setInterval(() => {
    console.log('event heartbeat ...');
  }, 60 * 1000)

}


// Main function

main()
