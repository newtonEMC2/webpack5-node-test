docker stop nodejs-image-demooo
docker rm $(docker ps -a -q)
docker build -t webpack5test  .
docker run --name nodejs-image-demooo --restart always -p 80:3002 -d webpack5test