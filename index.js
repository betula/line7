
module.exports = Line;

function Line() {
  let
    receivers = [];

  function receiver(fn) {
    receivers.push(fn);
    return () => {
      receivers = receivers.filter((v) => v !== fn)
    }
  }

  function send(value) {
    for (let fn of receivers.slice()) {
      fn(value);
    }
  }

  return {

    send,
    receiver,

    readonly: {
      receiver
    }

  }
}

