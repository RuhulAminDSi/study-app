# Linux Commands

| | |
|---|---|
| Source PDF | `Linux-command.pdf` |
| Pages | 9 |
| What it is | A Linux command reference sheet (not an exam paper): a "Top 50 Linux Commands" list followed by command tables grouped by purpose, each with a description and an example. Footer: "© 2025 DigitalOcean, LLC." No exam, post or date. |
| Extraction | Text layer extracted with PyMuPDF. The three-column tables (Command / Description / Example) were rebuilt as Markdown tables, rejoining cells that the PDF wrapped onto two lines (`ifconfig / ip a`, the `iptables` and `rsync` examples, the `nslookup` and `vmstat`/`dmesg` descriptions). A table that continues across a page break repeats its header on the next page, as in the PDF. Wording is unchanged. |

## Page 1

### Top 50 Linux Commands You Must Know as a Regular User

1. ls - The most frequently used command in Linux to list directories
2. pwd - Print working directory command in Linux
3. cd - Linux command to navigate through directories
4. mkdir - Command used to create directories in Linux
5. mv - Move or rename files in Linux
6. cp - Similar usage as mv but for copying files in Linux
7. rm - Delete files or directories
8. touch - Create blank/empty files
9. ln - Create symbolic links (shortcuts) to other files
10. clear - Clear the terminal display
11. cat - Display file contents on the terminal
12. echo - Print any text that follows the command
13. less - Linux command to display paged outputs in the terminal
14. man - Access manual pages for all Linux commands
15. uname - Linux command to get basic information about the OS
16. whoami - Get the active username
17. tar - Command to extract and compress files in linux
18. grep - Search for a string within an output
19. head - Return the specified number of lines from the top
20. tail - Return the specified number of lines from the bottom
21. diff - Find the difference between two files
22. cmp - Allows you to check if two files are identical
23. comm - Combines the functionality of diff and cmp
24. sort - Linux command to sort the content of a file while outputting
25. export - Export environment variables in Linux
26. zip - Zip files in Linux
27. unzip - Unzip files in Linux
28. ssh - Secure Shell command in Linux
29. service - Linux command to start and stop services
30. ps - Display active processes
31. kill and killall - Kill active processes by process ID or name
32. df - Display disk filesystem information
33. mount - Mount file systems in Linux
34. chmod - Command to change file permissions
35. chown - Command for granting ownership of files or folders
36. ifconfig - Display network interfaces and IP addresses
37. traceroute - Trace all the network hops to reach the destination
38. wget - Direct download files from the internet
39. ufw - Firewall command
40. iptables - Base firewall for all other firewall utilities to interface with
41. apt, pacman, yum, rpm - Package managers depending on the distribution
42. sudo - Command to escalate privileges in Linux
43. cal - View a command-line calendar
44. alias - Create custom shortcuts for your regularly used commands
45. dd - Majorly used for creating bootable USB sticks
46. whereis - Locate the binary, source, and manual pages for a command
47. whatis - Find what a command is used for
48. top - View active processes live with their system usage
49. useradd and usermod - Add a new user or change existing user data
50. passwd - Create or update passwords for existing users

## Page 2

### File and Directory Commands

| Command | Description | Example |
|---|---|---|
| ls | List directory contents. | `ls` |
| cd | Change directory. | `cd /path/to/directory` |
| pwd | Show current directory. | `pwd` |
| mkdir | Create a new directory. | `mkdir new_directory` |
| rmdir | Remove an empty directory. | `rmdir empty_directory` |
| rm | Delete files or directories. | `rm file.txt` |
| touch | Create an empty file. | `touch new_file.txt` |
| cp | Copy files or directories. | `cp file.txt /path/to/destination` |
| mv | Move or rename files. | `mv file.txt /path/to/new_location` |
| cat | Display file contents. | `cat file.txt` |
| nano / vim | Edit files in terminal. | `nano file.txt` |
| find | Search for files in a directory hierarchy. | `find . -name "file.txt"` |

## Page 3

*(File and Directory Commands, continued)*

| Command | Description | Example |
|---|---|---|
| grep | Search text using patterns. | `grep "pattern" file.txt` |
| tar | Archive and compress files. | `tar -cvf archive.tar file1.txt file2.txt` |
| df | Show disk usage of file systems. | `df` |
| du | Show directory/file size. | `du -sh /path/to/directory` |
| chmod | Change file permissions. | `chmod 755 file.txt` |
| chown | Change file owner. | `chown user:group file.txt` |
| mount | Mount a filesystem. | `mount /dev/sdb1 /mnt` |
| umount | Unmount a filesystem. | `umount /mnt` |

### Networking Commands

| Command | Description | Sample Usage |
|---|---|---|
| ping | Test connectivity to a host. | `ping google.com` |
| ifconfig / ip a | Display network interfaces. | `ifconfig` or `ip a` |
| netstat / ss | Show network connections. | `netstat -tuln` or `ss -tuln` |

## Page 4

*(Networking Commands, continued)*

