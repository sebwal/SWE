#!/bin/sh

SEMVER=$1

[ -x $(which curl) ] || (echo "No curl available!" && exit 4)
[ -x $(which unzip) ] || (echo "No unzip available!" && exit 5)

echo "Loading Angular Builds for '$SEMVER'..."

git show-ref origin/HEAD >/dev/null || (echo "Remote origin unavailable!" && exit 2)
git show-ref origin/$SEMVER >/dev/null && echo "Build '$SEMVER' already created!" && exit 3

git checkout -B $SEMVER base

echo "Pulling 'angular-$SEMVER.zip'..."
curl https://code.angularjs.org/$SEMVER/angular-$SEMVER.zip > angular.zip
echo "Unzipping 'angular-$SEMVER.zip'..."
unzip angular.zip || (echo "Unzip failed!" && exit 6)
mv angular-$SEMVER/* .
rm -rf angular.zip angular-$SEMVER/

echo "Adding 'package.json'..."
echo >>package.json <<EOF
{
    "name": "angular-builds",
    "version": "$SEMVER",
    "description": "A build of AngularJS version $SEMVER in a format that's friendly for 'npm install angular-builds@$SEMVER'"
}
EOF

git add .
git commit -m "Release of $SEMVER"
# git push origin $SEMVER
# npm publish
# git checkout master
