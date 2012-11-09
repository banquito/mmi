rsync -azC --force --delete --progress --exclude-from=misc/rsync_exclude.txt -e ssh ./ clodo@ssh.alwaysdata.com:/home/clodo/www/mmi/
