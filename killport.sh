pid=$(netstat -ano | findstr :3010)
echo $pid
# tskill $pid