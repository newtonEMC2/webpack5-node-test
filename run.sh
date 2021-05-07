git pull
git checkout master
docker stop nodejs-image-demooo
docker rm $(docker ps -a -q)
docker build -t webpack5test  .
docker run --name nodejs-image-demooo -p 80:3002 --restart always -d webpack5test
