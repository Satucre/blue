import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';
//import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
enableProdMode();

//constructor(private bluetoothSerial: BluetoothSerial) { }


/*// Write a string
this.bluetoothSerial.write("hello world").then(success, failure);

// Array of int or bytes
this.bluetoothSerial.write([186, 220, 222]).then(success, failure);

// Typed Array
var data = new Uint8Array(4);
data[0] = 0x41;
data[1] = 0x42;
data[2] = 0x43;
data[3] = 0x44;
this.bluetoothSerial.write(data).then(success, failure);

// Array Buffer
this.bluetoothSerial.write(data.buffer).then(success, failure);

*/
platformBrowserDynamic().bootstrapModule(AppModule);
