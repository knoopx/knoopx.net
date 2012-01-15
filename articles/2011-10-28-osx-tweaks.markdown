title: OS X Lion tweaks
created_at: 2011-10-28
----

Here are a bunch of tweaks I apply to clean installs of OS Lion.
**Bonus**: Find out more tweaks at [Blacktree's Secrets](http://secrets.blacktree.com/)

## Dock

* Set default icon size

      defaults write com.apple.dock tilesize -float 48

* Enable magnification

      defaults write com.apple.dock magnification -bool true

* Set magnification icon size

      defaults write com.apple.dock largesize -float 96

* Automatically hide and show the Dock

      defaults write com.apple.dock autohide -bool true

* Display hidden applications as transulcent icons

      defaults write com.apple.dock showhidden -bool true 

* Show indicator lights for open applications

      defaults write com.apple.dock show-process-indicators -bool true 

* Enable highlight hover effect for the grid view of a stack

      defaults write com.apple.dock mouse-over-hilte-stack -bool true

* Don't animate opening applications

      defaults write com.apple.dock launchanim -bool false

* Enable spring loading for all Dock items ([Demo](http://www.youtube.com/watch?v=b-emYJpxmgc))

      defaults write com.apple.dock enable-spring-load-actions-on-all-items -boolean true

## Global Preferences

* Disable "Reopen windows when logging back in"

      defaults write com.apple.loginwindow TALLogoutSavesState -bool false

* Revert back to real "natural scrolling"

      defaults write NSGlobalDomain com.apple.swipescrolldirection -bool false

* Enable full keyboard access for all controls (so you can navigate through the UI using keyboard)

      defaults write NSGlobalDomain AppleKeyboardUIMode -int 3 

* Enable subpixel font rendering on non-Apple LCDs

      defaults write NSGlobalDomain AppleFontSmoothing -int 2 

* Disable menu bar transparency

      defaults write NSGlobalDomain AppleEnableMenuBarTransparency -bool false 

* Always show scrollbars

      defaults write NSGlobalDomain AppleShowScrollBars -string "Always" 

* Show all filename extensions in Finder

      defaults write NSGlobalDomain AppleShowAllExtensions -bool true 

* Expand save panel by default

      defaults write NSGlobalDomain NSNavPanelExpandedStateForSaveMode -bool true 

* Expand print panel by default

      defaults write NSGlobalDomain PMPrintingExpandedStateForPrint -bool true 

* Disable auto-correct

      defaults write NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false 

* Disable window animations

      defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false 


* Disable press-and-hold (character picker) for keys in favor of key repeat

      defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false 

* Set a blazingly fast keyboard repeat rate

      defaults write NSGlobalDomain KeyRepeat -int 0.02

* Increase window resize speed for Cocoa applications

      defaults write NSGlobalDomain NSWindowResizeTime -float 0.001 

* Disable resume system-wide

      defaults write NSGlobalDomain NSQuitAlwaysKeepsWindows -bool false 

* Disable New Window animations

      defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool NO 

## Finder

* Allow quitting Finder via `⌘ + Q` (so will also hide desktop icons)

      defaults write com.apple.finder QuitMenuItem -bool true 

* Display full POSIX path as Finder window title

      defaults write com.apple.finder _FXShowPosixPathInTitle -bool true 

* Disable the warning when changing a file extension

      defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false 

* Disable the warning before emptying the Trash

      defaults write com.apple.finder WarnOnEmptyTrash -bool false 

* Empty Trash securely by default

      defaults write com.apple.finder EmptyTrashSecurely -bool true 

* Use current directory as default search scope

      defaults write com.apple.finder FXDefaultSearchScope -string "SCcf"

* Hide iDisk from the sidebar

      defaults write com.apple.finder RemoveIDiskFromSidebarOnStartup -bool true

* Show Path bar

      defaults write com.apple.finder ShowPathbar -bool true

* Show Status bar

      defaults write com.apple.finder ShowStatusBar -bool true

## Disk Images (DMG)


* Disable disk image verification

      defaults write com.apple.frameworks.diskimages skip-verify -bool true
      defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true
      defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true

* Automatically open a new Finder window when a volume is mounted

      defaults write com.apple.frameworks.diskimages auto-open-ro-root -bool true
      defaults write com.apple.frameworks.diskimages auto-open-rw-root -bool true

## Screensaver

* Require password immediately after sleep or screen saver begins

      defaults write com.apple.screensaver askForPassword -int 1
      defaults write com.apple.screensaver askForPasswordDelay -int 0

## Safari

* Disable Safari’s thumbnail cache for History and Top Sites

      defaults write com.apple.Safari DebugSnapshotsUpdatePolicy -int 2 

* Enable Safari’s debug menu

      defaults write com.apple.Safari IncludeInternalDebugMenu -bool true 

* Empty bookmarks bar

      defaults write com.apple.Safari ProxiesInBookmarksBar "()" 

## Terminal.app


* Only use UTF-8 in Terminal.app

      defaults write com.apple.terminal StringEncodings -array 4 

## iTunes


* Hide the Ping sidebar

      defaults write com.apple.iTunes disablePingSidebar -bool true 

* Disable all the other Ping stuff in iTunes

      defaults write com.apple.iTunes disablePing -bool true 

## Mail.app

* Add invitations to iCal automatically

      defaults write com.apple.mail AddInvitationsToICalAutomatically -bool true

* Display conversation messages in ascendent order

      defaults write com.apple.mail ConversationViewSortDescending -bool false

* Show unred messages in bold

      defaults write com.apple.mail ShouldShowUnreadMessagesInBold -bool true

* Display contact photos

      defaults write com.apple.mail EnableContactPhotos -bool true

* Mark all conversation messages as read when opening a conversation

      defaults write com.apple.mail ConversationViewMarkAllAsRead -bool true

* Do not display a summary of the body

      defaults write com.apple.mail NumberOfSnippetLines -int 0

* Disable send and reply animations in Mail.app

      defaults write com.apple.mail DisableReplyAnimations -bool true
      defaults write com.apple.mail DisableSendAnimations -bool true

## Misc

* Disable crash reporter

      defaults write com.apple.CrashReporter DialogType -string "none"

* Set computer name

      sudo /usr/sbin/networksetup -setcomputername 'Macbook Pro'

* Allow only a single definition window when defining a word (``)

      defaults write com.apple.Dictionary ProhibitNewWindowForRequest -bool true

* Disable the "Are you sure you want to open this application?" dialog

      defaults write com.apple.LaunchServices LSQuarantine -bool false

* Enable AirDrop over Ethernet and on unsupported Macs running Lion

      defaults write com.apple.NetworkBrowser BrowseAllInterfaces -bool true 

* Disable window restore

      defaults write com.apple.Preview NSQuitAlwaysKeepsWindows -bool false

* Avoid creating `.DS_Store` files on network volumes

      defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true 

* Disable Dashboard

      defaults write com.apple.dashboard mcx-disabled -boolean true

* Show remaining battery time; hide percentage

      defaults write com.apple.menuextra.battery ShowPercent -string "NO"
      defaults write com.apple.menuextra.battery ShowTime -string "YES"

* Disable local Time Machine backups

      hash tmutil &> /dev/null && sudo tmutil disablelocal

* Enable Verbose boot

      sudo nvram boot-args="-v"

* Show the ~/Library folder

      chflags nohidden ~/Library 

* Disable Spotlight

      sudo mdutil -a -i off

* Disable disk journaling (recommended on SSD disks)

      diskutil disableJournal /Volumes/OSX

* Disable Hibernation

      sudo pmset -a hibernatemode 0
      sudo rm /var/vm/sleepimage

* Reload affected applications

      for app in Safari Finder Dock Mail SystemUIServer; do killall "$app" >/dev/null 2>&1; done