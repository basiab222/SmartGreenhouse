# SmartGreenhouse
An intelligent, compact-sized greenhouse that takes care of your favourite plants. Fully automated, provides an isolated environment with optimal parameter presets such as temperature, humidity, watering amount and frequency and radiation duration for even the most demanding species. 

## The device

*Here present project and building process, including blueprints, prototype building, component names and specifications, wiring with GPIO explanation*

## Raspberry Pi 3b+

*control code explanation*

## Connection & network setup
As of the current development stage, the device is set as a part of the local WLAN network, with router Fritz!Box 3270 as a switch and DHCP server. It receives IPv4 address dynamically using DHCP and has an established connection with any end-device connected to the network.
- The first step was to install Ubuntu 24.04.1 on the Raspberry Pi 3b+
- Then, enable ssh connection with the device (specifically, with a Raspberry Pi which serves as a local server and main controller and power source) on port 22:
    - configured static network information such as ip address, dns server and wifi connection in network/interfaces and wpa_supplicant file (temporary solution to access the internet to download Network Manager)
    - established stable home wifi connection with nmcli (nmcli d wifi connect *wifi-name* password *password*)
    - enabled port forwarding (tcp port 22) on the home router for remote access for other project members 
    - generated ssh keys (ssh-keygen) with passphrase and scp copied them to the admin desktop - admin desktop started an ssh server to enable this operation
    - generated ssh keys on each end device connecting to the device in the same manner and sent public keys to authorized_keys on the device.
    - now an admin ssh access to the system is possible within local and external network under address ubuntu@x or ubuntu@x (external network connection only when device is connected to the home network with Internet access).
- Last step was to power on the router and configure it with static IP address in Fritz!Box settings panel, with addditional configuration using WPA/WPA2 encryption and radio channel switch to channel 6. In future versions, this router will be replaced with one that acts as repeater for the router with Internet access to connect to the cloud (current one cannot be used due to specification mismatch).

## Server & backend

## Mobile application
