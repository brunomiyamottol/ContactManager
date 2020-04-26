const socket = io();

socket.on('connect', function() {
  console.log('Connected to Server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from Sever');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

socket.emit(
  'createMessage',
  {
    from: 'Bruno',
    text: 'From Client'
  },
  function(data) {
    console.log('Got It', data);
  }
);

//socket.emit('createMessage', {from:'as',text:'asasdads'})
