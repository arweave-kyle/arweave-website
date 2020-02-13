// We're aliasing this as d (d = device id) simply to obfuscate it. Annoying, yeah.
import fpjs from 'fingerprintjs2';

//@ts-ignore

let idleCallback = typeof window !== 'undefined' ? window.requestIdleCallback : null;

let deviceId = "";

export default function getDeviceId() {
  return deviceId;
}

function setDeviceId() {
  fpjs.get(function (components) {
    const values = components.map(function (component) { return component.value });
    const murmur = fpjs.x64hash128(values.join(''), 31)
    deviceId = murmur;
  })
}

if (idleCallback) {
  idleCallback(setDeviceId)
} else {
  setTimeout(setDeviceId, 500)
}