title: OS X Lion tweaks
created_at: 2011-10-28
----

Here are a bunch of tweaks I apply to clean installs of OS Lion.

Disable New Window animations:

    defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool NO

Disable the character picker:

    defaults write -g ApplePressAndHoldEnabled -bool NO

Disable window restore

    defaults write com.apple.Preview NSQuitAlwaysKeepsWindows -bool NO

Remove useless icons from Safari's bookmarks bar:

    defaults write com.apple.Safari ProxiesInBookmarksBar '()'

[Disable Hibernation](http://news.metaparadigma.de/osx86-enable-and-disable-hibernation-57/)

    sudo pmset -a hibernatemode 0
    sudo rm /var/vm/sleepimage

[Enable noatime for SSD filesystems](http://poller.se/2010/08/optimizing-mac-os-x-for-ssd-drives/)

[Enable TRIM support for 3rd-party manufactures](https://gist.github.com/1282390)

    cp /System/Library/Extensions/IOAHCIFamily.kext/Contents/PlugIns/IOAHCIBlockStorage.kext/Contents/MacOS/IOAHCIBlockStorage ~/Desktop/IOAHCIBlockStorage.original
    sudo perl -pi -e 's|(\x52\x6F\x74\x61\x74\x69\x6F\x6E\x61\x6C\x00).{9}(\x00\x51)|$1\x00\x00\x00\x00\x00\x00\x00\x00\x00$2|sg' /System/Library/Extensions/IOAHCIFamily.kext/Contents/PlugIns/IOAHCIBlockStorage.kext/Contents/MacOS/IOAHCIBlockStorage

    sudo kextcache -system-prelinked-kernel
    sudo kextcache -system-caches

Disable Spotlight

    sudo mdutil -a -i off

Disable disk journaling

    diskutil disableJournal /Volumes/OSX

[Trim filesystem](http://forum.hardmac.com/index.php?s=082749656c717ed1c65d2029bcca5563&showtopic=10047&st=0&p=18111&#entry18111)

* Boot in Single User mode (.osx-shortcut command + S)
* When asked type the `fsck -ffy` command


[Enable Verbose boot](https://discussions.apple.com/thread/2460270?start=0&tstart=0)

    sudo nvram boot-args="-v"