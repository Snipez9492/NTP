
const { Server } = require('http');
var ntpClient = require('ntp-client');

ntpClient.getNetworkTime("pool.ntp.org", 123, function (err, date) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Current time : ");
    console.log(date);
});

/*
getNetworkTime = function (server, port, callback) {
    if (callback === null || typeof callback !== "function") {
        return;
    }

    server = server || exports.defaultNtpServer;
    port = port || exports.defaultNtpPort;

    var client = dgram.createSocket("udp4"),
        ntpData = new Buffer(48);

    ntpData[0] = 0x1B;

    for (var i = 1; i < 48; i++) {
        ntpData[i] = 0;
    }

    var timeout = setTimeout(function () {
        client.close();
        callback("Timeout waiting for NTP response.", null);
    }, exports.ntpReplyTimeout);

    var errorFired = false;

    client.on('error', function (err) {
        if (errorFired) {
            return;
        }

        callback(err, null);
        errorFired = true;

        clearTimeout(timeout);
    });

    client.send(ntpData, 0, ntpData.length, port, server, function (err) {
        if (err) {
            if (errorFired) {
                return;
            }
            clearTimeout(timeout);
            callback(err, null);
            errorFired = true;
            client.close();
            return;
        }

        client.once('message', function (msg) {
            clearTimeout(timeout);
            client.close();

            var offsetTransmitTime = 40,
                intpart = 0,
                fractpart = 0;


            for (var i = 0; i <= 3; i++) {
                intpart = 256 * intpart + msg[offsetTransmitTime + i];
            }

            for (i = 4; i <= 7; i++) {
                fractpart = 256 * fractpart + msg[offsetTransmitTime + i];
            }

            var milliseconds = (intpart * 1000 + (fractpart * 1000) / 0x100000000);

            var date = new Date("Jan 01 1900 GMT");
            date.setUTCMilliseconds(date.getUTCMilliseconds() + milliseconds);

            callback(null, date);
        });
    });
}
*/

