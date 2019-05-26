const net = require('net')


function main() {
  let sockPath = '/iving/event';

  let client = net.createConnection(sockPath, () => {
    console.log('connected to iving event hub');
    client.write('world!\r\n');
  });

  client.on('data', data => {
    console.log('======= event arrived =======');
    console.log(data.toString())
  });


  client.on('error', err => {
    console.error('error: ' + err);
  });


  client.on('end', () => {
    console.log('disconnected from iving event hub');
  });

}


// Main function

main()
