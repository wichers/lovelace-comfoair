# Homeassistant Lovelace Comfoair card
This is a modified Lovelace Comfoair card to work with the ComfoAir Service https://github.com/adorobis/hacomfoairmqtt with MQTT Autodiscovery to visualize your data!

![Image](https://raw.githubusercontent.com/TimWeyand/lovelace-comfoair/master/result.png)

# Installation

* Clone this repo into your `www` folder inside your configuration. So it will be: `config_folder/www/lovelace-comfoair`. 
* Edit your lovelace-ui.yaml or use the flat configuration mode in lovelace and add to the top:
```
resources:
  - type: module
    url: /local/lovelace-comfoair/comfoair-card.js
```
* Add a card with `type: 'custom:comfoair-card'` and `entity: 'climate.ca350_climate'` to your UI.
* Restart home assistant
* ???
* Profit!