| Command | Description | Sample Usage |
|---|---|---|
| wget | Download files via HTTP/FTP. | `wget http://example.com/file.zip` |
| curl | Transfer data using URL syntax. | `curl -O http://example.com/file.zip` |
| nc (Netcat) | Network debugging and data transfer. | `nc -zv 192.168.1.1 80` |
| tcpdump | Capture and analyze network packets. | `tcpdump -i eth0` |
| iptables | Configure firewall rules. | `iptables -A INPUT -p tcp --dport 22 -j ACCEPT` |
| traceroute | Trace the path packets take to a network host. | `traceroute example.com` |
| nslookup | Query DNS to obtain domain name or IP address mapping. | `nslookup example.com` |
| ssh | Securely connect to a remote host. | `ssh user@example.com` |

### Process and System Monitoring Commands

| Command | Description | Example Command |
|---|---|---|
| ps | Show running processes. | `ps aux` |
| top | Dynamic process viewer. | `top` |

## Page 5

*(Process and System Monitoring Commands, continued)*

| Command | Description | Example Command |
|---|---|---|
| htop | Enhanced version of top. | `htop` |
| kill | Send a signal to a process. | `kill <PID>` |
| killall | Kill processes by name. | `killall <process_name>` |
| uptime | System uptime and load. | `uptime` |
| whoami | Current logged-in user. | `whoami` |
| env | Display environment variables. | `env` |
| strace | Trace system calls of a process. | `strace -p <PID>` |
| systemctl | Manage systemd services. | `systemctl status <service_name>` |
| journalctl | View system logs. | `journalctl -xe` |
| free | Display memory usage. | `free -h` |
| vmstat | Report virtual memory statistics. | `vmstat 1` |

## Page 6

*(Process and System Monitoring Commands, continued)*

| Command | Description | Example Command |
|---|---|---|
| iostat | Report CPU and I/O statistics. | `iostat` |
| lsof | List open files by processes. | `lsof` |
| dmesg | Print kernel ring buffer messages. | `dmesg` |

### User and Permission Management Commands

| Command | Description | Example Command |
|---|---|---|
| passwd | Change user password. | `passwd <username>` |
| adduser / useradd | Add a new user. | `adduser <username>` or `useradd <username>` |
| deluser / userdel | Delete a user. | `deluser <username>` or `userdel <username>` |
| usermod | Modify user account. | `usermod -aG <group> <username>` |
| groups | Show group memberships. | `groups <username>` |
| sudo | Execute commands as root. | `sudo <command>` |
| chage | Change user password expiry information. | `chage -l <username>` |

## Page 7

*(User and Permission Management Commands, continued)*

| Command | Description | Example Command |
|---|---|---|
| id | Display user identity information. | `id <username>` |
| newgrp | Log in to a new group. | `newgrp <group>` |

### File Transfer and Synchronization Commands

| Command | Description | Example Command |
|---|---|---|
| scp | Securely copy files over SSH. | `scp user@remote:/path/to/file /local/destination` |
| rsync | Efficiently sync files and directories. | `rsync -avz /local/directory/ user@remote:/path/to/destination` |
| ftp | Transfer files using the File Transfer Protocol. | `ftp ftp.example.com` |
| sftp | Securely transfer files using SSH File Transfer Protocol. | `sftp user@remote:/path/to/file` |
| wget | Download files from the web. | `wget http://example.com/file.zip` |
| curl | Transfer data from or to a server. | `curl -O http://example.com/file.zip` |

### Text Processing Commands

| Command | Description | Example Command |
|---|---|---|
| awk | Pattern scanning and processing. | `awk '{print $1}' file.txt` |

## Page 8

*(Text Processing Commands, continued)*

| Command | Description | Example Command |
|---|---|---|
| sed | Stream editor for filtering/modifying text. | `sed 's/old/new/g' file.txt` |
| cut | Remove sections from lines of text. | `cut -d':' -f1 /etc/passwd` |
| sort | Sort lines of text. | `sort file.txt` |
| grep | Search for patterns in text. | `grep 'pattern' file.txt` |
| wc | Count words, lines, and characters. | `wc -l file.txt` |
| paste | Merge lines of files. | `paste file1.txt file2.txt` |
| join | Join lines of two files on a common field. | `join file1.txt file2.txt` |
| head | Output the first part of files. | `head -n 10 file.txt` |
| tail | Output the last part of files. | `tail -n 10 file.txt` |

### Shell Utilities and Shortcuts Commands

| Command | Description | Example Command |
|---|---|---|
| alias | Create shortcuts for commands. | `alias ll='ls -la'` |
| unalias | Remove an alias. | `unalias ll` |

## Page 9

*(Shell Utilities and Shortcuts Commands, continued)*

| Command | Description | Example Command |
|---|---|---|
| history | Show previously entered commands. | `history` |
| clear | Clear the terminal screen. | `clear` |
| reboot | Reboot the system. | `reboot` |
| shutdown | Power off the system. | `shutdown now` |
| date | Display or set the system date and time. | `date` |
| echo | Display a line of text. | `echo "Hello, World!"` |
| sleep | Delay for a specified amount of time. | `sleep 5` |
| time | Measure the duration of command execution. | `time ls` |
| watch | Execute a program periodically, showing output fullscreen. | `watch -n 5 df -h` |

© 2025 DigitalOcean, LLC. Sitemap. Cookie Preferences
