#GIT PATTERN:
###gitting file from editor to git
git add file.whatever
git commit -am "notes"
git push

###gitting file from git to editor
git fetch
git status
git pull

can see conflicts when merging, fix conflicts, push fixed file from editor to git

###deploy script
./deployFiles.sh -k ~/CS260/cs206pt2.pem -h hayliejarvis.com -s simon
make sure you're in the directory with the deploy files
will deploy the indicated files (in this case simon) to the website with that indicated domain
