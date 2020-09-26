# Homeassistant Lovelace Comfoair card

Use https://github.com/wichers/esphome-comfoair to connect your ComfoAir to Homeassistant and then use this lovelace card to visualize your data!

![Image](https://raw.githubusercontent.com/wichers/lovelace-comfoair/master/result.png)

# Installation

* Clone this repo into your `www` folder inside your configuration. So it will be: `config_folder/www/lovelace-comfoair`. 
* Edit your lovelace-ui.yaml or use the flat configuration mode in lovelace and add to the top:
```
resources:
  - type: module
    url: /local/lovelace-comfoair/comfoair-card.js
```
* Add a card with `type: 'custom:comfoair-card'` and `entity: 'climate.put-your-comfoair-name-here'` to your UI.
* Restart home assistant
* ???
* Profit!

