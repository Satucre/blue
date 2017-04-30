import {Component,NavController} from '@angular/core';
import {DevicePage} from '../device/device';
import {BLE} from 'ionic-native';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
//enableProdMode();

constructor(private bluetoothSerial: BluetoothSerial) { }

@Component({
templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

constructor(public nav: NavController) {
this.devices = [];
this.isScanning = false;
}

startScanning() {
console.log("Scanning Started");
this.devices = [];
this.isScanning = true;
BLE.startScan([]).subscribe(device => {
this.devices.push(device);
});

setTimeout(() => {
BLE.stopScan().then(() => {
console.log('Scanning has stopped');
console.log(JSON.stringify(this.devices))
this.isScanning = false;
});
}, 3000);

}

connectToDevice(device) {
console.log('Connect To Device');
console.log(JSON.stringify(device))
this.nav.push(DevicePage, {
device: device
});
}

}