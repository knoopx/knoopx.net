title: Add Xcode and other Developer Tools into Quicksilver catalog
created_at: 2011-11-03
----

Quicksilver only indexes `/Applications/` and `/Users/yourusername/Applications/` by default.

In order to have access to Xcode and other Developer Tools simply add a new `File & Folder Scanner` from Quicksilver's `Catalog` preferences panel and specify `com.apple.application` as type. Additionally you need to specify a scan depth of `3`.

![File and Folder Scanner](/images/quicksilver-file-scanner.png)

Once done that, close the Preferences and re-scan your Quicksilver catalog. Then you will be able to launch Xcode the same way you launch other applications.

![Quicksilver opening Xcode 4](/images/quicksilver-xcode.png){: .center}