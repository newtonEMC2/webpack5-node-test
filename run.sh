# git pull
# git checkout dev
# docker stop nodejs-image-demooo
docker rm -f $(docker ps -aq)
docker build -t webpack5test  .
docker run --name nodejs-image-demooo --restart always -d webpack5test
