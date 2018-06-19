############################################################################
# Copyright 2015-2018 Capgemini SE.
# 
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
# 
#      http://www.apache.org/licenses/LICENSE-2.0
# 
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
############################################################################

export IP=$(hostname -i|cut -f2 -d ' ')
echo $IP
sed -i 's/'$IP'/IP_ADDRESS/g' docker-compose.yml
docker rm -f $(docker ps -a -q)
yes | docker network prune
yes | docker volume prune
rm -rf volumes
sync; echo 3 > /proc/sys/vm/drop_caches
free -h