title: "Quicksilver Remote Hosts: Default login username"
created_at: 2011-02-06
----

If you find yourself using "SSH as..." frequently, you may want to add something like this in `~/.ssh/config`:

    Host server.domain
      User someuser

Example:

    Host *.wuaki.org, *.wuaki.tv
      User deploy

Once you do that you will no longer have to "SSH as.."

![SSH as..](/images/ssh-as-deploy.png)

And as an added bonus, the same will apply when sshing from terminal:

    $ ssh veronica.wuaki.org

[Source](https://github.com/quicksilver/RemoteHosts-qsplugin)