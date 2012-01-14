title: Packet sniffing on OSX
created_at: 2011-08-10
----

Capure raw IEEE802.11 packets with `tshark`

    sudo ./tshark -i en1 -I -y IEEE802_11 -R 'wlan.fc.type_subtype == 0x08 or wlan.fc.type_subtype == 0x20' -w wlan.pcap

MITM sniffing with `ettercap-ng`

    sudo sysctl -w net.inet.ip.forwarding=1
    sudo sysctl -w net.inet.ip.fw.enable=1
    sudo ettercap -T -q -i en1 -M ARP:REMOTE /192.168.1.1/ //