# A legújabb node telepítése
Először távolítsuk el a nodejs régi verzióját
````
sudo apt remove --purge nodejs
````
Ezután telepítjük a github számára a node egy platformját
````
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
````
Majd frissítjük a csomaglistát
````
sudo apt update
````
Végül telepítjük a nodejs legújabb verzióját
````
sudo apt install nodejs
````
----------------
A kódok futtatásához az alábbi parancsot kell használni:
````
nodejs /a/kód/elérési/útvonala
