name: eleventh
url: http://github.com/knoopx/eleventh
description: A proof of concept ruby-based IEE802.11 WEP password cracker
----

# Eleventh

Eleventh is a proof of concept ruby-based IEE802.11 WEP password cracker inspired by [wepattack](http://wepattack.sourceforge.net/).
It uses a pre-defined dictionary to guess known vulnerable WEP passwords based on their BSSID and ESSID.

It requires only a single encrypted IEE802.11 WEP data frame to test against a targeted network and verify the validity of a passphrase.

![Eleventh: A proof of concept ruby-based IEE802.11 WEP password cracker](/images/eleventh.png)