# Where is my `hosts` file ?

| Logs       |            |
|------------|------------|
| created at | 2023-08-18 |
| updated at | 2023-08-18 |

# Fastpass

| OS          | Path                                    |
| ----------- | --------------------------------------- |
| windows     | %WinDir%\\System32\\drivers\\etc\\hosts |
| linux & mac | /etc/hosts                              |

# The `hosts` file

contains manually defined DNS entries that allows computer to route network traffic.

```php
127.0.0.1 this-computer-name.local
192.168.xxx.xxx network-computer-name.local

# You can specify IP v4 or v6
# Generally following rules are implemented by system
127.0.0.1 localhost loopback
::1        localhost
```

!! This file is used before the DNS look up, so it has priority rather than look up and can overwrite it.

!! You have to be administrator or assimilate to edit this file.
!! Note that the hosts file only affect the computer on which the changes were made.
!! You do not need to restart your computer after changes.

!! 127.0.0.1 is a special IP address that allows network communication to loop back to the same computer without going through external networks

# Resources

-   <https://en.wikipedia.org/wiki/Hosts_(file)>

          